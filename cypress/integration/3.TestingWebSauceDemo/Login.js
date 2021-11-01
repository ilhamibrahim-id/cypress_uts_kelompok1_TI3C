describe('TS_LOGIN | 1941720065 - AWANG SYUKRIANSAH DIRGANTORO', () => {
    it('TS_LOGIN_001', () => {
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('TS_LOGIN_002', () => {
        cy.visit('/');
        cy.get('#user-name').type("problem_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('TS_LOGIN_003', () => {
        cy.visit('/');
        cy.get('#user-name').type("locked_out_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('TS_LOGIN_004', () => {
        cy.visit('/');
        cy.get('#user-name').type("performance_glitch_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('TS_LOGIN_005', () => {
        cy.visit('/');
        cy.get('#user-name').type("admin");
        cy.get('#password').type("admin");
        cy.get('#login-button').click();
        cy.get('form').find('error-message-container').find('h3').should('have,text', 'Epic sadface: Username and password do not match any user in this service');
    })
    it('TS_LOGIN_006', () => {
        cy.visit('/');
        cy.get('#user-name').type("admin");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('form').find('error-message-container').find('h3').should('have,text', 'Epic sadface: Username do not match any user in this service');
    })
})
