// assertion tobechecked,tobevisible

const{test,expect}=require('@playwright/test');
test('open page',async({page})  =>
{
    await page.goto('https://demoqa.com/radio-button');

    const yesbutton = page.locator("input[id='yesRadio']");

    await yesbutton.check();

    //await expect(yesbutton).toBeChecked();  toBechecked 

    await expect(yesbutton).toBeVisible();

    await page.pause();
});