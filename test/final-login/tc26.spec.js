import { test, expect } from '@playwright/test';

test('Access register page', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/login');
    await page.waitForSelector('.btn', { state: 'detached' });

});

test('Validate alert', async({ page }) => {

    // Open registration page 
    await page.goto('https://dizaglow.com/login');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Email or Phone number').fill('085634950972347');
    await page.getByPlaceholder('Your Password').fill('Alie@1804');

    const locator = page.getByRole('link', { name: 'Login' })
    await locator.click();

    // Validasi
    await expect(page.getByText('Invalid phone / email')).toBeVisible();
});