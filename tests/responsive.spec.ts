import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

test.beforeEach(async ({ page }) => {
  // Never send an inquiry or load third-party map/message services in tests.
  await page.route("https://**/*", route => route.abort());
});

test("all pages render, fit viewport and retain crawlable content", async ({ page }, info) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  for (const path of ["/", "/ar", "/about", "/services", "/contact"]) {
    expect((await page.goto(path))?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.isfsuae.com${path === "/" ? "" : path}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (path === "/ar") await expect(page.locator("main")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("header").getByRole("link", { name: path === "/ar" ? "طلب عرض سعر" : "Request a Quotation", exact: true })).toBeVisible();
    if (path === "/about") {
      await expect(page.locator("[data-about-section] time")).toHaveText(["2005", "2023"]);
      await mkdir("/workspace/isfs-ux-validation", { recursive: true });
      await page.screenshot({ path: `/workspace/isfs-ux-validation/${info.project.name}-about.png`, fullPage: true });
    }
  }
  expect(errors).toEqual([]);
});

test("mobile navigation closes on Escape and navigates in both languages", async ({ page }) => {
  const width = page.viewportSize()!.width;
  for (const path of ["/", "/ar"]) {
    const ar = path === "/ar";
    await page.goto(path);
    const button = page.getByRole("button", { name: ar ? "فتح القائمة" : "Open menu", exact: true });
    if (width < 1024) {
      await button.click();
      await expect(page.getByRole("button", { name: ar ? "إغلاق القائمة" : "Close menu" })).toHaveAttribute("aria-expanded", "true");
      expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");
      await page.keyboard.press("Shift+Tab");
      await expect(page.getByRole("button", { name: ar ? "إغلاق القائمة" : "Close menu" })).toBeFocused();
      await page.keyboard.press("Shift+Tab");
      await expect(page.getByRole("navigation", { name: ar ? "قائمة الهاتف" : "Mobile navigation" }).getByRole("link").last()).toBeFocused();
      await page.keyboard.press("Tab");
      await expect(page.getByRole("button", { name: ar ? "إغلاق القائمة" : "Close menu" })).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(button).toBeFocused();
      expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
      await button.click();
      await page.getByRole("navigation", { name: ar ? "قائمة الهاتف" : "Mobile navigation" }).getByRole("link", { name: ar ? "English" : "عربي", exact: true }).click();
    } else {
      await page.locator("header").getByRole("link", { name: ar ? "English" : "عربي", exact: true }).click();
    }
    await expect(page).toHaveURL(ar ? "/" : "/ar");
  }
  await page.goto("/contact");
  await page.locator("header").getByRole("link", { name: "Request a Quotation", exact: true }).click();
  await expect(page).toHaveURL("/contact#quote");
  await expect(page.locator(".quote-form")).toBeInViewport();
});

test("collections expand, all certificate scans load and project scopes stay factual", async ({ page }) => {
  for (const path of ["/", "/ar"]) {
    const ar = path === "/ar";
    await page.goto(path);
    for (const section of ["services", "projects", "certifications"]) {
      const container = page.locator(`#${section}`);
      await expect(container.locator("[data-collection-item]:not([aria-hidden=true])")).toHaveCount(3);
      const button = container.getByRole("button");
      await button.click();
      await expect(button).toHaveAttribute("aria-expanded", "true");
      // These tests use reduced motion: extra card wrappers settle immediately.
      const firstExtra = container.locator("[data-collection-item]").nth(3);
      await expect(firstExtra).toHaveCSS("opacity", "1");
      await expect(firstExtra).not.toHaveAttribute("inert", "");
      expect(await container.locator("[data-collection-item]:not([aria-hidden=true])").count()).toBeGreaterThan(3);
    }
    await expect(page.locator("#projects [data-collection-item]")).toHaveCount(10);
    await expect(page.locator("#projects")).toContainText("Twin Tower");
    await expect(page.locator("#projects a").last()).toHaveAttribute("href", /wa\.me.*text=/);
    const scans = page.locator("#certifications img");
    await expect(scans).toHaveCount(6);
    for (const image of await scans.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
    }
    await expect(page.locator("#certifications")).toContainText("LEMS");
    await expect(page.locator("#certifications article")).not.toContainText([ar ? "2 يونيو 2025" : "02 Jun 2025"]);
    await expect(page.locator("#certifications")).toContainText("SOPREMA");
    await expect(page.locator("#certifications a").last()).toHaveAttribute("target", "_blank");
  }
});

