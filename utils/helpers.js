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
const results_file = './a11yResults.json'



export function allResultsTests(results) {
  let existing = { violations: [] };

  if (fs.existsSync(results_file)) {
    existing = JSON.parse(fs.readFileSync(results_file, 'utf-8'));
    
  }

  existing.violations = existing.violations.concat(results.violations);
  fs.writeFileSync(results_file, JSON.stringify(existing));
}

export function a11yFinalReport() {
  if (!fs.existsSync(results_file)) {
    
    return; 
  }
  
  const data = JSON.parse(fs.readFileSync(results_file, 'utf-8'));
  const seen = new Set();
  const uniqueViolations = data.violations.filter(v => {
    const key = v.id + v.nodes.map(n => n.html).join('');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  createHtmlReport({
    results: {violations: uniqueViolations},
    options: {
      outputDir: './accesibility-report/a11yReport',
      reportName: 'a11y-report.html'
    }
  })
  fs.unlinkSync(results_file)

}







