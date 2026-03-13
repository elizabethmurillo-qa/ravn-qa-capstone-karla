import { test, expect}  from "@playwright/test";
import { PageManager } from "../pages/PageManager.js";
import { skipIfNot } from "../utils/helpers.js" ;
import {
  validData, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength
} from "../data/testData.js";

let pageManager, home, contact;


  test.beforeEach( async ({ page}) => {
    skipIfNot(test, "chromium")
    pageManager = new PageManager(page);
    home = pageManager.getHomePage();
    contact = pageManager.getContactPage();
    await home.open(page);
  });

  test("TC01-Navigate to Contact Section", async({page}) => {
    await home.goToContactSection(page); 
    expect (await home.isNavMenuVisible()).toBeTruthy();
  })

  test("TC02 - Submit form with valid data", async () => {
    await contact.fillAndSubmit(validData);
    expect(await contact.isSuccessMessageVisible()).toBeTruthy();
  })

  test("TC03 - Empty fields", async () => {
    await contact.clickElement(contact.sendMessageButton);
    for (const error of Object.values(contact.errors)) {
      await expect(error).toBeVisible()
    }
  })
  
  test("TC04 - invalid Email", async () => {
    await contact.fillAndSubmit(invalidEmailFormat);
    expect( await contact.validateErrorVisible("email")).toBeVisible();
    
  })

  test("TC05 - Name Field only with numbers", async () => {
    await contact.fillAndSubmit(fieldNameWithNumbers);
    expect( await contact.validateErrorVisible(["name"])).toBeVisible();
  })

  test("TC06 - Name field without length limit", async () => {
    await contact.fillAndSubmit(invalidNameLength);
    expect( await contact.validateErrorVisible(["name"])).toBeVisible();
  })   
