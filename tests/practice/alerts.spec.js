const { test, expect } = require('@playwright/test');


// Normal alert
test.skip('Normal Alert', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Lets write the dialouge window handler
    // This is required to be declared before we click on any button that triggers the dialouge
    page.on('dialog', async (dialog) =>{

            expect(dialog.type()).toContain('alert');
            console.log(dialog.message())
            expect(dialog.message()).toContain('I am an alert box!');

            await dialog.accept();  // this is teh method the closes the dailog, you won't even see the popup
    })

    const simpleAlert = page.locator('#alertBtn');
    await simpleAlert.click();
    



    await page.waitForTimeout(4000);
    
});


// Confirmation alert
test.skip('Alert with Ok/Cancel buttton', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // .accept() for ok button
    // .dissmiss() for cancel button

    page.on('dialog', async (dialog) =>{

            expect(dialog.type()).toContain('confirm');
            console.log(dialog.message())
            expect(dialog.message()).toContain('Press a button!');

            // await dialog.accept();  // to click on ok button
            await dialog.dismiss(); // to click on cancel button
    })

    const confirmAlert = page.locator('#confirmBtn');
    await confirmAlert.click();

    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    console.log("Yay we clicked on CANCEL");
    



    await page.waitForTimeout(4000);
    
});


// Prompt Dialog
// These dialog has an input textbox
// But, we can only pass the input while accepting so .accept('my name');

test('prompt accept input', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // .accept() for ok button
    // .dissmiss() for cancel button

    page.on('dialog', async (dialog) =>{

            await expect(dialog.type()).toContain('prompt');
            console.log('Its prompt type dialog box');
            console.log(dialog.message())
            await expect(dialog.message()).toContain('Please enter your name:');

            await expect(dialog.defaultValue()).toContain('Harry Potter');
            console.log('The default val was Harry Potter');

            await dialog.accept('Amit');

            // await dialog.accept();  // to click on ok button
            // await dialog.dismiss(); // to click on cancel button
    })

    const promptAlert = page.locator('#promptBtn');
    await promptAlert.click();

    await expect(page.locator('#demo')).toHaveText('Hello Amit! How are you today?');
    console.log("We replaced Harrry Potter with Amit");
    



    await page.waitForTimeout(4000);
    
});