test("quotation validates required fields and opens a localized draft without sending", async ({ page }) => {
  for (const path of ["/contact", "/ar"]) {
    const ar = path === "/ar";
    await page.goto(path);
    await page.evaluate(() => {
      (window as unknown as { quoteUrls: string[] }).quoteUrls = [];
      window.open = (url) => { (window as unknown as { quoteUrls: string[] }).quoteUrls.push(String(url)); return null; };
    });
    const form = page.locator(".quote-form");
    await form.getByRole("button", { name: ar ? "متابعة في واتساب" : "Continue in WhatsApp" }).click();
    expect(await page.evaluate(() => (window as unknown as { quoteUrls: string[] }).quoteUrls.length)).toBe(0);
    await form.locator('[name="name"]').fill("Local preview test");
    await form.locator('[name="phone"]').fill("0000000000");
    await form.locator('[name="location"]').fill("Dubai test location");
    await form.locator('[name="service"]').selectOption({ index: 1 });
    await form.locator('[name="message"]').fill("Do not send — local verification only");
    await form.getByRole("button", { name: ar ? "متابعة في واتساب" : "Continue in WhatsApp" }).click();
    const urls = await page.evaluate(() => (window as unknown as { quoteUrls: string[] }).quoteUrls);
    expect(urls).toHaveLength(1);
    expect(urls[0]).toMatch(/^https:\/\/wa.me\/971506752786\?text=/);
    expect(decodeURIComponent(urls[0])).toContain("Dubai test location");
    await expect(form.getByRole("status")).toContainText(ar ? "لم يتم إرسال" : "Nothing has been sent");
    await expect(form.locator('[name="message"]')).toHaveValue("Do not send — local verification only");
  }
});

test.describe("elegant collection motion", () => {
  test.use({ reducedMotion: "no-preference" });
  test("expands and closes over time, with staggered extra cards", async ({ page }) => {
    for (const path of ["/", "/ar"]) {
      await page.goto(path);
      const section = page.locator("#services");
      const button = section.getByRole("button");
      const viewport = section.locator(".collection-viewport");
      await button.scrollIntoViewIfNeeded();
      await expect(section.locator(".collection")).toHaveAttribute("data-measured", "true");
      const closed = await viewport.evaluate(element => element.getBoundingClientRect().height);
      async function recordClick() {
        await button.evaluate(button => {
          const host = button.closest(".expandable-collection")!;
          const viewport = host.querySelector(".collection-viewport")!;
          const cards = Array.from(host.querySelectorAll("[data-collection-item]"));
          const state = { done: false, frames: [] as { height: number; first: number; last: number }[] };
          (window as unknown as { motionRecording: typeof state }).motionRecording = state;
          button.addEventListener("click", () => {
            const start = performance.now();
            function frame() {
              state.frames.push({ height: viewport.getBoundingClientRect().height, first: Number(getComputedStyle(cards[3]).opacity), last: Number(getComputedStyle(cards.at(-1)!).opacity) });
              if (performance.now() - start < 800) requestAnimationFrame(frame);
              else state.done = true;
            }
            requestAnimationFrame(frame);
          }, { once: true, capture: true });
        });
        await button.click();
        await page.waitForFunction(() => (window as unknown as { motionRecording: { done: boolean } }).motionRecording.done);
        return page.evaluate(() => (window as unknown as { motionRecording: { frames: { height: number; first: number; last: number }[] } }).motionRecording.frames);
      }
      const opening = await recordClick();
      const opened = await viewport.evaluate(element => element.getBoundingClientRect().height);
      expect(opened).toBeGreaterThan(closed + 100);
      expect(opening.some(frame => frame.height > closed + 1 && frame.height < opened - 1)).toBe(true);
      expect(opening.some(frame => frame.first > frame.last + 0.01)).toBe(true);
      const closing = await recordClick();
      expect(closing.some(frame => frame.height > closed + 1 && frame.height < opened - 1)).toBe(true);
      expect(await viewport.evaluate(element => element.getBoundingClientRect().height)).toBeCloseTo(closed, 0);
    }
  });
});

test("requested original statistics and certificate captions", async ({ page }) => {
  for (const path of ["/", "/ar"]) {
    const ar = path === "/ar";
    await page.goto(path);
    const hero = page.locator("main > section.border-y");
    await hero.scrollIntoViewIfNeeded();
    const labels = ar ? ["سنوات الخبرة", "مشاريع مكتملة", "خدمات أساسية", "تغطية شاملة"] : ["Years of Experience", "Projects Completed", "Core Services", "Wide Coverage"];
    for (const label of labels) await expect(hero.getByText(label, { exact: true })).toBeVisible();
    for (const value of ["20+", "500+", "18+", "UAE"]) await expect(hero.getByText(value, { exact: true })).toBeVisible();
    const projectStats = page.locator("#projects .grid-cols-2");
    for (const value of ["100+", "20+", "UAE", "18+"]) await expect(projectStats.getByText(value, { exact: true })).toBeVisible();
    const certificates = page.locator("#certifications");
    await certificates.getByRole("button").click();
    await expect(certificates.locator("article")).toHaveCount(6);
    for (const card of await certificates.locator("article").all()) {
      await expect(card).not.toContainText(/2023|2024|2025|2026|expiry|Issued|انتهاء|صدرت|نوفمبر|يونيو/);
      await expect(card.locator("img")).toHaveAttribute("src", /certificate/);
      await expect(card.getByRole("link").last()).toHaveAttribute("href", /certificate\d\.jpeg/);
    }
  }
});

