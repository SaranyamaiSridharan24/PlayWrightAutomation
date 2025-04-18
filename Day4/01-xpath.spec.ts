import { test } from "@playwright/test";
test(`learn about xpath`, async ({page}) => {

//Load the URL in the browser
await page.goto("http://leaftaps.com/opentaps/control/main");

//identifying web element = locate the element and fill the data
await page.locator(`//input[@id='username']`).fill("demoSalesManager");

//locate the password field and fill the data
await page.locator(`//input[@id='password']`).fill("crmsfa");

await page.waitForTimeout(2000);
//locate the submit button and click
await page.locator(`//input[@class='decorativeSubmit']`).click();

//print the title of the page
const title = await page.title();
console.log(title);

//navigating to next tab
await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.waitForTimeout(2000);

//clicking on create lead
await page.locator(`//a[contains(text(),'Create Lead')]`).click();

//entering the fields
await page.locator(`//input[@id='createLeadForm_companyName']`).fill("MBB Labs Pvt Ltd");
await page.locator(`//input[@id='createLeadForm_parentPartyId']`).fill("100");
await page.locator(`//input[@id='createLeadForm_firstName']`).fill("Saranya");
await page.locator(`//input[@id='createLeadForm_lastName']`).fill("Sridharan");
await page.waitForTimeout(2000);






})