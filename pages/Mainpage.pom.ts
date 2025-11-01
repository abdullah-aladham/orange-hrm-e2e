class Mainpage{
elements = {
    Admin:()=>cy.contains("Admin"),
    PIM : ()=> cy.contains("PIM"),
    Leave:()=>cy.contains("Leave"),
Time: ()=>cy.contains("Time"),
Recruitement: ()=>cy.contains("Recruitment"),
MyInfo: ()=>cy.contains("My Info"),
Performance: ()=>cy.contains("Performance"),
Dashboard: ()=>cy.contains("Dashboard"),
Directory: ()=>cy.contains("Directory"),
Maintenance: ()=>cy.contains("Maintenance"),
Claim: ()=>cy.contains("Claim"),
Buzz: ()=>cy.contains("Buzz"),
userProfiledropDown: ()=>cy.get('.oxd-icon bi-caret-down-fill oxd-userdropdown-icon'),
changePassword:()=>cy.get('.oxd-userdropdown-link').filter('[role="menuitem"]').eq(2),
}
visitPIMpage(){
    this.elements.PIM().click();
}
NavigateToBuzz(){
    this.elements.Buzz().click();
}
navigateToChangePasswordPage(){
this.elements.userProfiledropDown().click();
this.elements.changePassword().click();

}
}
export default Mainpage;