const { test, expect } = require('@playwright/test');
const LoginPage = require("../Pages/Login2");
const HomePage = require("../Pages/HomePage");
const CartPage =require("../Pages/CartPage");

test('test1', async ({ page }) => {

    // Login
    const lp = new LoginPage(page);
    await lp.gotoLoginPage("https://www.demoblaze.com/");
    await lp.login("ButterBeer", "test123");

    await page.waitForTimeout(3000);

    // Home
    const hp = new HomePage(page);
    await hp.addProductToCart('Nexus 6');
    await page.waitForTimeout(2000);
    await hp.gotoCart();
    await page.waitForTimeout(2000);

    // Cart
    const ct = new CartPage(page);
    const status = await ct.verifyProductInCart('Nexus 6');
    console.log(status);
    if(status === true){
        console.log('The product was addedd');
    }else{
        console.log('The test failed mate');
    }
    expect(await status).toBe(true)


    await page.waitForTimeout(2000);


});