const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
// const {DataTable, Given, Then, When} = require("@badeball/cypress-cucumber-preprocessor");
// require('cypress-real-events/support');

const BasePage = require("../../pageObjects/basePage");
const LoginPage = require("../../pageObjects/loginPage");

Given("I login in to Lineup.ai", () => {
    cy.visit("https://staging.lineup.ai");
    cy.fixture("user").then((user) => {
        LoginPage.login(user.username, user.password);
    });
});

Given("I visit lineup.ai", () => {
    cy.visit("https://staging.lineup.ai");
});

And("I enter email {string} and password {string}", (email, password) => {
    LoginPage.login(email, password);
});

Then("I should see {string} error", () => {
    cy.contains('Incorrect email or password').should("be.visible");
});

Then("I should see {string} page", (pagename) => {
    BasePage.pageNamesLocator(pagename).should("be.visible");
});

Then("I should see Today's Progress Page", () => {
    LoginPage.todayprogress().should("be.visible");
});

And("I click on {string} tab on the dashboard", (tab) => {
    BasePage.tabsLocator(tab).click();
});

And("I click on non submitted plan with date {string}", (date) => {
    BasePage.plansRowLocator(date).click();
});

Then("I should see {string} tab on the dashboard", (tab) => {
    BasePage.tabsLocator(tab).should("be.visible");
});


And("I click on {string} button", (name) => {
    BasePage.getButtonLocator(name).click();
});

And("I click on Add a Shift", () => {
    BasePage.Addashift().click();
});

And("I click on Add button", () => {
        BasePage.addShiftButton().click();
    }
)

And("I refresh page", () => {
    cy.reload();
});
And("I wait {string} seconds", (time) => {
    cy.wait(time * 1000);
});

Then("I should see {string} modal", (name) => {
    BasePage.getModalLocator(name).should("be.visible");
});

And("I fill in 'Add a Shift' modal with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('role')) {
        BasePage.selectRoleLocator().select(data.role)
    }

    if (data.hasOwnProperty('start time')) {
        BasePage.selectStartTimeLocator().type('{selectall}{backspace}')
        BasePage.selectStartTimeLocator().type(data["start time"])
    }
    if (data.hasOwnProperty('end time')) {
        BasePage.selectEndTimeLocator().type('{selectall}{backspace}')
        BasePage.selectEndTimeLocator().type(data["end time"])
    }

    if (data.hasOwnProperty('employee')) {
        BasePage.selectEmployeeLocator().select(data.employee)
    }
    if (data.hasOwnProperty('date')) {
        BasePage.selectDateLocator().select(data.date)
    }

    if (data.hasOwnProperty('shift break')) {
        BasePage.selectShiftLocator(data["shift break"]).click()
    }
})


Then("I {string} see shift card with employee name {string} and shift time {string}", (state, employee, shift) => {
    if (state === "should") {
        BasePage.shiftCardLocator(employee, shift).should("be.visible");
    } else {
        BasePage.shiftCardLocator(employee, shift).should("not.exist");
    }
});

Then("I click shift card with employee name {string} and shift time {string}", (employee, shift) => {
    BasePage.shiftCardLocator(employee, shift).should("be.visible").click();
});


Then("I should see weekly total {string} for row {string}", (hour, row) => {
    BasePage.weeklyTotalHourLocator(hour, row).should("be.visible");
    
});


// And("I click on Employee dropdown", () => {
//     BasePage.selectEmployeeLocator().realClick();
// });



When("I {string} the checkbox", (action) => {
    if (action === 'check') {
        BasePage.employeeAvailabilityCheckBoxLocator().check().should('be.checked');
    } else if (action === 'uncheck') {
        BasePage.employeeAvailabilityCheckBoxLocator().uncheck().should('not.be.checked');
    }
});


Then('I should see the following data on the employee dropdown:', (dataTable) => {
    const expectedEmployees = dataTable.raw().slice(1).map(row => row[0]);
        expectedEmployees.forEach(employee => {
            BasePage.employeeNameLocator(employee).should('exist');
    });
});



