/*
1. await expect(page).toHaveURL('url'):          Page has a URL
2. await expect(page).toHaveTitle('title'):        Page has title

3. await expect(locator).toBeVisible():     Element is visible
4. await expect(locator).toBeEnabled():     Element is enabled
5. await expect(locator).toBeDisabled():    Element is disabled

6. await expect(locator).toBeChecked():     Radio/checkbox gets checked

7. await expect(locator).toHaveAttribute('attr', 'its value'): Element has attribute

8. await expect(locator).toHaveText():      Element matches text, exact match with inner text of that element
9. await expect(locator).toContainText():   Element contains text, partial match
0. await expect(locator).toHaveValue(val):  Input has a value

1. await expect(locator).toHaveCount():     List of elements has given length or not (e.g. dropdown opn)
*/

const {test, expect} = require ('@playwright/test');

test("Testing Assertions", async({page})=>{
    
    await page.goto('https://demo.nopcommerce.com/register');

    // expect(page).toHaveURL():
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    console.log("It tru it has the same url");


    await expect(page).not.toHaveURL('https://demo.nopcommerce.com/login');
    console.log("It tru, the url wasn't /login");



    // expect(page).toHaveTitle('title'):
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    console.log("It tru it has the same title");

    // expect(locator/element).toBeVisible()
    const myImg = await page.locator('.header-logo');  // locating the element first
    await expect(myImg).toBeVisible();
    console.log('It tru the img was visible');

    // expect(locator).toBeEnabled()
    const searchField = await page.locator('#small-searchterms');
    await expect(searchField).toBeEnabled();
    console.log('It tru the searchField was enabled');


    
    // await expect(locator).toBeChecked()
    // For radio buttons
    const maleBtn = await page.locator('#gender-male');
    await maleBtn.click();
    await expect(maleBtn).toBeChecked();
    console.log('It tru the male button was checked');

    // For checkbox (same)
    const myCheckbox = await page.locator('#Newsletter');
    // await myCheckbox.click();  // It's already checked
    await expect(myCheckbox).toBeChecked();
    console.log('It tru the Checkbox was already checked');


    // expect(locator).toHaveAttribute('attr', 'its value')
    const regBtn = await page.locator('#register-button');
    await expect(regBtn).toHaveAttribute('type', 'submit')
    console.log('It tru that regs attribute is type=submit');


    // expect(locator).toHaveText()
    const formHeading = await page.locator('.page-title h1');
    await expect(formHeading).toHaveText('Register');
    console.log("It tru, the form heading was Register");
    // await expect(formHeading).toHaveText('gist'); // this would 100% fail

    // expect(locator).toContainText():
    await expect(formHeading).toContainText('gist');
    console.log("It tru, the form heading contained gist");


    // await expect(locator).toHaveValue(val)
    const emailBox = await page.locator('#Email');
    emailBox.fill('helloamit@gmail.com');
    await expect(emailBox).toHaveValue('helloamit@gmail.com');
    console.log('It tru email was helloamit@gmail.com');


    // await expect(locator).toHaveCount(): 
    const menuItems = await page.locator('ul.top-menu.notmobile > li');
    await expect(menuItems).toHaveCount(7);
    console.log('It tru the menu counts was 7 only');



})
