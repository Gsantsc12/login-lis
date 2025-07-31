const { TIMEOUT } = require("dns");

describe('Cadastro de Usuarios', () => {
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

      cy.get(':nth-child(5) > .link_menu > #title_menu').click();
      cy.get('.active > .submenu > :nth-child(2) > a').click()

      cy.contains('a.btn.btn-pier', 'Cadastrar').click({ force: true });

      cy.get('#sigla_cliente').click().type('KKK')

      cy.get('.form-input > .btn').click();

      cy.get('#select-galpao')
      .should('be.visible' ,'Selecione')
      .select('1')
      .should('have.value', '1');

      cy.wait(4800);

      cy.contains('#btn-adicionar-galpao', 'Adicionar').click({ force: true });

      cy.get('#nome_divisao_input').type('548754');

      cy.get('#btnSalvarCliente').click();

})
})
