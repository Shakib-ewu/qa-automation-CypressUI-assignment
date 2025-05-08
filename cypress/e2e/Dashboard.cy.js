import 'cypress-mochawesome-reporter/register';

describe('Verifying Homepage', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000);
  });

  it('Verifying Homepage', () => {
    cy.scrollTo('center');
    cy.xpath('//a[contains(text(), "Craft Cellars Presents Champagne Gremillet Fine Wine Tasting May 15, 2025")]')
    .should('exist')
    .first()
    .click({ force: true });
});
});
  