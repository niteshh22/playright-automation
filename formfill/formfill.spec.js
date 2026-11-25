const {test} = require ('@playwright/test');

test('open page', async({page}) =>
{

await page.goto('https://www.sreenidhirajakrishnan.com/practice');

const textinput = page.locator("input[id='text-input']");

await textinput.fill('nitesh');

await page.waitForTimeout(2000);

const textinput1 = page.locator("input[id='password-input']");

await textinput1.fill('nitesh');


await page.waitForTimeout(2000);

const email = page.locator("input[id='email-input']");

await email.fill('nitesh@gmail.com');


await page.waitForTimeout(2000);

const phoneinput = page.locator("input[id='phone-input']");

await phoneinput.fill('8789798798798');

await page.waitForTimeout(2000);

const button = page.locator("button[id='form-submit']");

await button.click();



await page.pause();






});