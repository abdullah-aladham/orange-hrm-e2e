import buzzPage from "pages/buzz.pom";
import LoginPage from "pages/LoginPage";
import Mainpage from "pages/Mainpage.pom";
import * as fs from "fs";
import * as path from "path";
import {faker} from '@faker-js/faker';
const buzzes =require('../../fixtures/buzz.json')
describe('Buzz Test suite',()=>{
beforeEach(()=>{
    cy.visit('/');
    cy.login("Admin","admin123");
})
const postdata=faker.lorem.sentences();

const buzzpageobj:buzzPage=new buzzPage();
const adminpageobj:Mainpage=new Mainpage();
buzzes.forEach(post => {
  it(post.Test_Name,()=>{
     adminpageobj.NavigateToBuzz();
     buzzpageobj.createApost(post.Buzz_text);




 });
});
it.only('gives a like to a post',()=>{
    adminpageobj.NavigateToBuzz();

  // cy.fixture('buzz.json').then((post)=>{
         buzzpageobj.createApost(postdata);
 buzzpageobj.likePost(postdata);
  // })
 
})
// it('adds 5 buzzes with 5 different languages',()=>{
// cy.fixture('buzz').then((buzzes)=>{
//   buzzes.forEach((buzz) => {
// //    it(buzz.Test_Name,()=>{
//      adminpageobj.NavigateToBuzz();
//      buzzpageobj.createApost(buzz.Buzz_text);


//    });

 });
// it('comments on a post',()=>{

// })

//  it('likes a post',()=>{

//  })

// it('adds 5 likes for a post',()=>{

// })
// // });
// // const datafile = path.join(__dirname, "../../fixtures/buzz-comments.json");
// // const buzzComments = JSON.parse(cy.readFile(datafile, "utf-8"));
//    it('comments on buzzes',()=>{
//     cy.fixture('buzz-comments').then((comments)=>{
//    //comments.forEach((comment) => {
// // //    it(buzz.Test_Name,()=>{
//       adminpageobj.NavigateToBuzz();
//       buzzpageobj.createApost(comments.Comment);


//   });

// })
// cy.fixture('buzz-comments').then((comments)=>{
//  comments.forEach((buzz_comment) => {

// });
// it('comments 5 times on a post',{retries:5},()=>{
// cy.fixture('buzz-comments').then((comments)=>{
//    //comments.forEach((comment) => {
// // //    it(buzz.Test_Name,()=>{
//       adminpageobj.NavigateToBuzz();
//       buzzpageobj.createApost(comments.Comment);

// })
// });