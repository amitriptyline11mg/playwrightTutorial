// @ts-check
import { test, expect, request } from '@playwright/test';
import apiUtils from './APITesting/apiUtils';

const loginPayload = { userEmail: "butterbeer@gmail.com", userPassword: "P@ssw0rd!001" }
const orderPayload = { orders: [{ country: "Belize", productOrderedId: "67a8df1ac0d3e6622a297ccb" }] }
const emptyOrderPaylaod = {data:[], message:"No Orders"}

let response;

test.beforeAll(async () => {


    const apiContext = await request.newContext();
    const ApUt = new apiUtils(apiContext, loginPayload);
    response = await ApUt.createOrder(orderPayload);
    // We are creating an order but will route that api & inject an empty order payload instead

});


test('Place the order', async ({ page }) => {

    console.log(response.token);

    await page.addInitScript((value) => {
        // Storage mai key-val pair mai dalna hoga, value will be passed from token
        window.localStorage.setItem('token', value)
    }, response.token);

    
    await page.goto('https://rahulshettyacademy.com/client/');
    

    // Now before going to ORDERS page, route & hijack that url

    // .route('url we want to route', 'How you want to route)
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", async (route)=>{
        
        const response = await page.request.fetch(route.request()) // real response
        
        // intercepting response > API response > {Playwright Fake Response} > Broswer > Render data
        // Send a new response to the browser using .fullfill
        let body = JSON.stringify(emptyOrderPaylaod); // Convert that js obj into JSON 

        route.fulfill(
            {
                response,  // OG 'body' in response will be replaced by this body we are passing
                body
            }
        )
    })


    // Now we have intecepted the req, click the ORDERS button to go on order page
    await page.locator('button[routerlink*="myorders"]').click();
    // await page.pause();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")

    console.log(await page.locator('.mt-4').textContent()); 




});

