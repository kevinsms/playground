describe('Tags', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()
        cy.get('select[aria-label="Month"]')
            .select('Março')
        cy.get('input[aria-label="Year"]')
            .type('2001')
        cy.get('span[aria-label="Março 23, 2001"]')
            .click()
    })
})