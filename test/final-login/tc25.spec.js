import { test, expect } from '@playwright/test';

test('Validate alert', async({ page }) => {

    // Open registration page 
    await page.goto('https://dizaglow.com/login');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Email or Phone number').fill('mochammad.aliesf@gmail.com');
    await page.getByPlaceholder('Your Password').fill('Alie@1804');

    const locator = page.getByRole('link', { name: 'Login' })
    await locator.click();

    // Validasi
    await expect(page.getByText('Login success')).toBeVisible();
    await expect(page.toHaveURL('https://dizaglow.com/shop'));
});

test('Validate alert', async({ page }) => {

    // Open registration page 
    await page.goto('https://dizaglow.com/login');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Email or Phone number').fill('mochammad.aliesf@gmail.com');
    await page.getByPlaceholder('Your Password').fill('Alie@1804');

    const locator = page.getByRole('link', { name: 'Login' })
    await locator.click();

    // Validasi
    await expect(page.toHaveURL('https://dizaglow.com/shop'));
});