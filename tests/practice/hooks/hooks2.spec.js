
// Four types: beforeEach, afterEach, beforeAll, afterAll
// These hooks do not accept page as a fixeture, they accept ({browser})
// We can creata a page fixeture. by initiating the page outside and then decalring it inside  
const { test, expect } = require('@playwright/test');
let page;

test.beforeEach(async ({ browser }) => {
     page = await browser.newPage();

     await page.goto('https://www.demoblaze.com/');
     //log in
     await page.locator('#login2').click();
     await page.fill('#loginusername', 'ButterBeer');
     await page.fill('#loginpassword', 'test123')
     await page.locator('//button[normalize-space()="Log in"]').click();

});

test.afterEach(async () => {

     // Log Out
     await page.locator('#logout2').click();
     await page.waitForTimeout(2000);
})

test('HomePage test', async () => {

     // Homepage
     await expect(await page.locator('#logout2')).toBeVisible();
     console.log('Logout btn was visible');


})

test('Add product to the cart', async () => {
     
     //log in

     // Add product to the cart
     await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
     await page.locator('//a[normalize-space()="Add to cart"]').click();

     page.on('dialog', async (dialog) => {
          expect(dialog.message()).toContain('Product added.');
          await dialog.accept()
          console.log('Product was added!');
     });

     await page.waitForTimeout(2000);

     // Log Out


})