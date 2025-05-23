// https://playwright.dev/docs/test-annotations

const { test, expect } = require('@playwright/test');

/*
// .only()
// .skip()
test('test1', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')
    console.log('This is Test1');

    await page.waitForTimeout(1000);

});


// test.skip()We can apply an if condition inside the test 
// where if the condition met it will skip
test('test2', async ({ page, browserName }) => {
    console.log(browserName);

    if (browserName === 'firefox') {
        test.skip()
    }

    await page.goto('https://www.demoblaze.com/index.html')

    console.log('This is Test2');

});


// test.Fixme()
// This is like skip but we tell PW that this test block has a bug so please skip it

test('test4', async ({ page }) => {

    test.fixme();
    console.log('This is Test4'); // Skipped

});

// test.fail()
// We tell PW that this test must fail. (If any error occur it'll mark the test passed)
// If it passes with no error (PW will throw console error, cz it was supposed to fail) 

test('test5', async ({ page }) => {

    test.fail(); // expectation
    console.log('This is Test5'); // Skipped
    expect(1).toBe(4)  // since it will throw error, my test will pass 

});

*/

// test.slow()
// I changes the default timeout in pw.config file to 2s
// This test would usually fail bc the page content will not load within 2s

test('test6', async ({ page }) => {

    // The .slow() will triple the default timeout time so 2sx3= 6s
    // test.slow(); 

    test.setTimeout(15000);  
    // This method also sets custom default timeout for this test block

    await page.goto('https://playwright.dev/docs/test-annotations');
    console.log('This is Test6'); // 

});
