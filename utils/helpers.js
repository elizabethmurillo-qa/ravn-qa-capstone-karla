import { faker } from "@faker-js/faker"
export const skipIfNot = (test, ...allowedProjects) => {
  const projectName = test.info().project.name;
  test.skip(!allowedProjects.includes(projectName),
    `Skipped: only runs on ${allowedProjects.join(", ")}`);
};

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
