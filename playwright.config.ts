import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "responsive.spec.ts",
  workers: 2,
  timeout: 60000,
  use: {
    baseURL: "http://127.0.0.1:3002",
    reducedMotion: "reduce",
    launchOptions: { executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium", args: ["--no-sandbox"] },
    trace: "retain-on-failure",
  },
  projects: [320, 375, 390, 768, 1024, 1440].map(width => ({ name: `width-${width}`, use: { viewport: { width, height: 900 } } })),
  webServer: { command: "npm run start -- --hostname 127.0.0.1 --port 3002", url: "http://127.0.0.1:3002", reuseExistingServer: false },
});
