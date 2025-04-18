import {chromium, expect, test } from "@playwright/test";
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

    await page.waitForTimeout(1000);
    await page.locator(`//a[contains(text(),'CRM')]`).click();

    await page.locator(`//a[contains(text(),'Leads')]`).click();
    await page.locator(`//a[contains(text(),'Find Leads')]`).click();
    await page.waitForTimeout(1000);
    await page.locator(`//input[@id='ext-gen248']`).fill("Saranyamai");
    await page.locator(`//button[contains(text(),'Find Leads')]`).click();
    await page.locator(`//a[text()='10908']`).click();
    await page.locator(`//a[contains(text(),'Edit')]`).click();
  
    await page.locator(`//input[@id='updateLeadForm_companyName']`).fill("TCS");

    
    await page.locator(`//input[@id='updateLeadForm_annualRevenue']`).fill("2300000");
    await page.locator(`//input[@id='updateLeadForm_departmentName']`).fill("Testing COE");
    
    await page.locator(`//textarea[@id='updateLeadForm_description']`).fill("This is a playwright automation test script running using typescript");
    await page.locator(`//input[@value='Update']`).click();
    await page.waitForTimeout(2000);
    await expect (page.locator(`//span[@id='viewLead_companyName_sp']`)).toContainText("TCS");
    await expect (page.locator(`//span[@id='viewLead_departmentName_sp']`)).toHaveText("Testing COE");
    await expect (page.locator(`//span[@id='viewLead_annualRevenue_sp']`)).toHaveText("$2,300,000.00");
    await expect (page.locator(`//span[@id='viewLead_description_sp']`)).toContainText("playwright");

});