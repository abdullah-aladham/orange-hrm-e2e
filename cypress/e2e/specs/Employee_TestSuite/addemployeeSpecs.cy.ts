import AddEmployee from "Entities/Employee/AddEmployee";
import Employee from "Entities/Employee/Employee";
import LoginPage from "pages/LoginPage"
import Mainpage from "pages/Mainpage.pom";
import { faker } from "@faker-js/faker";

beforeEach(()=>{
    cy.visit('/');
})
let id=faker.number.int();
let firstname=faker.person.firstName();
let lastname=faker.person.lastName();
let username=faker.internet.username();
let password=faker.internet.password();
let confirmpassword=password;
describe('Add Employee Test Suite',()=>{
    it('Adds New Employee',()=>{
const loginobj:LoginPage = new LoginPage();
const employee:Employee= new Employee(id,firstname,lastname,username,password,confirmpassword);
const navigateobj:Mainpage=new Mainpage();
const addingEmployeeObj:AddEmployee=new AddEmployee();
cy.fixture('valid_users.json').then((adminuser) => {
 loginobj.login(adminuser[0].username,adminuser[0].password);
})
navigateobj.visitPIMpage();
addingEmployeeObj.AddNewEmployee(employee.firstname,employee.lastName,employee.username,employee.password,employee.confirmpass);
    })
    it('Fails to add new Employee due to invalid data',()=>{
        
    })
    it.only('adds new employee wit api',()=>{
        cy.login("Admin","admin123");
        const navigateobj:Mainpage=new Mainpage();
const addingEmployeeObj:AddEmployee=new AddEmployee();
navigateobj.visitPIMpage();

        cy.api(
            "POST",
            "/web/index.php/api/v2/pim/employees",
            {
    "firstName": "hehe",
    "middleName": "",
    "lastName": "boi",
    "empPicture": null,
    "employeeId": null
}
        ).then((respose)=>{expect(respose.status).to.eq(200);
            const empnumber=respose.body.data?.empNumber;
            console.log('Employee Number:',empnumber);
            cy.api(
            "DELETE",
            "/web/index.php/api/v2/pim/employees",
            {
    "ids": [
        empnumber
    ]
        })
    
}
        )
    })
   
})
