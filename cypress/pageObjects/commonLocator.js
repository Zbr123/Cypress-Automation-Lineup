 class commonLocators {
    successMessage(text) {
        return cy.xpath(`//div[contains(.,'${text}')]`)
      }
  }
  module.exports = new commonLocators;
  