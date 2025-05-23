// http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html

const { test, expect } = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {
    await page.goto('http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html');


    // Method 1: use hover-click
    const city = await page.locator('//div[@id="dropContent"]//div[@id="box4"]');
    const country = await page.locator('#box104');

    await city.hover();
    await page.mouse.down();

    await country.hover();
    await page.mouse.up();


    // Method 2: use x.dragTo(y) 

    const city2 = await page.locator('//div[@id="dropContent"]//div[@id="box5"]');
    const country2 = await page.locator('#box105');
    await city2.dragTo(country2);


    await page.waitForTimeout(5000);
})