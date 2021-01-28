describe( "Amozon Search Test", () => {
    it('successfully lods', () => {

      //Go to amazon.com
      cy.visit('https://www.amazon.com');
      
      // Find serach-field 
      // Type into search-field "Java"
      cy.get('#twotabsearchtextbox')
        .type('Java')
      
      // Find submit button for search field
      // Click on submit button
      cy.get('#nav-search-submit-button')
        .click()
      
      // Find firsl element on the departments list panel
      // Click it
      cy.get('#departments > ul > li:first a')
        .click()
      
      // Assert that it must be link to the books
      cy.url()
        .should('include', 'ref=sr_nr_n_1')
    
      // Find all items with data attribute equel to 'data-component-type=s-search-result'
      cy.get('div[data-component-type=s-search-result] h2 > a > span')
      .then(($span) => {

        // Get text from all spans
        // Search for 'Head First Java, 2nd Edition' in spans's text
        // Save result as hfjText1 variable
          const hfjText1 = $span.text().match(/Head\sFirst\sJava\,\s2nd\sEdition/g)[0];  
          
        // Reload the page
          cy.reload()
        
        // Check page if it still contain an item with 'Head First Java, 2nd Edition' in spans's text
        // Find all items with data attribute equel to 'data-component-type=s-search-result'
          cy.get('div[data-component-type=s-search-result] h2 > a > span').then(() => {
              
              // Get text from all spans
              // Search for 'Head First Java, 2nd Edition' in spans's text
              // Save result as hfjText1 variable
              const hfjText2 = $span.text().match(/Head\sFirst\sJava\,\s2nd\sEdition/g)[0];
              
              // Compare value of item's span with 'Head First Java, 2nd Edition' before reload and after
              expect(hfjText2).to.eq(hfjText1)
              
          })
        })
    })
})