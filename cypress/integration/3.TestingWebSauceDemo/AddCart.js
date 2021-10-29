describe('TC_ADDCART_001 | 1941720180 - ILHAM IBRAHIM', () => {
    it('Membuka web sauce demo', () => {
      cy.visit('/');

    })
    it('Memasukan Username', () => {
      cy.get('#user-name').type("standard_user");
      
    })
    it('Memasukan Password', () => {
      cy.get('#password').type("secret_sauce");
      
    })
    it('Klik Login', () => {
        cy.get('#login-button').click();
    })

    it('Tambah Produk Ke Keranjang', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
    })
    it('Klik Cart', () => {
      cy.get('.shopping_cart_link').click();
    })
    
  })