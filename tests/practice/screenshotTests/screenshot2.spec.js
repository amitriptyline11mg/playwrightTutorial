

const { test, expect } = require('@playwright/test');

test('Automatic screenshot', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // screenshot: 'on' is enabled in playwright.config, so it will take the ss automatically
    // It will be stored inside the test-results folder & in the report as well
    await page.click('//a[@id="login2"]');
    await page.fill('#loginusername', 'ButterBeer')
    await page.fill('#loginpassword', 'test123')
    await page.click('//button[normalize-space()="Log in"]')
    

});

