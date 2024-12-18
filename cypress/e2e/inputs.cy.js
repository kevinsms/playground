describe('Input Fields', () => {


    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
    })

    it('Deve preencher o campo texto', () => {
        cy.goTo('/input-fields', 'Input Fields')
        cy.get('[data-cy="fullname"]')
            .type('Kevin silva')
        cy.get('[data-cy="email"]')
            .type('kevin.cy@hotmail.com')
        cy.get('input[name="number"]')
            .type("2024")
        cy.get('input[name="date"]')
            .type("2024-12-01")
    })
})