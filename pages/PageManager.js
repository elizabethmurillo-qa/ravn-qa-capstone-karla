import { HomePage } from "../pages/HomePage.js";
import { ContactPage } from "../pages/ContactPage.js";

export class PageManager {
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

