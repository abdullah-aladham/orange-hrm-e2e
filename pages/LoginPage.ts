class LoginPage{
elements={
    username: ()=>  cy.get("input[name='username'"),
    password: ()=> cy.get('input[placeholder="Password"]'),
    loginbtn : ()=>cy.get('button[type="submit"]'),
    invalidcredientials:()=>{cy.contains("Invalid credentials").should('be.visible');
}
    }
login(username,password){
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginbtn().click();

}
}


export default LoginPage;