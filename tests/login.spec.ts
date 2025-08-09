import { test, expect } from '@playwright/test';

test('login works', async ({ page }) => {
  await page.goto('https://pilot-b2bcredit.bectran.com/b2bcredit/expiredLogin', { waitUntil: 'domcontentloaded' });

  await page.getByRole('textbox', { name: 'Username' }).waitFor({ state: 'visible', timeout: 15000 });
  await page.getByRole('textbox', { name: 'Username' }).fill('test2@test45.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('redBelt1950$');

  await page.getByRole('button', { name: 'Login', exact: true }).click();

  // optional sanity check:
  // await expect(page).toHaveURL(/dashboard|links|home/);
});
