const {test} = require ('@playwright/test');

test('open page',async({page}) =>
{

    await page.goto('https://qaplayground.vercel.app/');

    const btnopenmodal = page.locator("button[id='btn-open-modal']");

    await btnopenmodal.click();

    await page.waitForTimeout(2000);

    const modalinput = page.locator("input[id='modal-input']");

    await modalinput.fill('hello');
    await page.waitForTimeout(2000);

    const btnmodalconfirm = page.locator("button[id='btn-modal-confirm']");

    await page.waitForTimeout(2000);

    await btnmodalconfirm.click();


    await page.pause();




    });