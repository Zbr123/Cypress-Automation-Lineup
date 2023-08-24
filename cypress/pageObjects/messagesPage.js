require('cypress-xpath');
class messagesPage {

    messagesheading(heading) {
        return cy.xpath(`//p[contains(.,'${heading}')]`)
      }
    
    messageTextArea() {
        return cy.get('[data-testid="rejection-message"]');
      }

      messagessubheading(subheading) {
        return cy.xpath(`//th[contains(.,'${subheading}')]`)
      }

      messagesdate(date) {
        return cy.xpath(`//span[contains(.,'${date}')]`).eq(0)
      }

      messagessender(sender) {
        return cy.xpath(`//div[contains(@class, 'sc-hKhKOZ cDAWdf') and contains(., '${sender}')]`).eq(0)
      }
      
      messagesmessage(message) {
        return cy.xpath(`//div[contains(@class, 'sc-hKhKOZ cDAWdf') and contains(., '${message}')]`).eq(0)
      }
      
  }
  
  module.exports = new messagesPage;
  