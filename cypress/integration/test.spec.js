
  
it('should login to the website', () =>{
cy.visit('https://www.saucedemo.com')
cy.get('[data-test="username"]').type('admin')
cy.get('[data-test="password"]').type('admin123')
cy.get('[data-test="login-button"]').click()

})