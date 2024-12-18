describe('Radio Buttons', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve marcar o framework no curso Cypress Skills', () => {
        cy.contains('label', 'Cypress')
            .click()
    })
})