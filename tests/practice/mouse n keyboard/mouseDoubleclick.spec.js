// https://testautomationpractice.blogspot.com/

const { test, expect } = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const myButton = await page.locator('//button[normalize-space()="Copy Text"]');

    // await page.pause();
    // To double click, use the method dblclick()
    await myButton.dblclick();


    // Adding some assertions
    const flied2 = await page.locator('#field2');
    await expect(flied2).toHaveValue('Hello World!');



    await page.waitForTimeout(4000)

})