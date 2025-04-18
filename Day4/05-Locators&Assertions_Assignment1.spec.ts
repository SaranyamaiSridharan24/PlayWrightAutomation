import {chromium, expect, test } from "@playwright/test";
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
    await page.locator(`//a[contains(text(),'Create Lead')]`).click();

    await page.locator(`//input[@id='createLeadForm_companyName']`).fill("CTS");
    await expect(page.locator(`//input[@id='createLeadForm_companyName']`)).toHaveValue("CTS");
    
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill("Saranyamai");
    await expect(page.locator(`//input[@id='createLeadForm_firstName']`)).toHaveValue("Saranyamai");
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill("Sridharan");
    await expect(page.locator(`//input[@id='createLeadForm_lastName']`)).toHaveValue("Sridharan");
    await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill("Mrs.");
    await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill("CPEE");
    await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill("1200000");
    await page.locator(`//input[@id='createLeadForm_departmentName']`).fill("QA");
    await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill("7338323798");
    await page.waitForTimeout(2000);
    await page.locator(`.smallSubmit`).click();
    
    await expect(page.locator(`//span[@id='viewLead_statusId_sp']`)).toHaveText("Assigned");
  


});