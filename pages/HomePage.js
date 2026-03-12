import { homeSelectors} from "../selectors/homeSelectors.js";
import { BasePage } from "../pages/BasePage.js";
import { contactSelectors } from "../selectors/contactSelectors.js";

export class HomePage extends BasePage {
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

