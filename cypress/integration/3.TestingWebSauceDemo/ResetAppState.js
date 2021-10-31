describe('TC_ResetAppState| 21941720021 - Shelyca Surrayensih', function() {
    it('Login', () => {
    })
    
    it('TC_ResetAppState_001 ', function(){
            cy.visit('/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').should('be.visible').click()
    cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()
    cy.get('#react-burger-menu-btn').should('be.visible').click()
    cy.get('#reset_sidebar_link').should('be.visible').click()
    })
    it('TC_ResetAppState_002 ', function(){
        cy.visit('/')
    
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#reset_sidebar_link').should('be.visible').click()

    })
    
    it('TC_ResetAppState_003 ', function(){
        cy.visit('/')
    
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').should('be.visible').click()
    cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()
    cy.get('#react-burger-menu-btn').should('be.visible').click()
    cy.get('#reset_sidebar_link').should('be.visible').click()
    
    })
    it('TC_ResetAppState_004 ', function(){
        cy.visit('/')
    
    cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#reset_sidebar_link').should('be.visible').click()
        
})
     
it('TC_ResetAppState_005 ', function(){
    cy.visit('/')   

    cy.get('#user-name').type('Shely')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#reset_sidebar_link').should('be.visible').click()
})
})
