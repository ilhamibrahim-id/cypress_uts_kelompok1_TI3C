describe('TC_ADDCART | 1941720180 - ILHAM IBRAHIM', () => {
    it('TC_ADDCART_001', () => {
      cy.visit('/');
      cy.get('#user-name').type("standard_user");
      cy.get('#password').type("secret_sauce");
      cy.get('#login-button').click();
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#add-to-cart-sauce-labs-bike-light').click();
      cy.get('.shopping_cart_link').click();
      cy.contains('Checkout').click();  
      cy.get('#first-name').type("Ilham");
      cy.get('#last-name').type("Ibrahim");
      cy.get('#postal-code').type("60127");
      cy.get('#continue').click();
      cy.get('#finish').click();
      cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');
    })

    it('TC_ADDCART_002', () => {
      cy.visit('/');
      cy.get('#user-name').type("standard_user");
      cy.get('#password').type("secret_sauce");
      cy.get('#login-button').click();
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#add-to-cart-sauce-labs-bike-light').click();
      cy.get('.shopping_cart_link').click();
      cy.contains('Checkout').click();  
      cy.get('#last-name').type("Ibrahim");
      cy.get('#postal-code').type("60127");
      cy.get('#continue').click();
      cy.contains('Error: First Name is required').should('be.visible');
    })
    it('TC_ADDCART_003', () => {
      cy.visit('/');
      cy.get('#user-name').type("standard_user");
      cy.get('#password').type("secret_sauce");
      cy.get('#login-button').click();
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#add-to-cart-sauce-labs-bike-light').click();
      cy.get('.shopping_cart_link').click();
      cy.contains('Checkout').click();  
      cy.get('#first-name').type("Ilham");
      cy.get('#postal-code').type("60127");
      cy.get('#continue').click();
      cy.contains('Error: Last Name is required').should('be.visible');
    })
    it('TC_ADDCART_004', () => {
      cy.visit('/');
      cy.get('#user-name').type("standard_user");
      cy.get('#password').type("secret_sauce");
      cy.get('#login-button').click();
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#add-to-cart-sauce-labs-bike-light').click();
      cy.get('.shopping_cart_link').click();
      cy.contains('Checkout').click();  
      cy.get('#first-name').type("Ilham");
      cy.get('#last-name').type("Ibrahim");
      cy.get('#continue').click();
      cy.contains('Error: Postal Code is required').should('be.visible');
    })
    it('TC_ADDCART_005', () => {
      cy.visit('/');
      cy.get('#user-name').type("standard_user");
      cy.get('#password').type("secret_sauce");
      cy.get('#login-button').click();
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#add-to-cart-sauce-labs-bike-light').click();
      cy.get('.shopping_cart_link').click();
      cy.contains('Checkout').click();
      cy.get('#continue').click();
      cy.contains('Error: First Name, Last Name And Zip / Postal Code is required').should('be.visible');
    })
  })
