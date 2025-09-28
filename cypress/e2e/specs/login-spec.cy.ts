import { method } from "cypress/types/bluebird";
// import 
import LoginPage from '../../../pages/LoginPage';
const loginpageobj:LoginPage =new LoginPage();
// import {baseUrl} from '../../cypress.config.ts;
describe('OrangeHRM Login Tests', () => {
beforeEach(() => {

  cy.visit('/')

})
  it('should login successfully with valid credentials', () => {
 loginpageobj.login("Admin","admin123");
    cy.url().should('contain','dashboard/index');
    cy.contains('Dashboard').should('be.visible');
    cy.contains('PIM').click();
    cy.get('button').contains('Add').click();
    cy.get('input[name="firstName"]').type('Abdullah');
    cy.get('input[name="lastName"]').type('Aladham');
    cy.get('.oxd-switch-input').click();
    // cy.get(".oxd-form-row").get('label').contains('Username').children().get('input[type="text"]').type('abdullah');
    cy.get('.oxd-input').filter('[autocomplete="off"]').should('have.length', 3);

cy.get('.oxd-input').filter('[autocomplete="off"]').first().type("abdullah");
cy.get('.oxd-input').filter('[autocomplete="off"]').eq(1).type("1234567d");

cy.get('.oxd-input').filter('[autocomplete="off"]').last().type("1234567d");
cy.get('button').contains("Save").click();

  });
  it.only('fails to login due to wrong username',()=>{
    loginpageobj.login("dmin","admin123");
  })
  
// it('[Invalid]should login successfully with invalid Username', () => {
//   //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     cy.get("input[name='username'").type('@dmin');
//     cy.get('input[placeholder="Password"]').type('admin123');
//     cy.get('button[type="submit"]').click();
//    cy.contains("Invalid credentials").should('be.visible');

//    cy.intercept(
//     'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages'
//     ,'GET'
//    ).as('ErrorMsg');

//   });

//   it('[Invalid]should login successfully with invalid Username And Password', () => {
//   //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     cy.get("input[name='username'").type('@dmin');
//     cy.get('input[placeholder="Password"]').type('admin12');
//     cy.get('button[type="submit"]').click();
//    cy.contains("Invalid credentials").should('be.visible');
//   });
});
