import { test, expect } from '@playwright/test';

test('validate alert invalid name', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Full Name').fill('mochammad_alie18');
    await page.getByPlaceholder('Phone number').fill('087665778787876');
    await page.getByPlaceholder('Email').fill('mochammad.aliesf.gmail.com');
    await page.getByPlaceholder('Password').fill('Alie@18');

    const locator = page.getByRole('link', { name: 'Register' })
    await locator.click();

    // Validasi alert
    await expect(page.getByText('Invalid name')).toBeVisible();
});

test('validate alert invalid phone', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Full Name').fill('mochammad_alie18');
    await page.getByPlaceholder('Phone number').fill('087665778787876');
    await page.getByPlaceholder('Email').fill('mochammad.aliesf.gmail.com');
    await page.getByPlaceholder('Password').fill('Alie@18');

    const locator = page.getByRole('link', { name: 'Register' })
    await locator.click();

    // Validasi alert
    await expect(page.getByText('Invalid phone')).toBeVisible();
});

test('validate alert invalid email', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Full Name').fill('mochammad_alie18');
    await page.getByPlaceholder('Phone number').fill('087665778787876');
    await page.getByPlaceholder('Email').fill('mochammad.aliesf.gmail.com');
    await page.getByPlaceholder('Password').fill('Alie@18');

    const locator = page.getByRole('link', { name: 'Register' })
    await locator.click();

    // Validasi alert
    await expect(page.getByText('Invalid email')).toBeVisible();
});

test('validate alert invalid password', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Full Name').fill('mochammad_alie18');
    await page.getByPlaceholder('Phone number').fill('087665778787876');
    await page.getByPlaceholder('Email').fill('mochammad.aliesf.gmail.com');
    await page.getByPlaceholder('Password').fill('Alie@18');

    const locator = page.getByRole('link', { name: 'Register' })
    await locator.click();

    // Validasi alert
    await expect(page.getByText('Invalid password')).toBeVisible();
});