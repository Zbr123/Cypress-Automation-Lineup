const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');


const commonLocators = require("../../pageObjects/commonLocator");


Then("I should see {string} success message on the page", (text) => {
    commonLocators.successMessage(text).should('exist');
});