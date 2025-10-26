import LoginPage from "pages/LoginPage";

beforeEach(()=>{
    cy.visit('/');
})
/* ==== Test Created with Cypress Studio ==== */
it('Adds Buzz in 5 languages ', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('ِ');
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
  cy.get('.oxd-form').click();
  cy.get('.oxd-button').click();
  cy.get(':nth-child(12) > .oxd-main-menu-item').click();
  cy.get('.oxd-buzz-post-input').click();
  cy.get('.oxd-buzz-post-slot > .oxd-button').click();
  cy.get('.oxd-text--toast-message').should('be.visible');
  cy.get('.oxd-buzz-post-input').click();
  cy.get('.oxd-buzz-post-slot > .oxd-button').click();
  cy.get('.oxd-toast').should('be.visible');
  cy.get('.oxd-buzz-post-input').click();
  cy.get('.oxd-buzz-post-slot > .oxd-button').click();
  cy.get('.oxd-text--toast-message').should('be.visible');
  cy.get('.oxd-buzz-post-input').click();
  cy.get('.oxd-buzz-post-slot > .oxd-button').click();
  cy.get('.oxd-toast-content').should('be.visible');
  cy.get('.oxd-buzz-post-input').click();
  cy.get('.oxd-buzz-post-slot > .oxd-button').click();
  cy.get('.oxd-text--toast-message').should('have.text', 'Successfully Saved');
  /* ==== End Cypress Studio ==== */
});



it.only('Adds Buzz in 5 languages ', function() {
  /* ==== Generated with Cypress Studio ==== */
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('ِ');
//   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
// //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
//   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
const loginobj:LoginPage =new LoginPage();
loginobj.login("Admin","admin123");
 
});