class SearchForEmployee {
    searchForEmployeeById(id){
cy.get("oxd-input--active").last().type(id);
cy.get('button').contains('Search').click();
    }
     searchForEmployeeByName(name){
        cy.get('input').filter('placeholder="Type for hints..."').first().type(name);
    cy.get('button').contains('Search').click();

    }
}
export default SearchForEmployee;