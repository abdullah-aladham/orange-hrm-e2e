describe('change-profile-test-suite',()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('changes profile picture',()=>{
        const newpic="cypress/fixtures/images/lily.jpg"
        cy.login('Admin','admin123');
        cy.visit('/web/index.php/pim/addEmployee');
        cy.get(".oxd-file-input").selectFile(newpic,{force:true});
                cy.get('.oxd-input-field-error-message').should('not.be.visible');

    })
    it('fails to change due to size',()=>{ const newpic="cypress/fixtures/images/folla.jpg"
        cy.login('Admin','admin123');
        cy.visit('/web/index.php/pim/addEmployee');
        cy.get(".oxd-file-input").selectFile(newpic,{force:true});})
        cy.get('.oxd-input-field-error-message').should('be.visible');
    
})