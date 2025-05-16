const {test, expect} = require('@playwright/test');

test("Handle input box", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Few checks we can do on input fields
    await expect (await page.locator('//input[@id="name"]')).toBeVisible();
    await expect (await page.locator('//input[@id="name"]')).toBeEmpty();
    await expect (await page.locator('//input[@id="name"]')).toBeEditable();
    await expect (await page.locator('//input[@id="name"]')).toBeEnabled();
    console.log("Check Done");

    await page.locator('//input[@id="name"]').fill('AMITTTTT');

    await page.waitForTimeout(3000); 


})