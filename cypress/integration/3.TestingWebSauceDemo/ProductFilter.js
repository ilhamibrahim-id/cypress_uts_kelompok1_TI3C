describe('TC_PRODUCTFILTER | 1941720053 - Tita Wijayanti', () => {
    it('TC_PRODUCTFILTER_001', () => {
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('[data-test=\"product_sort_container"\]').select("az");
        cy.get('.inventory_item_name:eq(0)').should('have.text', "Sauce Labs Backpack");
      })
})