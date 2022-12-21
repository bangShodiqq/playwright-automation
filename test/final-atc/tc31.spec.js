import { test, expect } from '@playwright/test';

test('Add to cart', async({ page }) => {

    // Mengakses halaman login 
    await page.goto("https://dizaglow.com/shop");

    // Menambah produk ke Cart
    await page.locator('#product-44 [name="quantity"]').inputValue('1');
    await page.locator('#product-44 a').filter({ hasText: 'Add to Cart' }).click();

    await expect(page.getByText('JUST ADDED TO YOUR CART Product Test Qty: 1 View Cart (1 ) Continue shopping')).toBeVisible();

});