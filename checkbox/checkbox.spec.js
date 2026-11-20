const{test,expect} = require('@playwright/test');
test('open page', async ({page}) =>
{
  
    await page.goto('https://demoqa.com/radio-button');

    const button = page.locator("input[id='yesRadio']");

    await expect(button).toBeVisible();

    await button.check();

    await page.waitForTimeout(2000);

    const button1 = page.locator("input[id='impressiveRadio']");

    await button1.check();

    await expect(button1).toBeChecked();

    await page.waitForTimeout(2000);

    await page.pause();



});