/// <reference types="cypress" />

describe('Testes para a página de candidatura', () =>{
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app')
    })

    it('Deve levar o usuario até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('papito')
        cy.get('input[name="email"]').type('perfeito@gmail.com')
        cy.get('input[name="telefone"]').type('68992532665')
        cy.get('input[name="endereco"]').type('rua jest, bairro cypress, nois')
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})