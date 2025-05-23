const { test, expect } = require('@playwright/test');


test('Handling nested frames', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Get the 1st frames in a variable
    const myFrame =  page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    // myFrame.locator('//input[@name="mytext3"]');


    // Get nested frame by using .childFrames() 
    // It returns an array of frame
    const childframe = myFrame.childFrames();

    await childframe[0].locator('//*[@id="i6"]/div[3]/div').check();
    // //*[@id="i6"]/div[1]



    await page.waitForTimeout(5000);


})