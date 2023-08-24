require('cypress-xpath');
class requestPage {
  
    schedulerequest(heading) {
        return cy.xpath(`//p[contains(.,'${heading}')]`)
      }

      submitButton(employeeName) {
        return cy.xpath(`//tr[contains(.,'${employeeName}')]//button[contains(.,'Submit')]`).eq(0);
      } 
    
      employeeSearch() {
        return cy.get(`input[placeholder='Search']`);
      }

      modalButton() {
        return cy.get(`[data-testid="confirm-submit-modal"]`)
    }

    approveCheckbox(employeeName) {
      return cy.xpath(`//tr[contains(.,'${employeeName}')]//label[contains(.,'Approve')]`).eq(0);
    } 

    actionTextbox() {
      return cy.get(`[data-testid="rejection-message"]`)
  }

    subheadings(subheading) {
    return cy.xpath(`//th[contains(., '${subheading}')]`).eq(0);
  }
    
  }
  
  module.exports = new requestPage;
  