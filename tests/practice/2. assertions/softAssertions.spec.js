const {test, expect} = require ('@playwright/test');

test('Soft assertions', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    // Following are the hard assertion
    /*
    // await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveTitle('STORE0000'); // If i fail this assertion the program will not move forward
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page.locator('.navbar-brand')).toBeVisible();
    */

    await expect.soft(page).toHaveTitle('STORE0000'); // Will throw an err but program will still continue to execute
    await expect.soft(page).toHaveURL('https://www.demobla33333ze.com/');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

    console.log('End of execution'); 

})