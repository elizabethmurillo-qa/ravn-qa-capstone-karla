const { test } = require("@playwright/test");

const skipIfNot = (...allowedProjects) => {
  const projectName = test.info().project.name;
  test.skip(!allowedProjects.includes(projectName),
    `Skipped: only runs on ${allowedProjects.join(", ")}`);
};

module.exports = { skipIfNot };