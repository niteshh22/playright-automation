const{test,except} = require('@playwright/test');

test('open page',async({page}) =>
{

    await page.goto('https://testing.qaautomationlabs.com/checkbox.php');

    const checkbox = page.locator("input[id='myCheckbox']");

    await checkbox.check();

    await page.waitForTimeout(2000);

    const chk1 = page.locator("input[id='chk1']");

    await chk1.check();
await page.waitForTimeout(1000);

const chk2 = page.locator("input[id='chk2']");

await chk2.check();

await page.waitForTimeout(1000);

const multichk1 = page.locator("input[id='multichk1']");

await multichk1.check();
await page.waitForTimeout(1000);

const multichk2 = page.locator("input[id='multichk2']");

await multichk2.check();

const multichk3 = page.locator("input[id='multichk3']");

await multichk3.check();


const multichk4 = page.locator("input[id='multichk4']");

await multichk4.check();
await page.waitForTimeout(500);
await multichk4.uncheck();

    await page.pause();

}); 