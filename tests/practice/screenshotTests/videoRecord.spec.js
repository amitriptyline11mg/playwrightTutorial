

const { test, expect } = require('@playwright/test');

test('Record Video of the test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // video:'retain-on-failure' is enabled in playwright.config, use object so it will take the video on failure
    // It will be stored inside the test-results folder & in the report as well
    await page.click('//a[@id="login2"]');
    await page.fill('#loginusername', 'ButterBeer')
    await page.fill('#loginpassword', 'test123')
    await page.click('//button[normalize-space()="Log in WRONGGG"]')
    

});

