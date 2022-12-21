import { test, expect } from '@playwright/test';

test('Access register page', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');
    await page.waitForSelector('.btn', { state: 'detached' });

});

test('Validate alert', async({ page }) => {
    // Open registration page 
    await page.goto('https://dizaglow.com/registration');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Full Name').fill('Mochammad Alie');
    await page.getByPlaceholder('Phone number').fill('08563495097');
    await page.getByPlaceholder('Email').fill('mochammad.aliesf@gmail.com');
    await page.getByPlaceholder('Password').fill('Alie@1804');

    const locator = page.getByRole('link', { name: 'Register' })
    await locator.click();

    // Validasi
    await expect(page.getByText('Registration successfull')).toBeVisible();
    await expect(page.getByPlaceholder('Email or Phone number')).toHaveValue(email);
    await expect(page.getByPlaceholder('Password')).toHaveValue(password);
});

test('Delete data first', async({ page }) => {
    await page.goto('https://omni.merchant.id');

    await page.getByPlaceholder('Enter your registered email').fill('dizaglow@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('byPassDev45kkhsuhruuhrkkidd_00#.');

    await page.getByRole('button', { name: 'Log In' }).click();

    await page.getByRole('link', { name: 'Contacts' }).click();

    await page.getByText('Mochammad Alie').click();
    await page.locator('button:nth-child(3)').first().click();
    await page.getByRole('button', { name: 'Yes, Delete!!' }).click();
    await page.getByRole('button', { name: 'profile-user' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});

test('Validate redirect', async({ page }) => {

    var name = "Mochammad Alie";
    var phoneNumber = "08563495097";
    var email = "mochammad.aliesf@gmail.com";
    var password = "Alie@1804"

    // Open registration page 
    await page.goto('https://dizaglow.com/registration');

    // Mengisi field sesuai data kasus uji
    await page.getByPlaceholder('Full Name').fill(name);
    await page.getByPlaceholder('Phone number').fill(phoneNumber);
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Password').fill(password);

    const locator = page.getByRole('link', { name: 'Register' })
    await locator.click();

    // Validasi
    await expect(page.getByPlaceholder('Phone or Email')).toHaveValue(email);
    await expect(page.getByPlaceholder('Password')).toHaveValue(password);
    await expect(page).getByRole('link', { name: 'Login' }).toBeVisible();

});

test('Delete data', async({ page }) => {
    await page.goto('https://omni.merchant.id');

    await page.getByPlaceholder('Enter your registered email').fill('dizaglow@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('byPassDev45kkhsuhruuhrkkidd_00#.');

    await page.getByRole('button', { name: 'Log In' }).click();

    await page.getByRole('link', { name: 'Contacts' }).click();

    await page.getByText('Mochammad Alie').click();
    await page.locator('button:nth-child(3)').first().click();
    await page.getByRole('button', { name: 'Yes, Delete!!' }).click();
    await page.getByRole('button', { name: 'profile-user' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});