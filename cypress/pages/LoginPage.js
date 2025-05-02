class LoginPage {
    // Selectors
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    // Methods
    visit() {
        cy.visit('https://www.saucedemo.com')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    clickLogin() {
        this.elements.loginButton().click()
    }

    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }

    getErrorMessage() {
        return this.elements.errorMessage()
    }
}

export default new LoginPage() 