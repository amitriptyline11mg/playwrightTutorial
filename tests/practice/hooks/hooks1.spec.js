
// Four types: beforeEach, afterEach, beforeAll, afterAll

const { test, expect } = require('@playwright/test');


test('HomePage test', async ({ page }) => {
     await page.goto('https://www.demoblaze.com/');

     //log in
     await page.locator('#login2').click();
     await page.fill('#loginusername', 'ButterBeer');
     await page.fill('#loginpassword', 'test123')
     await page.locator('//button[normalize-space()="Log in"]').click();

     // Homepage
     await expect(await page.locator('#logout2')).toBeVisible();
     console.log('Logout btn was visible');

     // Log Out
     await page.locator('#logout2').click();
     await page.waitForTimeout(2000);
})

test('Add product to the cart', async ({ page }) => {
     await page.goto('https://www.demoblaze.com/');
     //log in
     await page.locator('#login2').click();
     await page.fill('#loginusername', 'ButterBeer');
     await page.fill('#loginpassword', 'test123')
     await page.locator('//button[normalize-space()="Log in"]').click();
     await page.waitForTimeout(2000);

     // Add product to the cart
     await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
     await page.locator('//a[normalize-space()="Add to cart"]').click();

     page.on('dialog', async (dialog) =>{
          expect(dialog.message()).toContain('Product added.');
          await dialog.accept()
          console.log('Product was added!');
     });
     
     await page.waitForTimeout(2000);

     // Log Out
     await page.locator('#logout2').click();
     await page.waitForTimeout(2000);

})