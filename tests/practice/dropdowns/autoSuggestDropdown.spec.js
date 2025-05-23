const {test, expect} = require('@playwright/test');

test ('Handling auto suggest dropdown', async ({page})=>{

    await page.goto('https://www.redbus.in/');

    await page.waitForSelector('//input[@id="src"]');
    await page.locator('//input[@id="src"]').fill('Delhi');

    page.waitForTimeout(2000);

    // This will wait for our options to be visible
    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]//div/text[1]');

    // And now we will store those options as an array
    const options =  await page.$$('//li[contains(@class,"sc-iwsKbI")]//div/text[1]');

    for (let option of options){

        const val = await option.textContent();
        // console.log(val);
        if(val.includes('Rohini')){
            await option.click()
            console.log('Rohini was clicked');
            break;
        }
    }


    await page.waitForTimeout(2000);
})