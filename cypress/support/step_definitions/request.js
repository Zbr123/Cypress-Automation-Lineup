const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const requestPage = require("../../pageObjects/requestPage");

Then("I should see {string} heading on the top of the Request Page", (heading) => {
    cy.wait(400)
    requestPage.schedulerequest(heading).should('exist');
});

And("I click on Submit button of the {string} Employee", (employeeName) => {
    requestPage.submitButton(employeeName).click();
});

And("I enter {string} in the search field on Request Page", (text) => {
    requestPage.employeeSearch().type(text);
});

And("I click {string} button on the confirmation modal", () => {
    requestPage.modalButton().click();
});

And("I declined the checkbox of {string} Employee", (employeeName) => {
    requestPage.approveCheckbox(employeeName).click();
});

And("I enter {string} in Actions textbox on Request Page", (text) => {
    requestPage.actionTextbox().type(text);
});

Then("I should see {string} sub-heading on the Request Page", (subheading) => {
    requestPage.subheadings(subheading).should('exist');
});