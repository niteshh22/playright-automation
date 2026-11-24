const {test} = require ('@playwright/test');

test('open page',async({page}) =>
{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts');


    const button = page.locator("button[onclick='jsAlert()']");


await button.click();

await page.waitForTimeout(1000);

//page.once('dialog', dialog => dialog.accept());

const JSconfirm = page.locator("button[onclick='jsConfirm()']");

await JSconfirm.click();

await page.waitForTimeout(1000);

page.once('dialog', dialog => dialog.accept());

const Jsprompt = page.locator("button[onclick='jsPrompt()']");

await Jsprompt.click();

await page.pause();

});