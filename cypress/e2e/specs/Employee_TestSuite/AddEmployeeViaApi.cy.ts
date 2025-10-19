import LoginPage from "pages/LoginPage"
import { faker } from "@faker-js/faker";
describe('adding Employee via api',()=>{
            const loginobj:LoginPage =new LoginPage();
beforeEach(()=>{
    cy.visit('/');
})
    it('adds Employee via Api',{ retries: 5 },()=>{
        const firstName=faker.person.firstName();
        const lastName=faker.person.lastName();
        const empid=faker.number.octal();
       cy.fixture('valid_users.json').then((adminuser) => {
 loginobj.login(adminuser[0].username,adminuser[0].password);
});
cy.request({method:"POST",
    url:"https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
    body:{
        
    firstName: firstName,
    middleName: "",
    lastName: lastName,
    empPicture: null,
    employeeId: empid
}
    })
    .its('status').should('equal',200);
});



})