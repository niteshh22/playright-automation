const {test, expect } = require ('@playwright/test');
test('open page',async({page}) =>
{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const textbox= page.locator("input[name='username']");

    await textbox.fill('student');

await page.pause();

});