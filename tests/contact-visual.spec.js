import { test, expect}  from "@playwright/test";
import { homeSelectors } from "../selectors/homeSelectors.js";
import AxeBuilder from "@axe-core/playwright";
import { PageManager } from "../pages/PageManager.js";
import { compareOptions, skipIfNot } from "../utils/helpers.js" ;
import { fieldsEmtpy, validData } from "../data/testData.js";
import { contactSelectors } from "../selectors/contactSelectors.js";
import { buildSnapshotName, waitForPageReady } from "../utils/helpers.js";
import { contactValidationSelectors } from "../selectors/contactValidationSelectors.js";

let pageManager, home, contact;


test.describe('Visual regression - Contact Section', () => {
    test.beforeEach( async ({ page}) => {
    pageManager = new PageManager(page);
    home = pageManager.getHomePage();
    contact = pageManager.getContactPage();
    await home.open(page)
    await contact.waitUntilVisible();
    await waitForPageReady(page)
    await page.waitForLoadState("networkidle")
    await page.addStyleTag({
      content: `::-webkit-scrollbar { display: none !important; } * { scrollbar-width: none !important; }`
    })
    }); 


    test("Test-001: Capture contact section screenshot", async ({ page }, testInfo) => {
        const section = homeSelectors.contactContainer(page)
        await page.addStyleTag({content: `header, .navbar {display: none !important;}`
        });
        await section.scrollIntoViewIfNeeded()
        await expect(section).toHaveScreenshot(
            buildSnapshotName("contact_section", testInfo),
            compareOptions()
        );
    });

    test("Test-002: Captures heading - typography and spacing", async ({page}, testInfo) => {
        const heading = homeSelectors.contactSection(page)
        await heading.scrollIntoViewIfNeeded()
        await expect(heading).toHaveScreenshot(
            buildSnapshotName("contact-heading", testInfo),
            compareOptions()
        );
    })

    test("Test-003: Captures form elements with invalid data", async ({page}, testInfo) => {
        await contact.fillAndSubmit(fieldsEmtpy)
        const form = homeSelectors.contactContainer(page)
        await contact.scrollToElement(form)
        await expect(form).toHaveScreenshot(
            buildSnapshotName("contact_form_invalid", testInfo),
            compareOptions()
        );
    })

    test("Test-004: Captures CTA appearence", async ({page}, testInfo) => {

        const button = contactSelectors.sendMessageButton(page)
        await button.scrollIntoViewIfNeeded()
        await expect(button).toHaveScreenshot(
            buildSnapshotName("contact-cta", testInfo),
            compareOptions()
        );
    })

    test("Test-005: Captures form elements with valid data", async ({page}, testInfo) => {
        await contact.fillAndSubmit(validData)
        const form = homeSelectors.contactContainer(page)
        await contact.scrollToElement(form)
        await expect(form).toHaveScreenshot(
            buildSnapshotName("contact_form_valid", testInfo),
            compareOptions()
        );
    })
})