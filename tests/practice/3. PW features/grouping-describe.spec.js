const { test, expect } = require('@playwright/test')

/*
test('Test 01', async ({page})=>{
    console.log('This is test 1.....!')
})

test('Test 02', async ({page})=>{
    console.log('This is test 2.....!')
})

test('Test 03', async ({page})=>{
    console.log('This is test 3.....!')
})

test('Test 04', async ({page})=>{
    console.log('This is test 4.....!')
})
    */

// We can put the tests inside a group, here's is hot to create a group

test.describe('Group 01', () => {

    console.log("Hello from group 01");
    
    test('Test 01', async ({ page }) => {
        console.log('This is test 1.....!')
    })

    test('Test 02', async ({ page }) => {
        console.log('This is test 2.....!')
    })
})


test.describe('Group 02', () => {

    console.log("Hello from group 02");

    test('Test 03', async ({ page }) => {
        console.log('This is test 3.....!')
    })

    test('Test 04', async ({ page }) => {
        console.log('This is test 4.....!')
    })
})
    


// We can also add hooks to the group

/*
test.beforeAll(async()=>{
    console.log("Thank you for the food");
})

test.beforeEach( async()=>{
    console.log("I am starting");
})

test.afterEach(async()=>{
    console.log("I am finishing");
})

test.afterAll(async ()=>{
    console.log("I am Dead");
})


// Can use .skip if we wanna skip this
test.describe.skip('Group 01', () => {
    
    test('Test 01', async ({ page }) => {
        console.log('This is test 1.....!')
    })

    test('Test 02', async ({ page }) => {
        console.log('This is test 2.....!')
    })
})


// Can use .only if we wanna execute only and only this group of tests
test.describe('Group 02', () => {

    test('Test 03', async ({ page }) => {
        console.log('This is test 3.....!')
    })

    test('Test 04', async ({ page }) => {
        console.log('This is test 4.....!')
    })
})

*/