Cypress.Commands.add('visitApp', () => {
  return cy.visit('http://localhost:8888');
});
