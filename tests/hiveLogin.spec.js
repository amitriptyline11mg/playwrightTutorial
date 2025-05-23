
const { test, expect } = require('@playwright/test');


test.describe.serial('Hive Workflow', () => {
  let page; // Declare page at the group level

  test.beforeAll(async ({ browser }) => {
    // Launch the browser once for the entire group
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test('Hive Login', async () => {

    await page.goto('https://team.testhivelearning.com/login');
    // amit.rawat+01@hivelearning.com / Apr@1404

    const email = page.locator('#email');
    const password = page.locator('#password');
    const SignInBtn = page.locator('//button[@data-insight-subject = "SignIn"]');


    await email.fill('amit.rawat+01@hivelearning.com');
    await password.fill('Apr@1404');
    await SignInBtn.click();

    // Assertions:
    await expect(page).toHaveURL('https://team.testhivelearning.com/home');
    const currentURL = page.url()
    console.log('Log in was sucesfull, we are at:', currentURL);

    await page.waitForTimeout(4000);

  });

  test('Create post', async () => {
    // Assuming you are already logged in due to the serial execution
    await page.click('//div[@aria-label= "Social Feed"]');
    await page.click('//button[@data-insight-subject= "OpenPostModal"]'); // Click on post box
    console.log('Selected the post modal');

    const postBox = await page.locator(('.react-select__input-container'))
    await postBox.click(); // Clicking the dropdown
    await page.waitForTimeout(2000);
    // await page.locator('#group-select-input').fill('17th');


    // await page.pause();
    await page.waitForTimeout(2000);


    // await page.getByRole('option', { name: '17th april' }).click();



    // Let's select the post
    const groups = await page.$$('//div[@class="react-select__menu-list css-qr46ko"]//div')

    for (let group of groups) {
      const gname = await group.textContent();
      // console.log(gname);  // Prints all the groupNames available

      if (gname.includes('17th april')) {  // we can change the group by replacing the group name here
        await group.click()
      }
    }



    // Lets create the post now
    const title = page.getByPlaceholder('Enter a post title (optional)');
    await title.fill('This post was made using automation script');

    const textArea = page.getByPlaceholder('Share something... @mention to notify someone');
    await textArea.fill('Hello from Amit');

    const postBtn = page.locator('//button[@text="Post"]');
    await postBtn.click();

    console.log('Post was sent');

    await expect(page).toHaveURL('https://team.testhivelearning.com/feed');


    await page.waitForTimeout(2000);
  });




  test('Visit your sprint', async () => {

    const menu_home = page.locator('//a[@href="/home"]')
    await menu_home.click()
    // await page.locator('//a[@href="/home"]').click()

    await page.waitForTimeout(5000);

    const top3Sprints = await page.$$('//section[@aria-label="Sprints Summary"]//h3//button');
    
    expect(top3Sprints.length).toBe(3);
    await top3Sprints[2].waitForElementState('visible');
    await top3Sprints[2].click();

    const continueBtn = await page.locator('//a[@data-insight-subject="ViewSprint"]');
    await continueBtn.click();
    expect(page.url()).toContain('https://team.testhivelearning.com/resources');
    console.log('We are on: ', page.url());


    await page.waitForTimeout(3000);
    const breadcrumb_home = page.locator('//a[@data-insight-subject="LearnerBreadcrumbsHome"]');
    await expect(breadcrumb_home).toBeVisible();
    console.log('Breadcrumb Menu is visible, clicked on home');
    await breadcrumb_home.click();

    await page.waitForTimeout(5000);


  });




  test.afterAll(async () => {
    // Close the page and context after all tests in the group
    
    await page.locator('//button[@data-insight-subject="UserPanel"]').click();
    await page.locator('//button[@data-insight-subject="SignOut"]').click();
    console.log('Log out was successful');
    await page.waitForTimeout(2000);
    await page.context().close();
  });
});

