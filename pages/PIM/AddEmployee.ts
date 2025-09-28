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
createNewUser(){

}
}   
export default AddEmployee;