describe('Select', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/tables', 'Tables')
    })
    it('Deve validar a linha do Github', () => {
        cy.contains('table tbody tr', '1004')
            .should('be.visible')
            .and('contain', 'Github')
            .and('contain', 'papitodev')
            .and('contain', 'Ativo')
    })
    it('Deve remover uma rede social', () => {
        const name = 'Facebook'

        cy.contains('table tbody tr', '1002')
            .find('.remove-item')
            .click()

        cy.contains('button', 'Excluir')
            .click()

        cy.get('table tbody')
            .should('not.contain',name)
    })
    it('Deve permanecer na tabela ao desistir a exclusão', () => {
        const name = 'Facebook'

        cy.contains('table tbody tr', '1005')
            .find('.remove-item')
            .click()

        cy.contains('button', 'Cancelar')
            .click()

        cy.get('table tbody')
            .should('contain',name)
    })

    it('Deve validar o link que abre o instagram em outra aba', ()=>{
        const id = 'instapapito'

        cy.contains('table tbody tr', id)
            .contains('a','Visitar')
            .should('have.attr','href','https://instagram.com/instapapito')
            .and('have.attr','target','_blank')
    })
})