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
    await expect(page.getByRole("link", { name: path === "/ar" ? "طلب عرض سعر" : "Get a quote", exact: true })).toBeVisible();
    await expect(page.getByText(/500\+|100\+|\+500|\+100/)).toHaveCount(0);
    if (path === "/about") {
      await expect(page.getByText("The following history is company-provided information", { exact: false })).toBeVisible();
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
  await page.getByRole("link", { name: "Get a quote", exact: true }).click();
  await expect(page).toHaveURL("/contact#quote");
  await expect(page.locator(".quote-form")).toBeInViewport();
});

test("collections expand, all certificate scans load and project scopes stay factual", async ({ page }) => {
  for (const path of ["/", "/ar"]) {
    const ar = path === "/ar";
    await page.goto(path);
    for (const section of ["services", "projects", "certifications"]) {
      const container = page.locator(`#${section}`);
      expect(await container.locator(".collection > :visible").count()).toBe(3);
      const button = container.getByRole("button");
      await button.click();
      await expect(button).toHaveAttribute("aria-expanded", "true");
      expect(await container.locator(".collection > :visible").count()).toBeGreaterThan(3);
    }
    await expect(page.locator("#projects article")).toHaveCount(10);
    await page.locator("#projects summary").first().click();
    await expect(page.locator("#projects details[open] a")).toHaveAttribute("href", /wa\.me.*text=/);
    const scans = page.locator("#certifications img");
    await expect(scans).toHaveCount(6);
    for (const image of await scans.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
    }
    await expect(page.locator("#certifications")).toContainText("LEMS");
    await expect(page.locator("#certifications")).toContainText(ar ? "2 يونيو 2025" : "02 Jun 2025");
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
