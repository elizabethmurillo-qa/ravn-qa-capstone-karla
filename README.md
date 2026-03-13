# RAVN QA Capstone - Karla Murillo

## Project Overview

Automated testing for Conteo Landing Page. This project covers the Contact Form Submission journey with comprehensive test automation using Playwright and GitHub Actions including functional, responsive design and cross-browser.

## Prerequisites

- Node.js 18
- npm or yarn

## Installation

npm install
npx playwright install

# Running Tests

## Run all tests

npm test

## Run in headed mode

npm test -- --headed

## Run specific Testt Suite

npx playwright test -g "Functional Suite"

## Run specific test file

npm test tests/contact-section.spec.ts

## Run on specific device

npm test -- --project=mobile
npm test -- --project=iphone

## Run on specific browser

npm test -- --project=chromium #Chrome or Microsoft Edege
npm test -- --project=firefox #Mozilla Firefox

# View HTML report

npx playwright show-report

# Project Structure

```
conteo-playwright/
│
├── .github/
│ └── workflows/
│ └── playwright.yml # GitHub Actions configurations
│
├── pages/ # Page Objects
│ ├── BasePage.js # Common Methods (navigate, waitFor, click button, fill fields)
│ └── HomePage.js # Common Methods within Home Page (Open, navigate to Section)
│ └── ContactPage.js # Contact Section Actions
│ └── PageManager.js # Initilizer class
│
├── tests/ # Test files
│ ├── contact-visual.spec.js-snapshots/    # Visual regression Baselines
│ ├── contact-cross-browser.spec.js/
│ ├── contact-functional.spec.js/
│ ├── contact-responsive.spec.js/
│ ├── contact-visual.spec.js/
│ ├── contact-accesibility.spec.js/
│
├── data/
│ └── testData.js # Valid, invalid, boundary inputs
│
├── selectors/
│ └── contactSelectors.js # form Selectors
│ ├── contactValidationsSelectors.js # errors and sucess selectors
│ ├── homeSelectors.js #navigation selectors
│
├── utils/
│ └── helpers.js # Reusable functions (viewports)
│
├── playwright.config.js # Browsers, baseURL, viewports, reporters
├── package.json
└── README.md
```

# Test Coverage

- 8+ automated tests including functional, responsive, accesibility, visual and cross-browser.
- Covers critical user journey: [Contact Form Submission / Navigation / Responsive Design ]
- Cross-browser testing: Chromium and Firefox
- Cross-device testing: Desktop, Tablet, Mobile

# CI/CD Pipeline

Tests run automatically on every push via GitHub Actions.
View results:

## Author

Karla Elizabeth Murillo Urrutia - RAVN QA Nerdery Capstone 2026
