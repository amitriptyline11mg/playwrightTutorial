// https://gotranscript.com/text-compare
// Playwright Doc: https://playwright.dev/docs/api/class-keyboard
const {test, expect} = require ('@playwright/test');

test( 'Keyboard actions', async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    // await page.locator('[name="text1"]')

    await page.fill('[name="text1"]', 'Hi Dummy, how are you');

    // Ctrl+A -select the text
    // It's two button we are pressing so we will use keyboard.press()
    // If it was a single button we will use keyboard.
    await page.keyboard.press('Control+A');

    // Ctrl+C -Copy the text
    await page.keyboard.press('Control+C');

    // .down() - Press the tab & .up() release the tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl+V -select the text
    await page.keyboard.press('Control+V')


    await page.waitForTimeout(4000);

})