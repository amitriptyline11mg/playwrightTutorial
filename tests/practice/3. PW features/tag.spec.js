// https://playwright.dev/docs/test-annotations

const { test, expect } = require('@playwright/test');

test('test1 @sanity', async ({ page }) => {
    console.log('This is Test1');
    // npx playwright test --tag --grep '@sanity'
});

test('test2 @sanity', async ({ page }) => {
    console.log('This is Test2');
});

test('test3 @regression', async ({ page }) => {
    console.log('This is Test3');
    // npx playwright test --tag --grep '@regression'
});

test('test4 @regression', async ({ page }) => {
    console.log('This is Test4');
});

test('test5 @sanity @regression', async ({ page }) => {
    console.log('This is Test5');
    // npx playwright test --tag --grep '@sanity @regression'
    // npx playwright test --tag --grep '@sanity' --grep-invert 'regression'
});

/*

 Use commands: 
 - npx playwright test --tag --grep '@sanity'    (3 tests)
 - npx playwright test --tag --grep '@regression' (3 tests) 
 - npx playwright test --tag --grep '@sanity @regression' (1 test)
 - npx playwright test --tag --grep '@sanity' --grep-invert 'regression' (excludes regression test)

 */