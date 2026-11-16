"""Exercise the built server's host redirect without changing public DNS.

Run: python3 tests/verify_domain_redirect.py http://127.0.0.1:3016
"""
import sys
import urllib.error
import urllib.request
from urllib.parse import parse_qsl, urlsplit

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3016"
OLD = "isfs-website.vercel.app"
OFFICIAL = "www.isfsuae.com"


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args):
        return None


opener = urllib.request.build_opener(NoRedirect)


def request(host, path):
    req = urllib.request.Request(BASE + path, headers={"Host": host})
    try:
        return opener.open(req, timeout=20)
    except urllib.error.HTTPError as error:
        return error


paths = [
    "/", "/ar", "/about", "/services", "/contact",
    "/robots.txt", "/sitemap.xml", "/favicon.ico", "/apple-icon.png",
    "/logo.jpg", "/missing/nested/path",
    "/contact?utm_source=google&message=Roof%20repair&tag=a&tag=b&next=%2Far",
    "/ar?message=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7",
]
for path in paths:
    with request(OLD, path) as response:
        assert response.status == 308, (path, response.status)
        location = urlsplit(response.headers["Location"])
        original = urlsplit(path)
        assert location.scheme == "https" and location.netloc == OFFICIAL
        assert (location.path or "/") == original.path, (path, location)
        assert parse_qsl(location.query, keep_blank_values=True) == parse_qsl(
            original.query, keep_blank_values=True
        ), (path, location)
    print("PASS permanent redirect:", path)

# The destination must serve content directly, without sending users back.
# Preview/local hosts and lookalike hostnames must never match this rule.
for host in [
    OFFICIAL, "localhost", "isfs-preview-example.vercel.app",
    "isfs-websiteXvercelXapp", "isfs-website.vercel.app.example.com",
]:
    for path in ["/", "/ar", "/contact?utm_source=google", "/favicon.ico"]:
        with request(host, path) as response:
            assert response.status == 200, (host, path, response.status)
            assert not response.headers.get("Location"), (host, path)
    print("PASS no redirect/loop:", host)
