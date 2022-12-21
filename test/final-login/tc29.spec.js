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
    await page.getByPlaceholder('Email or Phone number').fill('08563495097');
    await page.getByPlaceholder('Your Password').fill('Alie@18');

    const locator = page.getByRole('link', { name: 'Login' })
    await locator.click();

    // Validasi
    await expect(page.getByText('Invalid password')).toBeVisible();
});