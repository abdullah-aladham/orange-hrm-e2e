import AddEmployee from "Entities/Employee/AddEmployee";
import AddEmployee from "Entities/Employee/AddEmployee";
import LoginPage from "pages/LoginPage";

describe('Employee Change password Test suite',()=>{
   beforeEach(()=>{
    
    // const loginobj:LoginPage =new LoginPage();
    cy.visit('/');
   cy.login("Admin","admin123");
const addEmployeeObj:AddEmployee=new AddEmployee();

addEmployeeObj.AddNewEmployee("hehe","boi","heheboi",'H3lloEveryone1!','H3lloEveryone1!');

   })
    it('changes password successfuly',()=>{

    })
})