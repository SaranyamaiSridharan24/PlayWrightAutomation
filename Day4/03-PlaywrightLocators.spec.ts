import test from "@playwright/test";
test(`SalesForce Login`, async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    //locate and fill the username
    await page.locator(`#username`).fill("ravindran.ramdas@testleaf.com");

    //to enter the password
    await page.locator(`#password`).fill("Ravitest#1432");

    //to click on login button
    await page.locator(`#Login`).click();
    await page.waitForTimeout(2000);

    await page.getByTitle("App Launcher",{exact:true}).click();
    
    await page.getByRole("button",{name:"View All"}).click();

    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Search apps or items...").fill("Service");





})