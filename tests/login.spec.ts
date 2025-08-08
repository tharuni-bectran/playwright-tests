import { test, expect } from '@playwright/test';

test('login smoke', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill(process.env.APP_USERNAME ?? '');
  await page.getByLabel('Password').fill(process.env.APP_PASSWORD ?? '');
  await page.getByRole('button', { name: 'Login' }).click();
});