test("About uses readable history and real photograph views, never the brochure", async ({ page }) => {
  for (const path of ["/", "/ar", "/about"]) {
    await page.goto(path);
    const about = page.locator("[data-about-section]");
    await expect(about).toHaveCount(1);
    await expect(about.locator("time")).toHaveText(["2005", "2023"]);
    await expect(page.locator('img[src*="about-us"]')).toHaveCount(0);
    await expect(about).not.toContainText(/Company-provided history|Portfolio entries|مشاريع في الملف المعروض|حسب تاريخ الشركة/);
    await expect(about).toContainText("ISFS Technical Services LLC");
    await expect(about).toContainText(path === "/ar" ? "الهدف للصيانة العامة" : "Al Hadaf General Maintenance LLC");
    await expect(about).toContainText(path === "/ar" ? "ضبط الجودة" : "quality control");
    await expect(about).toContainText(path === "/ar" ? "ما بعد الخدمة" : "after-service support");
    const photos = about.locator("img");
    await expect(photos).toHaveCount(3);
    for (const photo of await photos.all()) {
      await photo.scrollIntoViewIfNeeded();
      await expect(photo).toHaveAttribute("src", /projects-collage/);
      await expect(photo).toHaveJSProperty("complete", true);
      expect(await photo.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
      const dimensions = await photo.evaluate(img => img.parentElement!.getBoundingClientRect().toJSON());
      expect(dimensions.width).toBeCloseTo(dimensions.height, 0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(path);
    const reveal = page.locator(".about-reveal").last();
    await expect(reveal).toHaveAttribute("data-pending", "true");
    await reveal.scrollIntoViewIfNeeded();
    await expect(reveal).toHaveAttribute("data-pending", "false");
    await expect(reveal).toHaveCSS("opacity", "1");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await expect(reveal).toHaveCSS("transform", "none");
  }
});

test("floating WhatsApp stays compact, viewport-fixed and usable in English and RTL", async ({ page }) => {
  await page.context().route("https://wa.me/**", route => route.abort());
  for (const path of ["/", "/ar"]) {
    await page.goto(path);
    const control = page.locator("[data-floating-whatsapp]");
    await expect(control).toHaveCount(1);
    await expect(control).toBeVisible();
    await expect(control).toHaveCSS("position", "fixed");
    await expect(control).not.toHaveClass(/animated-pill/);
    const href = await control.getAttribute("href");
    const url = new URL(href!);
    expect(url.origin + url.pathname).toBe("https://wa.me/971506752786");
    expect(url.searchParams.get("text")).toBe("Hello ISFS, I need a quotation for waterproofing works.");
    await expect(control).toHaveAttribute("target", "_blank");
    const initial = await control.boundingBox();
    expect(initial!.height).toBe(56);
    expect(initial!.width).toBeGreaterThanOrEqual(56);
    expect(initial!.width).toBeLessThanOrEqual(180);
    if (page.viewportSize()!.width < 768) expect(initial!.width).toBe(56);
    expect(page.viewportSize()!.width - initial!.x - initial!.width).toBeCloseTo(16, 0);
    expect(page.viewportSize()!.height - initial!.y - initial!.height).toBeCloseTo(20, 0);
    const icon = await control.locator("svg").boundingBox();
    expect(icon!.width).toBe(25);
    expect(icon!.x).toBeGreaterThan(initial!.x);
    expect(icon!.x + icon!.width).toBeLessThan(initial!.x + initial!.width);
    for (const section of ["#about", "#projects", "#contact"]) {
      await page.locator(section).scrollIntoViewIfNeeded();
      await expect(control).toBeInViewport();
      const scrolled = await control.boundingBox();
      expect(scrolled!.x).toBeCloseTo(initial!.x, 0);
      expect(scrolled!.y).toBeCloseTo(initial!.y, 0);
    }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const copyright = await page.locator("footer > p").last().boundingBox();
    expect(copyright!.y + copyright!.height).toBeLessThan(initial!.y);
    const center = { x: initial!.x + initial!.width / 2, y: initial!.y + initial!.height / 2 };
    expect(await page.evaluate(({ x, y }) => !!document.elementFromPoint(x, y)?.closest("[data-floating-whatsapp]"), center)).toBe(true);
    // Verify real click/popup wiring, but intercept the external request.
    const popup = page.waitForEvent("popup");
    await control.click();
    const external = await popup;
    await external.close();
    if (page.viewportSize()!.width < 1024) {
      await page.locator("header button").click();
      const menu = page.getByRole("navigation", { name: path === "/ar" ? "قائمة الهاتف" : "Mobile navigation" });
      await expect(menu).toBeVisible();
      expect(await page.evaluate(({ x, y }) => !!document.elementFromPoint(x, y)?.closest("[data-floating-whatsapp]"), center)).toBe(false);
      await page.keyboard.press("Escape");
    }
  }
});
