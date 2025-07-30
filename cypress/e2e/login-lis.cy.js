describe('Fluxo de login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://hlis.pslogistica.com.br/login/'); // Altere para a URL real

    // Inserçao das credencias
    cy.get(':nth-child(1) > #search').type('gabriel.santos');
    cy.get(':nth-child(2) > #search').type('12345');
    cy.get('.box_fields > div.w-100 > .custom-button-login').click();
    // Seleciona o cliente, base e divisão
      cy.get('#cliente')
      .should('be.visible' ,'Selecionar cliente')
      .select('HNK - CKBR BEBIDAS LTDA')
      .should('have.value', '57');

      cy.get('#base')
      .should('be.visible' ,'Selecionar Base')
      .select('Matriz PierServ')
      .should('have.value', '1');// Confirma se foi selecionado corretamente

      cy.get('#divisao')
      .should('be.visible' ,'Selecionar Base')
      .select('CKBR BEBIDAS LTDA')
      .should('have.value', '66');

      cy.get('.d-flex > .btn').click();

  });
})
