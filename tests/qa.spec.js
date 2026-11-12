const { test } = require('@playwright/test');
test('open page', async({page}) =>
{
    await page.goto('https://demoqa.com/');

    await page.pause();
})