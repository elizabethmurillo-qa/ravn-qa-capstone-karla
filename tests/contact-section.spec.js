const { test, expect } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage.js");
const { ContactPage } = require("../pages/ContactPage.js");
const { skipIfNot } = require("../utils/helpers.js");
const {
  validData, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength
} = require("../fixtures/testData.js");

test.describe("Functional Suite", () => {
  test.beforeEach(async ({ page }) => {
    skipIfNot("chromium");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
  });

  test("TC01 - Navigate to Contact Section", async ({ page }) => {
    const homePage = new HomePage(page);
    expect(await homePage.isNavMenuVisible()).toBeTruthy();
  });

  test("TC02 - Submit form with valid data", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillAndSubmit(validData);
    expect(await contactPage.isSuccessMessageVisible()).toBeTruthy();
  });

  test("TC03 - Empty fields validation", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.clickElement(contactPage.sendMessageButton);
    expect(await contactPage.isErrorNameVisible()).toBeTruthy();
    expect(await contactPage.isErrorEmailVisible()).toBeTruthy();
    expect(await contactPage.isErrorTopicVisible()).toBeTruthy();
    expect(await contactPage.isErrorMessageVisible()).toBeTruthy();
  });

  test("TC04 - Invalid Email format", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillAndSubmit(invalidEmailFormat);
    await expect(contactPage.errorEmail).toBeVisible();
  });

  test("TC05 - Name field with numbers", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillAndSubmit(fieldNameWithNumbers);
    await expect(contactPage.errorName).toBeVisible();
  });

  test("TC06 - Name field exceeding length limit", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillAndSubmit(invalidNameLength);
    await expect(contactPage.errorName).toBeVisible();
  });
});

test.describe("Responsive Design Suite", () => {
  test.beforeEach(async ({ page }) => {
    skipIfNot("iphone");
    const homePage = new HomePage(page);
    await homePage.open();
  });

  test("TC07 - Contact Form visible on Mobile", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.scrollToElement(contactPage.nameInput);
    expect(await contactPage.isVisible(contactPage.nameInput)).toBeTruthy();
  });
});

test.describe("Cross-Browser Suite - Firefox", () => {
  test.beforeEach(async ({ page }) => {
    skipIfNot("firefox");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
  });

  test("TC08 - Submit form works on Firefox", async ({ page, browserName }) => {
    const contactPage = new ContactPage(page);
    await contactPage.fillAndSubmit(validData);
    expect(await contactPage.isSuccessMessageVisible(), `Message not visible on ${browserName}`).toBeTruthy();
  });
});

test.describe("Accessibility Suite", () => {
  test.beforeEach(async ({ page }) => {
    skipIfNot("chromium");
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToContactSection();
  });

  test("TC09 - Contact form has accessible roles and labels", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.topicDropdown).toBeVisible();
    await expect(contactPage.messageInput).toBeVisible();
    await expect(contactPage.sendMessageButton).toBeVisible();

    const labels = ["Name", "Email", "Topic", "Message"];
    for (const labelText of labels) {
      await expect(page.getByLabel(labelText)).toBeVisible();
    }
  });
});
