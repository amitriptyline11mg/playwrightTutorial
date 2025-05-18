// https://testautomationpractice.blogspot.com/

const { test, expect } = require('@playwright/test');


test('Handling nested frames', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Capture the table

    const table = await page.locator('#productTable');

    // 1. Get the column count by seeing how many coloums are there is in <thead>
    const columns = await table.locator('thead tr th');
    console.log("Total columns: ", await columns.count());

    const rows = await table.locator('tbody tr');
    console.log("Total rows: ", await rows.count());

    await expect(await columns.count()).toBe(4);
    await expect(await rows.count()).toBe(5);
    console.log('Column count is 4 and row count is 5');

    /*
        // 2. Click on the check box of 4th row
        // First filter the row where you want to perform action: using filter({has})
        const matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: 'Smartwatch'
        })
    
    
    
    
        // I identified the locator for the 4th col of my selected row to check the checkbox
        await matchedRow.locator('td input').check();
        console.log("We selected the smartphone");
        */

    /*
// 3. what if you wanna select multiple checkbox though
// Make a re-usable function

async function selectProduct(rows, page, pName) {

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: pName,   // pass the product name here
    })
    await matchedRow.locator('td input').check();

}

await selectProduct(rows, page, 'Smartphone');
await selectProduct(rows, page, 'Tablet');
await selectProduct(rows, page, 'Wireless Earbuds');

*/

    /*
        // 4. Print all product details using loop
    
        for(let i=0; i<await rows.count(); i++){
    
            // Capture the row
            const currentRow = await rows.nth(i);
            const tableData = await currentRow.locator('td'); // Captures all the <td> for the row
    
            for(let j=0; j<await columns.count()-1; j++){
                const colmData = await tableData.nth(j).textContent()  // Captures all the data of the current <td> colm
                console.log(colmData);
    
            }
        }
    */


    // 5. Read data from all the pages in the table

    // Locator of the Pagination button link (1,2,3,4..)

    const pages = await page.locator('#pagination a');
    console.log("Total pages: ", pages.count());


    for (let p = 0; p < await pages.count(); p++) {

        // If you're already on page one stay on that page, or else
        if (p > 0) {
            await pages.nth(p).click()
        }


        // Once you're in the page, same. read the table data
        for (let i = 0; i < await rows.count(); i++) {

            // Capture the row
            const currentRow = await rows.nth(i);
            const tableData = await currentRow.locator('td'); // Captures all the <td> for the row

            for (let j = 0; j < await columns.count() - 1; j++) {
                const colmData = await tableData.nth(j).textContent()  // Captures all the data of the current <td> colm
                console.log(colmData);

            }
        }



    }





    await page.waitForTimeout(4000);

})