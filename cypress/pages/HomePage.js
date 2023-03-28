export class HomePage {
    clickButtonMenu() {
      cy.get('.css-7afvtf').click();
     
     }
    clickFirstLogOutButton() {
      cy.get(':nth-child(9) > .css-bve2vl').click();
     
     }
    clickSecondLogOutButton() {
      cy.get(':nth-child(7) > .css-bve2vl').click();
     
     }
    }
    