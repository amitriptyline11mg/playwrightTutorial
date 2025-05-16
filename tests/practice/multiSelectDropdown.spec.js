const {test, expect} = require ('@playwright/test');

test('Select multiple items from the dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // 1. Use selectOption('locator', [list of array item you want to click]) 
    await page.selectOption('#colors', ['Yellow', 'Red', 'Blue']);

// Assertion

    // 1. Check nums of options available in dropdown
    // Capture dropdown using .locator('locator + tagname') 
    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);
    // console.log('There were total 7 options');

    // Another way, by storing it in js array using $$
    const options = await page.$$('#colors option');
    console.log('Total numbers of options are: ', options.length);
    await expect(options.length).toBe(7)


    // 2. Presence of option in the dropdown
    // Colors dropdown mai jo kuch bhi hai, get its content and store it
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Yellow')).toBeTruthy();
    console.log('Its tru, yellow is present');

    await expect(content.includes('Black')).toBeFalsy();
    console.log('Its False, Black isnt present');

    await page.waitForTimeout(2000);
})