// https://testautomationpractice.blogspot.com/

const { test, expect } = require('@playwright/test');


test('Handling Dates', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Method 1: Type your date lol
  // await page.fill('#datepicker', '05/21/2025');

  // But if the calendar doesn't allow type, then write the logic
  // Step:1 declare these three variables, remember these are strings
  const year = "2025";
  const month = "September";
  const date = "12";

  await page.click('#datepicker')

  // Now we will run a while loop
  // The loop will keep running until the current month & year are matched

  while (true) {
    const curYear = await page.locator('.ui-datepicker-year').textContent();
    const curMonth = await page.locator('.ui-datepicker-month').textContent();

    // If we are already on the month we want to be, age-piche mat jao, stay there
    if (curYear == year && curMonth == month) {
      break;
    }

    const nextMonthBtn = await page.locator('[title="Next"]');
    await nextMonthBtn.click();   // until we land on expected month

  }

  
  // Capture all the dates in a array variable
  const dates = await page.$$('//a[@class="ui-state-default"]');


  /* // Method 01
  for (const dt of dates) {
    if (await dt.textContent() == date) {
      await dt.click();
      break;
    }

  }
  console.log("The date has been selected!!");
  */


  // Once we know year, month & have captured all the date------------------
  // We can alo use an xpath to locate the date directly, then use //text()='' in the end of xpath
  // Date selection without loop


  await page.locator(`//a[@class="ui-state-default"][text()="${date}"]`).click();
  console.log("The date has been selected!!");





  await page.waitForTimeout(4000);
})