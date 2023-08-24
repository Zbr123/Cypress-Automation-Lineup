const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const settingsPage = require("../../pageObjects/settings");

    And("I click on {string} under Management heading", (subtab) => {
    settingsPage.managementsubtab(subtab).click();
});

Then('I should see the following employees on the page:', (dataTable) => {
    const expectedEmployees = dataTable.raw().slice(1).map(row => row[0]);
    expectedEmployees.forEach(employee => {
        settingsPage.employeeNameLocator(employee).should('exist');
    });
});

    And("I enter {string} in Employee Name Field", (text) => {
        const randomFourDigitNumber = Math.floor(10 + Math.random() * 9000); 
        const combinedText = text + randomFourDigitNumber; 
        settingsPage.employeeNameField().type(combinedText);
       // settingsPage.employeeNameField().type(text);
    });

    And("I enter {string} in Employee Email Field", (text) => {

        if(text === "Test+2@lineup.ai"){
            settingsPage.employeeEmailField().type(text);
        }
        else{
        const randomFourDigitNumber = Math.floor(10 + Math.random() * 9000); 
        const combinedText = text + randomFourDigitNumber + "@lineup.ai"; 
        settingsPage.employeeEmailField().type(combinedText);
        } 
    });
    
    And("I enter {string} in Employee Wage Field", (text) => {
        settingsPage.employeeWageField().type(text);
    });


    And("I enter {string} in Employee Phone No Field", (text) => {
    const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000); 
    const combinedText = text + randomFourDigitNumber; 
    settingsPage.employeePhoneNoField().type(combinedText);
       // settingsPage.employeePhoneNoField().type(text);
    });
    
    // And("I click on {string} checkbox", (checkboxLabel) => {
    //     if (checkboxLabel === "Exclude Labour") { 
    //         settingsPage.firstCheckbox().click();
    //     } 
    //     else if (checkboxLabel === "Active") {
    //         settingsPage.secondCheckbox().click();
    //     } 
    //     else {
    //         throw new Error(`Unknown checkbox label: ${checkboxLabel}`);
    //     }
    // });


    And("I click on {string} checkbox", (checkboxLabel) => {
        let index;
        
        if (checkboxLabel === "Exclude labor") {
            index = 0;  // For the first checkbox
        } else if (checkboxLabel === "Active") {
            index = 1;  // For the second checkbox
        } else {
            throw new Error(`Unknown checkbox label: ${checkboxLabel}`);
        }
        // settingsPage.checkboxByIndex(index).should('exist').click();
        // settingsPage.checkboxByIndex(index).debug().click();
        settingsPage.checkboxByIndex(index).should('exist').wait(2000).click();


    });

    Then("I should be able to see success message on Add Employee Page", () => {
        cy.contains('Employee successfully added').should('exist');
    });
    
    Then("I should be able to see Email already exist", () => {
        settingsPage.emailError().should('exist');
    });

    And("I type {string} in the search bar on the Employee Page", (text) => {
        settingsPage.employeeSearch().type(text);
    });

    And("I click on Edit button of the {string} Employee", (employeeName) => {
        settingsPage.editButton(employeeName).click();
    });

    Then("I should be able to see Thankyou message", () => {
        cy.contains('Thankyou! The information has been updated.').should('exist');
    });