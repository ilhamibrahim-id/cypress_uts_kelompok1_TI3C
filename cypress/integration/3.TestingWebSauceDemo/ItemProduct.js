// / <reference types="cypress"/>

describe('TC_ItemProduk | 1941720061 - Nadia Layra Aziza', () => { 
    beforeEach(() => {
        cy.visit('/') 
    })

    it('TC_ItemProduk_001 (Check Item Product for Standard User)', () => {
        cy.get('#user-name').type('standard_user') 
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click()
        cy.get('#item_4_img_link > .inventory_item_img').click()
        // Assertion
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('TC_ItemProduk_002 (Check button ADD TO CARD/REMOVE for Standard User)', () => {
        cy.get('#user-name').type('standard_user') 
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click() 
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click() 
        // Assertion
        cy.get('[data-test=remove-sauce-labs-backpack]').should('be.visible') 
        cy.get('[data-test=remove-sauce-labs-backpack]').click() 
        // Assertion
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').should('be.visible')
    })

    it('TC_ItemProduk_003 (Check button BACK TO PRODUCTS in page detail product for Standard User)', () => {
        cy.get('#user-name').type('standard_user') 
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click() 
        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.get('[data-test=back-to-products]').click()
        // Assertion
        cy.contains('Products').should('be.visible')
    })

    it('TC_ItemProduk_004 (Check Item Product for Problem User)', () => {
        cy.get('#user-name').type('problem_user') 
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click()
        cy.get('#item_4_img_link > .inventory_item_img').click()
        // Assertion
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('TC_ItemProduk_005 (Check button ADD TO CARD/REMOVE for Problem User)', () => {
        cy.get('#user-name').type('problem_user') 
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click() 
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click() 
        // Assertion
        cy.get('[data-test=remove-sauce-labs-backpack]').should('be.visible') 
        cy.get('[data-test=remove-sauce-labs-backpack]').click() 
        // Assertion
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').should('be.visible')
    })
})

// KETERANGAN HASIL PENGUJIAN 

// TC_ItemProduk_001 = PASS
// TC_ItemProduk_002 = PASS
// TC_ItemProduk_003 = PASS
// TC_ItemProduk_004 = FAILED
// TC_ItemProduk_005 = FAILED




