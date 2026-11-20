// Assertion toBedisabled 


const{test,expect} = require('@playwright/test');
test('open page',async({page}) =>
{

await page.goto('https://demoqa.com/radio-button');

const noradio = page.locator("input[id='noRadio']");

await expect(noradio).toBeDisabled();

await page.pause();

});