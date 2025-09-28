class AddEmployee{
elements = {
    firstname :()=>cy.get('input[name="firstName"]'),
    lastname:()=>cy.get('input[name="lastName"]'),
    createlogindetails:()=>cy.get('.oxd-switch-input'),
    username:()=>cy.get('.oxd-input').filter('[autocomplete="off"]').first(),
    password:()=>cy.get('.oxd-input').filter('[autocomplete="off"]').eq(1),
    confirmpassword:()=> cy.get('.oxd-input').filter('[autocomplete="off"]').last(),
    save:()=>cy.get('button').contains("Save"),
    cancel:()=>cy.get('button').contains("Cancel")
}
AddNewEmployee(firstname,lastname,username,password,confirmpass){
this.elements.firstname().type(firstname);
this.elements.lastname().type(lastname);
this.elements.createlogindetails().click();
this.elements.username().type(username);
this.elements.password().type(password);
this.elements.confirmpassword().type(confirmpass);
this.elements.save().click();

}

}   
export default AddEmployee;