import {test, expect} from '@playwright/test'

test('Playwright special locators', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    // getByLabel <label> Any text written here </label>
    // Playwright locate the text & intelligently perfomr click action
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').click();

    // .selectOption('text')
    await page.getByLabel('Gender').selectOption('Female');


    // getByPlaceholder
    await page.getByLabel('Password').fill('P@ssw0rd!001')



    // getByRole(role, {name: submit})
    await page.getByRole("button", {name:'Submit'}).click()
    await page.getByText("Success! The Form has been submitted successfully!.").click();
    await page.getByRole("link", {name: 'Shop'}).click();

    // Filter (Which internall applies getByText internally)
    // await page.locator('.card-title').filter({hasText: 'Nokia Edge'}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

    await page.waitForTimeout(3000)
})