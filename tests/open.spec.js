const { test } = require('@playwright/test');
test('Open page', async ({ page }) => {
await page.goto('https://google.com');

await page.pause();
});