export class Login {
    navigate() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
    insertFirstLogin() {
    cy.get("#user_email").type("user888@gmail.com");
   
   }
    insertSecondLogin() {
    cy.get("#user_email").type("testowyqa@qa.team");
   
   }
    insertFirstPassword() {
    cy.get("#user_password").type("1234567890");
   
   }
    insertSecondPassword() {
    cy.get("#user_password").type("QA!automation-1");
   
   }
    clickLoginButton() {
    cy.get('.eckniwg2').click();
   
   }
  }
  