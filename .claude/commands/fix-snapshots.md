Think carefully before planning.

@tests/contact-visual.spec.js @utils/helpers.js @playwright.config.js

Analyze all visual test files and fix snapshot naming issues:

1. Find any test using this pattern:
   const screenshot = await locator.screenshot()
   await expect(screenshot).toMatchSnapshot()

   Replace with:
   await expect(locator).toHaveScreenshot(name, options)

2. Verify snapshotPathTemplate is set in playwright.config.js to:
   '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-proojectName}{ext}'
   This removes OS suffix (-win32, -linux) from snapshot filenames.

3. Preserve existing helpers: buildSnapshotName() and compareOptions()

After fixing remind the user to run:
npx playwright test contact-visual.spec.js --update-snapshots
