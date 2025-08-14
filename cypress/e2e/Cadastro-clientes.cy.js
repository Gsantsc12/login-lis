describe('Cadastro de clientes', () => {
  it('Deve cadastrar um cliente', () => {
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
    cy.get('.active > .submenu > :nth-child(2) > a').click();

    cy.contains('a.btn.btn-pier', 'Cadastrar').click({ force: true });

    cy.get('#sigla_cliente').click().type('ZAW');
    cy.get('.form-input > .btn').click();

    cy.get('#select-galpao')
      .should('be.visible')
      .select('1')
      .should('have.value', '1');

    cy.wait(2000);

    cy.contains('#btn-adicionar-galpao', 'Adicionar').click({ force: true });

    cy.get('#nome_divisao_input').type('545');

    cy.get('.col-md-8 > [data-bs-toggle="modal"]').click();
    cy.get('#cnpj_pesq_cliente').type('30543189000120');
    cy.contains('#btn_carreg_infos_cliente', 'Pesquisar').click({
      force: true,
    });

    cy.get('#body_pessoas_tabela > tr > :nth-child(1)').click();

    // Campo linhas_separacao[1]
    cy.get('input[name="linhas_separacao[1]"]')
      .scrollIntoView()
      .should('exist')
      .type('50', { force: true });

    // Taxa Administrativa
    cy.get('input[name="taxa_administrativa[1]"]').type('1', { force: true });

    // SLA Recebimento
    cy.get('input[name="sla_recebimento[1]"]').type('1', { force: true });

    // SLA Retorno Evento
    cy.get('input[name="sla_retorno_evento[1]"]').type('1', { force: true });

    // Salvar cliente
    cy.get('#btnSalvarCliente').click({ force: true });

    // Validação final
    cy.contains('Cliente cadastrado com sucesso!').should('be.visible');
  });
});
