// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  testDir: './tests',
  snapshotPathTemplate: '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://conteo-web-app.vercel.app',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    screenshot: 'only-on-failure',
    video: "retain-on-failure",

    /* Normalize font rendering across Windows and Linux to prevent
       visual snapshot dimension mismatches caused by OS-level font hinting */
    launchOptions: {
      args: [
        '--font-render-hinting=none',
        '--disable-font-subpixel-positioning',
      ]
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      testMatch: ['**/contact-functional.spec.js', '**/contact-accesibility.spec.js', '**/contact-visual.spec.js'],
      use: { browserName: 'chromium', viewport: { width: 1920, height: 1080}},
    },

    {
      name: 'firefox',
      testMatch: ['**/contact-cross-browser.spec.js', '**/contact-visual.spec.js'],
      use: { browserName: 'firefox', viewport: { width: 1920, height: 1080}},
    },

    /* Test against mobile viewports. */
    {
      name: 'iphone',
      testMatch: ['**/contact-responsive.spec.js', '**/contact-visual.spec.js'],
      use: { browserName: 'chromium', viewport: {width: 375, height: 667}}
    },
    {
      name: 'android',
      testMatch: ['**/contact-responsive.spec.js', '**/contact-visual.spec.js'],
      use: { browserName: 'chromium', viewport: {width: 360, height: 640}}
    },

    /* Test against tablet viewports. */

    {
      name: 'iPad',
      testMatch: ['**/contact-visual.spec.js'],
      use: { browserName: 'chromium', viewport: {width: 768, height: 1024} },
    },

  ],
});

