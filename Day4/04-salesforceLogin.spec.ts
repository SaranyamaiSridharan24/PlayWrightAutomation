import {chromium, test } from "@playwright/test";
test(`Test to launch a browser`, async () => {
    
    //Create a browser instance
    const browser = await chromium.launch({headless: false, channel: 'chrome'});

    //create a browser context
    const context = await  browser.newContext();
    
    //create a new page
    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/");
    await page.waitForTimeout(2000);

    await page.locator(`//input[@id='username']`).fill("saransanand919-pbxx@force.com");
    await page.locator(`//input[@id='password']`).fill("Feb@1988");

    await page.waitForTimeout(2000);
    await page.locator(`//input[@id='Login']`).click();
    await page.waitForTimeout(10000);
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    const url = await page.url();
    console.log(`The URL of the page is ${url}`);
    await page.close();

});
    
