const LoginPage = require("../Pages/Login2");
const HomePage = require("../Pages/HomePage");
const CartPage = require("../Pages/CartPage");
const { test, expect } = require("@playwright/test");
const { console } = require("inspector");

test('Test', async ({ page }) => {

    // login
    const login = new LoginPage(page);
    await login.gotoLoginPage("https://www.demoblaze.com/");
    await login.login("ButterBeer", "test123");
    await page.waitForTimeout(3000);


    // Home
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoCart();
    await page.waitForTimeout(2000);


    // Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(2000)
    const status = await cart.verifyProductInCart('Nexus 6');
    console.log(status);
    expect(await status).toBe(true)

    // npx playwright test retry.spec.js --retries=2
})