
/// <reference types="cypress" />

  describe("Testing of LMS", () => {
    it("Test number 1", () => {
      cy.visit("https://www.edu.goit.global/account/login");
      cy.get("#user_email").type("user888@gmail.com");
      cy.get("#user_password").type("1234567890");
      cy.get('.eckniwg2').click();
      cy.get('.css-7afvtf').click();
      cy.get(':nth-child(9) > .css-bve2vl').click();
       });
    

    it("Test number 2", () => {
      cy.visit("https://www.edu.goit.global/account/login");
      cy.get("#user_email").type("testowyqa@qa.team");
      cy.get("#user_password").type("QA!automation-1");
      cy.get('.eckniwg2').click();
      cy.get('.css-7afvtf').click();
      cy.get(':nth-child(7) > .css-bve2vl').click();
       });
    });