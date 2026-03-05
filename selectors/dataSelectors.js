const dataSelectors = {
    fields: {
        selectorName: (page) => page.getByRole("textbox", {name: "Name"}),
        selectorEmail: (page) => page.getByRole("textbox", {name: "Email"}),
        selectorTopic: (page) => page.page.getByRole("textbox", {name: "Topic"}),
        selectorMessage: (page) => page.getByRole("textbox", {name: "Message"}),
    },

    button: {
        selectorSendMessageButton: (page) => page.getByRole("button", {name: "Send Message"})
    },

    success: {
        selectorSuccess: (page) => page.getByRole("alert", {name: "✓ Message sent! We'll get back to you soon."})
    },

    errors: {
        selectorErrorName: (page) => page.getByRole("alert", {name: "Name is required."}),
        selectorErrorEmail: (page) => page.getByRole("alert", {name: "Email is required."}),
        selectorErrorTopic: (page) => page.getByRole("alert", {name: "Please select a topic."}),
        selectorErrorMessage: (page) => page.getByRole("alert", {name: "Message is required."}),
    },

    navigation: {
        selectorNavigation: (page) => page.getByRole("navigation", {name: "Main Navigation"}),
        selectorContactLink: (page) => page.getByRole("link", {name: "Contact"})
    }
} 

module.exports = {dataSelectors}

