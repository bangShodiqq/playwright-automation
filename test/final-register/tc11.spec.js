import { test, expect } from '@playwright/test';

test('Access register page', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');
    await page.waitForSelector('.btn', { state: 'detached' });

});

test('Validate process', async({ page }) => {
    await page.goto('https://dizaglow.com/registration');

    const locator = page.getByRole('link', { name: 'Register' });
    await locator.click();

    // Validasi alert field kosong
    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.getByText('Phone is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
});