const { dataSelectors} = require("../selectors/dataSelectors");
const { BasePage } = require("./BasePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.mainNavigation = dataSelectors.navigation.selectorNavigation(this.page)
        this.contactNavLink = dataSelectors.navigation.selectorContactLink(this.page)
    }

    async open() {
        await this.navigateTo("/");
    }

    async isNavMenuVisible() {
        return await this.isVisible(this.mainNavigation);
    }   

    async goToContactSection() {
        await this.clickElement(this.contactNavLink);
    }

}

module.exports = { HomePage }; 