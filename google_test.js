describe( 'Google Search Test', () => {
    it( 'Visit the Google Serch Page', () => {
        cy.visit('https://www.google.com')

        cy.get('.gLFyf')
          .type('wikipedia')
          .should('have.value', 'wikipedia')

        cy.contains('Пошук Google').click()

        cy.get('.gLFyf')
          .should('have.value', 'wikipedia')
    })
})