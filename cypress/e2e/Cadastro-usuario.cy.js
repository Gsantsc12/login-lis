const { TIMEOUT } = require('dns');

describe('Cadastro de Usuarios', () => {
  it('Deve cadastrar um usuario', () => {
    cy.visit('https://hlis.pslogistica.com.br/login/'); // Altere para a URL real

    // Inserçao das credencias
    cy.get(':nth-child(1) > #search').type('gabriel.santos');
    cy.get(':nth-child(2) > #search').type('12345');
    cy.get('.box_fields > div.w-100 > .custom-button-login').click({
      force: true,
    });
    // Seleciona o cliente, base e divisão
    cy.get('#cliente')
      .should('be.visible', 'Selecionar cliente')
      .select('HNK - CKBR BEBIDAS LTDA')
      .should('have.value', '57');

    cy.get('#base')
      .should('be.visible', 'Selecionar Base')
      .select('Matriz PierServ')
      .should('have.value', '1'); // Confirma se foi selecionado corretamente

    cy.get('#divisao')
      .should('be.visible', 'Selecionar Base')
      .select('CKBR BEBIDAS LTDA')
      .should('have.value', '66');
    cy.get('.d-flex > .btn').click();

    cy.get(':nth-child(5) > .link_menu > #title_menu').click();
    cy.get('.active > .submenu > :nth-child(3) > a').click();

    cy.contains('a.btn.btn-pier', 'Cadastrar').click({ force: true });

    cy.get('#username').type('te.te');
    cy.get('#senha').type('teste12');
    cy.get('#confirmar_senha').type('teste12');
    cy.get('#email').type('teste@tiuys.com');
    cy.get('#nome').type('teste');
    cy.get('#sobrenome').type('teste');
    cy.get('#telefone').type('11999009900');
    cy.get('#data_nascimento').should('be.visible').type('1995-08-01'); // Formato YYYY-MM-DD

    cy.get('.col-md-12 > .btn').click();

    cy.get(':nth-child(2) > .card > .card-body > .btn').click();
    cy.get('.btn-close');
    cy.wait(5000);
    cy.get('#btn_criar_usuario').click({ force: true });

    cy.contains('Usuário criado com sucesso!');
  });
});
