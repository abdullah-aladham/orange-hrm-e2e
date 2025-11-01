class Entitlements{
    elements={
        ApplyLeave: ()=> cy.get(".oxd-topbar-body-nav-tab").first(),
        MyLeave:()=>cy.get(".oxd-topbar-body-nav-tab"),
        entitlements:()=>cy.get('span[class="oxd-topbar-body-nav-tab-item"]'),
        AddEntitlementsbtn:()=> cy.get(".oxd-topbar-body-nav-tab-link").filter('[role="menuitem"]').first(),
        EmpName:()=>cy.get('input[placeholder="Type for hints..."'),
        
    saveEntitlementbtn:()=> cy.get('.oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space'),

    }
    navigateToAddEntitlement(){
        this.elements.entitlements().click();
        this.elements.AddEntitlementsbtn().click();
        cy.url().should('contain','/leave/addLeaveEntitlement');
    }
//     AddEmpEntitlement(Empname,days){
// this.elements.
//     }
}
