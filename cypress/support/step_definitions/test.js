const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
const BasePage = require("../../pageObjects/basePage");
const LoginPage = require("../../pageObjects/loginPage");


And("I click on Employee dropdown", () => {
    BasePage.selectEmployeeLocator().realClick();
});