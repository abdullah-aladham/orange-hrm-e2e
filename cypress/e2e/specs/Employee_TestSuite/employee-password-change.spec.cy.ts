import AddEmployee from "Entities/Employee/AddEmployee";
import changePassword from "pages/changePassword.pom";
import Mainpage from "pages/Mainpage.pom";

describe('employee changes password',()=>{
     const mainpageobj:Mainpage=new Mainpage();
        const addempobj:AddEmployee=new AddEmployee();
        const empChangepass:changePassword=new changePassword();
    before(()=>{
       
        cy.visit('/');
        cy.login('Admin','admin123');
        mainpageobj.visitPIMpage();
    cy.fixture('valid_users.json').then((newUser) => {
  addempobj.AddNewEmployee(newUser[2].firstname,newUser[2].lastname,newUser[2].username,newUser[2].password,newUser[2].confpass);
})
        // cy.fixture('valid_users').then()
        // addempobj.AddNewEmployee()


    })
    it('changes employee password',()=>{
        cy.fixture('valid_users.json').then((newUser) => {
            cy.login(newUser[2].username,newUser[2].password);
             mainpageobj.navigateToChangePasswordPage();
        empChangepass.changePassword(newUser[2].password,newUser[2].newpass,newUser[2].confirmnew);
        }) 
       

    })
})