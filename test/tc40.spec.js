import { test, expect } from '@playwright/test';

test('Add to cart', async({ page }) => {

    // Mengakses halaman login 
    await page.goto("https://dizaglow.com/login");
    await page.getByPlaceholder('Email or Phone number').fill('08563495097');
    await page.getByPlaceholder('Your Password').fill('Alie@1804');
    await page.getByRole('link', { name: 'Login' }).click();

    // Menambah produk ke Cart
    await page.locator('#product-44 a').filter({ hasText: 'Add to Cart' }).click();
    await page.getByText('Continue shopping').click();

    await page.locator('#cart-products-count').click();
    await page.getByText('Checkout').filter({ hasText: 'Checkout' }).click();
});