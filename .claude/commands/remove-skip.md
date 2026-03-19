Think carefully before planning.

@utils/helpers.js @tests/contact-responsive.spec.js @tests/contact-cross-browser.spec.js @tests/contact-functional.spec.js @tests/contact-accesibility.spec.js @playwright.config.js

Analyze all test files that use skipIfNot() and remove it completely so no tests are skipped in the final report.

Consider:

- Which tests use skipIfNot() and why (device-specific, browser-specific)
- Whether the logic should move to playwright.config.js project filters
- Whether test.skip() with conditions is a better alternative
- Impact on CI/CD pipeline and GitHub Actions results

Do not make any changes yet. Only provide the plan, then wait for approval.
