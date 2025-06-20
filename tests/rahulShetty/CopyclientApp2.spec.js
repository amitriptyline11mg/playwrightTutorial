// @ts-check
import { test, expect } from '@playwright/test';


test('Rshetty', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').fill('butterbeer@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('P@ssw0rd!001');
  await page.getByRole('button', { name: 'Login' }).click();

  const productIwant = 'ADIDAS ORIGINAL'

  await page.locator('.card-body b').last().waitFor();


  await page.locator(".card-body").filter({ hasText: "ADIDAS ORIGINAL" })
    .getByRole("button", { name: "Add to Cart" }).click();

  await page.getByRole("listitem").getByRole('button', { name: "Cart" }).click();

  page.locator("div li").first().waitFor();

  await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  expect(page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible()).toBeTruthy();
  console.log("Product was added");

  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");

  await page.getByRole("button", { name: "India" }).nth(1).click();


  // Fill the other details
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

  for (let i = 0; i < await rows.count(); i++) {
    // go to the first(nth) row, locate the head
    const currentOrder = await rows.nth(i).locator('th').textContent();

    if (orderID && currentOrder && orderID.includes(currentOrder)) {
      await rows.nth(i).locator('button').first().click()
    }
  }

  await page.getByText("PLACE ORDER").click();

  await expect(page.getByText("Thankyou for the order.")).toBeVisible();




  await page.waitForTimeout(3000);


});

