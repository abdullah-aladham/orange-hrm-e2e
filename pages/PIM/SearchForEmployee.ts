import LoginPage from "pages/LoginPage";

class SearchForEmployee {

    elements={
        idfield: ()=> cy.get("oxd-input--active").last(),
        EmployeeNameField:()=>cy.get('button').contains('Search'),
        Searchbtn: ()=>cy.get('button').contains('Search'),
        searchResult: ()=>cy.get('.oxd-table-row'),
    }
    
    searchForEmployeeById(id){
    this.elements.idfield().type(id);
    this.elements.Searchbtn().click();
    this.elements.searchResult().should('be.visible')

    }
    searchForEmployeeByName(name){
        cy.get('input').filter('placeholder="Type for hints..."').first().type(name);
        cy.get('button').contains('Search').click();
        this.elements.searchResult().first().should('contain',name);

    }
}
export default SearchForEmployee;