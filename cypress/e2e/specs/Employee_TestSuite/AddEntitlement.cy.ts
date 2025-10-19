import LoginPage from "pages/LoginPage";

describe('Entitlements TestSuite',()=>{
    beforeEach(()=>{
       const loginobj:LoginPage=new LoginPage();
    cy.visit('/');
    cy.fixture('valid_users.json').then((adminuser) => {
 loginobj.login(adminuser[0].username,adminuser[0].password);
 
});
})
       const entitlementspage:Entitlements=new Entitlements();

    it('addsEntitlements by admin',()=>{
         entitlementspage
    })
})