import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: process.env.APP_BASE_URL || 'https://pilot-b2bcredit.bectran.com/b2bcredit/',
    trace: 'on-first-retry',
    video: 'retain-on-failure'
  }
});
