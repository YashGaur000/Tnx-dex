describe('Extend Lock', () => {
  beforeEach(() => {
    // Visiting the page where Extend Lock is present
    cy.visit('/governance/managevetenex/extend');
  });

  it('should allow the user to extend a lock', () => {
    // Simulate the lock duration input
    cy.get('input[placeholder="Enter lock duration in weeks"]').type('12');

    // Simulate the button click
    cy.contains('Extend').click();

    // Ensure that a success message is shown
    cy.contains('Lock extended successfully!').should('exist');
  });
});
