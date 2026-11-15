"""Check server-rendered SEO against a running production server.
Run: python3 tests/verify_seo.py [http://127.0.0.1:3001]
"""
from html.parser import HTMLParser
import json
import sys
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:3001'
SITE = 'https://www.isfsuae.com'
ROUTES = ['', '/about', '/services', '/contact', '/ar']
LANGUAGES = {'en': SITE, 'ar': SITE + '/ar', 'x-default': SITE}


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.links, self.meta, self.headings, self.images = [], [], [], []
        self.title, self.ld, self.capture = '', '', None
        self.main = {}
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link': self.links.append(attrs)
        if tag == 'meta': self.meta.append(attrs)
        if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']: self.headings.append(int(tag[1]))
        if tag == 'img': self.images.append(attrs)
        if tag == 'main': self.main = attrs
        if tag == 'title': self.capture = 'title'
        if tag == 'script' and attrs.get('type') == 'application/ld+json': self.capture = 'ld'

    def handle_endtag(self, tag):
        if tag in ['title', 'script']: self.capture = None

    def handle_data(self, data):
        if self.capture == 'title': self.title += data
        if self.capture == 'ld': self.ld += data


def get(path):
    with urllib.request.urlopen(BASE + path, timeout=20) as response:
        assert response.status == 200
        assert 'noindex' not in response.headers.get('X-Robots-Tag', '').lower()
        return response.read().decode()


titles, descriptions = set(), set()
for path in ROUTES:
    html = get(path)
    doc = Document(html)
    assert 'isfs-website.vercel.app' not in html, path
    assert doc.title and len(doc.title) < 100, (path, doc.title)
    titles.add(doc.title)
    desc = [m['content'] for m in doc.meta if m.get('name') == 'description']
    assert len(desc) == 1 and 80 <= len(desc[0]) <= 200, (path, desc)
    descriptions.add(desc[0])
    canonical = [l['href'] for l in doc.links if l.get('rel') == 'canonical']
    assert canonical == [SITE + path], (path, canonical)
    languages = {l['hreflang']: l['href'] for l in doc.links if 'hreflang' in l}
    assert languages == (LANGUAGES if path in ['', '/ar'] else {}), (path, languages)
    og = {m['property']: m['content'] for m in doc.meta if 'property' in m}
    assert og['og:url'] == SITE + path
    assert og['og:locale'] == ('ar_AE' if path == '/ar' else 'en_AE')
    assert all('noindex' not in m.get('content', '').lower() for m in doc.meta if m.get('name') in ['robots', 'googlebot'])
    assert doc.headings.count(1) == 1, (path, doc.headings)
    assert all(b <= a + 1 for a, b in zip(doc.headings, doc.headings[1:])), (path, doc.headings)
    assert all(i.get('alt', '').strip() for i in doc.images), path
    if path == '/ar': assert doc.main.get('lang') == 'ar' and doc.main.get('dir') == 'rtl'
    data = json.loads(doc.ld)
    assert data['@type'] == 'Organization' and data['url'] == SITE
    assert data['name'] == 'ISFS Technical Services LLC'
    assert data['telephone'] == '+971506752786'
    assert data['email'] == 'info@isfstechnicalservices.com'
    assert not any(key in data for key in ['aggregateRating', 'review', 'openingHours', 'address'])
    print('PASS rendered SEO:', path or '/')
assert len(titles) == len(descriptions) == len(ROUTES)
robots = get('/robots.txt')
assert 'Allow: /' in robots and 'Disallow: /' not in robots
assert 'Sitemap: ' + SITE + '/sitemap.xml' in robots
sitemap = ET.fromstring(get('/sitemap.xml'))
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
assert {u.find('s:loc', ns).text for u in sitemap} == {SITE + p for p in ROUTES}
for url in sitemap:
    loc = url.find('s:loc', ns).text
    languages = {l.attrib['hreflang']: l.attrib['href'] for l in url.findall('x:link', ns)}
    assert languages == (LANGUAGES if loc in [SITE, SITE + '/ar'] else {})
    assert url.find('s:lastmod', ns) is None
try:
    get('/missing-seo-test-page')
    raise AssertionError('Missing route returned HTTP 200')
except urllib.error.HTTPError as error:
    assert error.code == 404
    assert 'noindex' in error.read().decode()
for path in ROUTES:
    request = urllib.request.Request(BASE + path, headers={'User-Agent': 'Googlebot'})
    with urllib.request.urlopen(request, timeout=20) as response:
        doc = Document(response.read().decode())
        assert response.status == 200 and doc.headings.count(1) == 1
        assert [l['href'] for l in doc.links if l.get('rel') == 'canonical'] == [SITE + path]
print('PASS robots, sitemap, hreflang consistency, Googlebot HTML and 404 handling')
