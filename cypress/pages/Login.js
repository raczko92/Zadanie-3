export class Login {
    navigate() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
    validateLoginOne() {
    cy.get("#user_email").type("user888@gmail.com");
   
   }
  validateLoginTwo() {
    cy.get("#user_email").type("testowyqa@qa.team");
   
   }
   validatePasswordOne() {
    cy.get("#user_password").type("1234567890");
   
   }
   validatePasswordTwo() {
    cy.get("#user_password").type("QA!automation-1");
   
   }
  validateButton() {
    cy.get('.eckniwg2').click();
   
   }
  }
  