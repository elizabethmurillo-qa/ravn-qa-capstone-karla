const { test, expect, selectors }  = require("@playwright/test");
const { BasePage }      = require("../pages/BasePage");
const { HomePage }      = require("../pages/HomePage");
const { ContactPage }   = require("../pages/ContactPage");
const { dataSelectors} = require("../selectors/dataSelectors")
const { skipIfNot } = require("../utils/helpers.js");
const {
  TOPICS, validData, fieldsEmtpy, fieldsWithWhitespaces, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength
} = require("../fixtures/testData");

test.describe("Functional Suite ", () => {
  test.beforeEach( async ({ page, }) => {
    skipIfNot(test, "chromium")
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
  });

  test("TC01-Navigate to Contat Section", async({page}) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
    expect (await homePage.isNavMenuVisible()).toBeTruthy();
  })

  test("TC02 - Submit form with valid data", async ({page}) => {
    const contactpage = new ContactPage(page);
    await contactpage.fillAndSubmit(validData);
    expect(await contactpage.isSuccessMessageVisible()).toBeTruthy();
  })

  test("TC03 - Empty fields", async ({page}) => {
    const contactpage = new ContactPage(page);
    await contactpage.clickElement(contactpage.sendMessageButton);
    expect(await contactpage.isErrorNameVisible()).toBeTruthy();
    expect(await contactpage.isErrorEmailVisible()).toBeTruthy();
    expect(await contactpage.isErrorTopicVisible()).toBeTruthy();
    expect(await contactpage.isErrorMessageVisible()).toBeTruthy()
  })
  
  test("TC04 - invalid Email", async ({page}) => {
    const contactpage = new ContactPage(page);
    await contactpage.fillAndSubmit(invalidEmailFormat);
    await expect(contactpage.errorEmail).toBeVisible();
    
  })

  test("TC05 - Name Field only with numbers", async ({page}) => {
    const contactpage = new ContactPage(page);
    contactpage.fillAndSubmit(fieldNameWithNumbers);
    await expect(contactpage.errorName).toBeVisible();
  })

  test("TC06 - Name field without length limit", async ({page}) => {
    const contactpage = new ContactPage(page);
    contactpage.fillAndSubmit(invalidNameLength);
    await expect(contactpage.errorName).toBeVisible()
  })   
})


test.describe(" Responsive Design Suite ", () => {
  test.beforeEach( async ({ page }) => {
    skipIfNot(test, "iphone")
    const homePage = new HomePage(page);
    await homePage.open();
    //await homePage.goToContactSection();
  });
 
  test("TC07 - Navigation and Contact Form visible on Mobile", async({page}) => {
    
    //const context = await browser.newContext({ viewport: { width: 375, height: 667 }})
    //const page = await context.newPage();
    const contactPage = new ContactPage(page);
     await contactPage.scrollToElement(contactPage.nameInput);
    expect(await contactPage.isVisible(contactPage.nameInput)).toBeTruthy();
    })

  })
  
test.describe("Cross-Browser Suite- Firefox", () => {
  test.beforeEach( async ({ page }) => {
    skipIfNot(test, "firefox")
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
  });
  test("TC08 - Navigation and submit form across browser ",async ({ page, browserName}) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillAndSubmit(validData);
    expect(await contactPage.isSuccessMessageVisible(), `Message nor visible on ${browserName}`).toBeTruthy();

  })
})
  
/* 
test.describe("Negative path", () => {
  test.beforeEach( async ({ page, browserName }) => {
    test.skip(browserName !== "chromium")
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
    });  
  test("TC05 - Empty fields", async ({page}) => {
    const contactpage = new ContactPage(page);
    await contactpage.clickElement(contactpage.sendMessageButton);
    expect(await contactpage.isErrorNameVisible()).toBeTruthy();
    expect(await contactpage.isErrorEmailVisible()).toBeTruthy();
    expect(await contactpage.isErrorTopicVisible()).toBeTruthy();
    expect(await contactpage.isErrorMessageVisible()).toBeTruthy()

  })
  
  test("TC06 - invalid Email", async ({page}) => {
    const contactpage = new ContactPage(page);
    await contactpage.fillAndSubmit(invalidEmailFormat);
    await expect(contactpage.errorEmail).toBeVisible();
    
  })
})

test.describe("Edge Cases", () => {
  test.beforeEach( async ({ page, browserName }) => {
    test.skip(browserName !== "chromium")
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
  });

  test("TC07 - Name Field only with numbers", async ({page}) => {
    const contactpage = new ContactPage(page);
    contactpage.fillAndSubmit(fieldNameWithNumbers);
    await expect(contactpage.errorName).toBeVisible();
  })

  test("TC08 - Name field without length limit", async ({page}) => {
    const contactpage = new ContactPage(page);
    contactpage.fillAndSubmit(invalidNameLength);
    await expect(contactpage.errorName).toBeVisible()
  })   
}) */
