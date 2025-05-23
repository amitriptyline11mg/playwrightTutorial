// Reference: https://playwright.dev/docs/api/class-filechooser

const { test, expect } = require('@playwright/test');
const path = require('path');

test('Upload a single file', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    /*
        // Upload Single File
    
        // const singleFileBtn = await page.locator('#singleFileInput');
        // await singleFileBtn.setInputFiles('C:\\Users\\Amit Rawat\\JavaScript\\PlaywrightAutomation\\tests\\fileUploads\\PDFEurus.pdf');
        // console.log('File was uploaded successfully');
    
        // Method 2
        // import the path using const path = require('path'); above
    
        // const filePath = path.join(__dirname, 'tests', 'fileUploads', 'PDFEurus.pdf');
        const filePath = path.join(__dirname, 'fileUploads', 'PDFEurus.pdf');
    
        const singleFileBtn = await page.locator('#singleFileInput');
    
        await singleFileBtn.setInputFiles(filePath);
    
    */

})
// If we copy relative path of the file the / in path are forwards
// If we select normal path of the file the \ in path is backwards, use \\ in that case
// Upload multiple file

test.only('Upload multiple files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php/');

    // Locate & upload the files
    await page.locator('#filesToUpload').setInputFiles(['tests/fileUploads/PDFEurus.pdf', 'tests/fileUploads/snack.png'])


    // Assertion
    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('PDFEurus.pdf');
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('snack.png');

    console.log('Both the files were uploaded successfully');

    await page.waitForTimeout(3000);

    // If we wanna remove the file
    // Do the same as upload, just don't pass any file this time
    await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
    console.log("No files to display man");

    await page.waitForTimeout(5000);
})



