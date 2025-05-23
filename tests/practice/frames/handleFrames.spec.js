// https://ui.vision/demo/webtest/frames/

const { test, expect } = require('@playwright/test');


test('Handling Frames or iFrames', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // If you wanna know total how many frames out page has, there a method lessgo
    const totalFrames = await page.frames()
    console.log("Total frame count on page is: ", totalFrames.length);  //7

    /*
    // Approach one: pass either name or url to the .frame()

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.fill('[name="mytext3"]', 'AMITTTTTYM')  // fill(selector , value)

*/

    // Using framLocator

    const frame1 = await page.frameLocator('//frame[@src="frame_1.html"]');
    const inputBox1 = await frame1.locator('//input[@name="mytext1"]');

    await inputBox1.fill('AmmMITTT');

    await page.waitForTimeout(4000);

})