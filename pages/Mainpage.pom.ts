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

}
visitPIMpage(){
    this.elements.PIM().click();
}

}
export default Mainpage;