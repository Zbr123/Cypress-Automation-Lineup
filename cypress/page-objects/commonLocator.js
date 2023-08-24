class CommonLocatorsPage {
    successMessage(text) {
        return cy.xpath(`//div[contains(.,'${text}')]`)
    }

    todayProgress() {
        return cy.get(`[data-testid="Today's Progress"]`);
    }
}

module.exports = new CommonLocatorsPage;
  