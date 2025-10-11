import Employee from "Entities/Employee/Employee";
import LoginPage from "pages/LoginPage";
import Mainpage from "pages/Mainpage.pom";
import SearchForEmployee from "pages/PIM/SearchForEmployee";
import {faker} from '@faker-js/faker';
import removeEmployee from "Entities/Employee/removeEmployee";
describe("Search for Employee TestSuite",()=>{

    let id= faker.number.int();
    let firstName=faker.person.firstName();
    let lastName=faker.person.lastName();
    let username=faker.internet.username();
    let password=faker.internet.password();
    let cpass=password;
   const loginobj:LoginPage = new LoginPage();
   const mainpageobj:Mainpage=new Mainpage();
   const searchobj:SearchForEmployee=new SearchForEmployee();
   const emp:Employee=new Employee(id,firstName,lastName,username,password,cpass);
   const removeobj:removeEmployee=new removeEmployee();
   it('Searches for Employee',()=>{
        cy.fixture('valid_users.json').then((adminuser) => {
        loginobj.login(adminuser[0].username,adminuser[0].password);
        
})
    mainpageobj.visitPIMpage();
    searchobj.searchForEmployeeById(emp.id);


    })
    after(()=>{
        removeobj.removeEmpById(emp.id);
    })
})