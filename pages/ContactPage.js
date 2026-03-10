import { expect } from "@playwright/test"
import { homeSelectors} from"../selectors/homeSelectors.js";
import { contactValidationSelectors } from "../selectors/contactValidationSelectors.js";
import { BasePage } from "../pages/BasePage.js";
import { contactSelectors} from "../selectors/contactSelectors.js";

const home =  homeSelectors ;
const contact = contactSelectors;
const validations = contactValidationSelectors

export class ContactPage extends BasePage {
    constructor(page) {
        super(page);

        this.contactForm = home.contactSection(this.page);
        this.nameInput = contact.name(this.page);
        this.emailInput = contact.email(this.page);
        this.topicDropdown = contact.topic(this.page)
        this.messageInput = contact.message(this.page)

        this.sendMessageButton = contact.sendMessageButton(this.page)

        this.successMessage = validations.success(this.page)

        this.errors = {
            name: validations.errorName(this.page),
            email: validations.errorEmail(this.page),
            topic: validations.errorTopic(this.page),
            message: validations.errorMessage(this.page)
        }
        //data static 
    }

    async waitUntilVisible() {
        await this.waitForElement(this.contactForm)
    }

    async getTitle() {
        return await this.page.title();
    }

    
    async selectTopic(topic) {
        await this.waitForElement(this.topicDropdown);
        await this.topicDropdown.selectOption({ label: topic })
    }
    async getSelectedOption() {
        return await this.topicDropdown.inputValue();
    }
    async isTopicAvailable(topic) {
        const options = await this.topicDropdown.locator("option").allTextContents();
        return options.includes(topic);
    }

    async fillAndSubmit(data) {
        await this.fillFields(this.nameInput, data.name);
        await this.fillFields(this.emailInput, data.email);
        if (data.topic) await this.selectTopic(data.topic);
        await this.fillFields(this.messageInput, data.message);
        await this.clickElement(this.sendMessageButton)
    }

    async isSuccessMessageVisible() {
        this.waitForElement(this.successMessage)
        return await this.isVisible(this.successMessage);
    }

    async validateErrorVisible(errorKey) {
        return await this.errors[errorKey];    
    }

}



