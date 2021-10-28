describe('TC_ADDCART_001', () => {
    it('Membuka web siakad polinema', () => {
      cy.visit('/');

    })
    it('Memasukan Username Dengan Nim', () => {
      cy.get('#username').type("1941720180");
      
    })
    it('Memasukan Password', () => {
      cy.get('#password').type("surabayaos");
      
    })
    it('Submit Login', () => {
      cy.contains('Login ').click();  
    })
  })