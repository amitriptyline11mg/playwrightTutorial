import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();
  
  const page1 = await page1Promise;

  await page1.getByRole('button', { name: 'Book a Free Demo' }).click();
  await page1.getByRole('textbox', { name: 'Full Name' }).fill('aa');
  await page1.getByRole('textbox', { name: 'Phone Number' }).fill('333333');
  await page1.getByRole('textbox', { name: 'Email' }).fill('bs@gmail.com');
  
});