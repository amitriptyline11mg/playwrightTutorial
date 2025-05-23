// https://www.jquery-az.com/boots/demo.php?ex=63.0_2

const {test, expect} = require ('@playwright/test');

test('Handle bootstrap dropdown',  async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect-selected-text').click();
/*
    // Assertion:
    // 1. 
    // Get how many checkbox options are there in the dropdown
    const options1 = await page.locator('ul>li input');
    await expect(options1).toHaveCount(11);
    console.log("Option count was 11");

    // Using .length method
    // const options2 = await page.$$('ul>li input');
    // await expect(options2.length).toBe(11);

*/
    // 2. Select the dropdown option's checkbox:
    const options1 = await page.$$('ul>li label input');
    

    for(let opt of options1 ){
        const val = await opt.textContent();
        // console.log(val);

        if(await opt.isChecked()){
            await opt.click();
        }
        
    }

    const options2 = await page.$$('ul>li label');
    
    for(let opt of options2 ){
        const val = await opt.textContent();

        if(val.includes('Oracle') || val.includes('Bootstrap')){
            await opt.click()
        }

    
    }







    await page.waitForTimeout(3000);
})