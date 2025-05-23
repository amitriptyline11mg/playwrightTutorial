import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  
  await page.locator('#loginusername').fill('ButterBeer');
  
  await page.locator('#loginpassword').fill('test123');
  // await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('//button[normalize-space()="Log in"]').click();
  // await page.getByRole('link', { name: 'Log out' }).click();


  await page.waitForTimeout(4000);
});


// Run: npx playwright test codeGen --headeds