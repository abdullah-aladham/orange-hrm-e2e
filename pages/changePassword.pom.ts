class changePassword{
    elements={
        currentPassword:()=> cy.get('.oxd-input oxd-input--active').filter('type="password"').eq(1),
        newPassword:()=> cy.get('.oxd-input oxd-input--active').filter('type="password"').eq(2),
        confirmNewPassword:()=> cy.get('.oxd-input oxd-input--active').filter('type="password"').last(),
        Save:()=> cy.contains('Save'),
        Cancel:()=> cy.contains('Cancel'),
        SuccessNotifToast:()=>cy.get('.oxd-toast oxd-toast--success oxd-toast-container--toast oxd-toast-list-enter-active oxd-toast-list-enter-to')


    }
    changePassword(currentPass:string,newPass:string,confirmNew:string){
        this.elements.currentPassword().type(currentPass);
        this.elements.newPassword().type(newPass);
        this.elements.confirmNewPassword().type(confirmNew);
        this.elements.SuccessNotifToast().should('be.visible');
    }

}
export default changePassword;