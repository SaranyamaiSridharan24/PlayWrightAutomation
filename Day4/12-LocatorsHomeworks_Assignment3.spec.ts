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
    await page.locator(".slds-icon-waffle").click();
    await page.locator(`//button[contains(text(),'View All')]`).click();

    await page.locator(`//p[contains(text(),'Individuals')]`).click();
    await page.locator(`//div[@title='New']/parent::a[1]`).click();
    await page.getByPlaceholder(`Last Name`).fill("Sridharan");
    const lastName = await page.locator(`//span[contains(text(),'Save')]/parent::button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`);
    await lastName.click();
    await page.waitForTimeout(2000);
   // await expect(lastName).toContainText("Sridharan");

    await page.locator(`//a[@href='/lightning/r/0PKNS000000I7JB4A0/view']`).click();
    


})