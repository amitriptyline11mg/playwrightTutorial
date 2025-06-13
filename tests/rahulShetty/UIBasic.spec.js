// @ts-check
import { test, expect } from '@playwright/test';


test.only('Rshetty 2', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise');
  const userName = page.locator('#username')
  const userPass = page.locator('#password')
  const SignInErrorMsg = page.locator('[style*="block"]')


  await userName.fill('rahulshettyacademy');
  await userPass.fill('learning');
  await page.click('#signInBtn')
  // console.log(await SignInErrorMsg.textContent()); //Incorrect username/password.
  // await expect (await SignInErrorMsg.textContent()).toContain('Incorrect')
  // console.log('Assertion passed');  

  // Locators with multiple elements
  const itemList = page.locator('.row h4 a');

  // Get individual element text
  console.log(await itemList.nth(0).textContent()); 
  console.log(await itemList.first().textContent()); 
  console.log(await itemList.last().textContent()); 

  // Or grab all textContent
  console.log(await itemList.allTextContents()); // prints an array



  await page.waitForTimeout(3000);


});