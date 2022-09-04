require('cypress-plugin-retries');

before(function () {
  cy.visit('https://amazon.in');
});