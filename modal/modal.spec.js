const {test} = require ('@playwright/test');
test('open page', async({page}) =>
{
 await page.goto('https://www.sreenidhirajakrishnan.com/practice');

 const button = page.locator("button[id='open-modal-btn']");

 await button.click();

 await page.waitForTimeout(1000);

 const modalclosebtn = page.locator("button[id='modal-close-btn']");

 await modalclosebtn.click();

 await page.pause();




});
