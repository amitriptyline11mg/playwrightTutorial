// @ts-check
import { test, expect } from '@playwright/test';


test('Rshetty', async ({ page }) => {
  const productIwant = 'ADIDAS ORIGINAL'
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.locator('#userEmail').fill('butterbeer@gmail.com');
  await page.locator('#userPassword').fill('P@ssw0rd!001');
  await page.click('#login')
  await page.locator('.card-body b').last().waitFor();

  
  const allProducts = page.locator('.card-body');
  const count = await allProducts.count()

  for (let i = 0; i < count - 1; i++) {

    if (await allProducts.nth(i).locator('b').textContent() === productIwant) {
      // Add to cart
      await allProducts.nth(i).locator('text =" Add To Cart"').click()
      break;
      // Abcd
    }
  }

  const addToCartBtn = page.locator('[routerlink*="cart"]');
  await addToCartBtn.click();
  page.locator("div li").first().waitFor();

  await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  expect(page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible()).toBeTruthy();
  console.log("Product was added");
  await page.locator('text=Checkout').click()

  await page.locator('[placeholder*="Country"]').pressSequentially('Ind');

  const dropdown = page.locator('.ta-results')
  await dropdown.waitFor();  // It will wait for dropdown to load

  const optionsCount = await dropdown.locator('button').count()

  for(let i=0; i<optionsCount; i++){
    const Btntext = await dropdown.locator('button').nth(i).textContent();

    if(Btntext === ' India'){
      await dropdown.locator("button").nth(i).click()
      break;
    }
  }
  
  // Fill the other details dd
  await page.locator('[value="4542 9931 9292 2293"]').fill('"0001 0002 0003 0004"]')
  await page.locator('div.title:has-text("CVV Code") + input.input.txt').fill('345');
  await page.locator('div.title:has-text("Name on Card ") + input.input.txt').fill('butter Beer');
  await page.locator('[name="coupon"]').fill('rahulshettyacademy');

  await expect(page.locator('.mt-5 label')).toHaveText("butterbeer@gmail.com");
  console.log('Element Matched');

  await page.locator('.action__submit').click();

  await expect(await page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ")
  const orderID = await page.locator('.em-spacer-1 .ng-star-inserted').textContent()
  console.log(orderID);

  // Go to my order page
  await page.locator('button[routerlink*="myorders"]').click();
  // Find your orderID and click on 'View' btn
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");

  // HDDKDKB
  for (let i=0; i<await rows.count(); i++){
    // go to the first(nth) row, locate the head
    const currentOrder = await rows.nth(i).locator('th').textContent();

    if(orderID.includes(currentOrder)){
        await rows.nth(i).locator('button').first().click()
    }
  }




  await page.waitForTimeout(3000);


});

