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
    await page.locator(`//span/p[contains(text(),'Sales')]/following::p[contains(text(),'Manage your sales process with accounts, leads, opportunities, and more')]`).click();
    await page.waitForTimeout(2000);

    await page.locator(`//a[@href='/lightning/o/Lead/home']/span[contains(text(),'Leads')]`).click();
    await page.locator(`//div[contains(text(),'New')]`).click();
    const dropdownValue = await page.locator(`//button[@id='combobox-button-678']`);
    await dropdownValue.selectOption({value:"Mr"});
    
    await page.getByPlaceholder("Last Name").fill("TS");
    await page.locator(`//input[@name='Company']`).fill("MLPL");

    await page.locator(`//button[@name='SaveEdit']`).click();
    await page.waitForTimeout(2000);
    await expect(page.locator(`.forceVisualMessageQueue`)).toContainText("created");
    

})
