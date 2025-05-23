// https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html

const { test, expect } = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html');

    const clickMeBtn = await page.locator('//p//span[normalize-space()="right click me"]');

    // Normal click
    // await clickMeBtn.click();
    // await page.click(clickMeBtn);

    // Right click, use myButton.click({button: 'right/left})
    await clickMeBtn.click({button: 'right'});




    await page.waitForTimeout(4000);


})
