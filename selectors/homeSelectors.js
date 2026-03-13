
const homeSelectors = {
        mainMenu: (page) => page.getByRole("navigation", { name: "Main navigation" }),
        contactLink: (page) => homeSelectors.mainMenu(page).getByRole("link", { name: "Contact" }),
        contactSection: (page) => page.getByRole('heading', { name: 'Get in Tuch' }),
        contactA11y: '#contact',
        contactContainer: (page) => page.locator('#contact'),
}

export { homeSelectors }