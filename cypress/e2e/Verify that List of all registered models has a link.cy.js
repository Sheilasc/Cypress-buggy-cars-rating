describe('Test to verify that List of all registered models has a link', () => {
  it('Should Verify that List of all registered models has a link', () => {
    cy.visit('https://buggy.justtestit.org/')

  //Verify Overall Rating section is displayed on the page
  cy.get('h2').contains('Overall Rating');

  //Verify List of all registered models is displayed on the section
  cy.get('h3').contains('List of all registered models.');

  //Verify the href exist and is visible
  cy.get ('[href="/overall"]').should("be.visible");
 
  })
})