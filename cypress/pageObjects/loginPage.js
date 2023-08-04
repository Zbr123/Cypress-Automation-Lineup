class LoginPage {
  usernameField() {
    return cy.get('[data-testid="Email input"]');
  }

  passwordField() {
    return cy.get('[data-testid="Password input"]');
  }

  submit() {
    return cy.get('.sc-bgqQcB').click();
  
  }
  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.submit();
  }
  todayprogress() {
    return cy.get(`[data-testid="Today's Progress"]`);
  }

}
module.exports = new LoginPage;
