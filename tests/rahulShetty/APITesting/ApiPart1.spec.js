// @ts-check
import { test, expect, request } from '@playwright/test';
import apiUtils from './apiUtils';

const loginPayload = { userEmail: "butterbeer@gmail.com", userPassword: "P@ssw0rd!001" }
const orderPayload = { orders: [{ country: "Belize", productOrderedId: "67a8df1ac0d3e6622a297ccb" }] }

let response;

test.beforeAll(async () => {


    const apiContext = await request.newContext();
    const ApUt = new apiUtils(apiContext, loginPayload);
    response = await ApUt.createOrder(orderPayload);
    console.log(response);
    console.log('My response token:', response.token);

});


test('Client Log in API', async ({ page }) => {
    console.log(response.token);

    await page.addInitScript((value) => {
        // Storage mai key-val pair mai dalna hoga, value will be passed from token
        window.localStorage.setItem('token', value)
    }, response.token);

    
    await page.goto('https://rahulshettyacademy.com/client/');
    const productIwant = 'ADIDAS ORIGINAL'

    // Go to my order page
    await page.locator('button[routerlink*="myorders"]').click();


    // Find your orderID and click on 'View' btn
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {
        // go to the first(nth) row, locate the head
        const currentOrder = await rows.nth(i).locator('th').textContent();

        if (response.orderID.includes(currentOrder)) {
            await rows.nth(i).locator('button').first().click()
            break;
        }
    }

    const orderIDDetails = await page.locator('.col-text').textContent();
    // await page.pause();
    expect(response.orderID.includes(orderIDDetails)).toBeTruthy();



    await page.waitForTimeout(3000);


});

