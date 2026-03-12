import { faker } from "@faker-js/faker"
import fs from 'fs'

export const skipIfNot = (test, ...allowedProjects) => {
  const projectName = test.info().project.name;
  test.skip(!allowedProjects.includes(projectName),
    `Skipped: only runs on ${allowedProjects.join(", ")}`);
};

import { createHtmlReport } from 'axe-html-reporter'

export function generateName() {
  return faker.person.firstName()
}

export function generateEmail() {
  return faker.internet.email()
}

export function generateMessage() {
  return faker.lorem.sentence()
}

export function generateLongName() {
  return faker.string.alpha(51)
}

export function generateNameNumber() {
  return faker.number.int({min: 1, max: 9}).toString();
}

let allResults = []

export function allResultsTests(results) {
  if (!results || !results.violations) return;
  allResults = allResults.concat(results.violations)
  
}
export function a11yFinalReport() {
  const finalReport = { violations: allResults }
  
  createHtmlReport({
    results: finalReport,
    options: {
      outputDir: './accesibility-report/a11yReport',
      reportName: 'a11y-report.html'
    }
  })

}







