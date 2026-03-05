const { BasePage } = require("./BasePage");

class HomePage extends BasePage {
    constrcutor(page) {
        super(page);
        this.navMenu = //locator
        this.contactNavLink = //locator
        this.heroTitle  //locator
    }

    async open() {
        await this.navigateTo("/");
    }

    async goToContactSection() {
        await this.clickElement(this.contactNavLink);
    }

    async isNavMenuVisible() {
        return await this.isVisible(this.navMenu);
    }   
}

module.export = {HomePage};