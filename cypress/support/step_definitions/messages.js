const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const messagesPage = require("../../pageObjects/messagesPage");

Then("I should see {string} heading on the top of the Messages Page", (heading) => {
    messagesPage.messagesheading(heading).should('exist');
});

And("I enter {string} Messages textarea", (text) => {
    messagesPage.messageTextArea().type(text);
});

Then("I should see success message on Messages Page", () => {
    cy.contains('Success! Message has been sent').should('exist');
});

Then("I should see {string} subheading on the top of the Messages Page", (subheading) => {
    messagesPage.messagessubheading(subheading).should('exist');
});

Then('I should see the following date on the Messages:', (dataTable) => {
    const expectedDate = dataTable.raw().slice(1).map(row => row[0]);
    expectedDate.forEach(Date => {
        messagesPage.messagesdate(Date).should('exist');
    });
});

Then('I should see the following sender on the Messages:', (dataTable) => {
    const expectedSender = dataTable.raw().slice(1).map(row => row[0]);
    expectedSender.forEach(sender => {
        messagesPage.messagessender(sender).should('exist');
    });
});

Then('I should see the following message on the Messages:', (dataTable) => {
    const expectedMessage = dataTable.raw().slice(1).map(row => row[0]);
    expectedMessage.forEach(message => {
        messagesPage.messagesmessage(message).should('exist');
    });
});
