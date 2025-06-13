import { test, expect } from '@playwright/test';


test('Rshetty', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // const userName = page.locator('#username')
    // const userPass = page.locator('#password')
    const docLink = page.locator('[href*="documents-request"]');

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'), // Listen for another page + returns a promise
            docLink.click()  // Opens the another page+ returns a promise
        ]
    )

    expect(newPage.url()).toContain("https://rahulshettyacademy.com/documents-request");
    const text = await newPage.locator('.red').textContent();
    // Please email us at mentor@rahulshettyacademy.com with below template to receive response 

    console.log(text.split('@'));
    //     [
    //   'Please email us at mentor',
    //   'rahulshettyacademy.com with below template to receive response '
    // ]

    await page.locator('#username').fill('amithello!')
    console.log(await page.locator('#username').inputValue());



    await page.waitForTimeout(5000);
})