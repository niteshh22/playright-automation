const { test } = require ('@playwright/test');  
    test('open page', async({page}) => 
{

   await page.goto('https://practicetestautomation.com/practice-test-login/');

  const textbox = page.locator("input[name='username']");

  await textbox.fill('student');

  const textbox1= page.locator("input[name='password']");

  await textbox1.fill('Password123');

   await page.pause();

   console.log(page.url());


});