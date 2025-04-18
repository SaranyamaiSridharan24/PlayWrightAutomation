import {chromium, test } from "@playwright/test";
import { clear } from "console";
test(`Test to launch a browser`, async () => {
    
    //Create a browser instance
    const browser = await chromium.launch({headless: false, channel: 'chrome'});

    //create a browser context
    const context = await  browser.newContext();
    
    //create a new page
    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`//input[@id='username']`).fill("demosalesmanager");
    await page.locator(`//input[@id='password']`).fill("crmsfa");
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`//a[contains(text(),'CRM')]`).click();

    await page.locator(`//a[contains(text(),'Leads')]`).click();
    await page.locator(`//a[contains(text(),'Create Lead')]`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill("TCS");
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill("Saranya");
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill("TS");
    await page.locator(`.smallSubmit`).click();
    await page.locator(`//a[contains(text(),'Edit')]`).click();
    await page.waitForTimeout(2000);
    //await page.locator(`updateLeadForm_companyName`).fill(" ");
    await page.locator(`//input[@id='updateLeadForm_companyName']`).fill("MLPL");
    await page.locator(`//input[@value='Update']`).click();
    await page.waitForTimeout(2000);   


    
});