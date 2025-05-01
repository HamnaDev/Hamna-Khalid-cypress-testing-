class HomePage {
    // Selectors
    elements = {
        inventoryContainer: () => cy.get('#inventory_container'),
        productItem: (index) => cy.get('.inventory_item').eq(index),
        productName: (index) => cy.get('.inventory_item_name').eq(index),
        productLink: (index) => cy.get('.inventory_item_name').eq(index)
    }

    // Methods
    verifyHomePage() {
        this.elements.inventoryContainer().should('be.visible')
    }

    clickProduct(index) {
        this.elements.productLink(index).click()
    }

    getProductName(index) {
        return this.elements.productName(index)
    }
}

export default new HomePage() 