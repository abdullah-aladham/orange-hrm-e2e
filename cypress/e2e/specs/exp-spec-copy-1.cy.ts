/* ==== Test Created with Cypress Studio ==== */
it('invalid-login-dute-to-ivalid-password', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('jgjjgjgjgjgjgjgjjgjgjgjgj');
  cy.get('.oxd-button').click();
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible');
  /* ==== End Cypress Studio ==== */
});