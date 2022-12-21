import { test, expect } from '@playwright/test';

test('Validate qty', async({ page }) => {

    // Mengakses halaman login 
    await page.goto("https://dizaglow.com/shop");

    // Menambah produk ke Cart
    const qty = await page.locator('#product-44 [name="quantity"]').inputValue('0');
    const button = await page.locator('#product-44 a').filter({ hasText: 'Add to Cart' }).click();

    await expect(page.locator('#product-44 [name="quantity"]')).toEqual('1');
});

test('Validate action add to cart', async({ page }) => {

    // Mengakses halaman login 
    await page.goto("https://dizaglow.com/shop");

    // Menambah produk ke Cart
    const qty = await page.locator('#product-44 [name="quantity"]').inputValue('0');
    const button = await page.locator('#product-44 a').filter({ hasText: 'Add to Cart' }).click();

    await expect(page.locator('#product-44 a').filter({ hasText: 'Add to Cart' })).toBeDisabled();
});