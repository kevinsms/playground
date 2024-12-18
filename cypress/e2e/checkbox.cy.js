describe('CheckBox', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/checkbox', 'Checkbox')
    })

    it('Deve marcar as linguagens que usam Node.js', () => {

        const langs = ['javascript', 'typescript']

        langs.forEach((lang) => {
            cy.get(`label[for="${lang}"]`)
                .click()
        })

    })
    it('Deve marcar todas as opções', () => {

        const langs = ['javascript', 'typescript', 'python', 'rust', 'go']

        langs.forEach((lang) => {
            cy.get(`label[for="${lang}"]`)
                .click()
        })
    })

})

