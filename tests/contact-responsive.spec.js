import { test, expect}  from "@playwright/test";
import { PageManager } from "../pages/PageManager.js";
import { skipIfNot } from "../utils/helpers.js" ;

let pageManager, home, contact;

  test.beforeEach( async ({ page }) => {
    skipIfNot(test, "iphone")
    pageManager = new PageManager(page);
    home = pageManager.getHomePage();
    contact = pageManager.getContactPage();
    await home.open();
    
  });
 
  test("TC01 - Navigation and Contact Form visible on iphone", async() => {
    
     await contact.scrollToElement(contact.contactForm);
     expect(await contact.isVisible(contact.contactForm)).toBeTruthy();
    })

test.beforeEach( async ({ page }) => {
    skipIfNot(test, "android")
    pageManager = new PageManager(page);
    home = pageManager.getHomePage();
    contact = pageManager.getContactPage();
    await home.open();
    
  });
 
  test("TC02 - Navigation and Contact Form visible on iphone", async() => {
    
     await contact.scrollToElement(contact.contactForm);
     expect(await contact.isVisible(contact.contactForm)).toBeTruthy();
    })

  
  


  
