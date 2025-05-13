import 'cypress-mochawesome-reporter/register';

describe('Verifying Search', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000);
  });

  it('should display the search input and allow typing', () => {
  cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click(); // open search if hidden
  cy.get('input[name="q"]').first().type('whisky{enter}');

});

it('should return results for a valid keyword', () => {
  cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click(); // open search if hidden
  cy.get('input[name="q"]').first().type('whisky{enter}', { delay: 100 });
  cy.url().should('include', 'q=whisky');

  // Normalize and assert on the text content
  cy.xpath("//h1[@class='h2 custom_search_heading page-width']")
  .should('contain.text', 'whisky'); // use lowercase if the real content is in lowercase

});


});
  