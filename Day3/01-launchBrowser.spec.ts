 import { chromium, firefox, test } from "@playwright/test";
 test(`Test to launch a browser`, async () => {
    
//Create a browser instance
const browser = await chromium.launch({headless: false, channel: 'chrome'});

//create a browser context
const context = await  browser.newContext();

//create a new page
const page = await context.newPage();

//Load the URL
await page.goto("http://leaftaps.com/opentaps/control/main");

//Get the URL of the page
const url = page.url();
console.log(`The URL of the page is ${url}`);

 });
