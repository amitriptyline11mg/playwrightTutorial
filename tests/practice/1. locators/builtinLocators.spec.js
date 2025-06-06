
const { test, expect } = require('@playwright/test');

/*
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByPlaceholder() to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test('Built-in Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // page.getByAltText()
    const myImg = await page.getByAltText('company-branding');
    await expect(myImg).toBeVisible();
    console.log('Image is visible');


    // page.getByPlaceholder()
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');


    // page.getByRole(tagType, {'attribute'}) to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', { type: 'submit' }).click();


    const myUserName = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    // page.getByText() to locate by text content.
    await expect(await page.getByText(myUserName)).toBeVisible();
    console.log("Text was visible");


    // If you find any attribute for any element then use. Can rarely be seen, read docs.
    // page.getByLabel() to locate a form control by associated label's text.
    // page.getByTitle() to locate an element by its title attribute.
    // page.getByTestId() to locate an element based on its data - testid attribute(other attributes can be configured).


    await page.pause();

})