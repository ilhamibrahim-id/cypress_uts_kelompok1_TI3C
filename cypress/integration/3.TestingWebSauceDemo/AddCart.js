describe('TC_ADDCART_001', () => {
    it('Membuka web sauce demo', () => {
      cy.visit('/');

    })
    it('Memasukan Username', () => {
        cy.contains('Username').type("standard_user");
      
    })
    it('Memasukan Password', () => {
      cy.get('#password').type("secret_sauce");
      
    })
    it('Submit Login', () => {
        cy.get('#login-button').click();
    })
  })