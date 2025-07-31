describe('Fluxo de Cadastro de item', () => {
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

      cy.get(':nth-child(3) > .link_menu > #title_menu').click();
      cy.get('.active > .submenu > :nth-child(1) > a').click();
      cy.get('[href="/skus/cad_sku/"]').click();

      // Dados cliente
      cy.get('#sigla').type('HNK');
      cy.get('#razao_social_cliente').click();
      cy.get('#select-galpao')
      .should('be.visible' ,'Selecione')
      .select('Filial PierServ 878')
      .should('have.value', '4');
      cy.get('#btn-adicionar-galpao').click();
      cy.wait(3000);
      cy.get('#modalGalpao > .modal-dialog > .modal-content > .modal-header > .btn-close').click();

        //
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-input > input').type('12345');
      cy.get(':nth-child(1) > :nth-child(3) > .form-input > input').type('vvbk');

      cy.get('#grupo_item')
      .should('be.visible' , 'Selecione')
      .select('MATERIAL PROMOCIONAL')
      .should('have.value', '18');

      cy.get('#familia_item')
      .should('be.visible' , 'Selecione')
      .select('19')
      .should('have.value', '19');
      cy.wait(3000);

      cy.get(':nth-child(3) > :nth-child(1) > .form-input > input').type('teste');
      cy.get(':nth-child(3) > :nth-child(2) > .form-input > input').type('teste');
      cy.get(':nth-child(3) > :nth-child(3) > .form-input > input').type('teste');

      cy.get(':nth-child(3) > :nth-child(3) > .form-input > input').type('1');
      cy.get('.row > :nth-child(1) > input').type('1');
      cy.get('#altura_item').type('1');
      cy.get('.col-md-8 > .box_line > .row > :nth-child(2) > :nth-child(1) > input').type('1');
      cy.get('.row > :nth-child(2) > input').type('1');
      cy.get('#largura_item').type('1');
      cy.get('.row > :nth-child(3) > input').type('1');
      cy.get('#comprimento_item').type('1');

      cy.get(':nth-child(3) > .box_line > .row > :nth-child(1) > :nth-child(1) > input').type('1');
      cy.get(':nth-child(3) > .box_line > .row > :nth-child(2) > :nth-child(1) > input').type('1');
      cy.get('.box_line > .row > :nth-child(3) > :nth-child(1) > input').type('1');
      cy.get(':nth-child(3) > .box_line > .row > :nth-child(1) > :nth-child(2) > input').type('1');
      cy.get('.row > :nth-child(3) > :nth-child(2) > input').type('1');

      cy.get('#embalagem')
      .should('be.visible' , 'Selecione')
      .select('17')
      .should('have.value', '17');

      cy.get('#btn_salvar_sku').click();

      cy.contains('SKU cadastrado com sucesso!').should('be.visible');
  });
})
