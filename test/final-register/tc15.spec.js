import { test, expect } from '@playwright/test';

test('Access register page', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');
    await page.waitForSelector('.btn', { state: 'detached' });

});

test('validate alert', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Full Name').fill('Mochammad Alie');
    await page.getByPlaceholder('Phone number').fill('');
    await page.getByPlaceholder('Email').fill('mochammad.aliesf@gmail.com');
    await page.getByPlaceholder('Password').fill('Alie@1804');

    const locator = page.getByRole('link', { name: 'Register' })
    await locator.click();

    // Validasi alert
    await expect(page.getByText('Phone is required')).toBeVisible();

});