import 'cypress-mochawesome-reporter/register';

describe('Verifying Homepage', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000);
  });

  it('Verifying video detection', () => {
    cy.scrollTo('center');
    cy.xpath('//a[contains(text(), "Jack Daniel\'s Barrel Proof Rye - Craft Cellars Single Barrel Store Pick")]')
      .should('exist').eq(0).click({force:true}); // Added assertion for better test validation
});
});
  