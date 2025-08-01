describe('Cadastro de pessoas', () => {
  it('Deve cadastrar uma pessoa', () => {
    cy.visit('https://hlis.pslogistica.com.br/login/');

    // Inserção das credenciais
    cy.get(':nth-child(1) > #search').type('gabriel.santos');
    cy.get(':nth-child(2) > #search').type('12345');
    cy.get('.box_fields > div.w-100 > .custom-button-login').click();

    // Seleciona o cliente, base e divisão
    cy.get('#cliente')
      .should('be.visible')
      .select('HNK - CKBR BEBIDAS LTDA')
      .should('have.value', '57');

    cy.get('#base')
      .should('be.visible')
      .select('Matriz PierServ')
      .should('have.value', '1');

    cy.get('#divisao')
      .should('be.visible')
      .select('CKBR BEBIDAS LTDA')
      .should('have.value', '66');

    cy.get('.d-flex > .btn').click();

    cy.get(':nth-child(5) > .link_menu > #title_menu').click();
    cy.get('.active > .submenu > :nth-child(1) > a').click();
    cy.get(':nth-child(1) > .d-flex > .btn').click({ force: true });

    cy.get('#razao_social_nome').type('Testad');
    cy.get('#nome_fantasia').type('Tee');
    cy.get('#cnpj_cpf').type('20.777.998/0001-42');
// Dados -endereço
    cy.get('#inscricao_estadual').type('ISENTO');
    cy.get('#email_contato').type('Teste@tt.com');
    cy.get('#telefone_contato').type('11992999299');
    cy.get('#cep').type('06160180');
    cy.wait(2000);
    cy.get('#numero').type('482');
    cy.get('#complemento').type('Bloco x apto x');
    cy.get('#telefone_endereco').type('11992909900');

    cy.get('#template_filter')
      .should('be.visible' , 'Selecione um Modelo')
      .select('70')
      .should('have.value', '70');

    cy.get('#btnCadastrarPessoa').click();

    cy.contains('Pessoa cadastrada com sucesso!');


  });
});
