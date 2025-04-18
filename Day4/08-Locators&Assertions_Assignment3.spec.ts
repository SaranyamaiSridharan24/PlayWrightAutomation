import {chromium, expect, test } from "@playwright/test";
import { clear } from "console";
test(`Test to launch a browser`, async () => {
    
    //Create a browser instance
    const browser = await chromium.launch({headless: false, channel: 'chrome'});

    //create a browser context
    const context = await  browser.newContext();
    
    //create a new page
    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/?locale=in");
    await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com");
    await page.getByLabel("Password").fill("Ravitest#1432");
    await page.locator(`//input[@id='Login']`).click();
    await page.waitForTimeout(3000);
    const title = await page.title();
    console.log(`The title of the page is : ${title}`);
    await expect(title).toContain("Lightning Experience");
    const url = await page.url();
    console.log(`The URL of the page is : ${url}`);
    await expect(url).toMatch("https://testleaf22-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

    await page.locator(".slds-icon-waffle").click();
    await page.getByText("View All").click();
    await page.getByPlaceholder("Search apps or items...").fill("service");
    await page.locator(`//p[contains(text(),'Manage customer service with accounts, contacts, cases, and more')]`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//a[@href='/lightning/o/Account/home']`).click();
    await page.locator(`//div[contains(text(),'New')]`).click();
    await page.locator(`//input[@name='Name']`).fill("Saranya");
    await page.locator(`//button[@name='SaveEdit']`).click();
    await page.waitForTimeout(2000);
    await expect(page.locator(`.forceVisualMessageQueue`)).toContainText("created");



 });


