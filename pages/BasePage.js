const { expect } = require("@playwright/test");

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async waitForElement(locator) {
        await locator.waitFor({ state: "visible"})
    }

    async clickElement(locator) {
        await this.waitForElement(locator);
        await locator.click();
    }

    async fillFields(locator, value) {
        await locator.clear();
        await locator.fill(value);
    }

    async isVisible(locator) {
        return await locator.isVisible()
    }

    async scrollToElement(locator) {
        await locator.scrollIntoViewIfNeeded()
    }

}
//corta la base page 
//getElementBy
//
module.exports = {BasePage}