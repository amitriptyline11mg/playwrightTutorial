const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';

test('The locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    // await page.goto('https://www.demoblaze.com/');

    // Clicking login btn using property
    // await page.locator('id=login2').click();
    await page.click('id=login2');

    // Using Css, for id use #
    // await page.locator('#loginusername').fill('Amit');
    await page.fill('#loginusername', 'ButterBeer');

    // Using combination of 'tagname' and 'css property'
    await page.fill("input[id='loginpassword']", 'test123');


    // CLICKING on login btn using XPATH locator
    await page.click("//button[normalize-space()='Log in']")


    // Verify 'Logout' btns presence
    const LObtn = page.locator("id=logout2");

    await expect(LObtn).toBeVisible();
    console.log("Log out button was visible");

    // ------------------Locate multiple webelements! $$('locator)-----------, store it inside a variable
    /*
    const anchorTags = await page.$$('//a');    
    for (const link of anchorTags){
        const linktext = await link.textContent();
        // const href = await link.getAttribute('href');
        // console.log(`Text: ${text}, Link: ${link}`);
        console.log(linktext);
    }

    await page.pause();
    

    // Get total numbers of product name
    const totalProducts = await page.$$("//div[@id='tbodyid']//div[@class='card h-100']//h4/a");'
    
    for (const product of totalProducts) {
        console.log(await product.textContent());
    }

    */



});

// Locating elements via: property, css, xpath
// If you wanna locate & interact with any element in playwright there are multiple ways
// 1. await page.locator('locator').click();
// 2. await page.click('locator')


test("Get multiple product names", async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    /*
    "//div[@id='tbodyid']//div[@class='card h-100']//h4/a" : syntax is correct but element may not be found
    So use '//div[@id="tbodyid"]//div[@class="card h-100"]//h4/a'
    */

    const totalProducts = await page.$$('//div[@id="tbodyid"]//div[@class="card h-100"]//h4/a');
    for (const product of totalProducts) {
        const productName = await product.textContent()
        console.log(productName);
    }

})