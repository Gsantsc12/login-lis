describe('Fluxo de login errado', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://hlis.pslogistica.com.br/login/'); // Altere para a URL real

    // Inserçao das credencias
    cy.get(':nth-child(1) > #search').type('gabriel.santos');
    cy.get(':nth-child(2) > #search').type('1235');
    cy.get('.box_fields > div.w-100 > .custom-button-login').click();
    cy.contains('Usuário ou senha inválidos.').should('be.visible');
  });
})
