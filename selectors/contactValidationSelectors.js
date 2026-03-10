
const contactValidationSelectors = {
    
        success: (page) => page.getByRole("alert").filter({ hasText: "✓ Message sent! We'll get back to you soon." }),
        errorName: (page) => page.getByRole("alert").filter({ hasText: "Name is required." }),
        errorEmail: (page) => page.getByRole("alert").filter({ hasText: "Email is required." }),
        errorTopic: (page) => page.getByRole("alert").filter({ hasText: "Please select a topic." }),
        errorMessage: (page) => page.getByRole("alert").filter({ hasText: "Message is required." }),
   
}

module.exports = { contactValidationSelectors }