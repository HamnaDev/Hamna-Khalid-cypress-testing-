// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command for login with credentials
Cypress.Commands.add('loginWithCredentials', (username, password) => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

// Custom command to verify error message
Cypress.Commands.add('verifyErrorMessage', (expectedMessage) => {
    cy.get('[data-test="error"]').should('be.visible')
        .and('contain.text', expectedMessage)
})

// Custom command to verify home page
Cypress.Commands.add('verifyHomePage', () => {
    cy.get('#inventory_container').should('be.visible')
})

// Custom command to click on product
Cypress.Commands.add('clickProduct', (index) => {
    cy.get('.inventory_item_name').eq(index).click()
})

// Custom command to verify product page
Cypress.Commands.add('verifyProductPage', () => {
    cy.get('.inventory_details').should('be.visible')
})
