// https://testautomationpractice.blogspot.com/

const { test, expect } = require('@playwright/test');


test('Handling nested frames', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Capture the table

    const table = page.locator('#productTable');

    // Get the column count by seeing how many coloums are there is in <thead>
    const columns = table.locator('thead tr th');
    console.log("Total columns: ", columns);


})