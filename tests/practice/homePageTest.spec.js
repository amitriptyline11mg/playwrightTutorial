// Import using require: playwright/test 
// From `playwright/test` package, we only need two things 'test, expect' & we will store it as a const var


const { test, expect } = require('@playwright/test');

// To start your test, we need to use `test` block, it takes two param: 1. title of test. 2. (async) anonymous function
// The anonymous function takes the fixture {page} required by playwright
// Through this page, we can interact with all the elements webpage

test("Home page title", async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    const pageTitle = await page.title();
    console.log('Page title is: ', pageTitle);

    // To apply validation we have to use 'expect' block
    await expect(page).toHaveTitle('STORE');

    const pageUrl = await page.url()
    console.log("The page URL is: ",pageUrl);
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await page.close();

});