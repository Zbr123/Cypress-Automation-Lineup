require('cypress-xpath');
class settingsPage {
    managementsubtab(subtab) {
        return cy.xpath(`//a[contains(.,"${subtab}")]`);
    }
    
    employeeNameLocator(employeeName) {
        return cy.xpath(`//td[contains(.,'${employeeName}')]`);
    }

    employeeNameField() {
        return cy.get('[data-testid="Employee Name* input"]');
      }

      employeeEmailField() {
        return cy.get('[data-testid="Email Address* input"]');
      }

      employeeWageField() {
        return cy.get('[data-testid="Wage input"]');
      }
     

      employeePhoneNoField() {
        return cy.get('[data-testid="Phone Number input"]');
      }


    checkboxByIndex(index){
      //return cy.get('input[type="checkbox"]').eq(index);  
      return cy.xpath('//td[contains(@class, "sc-iBTzgk hpDgQP")]//input[@type="checkbox"]').eq(index);  
  }

//   checkboxByIndex(index){
//     return cy.xpath('//td[contains(@class, "sc-iBTzgk hpDgQP")]//input[@type="checkbox"]').eq(index);  
// }

  
  emailError() {
    return cy.get('[data-testid="Email Address* input-error"]');
  }
  
  editButton(employeeName) {
    return cy.xpath(`//tr[contains(.,'${employeeName}')]//button[contains(.,'Edit')]`).eq(0);
  } 

  employeeSearch() {
    return cy.get(`input[placeholder='Search']`);
  }

  

  }
  
  module.exports = new settingsPage;
  