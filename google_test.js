describe('Google search Test', () => {
    it('Go to serch results at google.com', () => {

        cy.visit('https://www.google.com');

        cy.get('input[type=text]')
          .type('wikipedia philosophy');

        cy.get('input[name~=btnK]:first')
          .click();

        cy
          .url()
          .should('include', 'wikipedia+philosophy')
    })
})
