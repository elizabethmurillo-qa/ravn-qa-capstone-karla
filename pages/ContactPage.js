const { BasePage } = require("./BasePage")

class ContactPage extends BasePage {
    constructor(page) {
        super(page)

        this.contactSection = 
        this.nameInput
        this.emailInput
        this.topicDropdown
        this.messageInput
        this.sendMessageButton
        this.successMessage
        this.errorMessage
        this.fieldError
    }

    async waitUntilVisible() {
        await this.waitForElement(this.contactSection)
    }

    //Dropdown manage
    //select topic
    async selectTopic(topic) {
        await this.waitForElement(this.topicDropdown);
        await this.topicDropdown.selectOption({ label: topic})
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
        await this.fillFields(this.emailInputInput, data.email);
        if (data.topic) await this.selectTopic(data.topic);
        await this.fillFields(this.messageInput, data.message);
        await this.clickElement(this.sendMessageButtonButton)
    }
    async isSuccessMessageVisible() {
        return await this.isVisible(this.successMessage);
    }

    async isErrorMessageVisible() {
        return await this.isVisible(this.errorMessage);
    }

    async getSuccessMessage() {
        return await this.getText(this.successMessage);
    }

    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }

}

module.exports = { ContactPage}