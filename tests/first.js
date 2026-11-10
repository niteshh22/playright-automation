const { test, expect } = require('@playwright/test');

test('Open E-commerce Website', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');

});