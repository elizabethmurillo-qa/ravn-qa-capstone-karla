const { HomePage }      = require("../pages/HomePage.js");
const { ContactPage }   = require("../pages/ContactPage.js");

class PageManager {
    constructor(page) {
        this.page = page;

        this.homePage = new HomePage(this.page);
        this.contactPage = new ContactPage(this.page);
    }

    getHomePage() {
        return this.homePage
    }

    getContactPage() {
        return this.contactPage
    }
}

module.exports = { PageManager }