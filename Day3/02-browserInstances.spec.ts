import {chromium, firefox, test } from "@playwright/test";
test(`Test to launch a browser`, async () => {
    
    //Create a browser instance
    const browser1 = await chromium.launch({headless: false, channel: 'chrome'});
    const browser2 = await firefox.launch({headless: false, channel: 'firefox'});
    
    //create a browser context
    const context1 = await  browser1.newContext();
    const context2 = await browser2.newContext();
    
    //create a new page
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    
    //Load the URLs
    await page1.goto("https://redbus.in/");
    await page1.waitForTimeout(2000);
    await page2.goto("https://flipkart.com/");
    await page2.waitForTimeout(2000);
    
    //Get the URL & title of the page
    
    const url1 = await page1.url();
    const title1 = await page1.title();
    console.log(`The URL of the page is ${url1}`);
    console.log(`The title of the page is ${title1}`);
    
    const url2 = await page2.url();
    const title2 = await page2.title();
    console.log(`The URL of the page is ${url2}`);
    console.log(`The title of the page is ${title2}`);
    
});