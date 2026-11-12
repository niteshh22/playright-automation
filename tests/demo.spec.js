const { test} = require('@playwright/test');
test('open page',async({page})=>
{
    await page.goto('https://youtube.com');

    await page.pause()
} 
);