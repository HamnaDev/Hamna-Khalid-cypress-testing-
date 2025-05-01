import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'

describe('Sauce Demo Tests', () => {
    beforeEach(() => {
        // Visit the website before each test
        LoginPage.visit()
    })

    it('should show error message for invalid login', () => {
        // Attempt login with invalid credentials
        LoginPage.login('invalid_user', 'invalid_password')
        
        // Verify error message
        LoginPage.getErrorMessage()
            .should('be.visible')
            .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('should login successfully and verify home page', () => {
        // Login with valid credentials
        LoginPage.login('standard_user', 'secret_sauce')
        
        // Verify user is on home page
        HomePage.verifyHomePage()
    })

    it('should navigate to product page and verify details', () => {
        // Login with valid credentials
        LoginPage.login('standard_user', 'secret_sauce')
        
        // Store product name from home page
        let productName
        HomePage.getProductName(0).then($name => {
            productName = $name.text()
            
            // Click on the first product
            HomePage.clickProduct(0)
            
            // Verify product page
            ProductPage.verifyProductPage()
            
            // Verify product name matches
            ProductPage.getProductName().should('have.text', productName)
        })
    })
}) 