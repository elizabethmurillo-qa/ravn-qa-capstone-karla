const { test, expect }  = require("@playwright/test");
const { BasePage }      = require("../pages/BasePage");
const { HomePage }      = require("../pages/HomePage");
const { ContactPage }   = require("../pages/ContactPage");
//const { ContactHelper } = require("../helpers/ContactHelper");
const {
  TOPICS, validData, fieldsEmtpy, fieldsWithWhitespaces, fieldNameWithNumbers, invalidEmailFormat, invalidNameLength
} = require("../fixtures/testData");

