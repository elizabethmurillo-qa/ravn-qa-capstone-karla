const { homeSelectors} = require("../selectors/homeSelectors");
const { BasePage } = require("./BasePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.mainNavigation = homeSelectors.mainMenu(this.page)
        this.contactNavLink = homeSelectors.contactLink(this.page)
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