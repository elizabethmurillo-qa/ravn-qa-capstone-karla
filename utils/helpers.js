const { faker } = require("@faker-js/faker")
const skipIfNot = (test, ...allowedProjects) => {
  const projectName = test.info().project.name;
  test.skip(!allowedProjects.includes(projectName),
    `Skipped: only runs on ${allowedProjects.join(", ")}`);
};

function generateName() {
  return faker.person.firstName()
}

function generateEmail() {
  return faker.internet.email()
}

function generateMessage() {
  return faker.lorem.sentence()
}

function generateLongName() {
  return faker.string.alpha(51)
}

function generateNameNumber() {
  return faker.number.int({min: 1, max: 9}).toString();
}
module.exports = { skipIfNot, generateName, generateEmail, generateMessage, generateLongName, generateNameNumber };