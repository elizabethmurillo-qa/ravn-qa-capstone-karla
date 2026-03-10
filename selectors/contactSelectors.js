const contactSelectors = {
    
        name: (page) => page.getByRole("textbox", { name: "Name" }),
        email: (page) => page.getByRole("textbox", { name: "Email" }),
        topic: (page) => page.getByRole("combobox", { name: "Topic" }),
        message: (page) => page.getByRole("textbox", { name: "Message" }),
    
        sendMessageButton: (page) => page.getByRole("button", { name: "Send Message" })
    
}

module.exports = { contactSelectors }