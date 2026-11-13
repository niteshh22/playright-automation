const {test } = require('@playwright/test');
test('open page', async({page}) =>
{
    await page.goto('https://www.qa-practice.com/');

    
    await page.setViewportSize({ width: 1920, height: 1080 });

    console.log(page.url());

    await page.pause();

})