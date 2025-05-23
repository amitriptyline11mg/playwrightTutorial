
// Doc: https://playwright.dev/docs/trace-viewer

const { test, expect } = require('@playwright/test');

test('Trace View', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    await page.click('//a[@id="login2"]');
    await page.fill('#loginusername', 'ButterBeer')
    await page.fill('#loginpassword', 'test123')
    await page.click('//button[normalize-space()="Log in. Fail"]')

    // See the file in the report itself
    // Ot run this command: npx playwright show-trace test-results\traceViewer-Trace-View-firefox\trace.zip
    

});

