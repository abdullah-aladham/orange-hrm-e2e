class PIMConfig{

    elements ={
        PIM_btn : ()=>cy.contains('PIM'),
        addEmpBtn:()=>cy.contains('Add'),
        
    }
    navigatetoPIM(){
        this.elements.PIM_btn().click();
    }
    NavigateToAddEmp(){
        this.elements.addEmpBtn().click();
    }
}
export default PIMConfig;
