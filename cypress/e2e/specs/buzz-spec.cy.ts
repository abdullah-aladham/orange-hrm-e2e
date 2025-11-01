import buzzPage from "pages/buzz.pom";
import LoginPage from "pages/LoginPage";
import Mainpage from "pages/Mainpage.pom";
import * as fs from "fs";
import * as path from "path";
describe('Buzz Test suite',()=>{
beforeEach(()=>{
    cy.visit('/');
    cy.login("Admin","admin123");
})

const buzzpageobj:buzzPage=new buzzPage();
const adminpageobj:Mainpage=new Mainpage();

it('adds 5 buzzes with 5 different languages',()=>{
cy.fixture('buzz').then((buzzes)=>{
  buzzes.forEach((buzz) => {
//    it(buzz.Test_Name,()=>{
     adminpageobj.NavigateToBuzz();
     buzzpageobj.createApost(buzz.Buzz_text);


   });

 });


// });
// const datafile = path.join(__dirname, "../../fixtures/buzz-comments.json");
// const buzzComments = JSON.parse(cy.readFile(datafile, "utf-8"));
//   it('comments on buzzes',()=>{
//    cy.fixture('buzz-comments').then((comments)=>{
//   comments.forEach((comment) => {
// //    it(buzz.Test_Name,()=>{
//      adminpageobj.NavigateToBuzz();
//      buzzpageobj.createApost(comment.Comment);


//    });

})
// cy.fixture('buzz-comments').then((comments)=>{
//  comments.forEach((buzz_comment) => {

});

// })
// });
// });
// // })/* ==== Test Created with Cypress Studio ==== */
// it('add-buzz', function() {
//   /* ==== Generated with Cypress Studio ==== */
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('ِ');
//   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
//   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
//   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
//   cy.get('.oxd-button').click();
//   cy.get(':nth-child(12) > .oxd-main-menu-item > .oxd-text').click();
//   cy.get('.oxd-buzz-post-input').click();
//   cy.get('.oxd-buzz-post-slot > .oxd-button').click();
//   cy.should('be.visible');
//   /* ==== End Cypress Studio ==== */
// });/* ==== Test Created with Cypress Studio ==== */
// it('buzztest', function() {
//   /* ==== Generated with Cypress Studio ==== */
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
//   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
//   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
//   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
//   cy.get('.oxd-button').click();
//   cy.get(':nth-child(12) > .oxd-main-menu-item').click();
//   cy.get('.oxd-buzz-post-input').click();
//   cy.get('.oxd-buzz-post-input').type('hello')
//   cy.get('.oxd-buzz-post-slot > .oxd-button').click();
//   cy.get('.oxd-toast-content').should('be.visible');
//   /* ==== End Cypress Studio ==== */
// });