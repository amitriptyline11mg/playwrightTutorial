const {test, expect} = require('@playwright/test');

test("Handle Check Boxes", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//input[@id="sunday" and @type="checkbox"]').check();
    await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked();
    await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]').isChecked()).toBeTruthy();

    console.log('Three test passed on Sunday checkbox!!');

    // Check multiple chekbox
    // I will make an array of locators 

    const checkBoxLocators = ['//input[@id="sunday"]', '//input[@id="tuesday"]', '//input[@id="friday"]'];

    // And then pass it on a for-of loop
    for (const checkB of checkBoxLocators){
        await page.locator(checkB).check();
    }
    console.log('Sunday, Tuesday & Friday are now checked');


    // Lets uncheck those again?
    for (const checkB of checkBoxLocators){

        if(await page.locator(checkB).isChecked()){
            await page.locator(checkB).uncheck();
            
        }
    }
    console.log('Sunday, Tuesday & Friday has been unchecked');

    await page.waitForTimeout(3000);


})