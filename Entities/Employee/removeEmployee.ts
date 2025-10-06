class removeEmployee{

    removeEmpById(id){
       cy.get("oxd-input--active").last().type(id);
    cy.get('oxd-icon-button oxd-table-cell-action-space').first().click();
    }
    removeEmpByName(Name){
        cy.get('input').filter('placeholder="Type for hints..."').first().type(Name);
    cy.get('oxd-icon-button oxd-table-cell-action-space').first().click();

    }
}
export default removeEmployee;