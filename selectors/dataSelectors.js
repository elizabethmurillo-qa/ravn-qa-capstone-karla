const getNavigation = (page) => page.getByRole("navigation", { name: "Main navigation" });
const dataSelectors = {
    fields: {
        selectorName: (page) => page.getByRole("textbox", { name: "Name" }),
        selectorEmail: (page) => page.getByRole("textbox", { name: "Email" }),
        selectorTopic: (page) => page.getByRole("combobox", { name: "Topic" }),
        selectorMessage: (page) => page.getByRole("textbox", { name: "Message" }),
    },

    button: {
        selectorSendMessageButton: (page) => page.getByRole("button", { name: "Send Message" })
    },

    success: {
        selectorSuccess: (page) => page.getByRole("alert").filter({ hasText: "✓ Message sent! We'll get back to you soon." })
    },

    errors: {
        selectorErrorName: (page) => page.getByRole("alert").filter({ hasText: "Name is required." }),
        selectorErrorEmail: (page) => page.getByRole("alert").filter({ hasText: "Email is required." }),
        selectorErrorTopic: (page) => page.getByRole("alert").filter({ hasText: "Please select a topic." }),
        selectorErrorMessage: (page) => page.getByRole("alert").filter({ hasText: "Message is required." }),
    },


    navigation: {
        selectorNavigation: (page) => getNavigation(page),
        selectorContactLink: (page) => getNavigation(page).getByRole("link", { name: "Contact" })
    }
}

module.exports = { dataSelectors }

//estar separados for feature 
//user un metodo para no repetitividad 
//page object manager investigar permitir inicializar todas las pages en un solo archivo 


