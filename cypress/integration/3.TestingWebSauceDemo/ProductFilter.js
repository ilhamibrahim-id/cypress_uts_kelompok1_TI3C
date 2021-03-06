describe('TC_PRODUCTFILTER | 1941720053 - Tita Wijayanti', () => {
    it('TC_PRODUCTFILTER_001', () => {
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('[data-test=\"product_sort_container"\]').select("az");
        cy.get('.inventory_item_name:eq(0)').should('have.text', "Sauce Labs Backpack");
    })
    it('TC_PRODUCTFILTER_002', () => {
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('[data-test=\"product_sort_container"\]').select("za");
        cy.get('.inventory_item_name:eq(0)').should('have.text', "Test.allTheThings() T-Shirt (Red)");
    })
    it('TC_PRODUCTFILTER_003', () => {
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('[data-test=\"product_sort_container"\]').select("lohi");
        cy.get('.inventory_item_price:eq(0)').should('have.text', "$7.99");
    })
    it('TC_PRODUCTFILTER_004', () => {
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('[data-test=\"product_sort_container"\]').select("hilo");
        cy.get('.inventory_item_price:eq(0)').should('have.text', "$49.99");
    })
    it('TC_PRODUCTFILTER_005', () => {
        cy.visit('/');
        cy.get('#user-name').type("problem_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('[data-test=\"product_sort_container"\]').select("za");
        cy.get('.inventory_item_name:eq(0)').should('have.text', "Test.allTheThings() T-Shirt (Red)");
    })
})