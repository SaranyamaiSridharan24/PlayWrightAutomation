import {chromium, test } from "@playwright/test";
import { clear } from "console";
test(`Test to launch a browser`, async () => {
    
    //Create a browser instance
    const browser = await chromium.launch({headless: false, channel: 'chrome'});

    //create a browser context
    const context = await  browser.newContext();
    
    //create a new page
    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com");
    await page.getByLabel("Password").fill("Ravitest#1432");
    await page.locator(`//input[@id='Login']`).click();
    const title = await page.title();
    const url = await page.url();
    // await page.getByTitle(title,{exact:true});
    // await page.url(url,{exact:true});




})