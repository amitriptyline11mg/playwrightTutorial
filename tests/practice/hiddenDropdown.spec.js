const {test, expect} = require('@playwright/test');

test ('Handling auto suggest dropdown', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // page.getByPlaceholder()
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');


    // page.getByRole(tagType, {'attribute'}) to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', { type: 'submit' }).click();

    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click();
    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click();


    await page.waitForTimeout(2000);

    const options = await page.$$('//div[@role="listbox"]//span');

    for (let option of options){
        const jobTitle = await option.textContent();
        // console.log(jobTitle);
        
        if(jobTitle.includes('QA Lead')){
            await option.click();
            console.log(' QA Lead was clicked');
            break;
        }
    }



    await page.waitForTimeout(3000);
})