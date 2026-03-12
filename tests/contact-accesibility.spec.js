import { test, expect}  from "@playwright/test";
import { homeSelectors } from "../selectors/homeSelectors.js";
import AxeBuilder from "@axe-core/playwright";
import { PageManager } from "../pages/PageManager.js";
import { skipIfNot } from "../utils/helpers.js" ;
import { a11yFinalReport, allResultsTests, } from "../utils/helpers.js";

let pageManager, home, contact;

test.beforeEach( async ({ page}) => {
    skipIfNot(test, "chromium")
    pageManager = new PageManager(page);
    home = pageManager.getHomePage();
    contact = pageManager.getContactPage();
    await home.open(page);
    await home.goToContactSection(page); 
  });

    test("Test-001: Contact form mush use valid ARIA attributes", async ({page}) => {
        const a11y = await new AxeBuilder({page})
        .include(homeSelectors.contactA11y)
        .withRules([
            'aria-valid-attr','aria-required-attr', 'aria-allowed-attr'
        ]).analyze()

        allResultsTests(a11y)
        expect(a11y.violations).toEqual([])
    })

    test("Test-002: Contact form inputs and button must have labels", async ({page}) => {
        const a11y = await new AxeBuilder({page})
        .include(homeSelectors.contactA11y)
        .withRules([
            'label', 'aria-input-field-name', 'button-name'
        ]).analyze()

        allResultsTests(a11y)
        expect(a11y.violations).toEqual([])
    }) 

    test("Test-003: Contact Form fields must not have multiple labels", async ({page}) => {
      const a11y = await new AxeBuilder({page})
        .include(homeSelectors.contactA11y)
        .withRules([
            'form-field-multiple-labels'
        ]).analyze()

        allResultsTests(a11y)
        expect(a11y.violations).toEqual([])
    })

   test("Test-004: Focus visible", async ({page}) => {
      const a11y = await new AxeBuilder({page})
        .include(homeSelectors.contactA11y)
        .withRules([
            'scrollable-region-focusable',  'focus-order-semantics'
        ]).analyze()

        allResultsTests(a11y)
        expect(a11y.violations).toEqual([])
    })

    test("Test-005: Contact form must meet color contrast and focus accesibility", async({page}) => {
      
      const a11y = await new AxeBuilder({page})
      .include(homeSelectors.contactA11y)
      .withRules([
        'color-contrast'
      ]).analyze();

      allResultsTests(a11y)
      expect(a11y.violations).toEqual([])
    })

    test.afterAll(() => {
      a11yFinalReport()    
  })

    

    
 



