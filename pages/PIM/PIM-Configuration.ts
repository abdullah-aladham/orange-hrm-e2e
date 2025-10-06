class PIMConfig{

    elements ={
        PIM_btn : ()=>cy.contains('PIM').click(),
        
    }
    navigatetoPIM(){
        this.elements.PIM_btn().click();
    }
}
export default PIMConfig;
