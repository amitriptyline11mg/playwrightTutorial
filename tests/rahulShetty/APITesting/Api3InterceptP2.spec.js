import { test, expect } from '@playwright/test';


test('Try to view somebody elses order', async ({ page }) => {

    const userBorderID = '685d7060129e250258b98847'
    // Login
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('butterbeer@gmail.com');
    await page.locator('#userPassword').fill('P@ssw0rd!001');
    await page.click('#login')
    await page.locator('.card-body b').last().waitFor();

    // go to orders page
    await page.locator('button[routerlink*="myorders"]').click();

    // Intercept the network if user clicks on 'View'
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*", async(route)=>{
        route.continue({
            url: `https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=${userBorderID}`
        })
    })

    // Click the view button
    await page.locator("button:has-text('View')").first().click();
    // await page.pause();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order")



})