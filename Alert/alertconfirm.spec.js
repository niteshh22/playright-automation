const {test} = require ('@playwright/test');

test('open page', async ({page}) => 
{

    await page.locator('https://the-internet.herokuapp.com/javascript_alerts');

    //page.once('dialog', dialog => dialog.accept());

    const jsConfirm = page.locator("button[onclick='jsConfirm()']");

await page.pause();

});