# RAVN QA Capstone - Karla Murillo

## Project Overview

Automated testing suite for Conteo Landing Page. This project covers the Contact Form Submission journey with comprehensive test automation using Playwright, including responsive design and accessibility testing.

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

\`\`\`bash
npm install
npx playwright install

\`\`\`

## Running Tests

\`\`\`bash

# Run all tests

npm test

# Run in headed mode

npm test -- --headed

# Run specific test file

npm test tests/contact-section.spec.ts

# Run on specific device

npm test -- --project=mobile
npm test -- --project=iphone

# Run on specific browser

npm test -- --project=chromium #Chrome or Microsoft Edege
npm test -- --project=firefox #Mozilla Firefox

# View HTML report

npx playwright show-report
\`\`\`

## Project Structure

```
conteo-playwright/
│
├── .github/
│ └── workflows/
│ └── ci.yml # GitHub Actions configurations
│
├── pages/ # Page Objects
│ ├── BasePage.js # Common Methods (navigate, waitFor, click button, fill fields)
│ └── HomePage.js # Common Methods within Home Page (Open, navigate to Section)
│ └── ContactPage.js # Contact Section Actions
│
├── tests/ # Test files
│ ├── contact-section.spec.js/
│
├── fixtures/
│ └── testData.js # Valid, invalid, boundary inputs
│
├── selectors/
│ └── dataSelectors.js # Selectors Management
│
├── utils/
│ └── helpers.js # Reusable functions (viewports)
│
├── playwright.config.js # Browsers, baseURL, viewports, reporters
├── package.json
└── README.md
```
## Test Coverage

- 8 automated tests
- Covers critical user journey: [Contact Form Submission / Navigation / Responsive Design / Accessibility]
- Cross-browser testing: Chromium, Firefox
- Cross-device testing: Desktop, Tablet, Mobile
- Accessibility: Keyboard navigation, screen reader compatibility

## CI/CD

Tests run automatically on every push via GitHub Actions.
View results:

## Author

Karla Elizabeth Murillo Urrutia - RAVN QA Nerdery Capstone 2026
