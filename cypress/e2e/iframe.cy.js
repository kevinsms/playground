describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma página que ten Iframe', ()=>{
        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe)=>{
                const $body = $iframe.contents().find('body')

                cy.wrap($body)
                    .find('#fullname')
                    .type('Kevin Silva')
            })
    })

    it('Deve preencher o nome em uma página que tenha iframe com o "cypress-iframe"', () => {
        cy.frameLoaded('[data-cy="iframe-inputs"]'); // Garante que o iframe está carregado
        cy.iframe('[data-cy="iframe-inputs"]') // Seleciona o iframe
            .find('#fullname') // Encontra o campo de texto no iframe
            .type('Kevin Silva'); // Insere o nome
    });
    
})