import buzzPage from "pages/buzz.pom";
import LoginPage from "pages/LoginPage";
import Mainpage from "pages/Mainpage.pom";
describe('Buzz Test suite',()=>{
beforeEach(()=>{
    cy.visit('/');
    cy.login("Admin","admin123");
})
const buzzpageobj:buzzPage=new buzzPage();
const adminpageobj:Mainpage=new Mainpage();
cy.fixture('buzzes').then((buzzes)=>{
 buzzes.forEach((buzz) => {
   it(buzz.Test_Name,()=>{
    adminpageobj.NavigateToBuzz();
    buzzpageobj.createApost(buzz.Buzz_text);
    

  });
  
});


});
cy.fixture('buzz-comments').then((comments)=>{
 comments.forEach((buzz_comment) => {
   it(buzz_comment.Test_Name,()=>{
    adminpageobj.NavigateToBuzz();
    buzzpageobj.commentOnPost(buzz_comment.Comment)
    

  });
  
});


});
})