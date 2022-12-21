import { test, expect } from '@playwright/test';

test('Validate alert login success', async({ page }) => {

    // Open registration page 
    await page.goto('https://dizaglow.com/login');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Email or Phone number').fill('08563495097');
    await page.getByPlaceholder('Your Password').fill('Alie@1804');

    const locator = page.getByRole('link', { name: 'Login' })
    await locator.click();

    // Validasi
    await expect(page.getByText('Login success')).toBeVisible();
});

test('Validate redirect into shop page', async({ page }) => {

    // Open registration page 
    await page.goto('https://dizaglow.com/login');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Email or Phone number').fill('08563495097');
    await page.getByPlaceholder('Your Password').fill('Alie@1804');

    const locator = page.getByRole('link', { name: 'Login' })
    await locator.click();

    // Validasi
    await expect(page.toHaveURL('https://dizaglow.com/shop'));
});