import { test, expect}  from "@playwright/test";
import { PageManager } from "../pages/PageManager.js";
import { skipIfNot } from "../utils/helpers.js" ;
import {
  TOPICS, validData, fieldsEmtpy, fieldsWithWhitespaces, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength
} from "../data/testData.js";

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