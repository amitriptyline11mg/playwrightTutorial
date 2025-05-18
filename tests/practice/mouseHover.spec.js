// https://demo.nopcommerce.com/
const { test, expect } = require('@playwright/test');

test('Mouse hover', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/');

  const computers = await page.locator('//ul[@class="top-menu notmobile"]//a[normalize-space()="Computers"]');
  const desktops = await page.locator('//ul[@class="top-menu notmobile"]//a[normalize-space()="Desktops"]');

  // mouse hove
  await computers.hover();
  await desktops.hover();



  await page.waitForTimeout(5000);
})