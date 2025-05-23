

const { test, expect } = require('@playwright/test');

test('Visible page screenshot', async ({ page }) => {

    await page.goto('https://demo.opencart.com.gr/');

    // .screenshot({path: 'folder'+ Date.now() for unique filename + 'file name'})
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'});

});

test('Full Page screenshot', async ({ page }) => {

    await page.goto('https://demo.opencart.com.gr/');

    // .screenshot({same as before, fullpage: true})
    await page.screenshot({path:'tests/screenshots/'+Date.now()+ 'FullPage.png', fullPage: true});

});

test.only('Screenshot of a particular element', async ({ page }) => {

    await page.goto('https://demo.opencart.com.gr/');

    const macBook = page.locator('//*[@id="content"]/div[2]/div[1]/div');

    // .screenshot({same as before, fullpage: true})
    await macBook.screenshot({path:'tests/screenshots/'+Date.now()+ 'SelectElementSS.png'});

});