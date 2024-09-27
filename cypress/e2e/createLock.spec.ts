describe('Create Lock', () => {
  beforeEach(() => {
    cy.visit('/governance');
  });

  it('should allow the user to create a lock', () => {
    cy.contains('Create Lock').click();
    cy.get('input[placeholder="Enter amount"]').type('500');
    cy.get('input[placeholder="Enter duration"]').type('52');

    cy.contains('Create').click();

    cy.contains('Lock created successfully!').should('exist');
  });
});
