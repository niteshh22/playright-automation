const {test} = require ('@playwright/test');

test('open page', async({page}) =>
{

    await page.goto('https://www.sreenidhirajakrishnan.com/practice');

    const tablesearch = page.locator("input[id='table-search']");

    //await tablesearch.fill('Bharath');

    //await tablesearch.fill('SDET');

    await tablesearch.fill('QA');

    await page.pause();





});