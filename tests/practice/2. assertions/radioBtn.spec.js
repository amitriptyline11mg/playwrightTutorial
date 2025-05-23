const {test, expect} = require('@playwright/test');

test("Handle Radio Button", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Checking the Male radio button

    // const maleBtn = await page.locator('//input[@id="male"]');
    await page.locator('//input[@id="male"]').check();  // checks the male btn
    const maleBtn = page.locator('//input[@id="male"]');

    await expect(maleBtn).toBeChecked();
    await expect(maleBtn.isChecked()).toBeTruthy();  // this will pass if its tru
    console.log('Male btn is checked');

    // Which means female btn should be unchecked
    await expect(await page.locator('//input[@id="female"]').isChecked()).toBeFalsy();  // this will pass if its false
    console.log('Female btn is unchecked');


})