export class HomePage {
    validateButtonMenu() {
      cy.get('.css-7afvtf').click();
     
     }
    validateLogOutOne() {
      cy.get(':nth-child(9) > .css-bve2vl').click();
     
     }
    validateLogOutTwo() {
      cy.get(':nth-child(7) > .css-bve2vl').click();
     
     }
    }
    