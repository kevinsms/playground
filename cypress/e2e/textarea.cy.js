describe('Login', () => {

    beforeEach(() => {
        cy.goHome()
    })

    it('Deve logar com sucesso', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type("Boas vindas ao Cypress Skills. Um curso de formação completo para você aprender sobre automação de testes com cypress")
    })

})

