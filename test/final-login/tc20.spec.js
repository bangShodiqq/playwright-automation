import { test, expect } from '@playwright/test';

test('Validate alert phone', async({ page }) => {
    await page.goto('https://dizaglow.com/login');

    const locator = page.getByRole('link', { name: 'Login' });
    await locator.click();

    // Validasi alert field kosong
    await expect(page.getByText('Phone is required')).toBeVisible();
});

test('Validate alert password', async({ page }) => {
    await page.goto('https://dizaglow.com/login');

    const locator = page.getByRole('link', { name: 'Login' });
    await locator.click();

    // Validasi alert field kosong
    await expect(page.getByText('Password is required')).toBeVisible();
});