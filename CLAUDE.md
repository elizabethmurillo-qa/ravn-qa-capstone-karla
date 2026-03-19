# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Playwright-based automated test suite for the [Conteo Landing Page](https://conteo-web-app.vercel.app), covering the Contact Form Submission journey. Tests include functional, responsive, accessibility, visual regression, and cross-browser scenarios.

## Commands

```bash
# Install dependencies and browsers
npm install
npx playwright install

# Run all tests (headless)
npx playwright test

# Run with interactive UI
npx playwright test --ui

# Run a single test file
npx playwright test tests/contact-functional.spec.js

# Run a specific test by title
npx playwright test --grep "Test-001: Contact form mush use valid ARIA attributes"

# Run on a specific browser/device project
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=iphone
npx playwright test --project=android
npx playwright test --project=iPad

# Run headed (visible browser)
npx playwright test --headed

# Update visual snapshots
npx playwright test --update-snapshots
```

## Development Notes

- Never use locator.screenshot() + toMatchSnapshot() for visual tests.
  Always use expect(locator).toHaveScreenshot(name, options)
- Always set snapshotPathTemplate in playwright.config.js to
  '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-proojectName}{ext}' to prevent
  OS suffix (-win32, -linux) on snapshot filenames
- Never use skipIfNot() to skip tests. Use playwright.config.js
  project configuration instead. All tests must run without skipped status.

## Architecture

### Page Object Model

- `pages/BasePage.js` — Base class with shared navigation, interaction, and wait methods
- `pages/ContactPage.js` / `HomePage.js` — Page-specific classes extending BasePage
- `pages/PageManager.js` — Factory that instantiates all page objects; injected in `beforeEach`

### Selectors

Kept separate from page objects in
`selectors/`. Use Playwright's
`getByRole()` / `getByLabel()` for accessible locators.
`homeSelectors.js` covers the home page;
`contactSelectors.js` covers the contact form;
`contactValidationSelectors.js` covers error and success message elements.

### Test Data

`data/testData.js` exports pre-built data sets (e.g., `validData`, `fieldsEmpty`, `invalidEmailFormat`) generated with `@faker-js faker`.

### Utilities (`utils/helpers.js`)

- `skipIfNot(testInfo, projectName)` — Skip a test when not running on the specified project (used for device/browser-specific tests)
- `allResultsTests(violations)` — Accumulates axe-core accessibility violations across tests
- `a11yFinalReport()` — Writes the final accessibility HTML report after all tests complete

### Test Files

| File                               | Scope                                                              |
| ---------------------------------- | ------------------------------------------------------------------ |
| `contact-visual.spec.js-snapshots` | Baselines - Visual Testing (TC01–TC05)                             |
| `contact-functional.spec.js`       | Form validation and successful submission (TC01–TC06)              |
| `contact-responsive.spec.js`       | Layout/scrolling on iPhone and Android projects                    |
| `contact-accesibility.spec.js`     | ARIA attributes, labels, color contrast, keyboard focus (axe-core) |
| `contact-cross-browser.spec.js`    | Chromium + Firefox compatibility                                   |
| `contact-visual.spec.js`           | Visual regression via Playwright snapshots                         |

### Playwright Configuration (`playwright.config.js`)

- Base URL: `https://conteo-web-app.vercel.app`
- Projects: `chromium` (1920×1080), `firefox` (1920×1080), `iphone` (375×667), `android` (360×640), `ipad` (768×1024)
- Retries: 2 on CI, 1 locally
- Screenshots/video on failure; trace on first retry

### CI/CD

GitHub Actions workflow in `.github/workflows/` runs the full test suite automatically on push/PR.

```

```
