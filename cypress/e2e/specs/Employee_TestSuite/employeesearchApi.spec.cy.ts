import { faker } from "@faker-js/faker";
import AddEmployee from "Entities/Employee/AddEmployee";
import Employee from "Entities/Employee/Employee";
import Mainpage from "pages/Mainpage.pom";
import PIMConfig from "pages/PIM/PIM-Configuration";

describe('Search for Employee via Api',()=>{
    const id =faker.number.octal();
    const Firstname =faker.person.firstName();
    const lastName =faker.person.lastName();
    const username= faker.internet.username();
    const password=faker.internet.password();
    const confirmpass=password;

    const addEmpObj :AddEmployee= new AddEmployee();
    const Emp :Employee= new Employee(id,Firstname,lastName,username,password,confirmpass);
    const mainpageobj:Mainpage=new Mainpage();
    const pimPageObj :PIMConfig=new PIMConfig();
    beforeEach(()=>{
        cy.visit('/');
        cy.login('Admin','admin123');
        mainpageobj.visitPIMpage();
        pimPageObj.NavigateToAddEmp();
        addEmpObj.AddNewEmployee(Emp.firstname,Emp.lastName,Emp.username,Emp.password,Emp.confirmpass);

    })
it('Searches for employee and finds them',()=>{
        cy.request({method:"GET",
            url:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=hehe+boi&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
             body:[
    {
        "empNumber": "",
        "lastName": lastName,
        "firstName": Firstname,
        "middleName": "",
        "employeeId": id,
        "terminationId": null,
        
    }
]
        }).as("SearchReq");
})
})