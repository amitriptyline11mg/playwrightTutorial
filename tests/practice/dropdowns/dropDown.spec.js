const { test, expect } = require('@playwright/test');

test('Handle the Dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    /*
    // The dropdown usually have the <select> tag and its option have option tag

    // mulitple ways to select dropdown option (5 are listed below 1 is down under)

    // Use selectOption() 
    await page.locator("#country").selectOption({ label: 'India' }); // label or visible text
    console.log('India was selected');

    await page.locator('#country').selectOption('Japan');  // visible text
    console.log('Japan was selected');

    await page.locator('#country').selectOption({ value: 'uk' });  // Value attribute
    console.log('United Kingdom was selected');

    await page.locator('#country').selectOption({ index: 1 })
    console.log('Canada was selected');

    // Or we can always shorten it
    await page.selectOption('#country', 'India');


    // Assertions for dropdown

    // 1. Check number of options available in dropdown
    // Step 1 is capture all the options by passing the id+option inside the locator, store it in a variable

    const myOptions = await page.locator('#country option');
    await expect(myOptions).toHaveCount(10);
    console.log("Total options count has been varified 10");

    // 2. Again check the number of optiions approach 2, we will store it in array variable using $$
    const options2 = await page.$$('#country option');

    console.log('Number of options', options2.length);
    await expect(options2.length).toBe(10);




    // 3. Check presence of values in the dropdown
    const countries = await page.locator('#country').textContent(); // returns all the countries in string format
    await expect(countries.includes('India')).toBeTruthy();
    console.log("India is present");

    // approach 2

    const countries2 = await page.$$('#country option');
    let status = false;
    for (const opt of countries2) {
        
        let val = await opt.textContent();

        if (val.includes('India')) {
            status = true;
            break;
        }
    }

    expect(status).toBeTruthy();
    console.log('India was present Man');

*/


    // OPTION 5 (When we do not have select tag)
    const options = await page.$$('#country option');

    for (const opt of options) 
        {
            let value = (await opt.textContent()).trim();
            
            if (value.includes('France')) 
                {
                    await page.selectOption("#country", value);
                    break;
                }
                    
                
        }

    
    console.log('France was manually selected');


    await page.waitForTimeout(2000);


})