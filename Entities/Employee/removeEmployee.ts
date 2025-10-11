class removeEmployee{

    elements={
    EmpIdInput:    ()=> cy.get("oxd-input--active").last(),
    EmpNameInput:  ()=>cy.get('input').filter('placeholder="Type for hints..."').first(),
        deleteBtn:()=>cy.get('oxd-icon-button oxd-table-cell-action-space').first(),
        }
    removeEmpById(id){
       this.elements.EmpIdInput().type(id);
        this.elements.deleteBtn().click();
    }
    removeEmpByName(Name){
       this.elements.EmpNameInput().type(Name);
        this.elements.deleteBtn().click();

    }
}
export default removeEmployee;