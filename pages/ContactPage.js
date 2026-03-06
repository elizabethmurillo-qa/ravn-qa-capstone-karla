const { expect } = require("@playwright/test")
const { dataSelectors } = require("../selectors/dataSelectors");
const { BasePage } = require("./BasePage")

class ContactPage extends BasePage {
    constructor(page) {
        super(page);

        this.contactSection = dataSelectors.navigation.selectorContactLink(this.page);
        this.nameInput = dataSelectors.fields.selectorName(this.page);
        this.emailInput = dataSelectors.fields.selectorEmail(this.page);
        this.topicDropdown = dataSelectors.fields.selectorTopic(this.page)
        this.messageInput = dataSelectors.fields.selectorMessage(this.page)

        this.sendMessageButton = dataSelectors.button.selectorSendMessageButton(this.page)

        this.successMessage = dataSelectors.success.selectorSuccess(this.page)

        this.errorName = dataSelectors.errors.selectorErrorName(this.page)
        this.errorEmail = dataSelectors.errors.selectorErrorEmail(this.page)
        this.errorTopic = dataSelectors.errors.selectorErrorTopic(this.page)
        this.errorMessage = dataSelectors.errors.selectorErrorMessage(this.page)

        //data static 
    }

    async waitUntilVisible() {
        await this.waitForElement(this.contactSection)
    }

    async getTitle() {
        return await this.page.title();
    }

    //Dropdown manage
    //select topic
    async selectTopic(topic) {
        await this.waitForElement(this.topicDropdown);
        await this.topicDropdown.selectOption({ label: topic })
    }

    //selected option
    async getSelectedOption() {
        return await this.topicDropdown.inputValue();
    }

    //option available
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

    //this assertions on expect on test 
    async isSuccessMessageVisible() {
        this.waitForElement(this.successMessage)
        return await this.isVisible(this.successMessage);
    }

    async isErrorNameVisible() {
        return await this.isVisible(this.errorName);
    }

    async isErrorEmailVisible() {
        return await this.isVisible(this.errorEmail);
    }
    async isErrorTopicVisible() {
        return await this.isVisible(this.errorTopic);
    }

    async isErrorMessageVisible() {
        return await this.isVisible(this.errorMessage);
    }

    /* async getSuccessMessage() {
        return await this.getSuccessMessage(this.successMessage);
    } */

}



module.exports = { ContactPage }