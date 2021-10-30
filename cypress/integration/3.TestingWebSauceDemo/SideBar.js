describe('TC_SIDEBAR| 2041723013 - VEGA ANGGARESTA', function() {
    it('TC_SIDEBAR_001', function(){
        cy.visit('/')

        cy.get('[data-test=username]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test=login-button]').click()

        cy.get('#item_4_img_link > .inventory_item_img').click()

        cy.get('#react-burger-menu-btn').click()

        cy.get('#inventory_sidebar_link').click()

        // Assertion
        cy.get('#item_4_title_link > .inventory_item_name').should('be.visible')

    })

})