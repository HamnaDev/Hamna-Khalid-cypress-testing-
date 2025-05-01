class ProductPage {
    // Selectors
    elements = {
        productDetails: () => cy.get('.inventory_details'),
        productName: () => cy.get('.inventory_details_name'),
        productDescription: () => cy.get('.inventory_details_desc'),
        productPrice: () => cy.get('.inventory_details_price')
    }

    // Methods
    verifyProductPage() {
        this.elements.productDetails().should('be.visible')
    }

    getProductName() {
        return this.elements.productName()
    }

    getProductDescription() {
        return this.elements.productDescription()
    }

    getProductPrice() {
        return this.elements.productPrice()
    }
}

export default new ProductPage() 