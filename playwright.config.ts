import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['list'], ['html']], // html report + console list
  use: {
    baseURL: process.env.APP_BASE_URL,
    screenshot: 'only-on-failure',     // 'on', 'only-on-failure', or 'off'
    video: 'retain-on-failure',        // 'on', 'retain-on-failure', 'off'
    trace: 'on-first-retry',           // 'on', 'off', 'retain-on-failure', etc.
  },
  // Optional: where raw artifacts go (defaults to ./test-results)
  // outputDir: 'test-results',
});
