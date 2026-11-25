const {test} = require('@playwright/test');

test('open page', async({page}) =>
{

await page.goto('https://www.sreenidhirajakrishnan.com/practice');

const sort = page.locator("button[id='sort-name-btn']");

await sort.click();



await page.pause();



});