/* ==== Test Created with Cypress Studio ==== */
it('validLogin', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
  cy.get('.oxd-button').click();
  cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Dashboard');
  /* ==== End Cypress Studio ==== */
});