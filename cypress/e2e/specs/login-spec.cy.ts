// import { method } from "cypress/types/bluebird";
  // import 
import LoginPage from '../../../pages/LoginPage';
import {faker} from "@faker-js/faker";
// import { first, last } from "cypress/types/lodash";
import Employee from 'Entities/Employee/Employee';
import AddEmployee from "Entities/Employee/AddEmployee";
<<<<<<< HEAD
import SearchForEmployee from "pages/PIM/SearchForEmployee";
=======
// import SearchForEmployee from "../Employee_TestSuite/SearchForEmployee.cy.ts";
>>>>>>> 3b447d2c8ff2a5f8718d11cc6bf66c2d0784c22b
import PIMConfig from 'pages/PIM/PIM-Configuration';
// import AddEmployee from "Entities/Employee/AddEmployee";
// import {baseUrl} from '../../cypress.config.ts;
  // import {username,password} from '.'


  const loginpageobj:LoginPage =new LoginPage();

describe('OrangeHRM Login Tests', () => {
  let id= faker.number.int();
let  firstname=faker.person.firstName();
let lastName=faker.person.lastName();
let username=faker.internet.username();
let password=faker.internet.password();
let confirmpass=password;
<<<<<<< HEAD
const employee:Employee =new Employee(id,firstname,lastName,username,password,confirmpass);
const EmployeeAddingobj:AddEmployee=new AddEmployee();
const employee_searchobj:SearchForEmployee=new SearchForEmployee();
=======
// const employee:Employee =new Employee(id,firstname,lastName,username,password,confirmpass);
// const EmployeeAddingobj:AddEmployee=new AddEmployee();
// const employee_searchobj:SearchForEmployee=new SearchForEmployee();
>>>>>>> 3b447d2c8ff2a5f8718d11cc6bf66c2d0784c22b
const PIMobj:PIMConfig =new PIMConfig();
beforeEach(() => {

  cy.visit('/')

})

  it.only('should login successfully with valid credentials', () => {
// cy.fixture('valid_users.json').then((adminuser) => {
//  loginpageobj.login(adminuser[0].username,adminuser[0].password);
// })
cy.login("Admin","admin123");
PIMobj.navigatetoPIM();
// EmployeeAddingobj.AddNewEmployee(employee.firstname,employee.lastName,employee.username,employee.password,employee.confirmpass);
// employee_searchobj.searchForEmployeeByName(employee.firstname);
   
    
    // cy.contains('Dashboard').should('be.visible');
    // cy.contains('PIM').click();
    // cy.get('button').contains('Add').click();
    // cy.get('input[name="firstName"]').type(employee.firstname);
    // cy.get('input[name="lastName"]').type(employee.lastName);
    // cy.get('.oxd-switch-input').click();
      // cy.get(".oxd-form-row").get('label').contains('Username').children().get('input[type="text"]').type('abdullah');
    // cy.get('.oxd-input').filter('[autocomplete="off"]').should('have.length', 3);

// cy.get('.oxd-input').filter('[autocomplete="off"]').first().type(employee.username);
// cy.get('.oxd-input').filter('[autocomplete="off"]').eq(1).type(employee.password);

// cy.get('.oxd-input').filter('[autocomplete="off"]').last().type(employee.confirmpass);
// cy.get('button').contains("Save").click();

  });
  it('fails to login due to wrong username',()=>{
    loginpageobj.login("dmin","admin123");
  })
  
 it('[Invalid]should login successfully with invalid Username and password', () => {
      //  cy.visit('https: opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      //  loginpageobj.login(faker.internet.username(),faker.internet.password());
      // cy.get("input[name='username'").type();
      // cy.get('input[placeholder="Password"]').type('admin123');
      // cy.get('button[type="submit"]').click();
    //  cy.contains("Invalid credentials").should('be.visible');

    //  cy.intercept(
    //   'https: opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages'
    //   ,'GET'
    //  ).as('ErrorMsg');

    });

    it('[Invalid]should login successfully with invalid Username And Password', () => {
       cy.visit('https: opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get("input[name='username'").type('@dmin');
      cy.get('input[placeholder="Password"]').type('admin12');
      cy.get('button[type="submit"]').click();
     cy.contains("Invalid credentials").should('be.visible');
    });
});

