describe('Drag and Drop', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()
        cy.goTo('/tasks', 'Task Board')
    })

    it('Deve finalizar uma tarefa', () => {
        const task = 'Definir requisitos do projeto'

        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable=true]', task)
            .trigger('dragstart', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .contains('div[draggable=true]', task)
            .should('be.visible')
    })
})