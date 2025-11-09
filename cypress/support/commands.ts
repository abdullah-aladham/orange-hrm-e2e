/// <reference types="cypress" />
import "cypress-plugin-api"
import '@testing-library/cypress/add-commands'
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => { 
cy.findByPlaceholderText("Username").type(username)
    cy.findByPlaceholderText("Password").type(password)
    cy.findByRole("button",{name:'Login'}).click();
    cy.url().should('contain','/web/index.php/dashboard/index')
    // cy.findByText('Dashboard');
    // cy.get("input[name='username'").type(username);
    // cy.get('input[placeholder="Password"]').type(password);
    // cy.get('button[type="submit"]').click();
    // cy.contains('Dashboard').should('be.visible');
 })

 Cypress.Commands.add('verifyLink',(text:string,url)=>{
    cy.findByText(text).should('have.attr','href',url);
    

 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
