const { test,expect } = require ( '@playwright/test');
test('open page', async({page}) => 
{
    await page.goto('https://the-internet.herokuapp.com/login');

    const textbox= page.locator("input[name='username']");

    await page.waitForTimeout(2000);

    await textbox.fill('tomsmith');
    const textbox1 = page.locator("input[name='password']");

    await textbox1.fill('SuperSecretPassword!');
const submit = page.locator("input[type='submit']");

await submit.click();

    await page.pause();

    console.log(page.url());
});