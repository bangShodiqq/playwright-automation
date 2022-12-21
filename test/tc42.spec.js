import { test, expect } from '@playwright/test';

test('Validate', async({ page }) => {
    var validName = "Mochammad Alie";
    var invalidName = "Mochammad_alie!!";
    var validPhone = "08563495097";
    var invalidPhone = "086767667554434";
    var validEmail = "mochammad.aliesf@gmail.com";
    var invalidEmail = "mochammad.alie.gmail.com"
    var validAddress = "Jln. Raya Pasirharjo";
    var invalidAddress = "Jln. Raya_Pasirharjo";
    var validSubdistrict = "Talun";
    var invalidSubdistrict = "Talun__";

    // Mengakses halaman login 
    await page.goto("https://dizaglow.com/login");
    await page.getByPlaceholder('Email or Phone number').fill('08563495097');
    await page.getByPlaceholder('Your Password').fill('Alie@1804');
    await page.getByRole('link', { name: 'Login' }).click();

    // Menambah produk ke Cart
    await page.locator('#product-44 a').filter({ hasText: 'Add to Cart' }).click();
    await page.getByRole('link', { name: 'View Cart (1 )' }).click();
    await page.getByRole('link', { name: 'Check Out' }).click();

    //Validasi apakah benar sudah redirect ke checkout page
    var buyerData = await page.getByText('Informasi Penerima').isVisible();
    var buyerAddress = await page.getByText('Alamat Pengiriman').isVisible();
    var courierOption = await page.getByText('Metode Pengiriman').isVisible();
    var paymentOption = await page.getByText('Metode Pembayaran').isVisible();


    if (buyerData == true) {
        // Mengisi field informasi pembeli
        await page.getByPlaceholder('Nama Penerima').fill(validName);
        await page.getByPlaceholder('No. Telpon').fill(validPhone);
        await page.getByPlaceholder('Email').fill('');
    } else {
        return false;
    }

    if (buyerAddress == true) {
        // Mengisi field informasi alamat pembeli
        await page.getByPlaceholder('Alamat').fill(validAddress);
        await page.getByPlaceholder('Select').fill(validSubdistrict);
        await page.getByText('Talun, Kec. Talun, Blitar Kabupaten, Jawa Timur, 66183').click();
    } else {
        return false;
    }

    if (courierOption == true) {
        var locator = await page.locator('.fieldset').innerText().isVisible();
        if (locator == true) {
            // memilih / select opsi kurir SAP Express di checkout page
            await page.locator('#sap_Regular').check();
        } else {
            return false;
        }
    } else {
        return false;
    }

    if (paymentOption == true) {
        var locator = await page.locator('.fieldset').innerText().isVisible();
        if (locator == true) {
            // memilih / select opsi pembayaran yang tersedia di checkout page
            await page.locator('input[name="checkout_payment"]').check();
        }
    }

    var btnCheckout = await page.getByRole('button', { name: 'Bayar Sekarang' }).isVisible();
    if (btnCheckout == true) {
        btnCheckout.click();
        // Memvalidasi apakah alert tampil atau tidak ketika phone kosong
        await page.getByText("Email is required").isVisible();
    } else {
        return false;
    }
});