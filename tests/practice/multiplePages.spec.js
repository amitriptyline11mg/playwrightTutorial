const { test, expect, chromium } = require('@playwright/test');
const { waitForDebugger } = require('inspector');

test("Handle pages/ Window", async () => {

    /*
    // Concept
    const browser = await chromium.launch();
    const context = await browser.newContext();  // ✅ FIXED: context is a promise, so you need to await it

    const page1 = await context.newPage();       // ✅ No need to wrap context again with `await context`
    const page2 = await context.newPage();

    const allPages = context.pages();            // ✅ This is not async, don't await it
    console.log("Total pages are: ", allPages.length);

    await page1.goto('https://www.demoblaze.com/index.html');
    await expect(page1).toHaveTitle('STORE');

    await page2.goto('https://playwright.dev/docs/locators#filter-by-text');
    await expect(page2).toHaveTitle('Locators | Playwright')

    console.log('Both the expected title matched');

    await page2.waitForTimeout(2000);
    */

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

    const link = page.locator('//a[normalize-space()="OrangeHRM, Inc"]');
    // So BEFORE'' clicking on a link that opens up in a new age
    // We will have to create a new context that will already wait for page to open in the next tab
    // We will store it in any variable

    // ✅ Start waiting for new page BEFORE clicking
    const pagePromise = context.waitForEvent('page');
    await link.click(); // 🔁 This triggers opening the new tab
    const page2 = await pagePromise; // ✅ Now we await the new page after it's triggered

    await page2.waitForLoadState();
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software');
    console.log('Title is: Human Resources Management Software | OrangeHRM HR Software');
})