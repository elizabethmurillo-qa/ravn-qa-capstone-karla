const { test, expect}  = require("@playwright/test");
const { PageManager } = require("../pages/PageManager.js");
const { skipIfNot } = require("../utils/helpers.js");
const {
  TOPICS, validData, fieldsEmtpy, fieldsWithWhitespaces, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength
} = require("../data/testData.js");
let pageManager, home, contact;

  test.beforeEach( async ({ page }) => {
    skipIfNot(test, "firefox")
    pageManager = new PageManager(page); 
    home = pageManager.getHomePage();
    contact = pageManager.getContactPage();
    await home.open(page);
    
  })

  test("TC01-Navigate to Contact Section", async({page}) => {
      await home.goToContactSection(page); 
      expect (await home.isNavMenuVisible()).toBeTruthy();
    })

  test("TC02 - Submit form across browser - Firefox ",async () => {
    await contact.fillAndSubmit(validData);
    expect(await contact.isSuccessMessageVisible()).toBeTruthy();

  })