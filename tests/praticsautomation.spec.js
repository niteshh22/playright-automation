const { test, expect} = require ('@playwright/test');

test('open page',async ({page}) =>
{
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const textbox = page.locator("input[name='username']");

    await textbox.fill('student');

    const textbox2 = page.locator("input[name='password']");

    await textbox2.fill('Password12');
const submit = page.locator("button[id='submit']");
await submit.click();
await expect(page.locator('#error')).toBeVisible();

await expect(page.locator('#error')).toHaveText('Your password is invalid!');

await expect(page.locator('#submit')).toBeVisible();

//await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    await page.pause();

    // console.log(page.url());
});

