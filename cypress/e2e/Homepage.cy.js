import 'cypress-mochawesome-reporter/register';

describe('Verifying Homepage', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000);
    cy.get('body').click(0, 0);
  });

  it('Verifying product in new arrival section', () => {
    cy.scrollTo('center');
    cy.xpath('//a[contains(text(), "Glen Keith 21 Year Old Speyside Single Malt")]')
    .should('exist')
    .first()
    .click({ force: true });
});

it('should scroll to and display the Shop By Brand section title and subtitle', () => {
  // Scroll to the section title
  cy.contains('h2', 'Shop By Brand')
    .scrollIntoView()
    .should('be.visible');

  // Now assert the subtitle text after scrolling
  cy.contains('Explore Top Picks from Leading Brands for Every Taste and Occasion')
    .should('be.visible');
});

it('should navigate to the correct brand page when a brand card is clicked', () => {
  cy.contains('Douglas Laing & Co.').click();
  cy.url().should('include', '/collections/douglas-laing'); // Adjust based on real URL
  cy.go('back'); // go back for next test

  cy.contains('h4','Bowmore').click({ force: true });
  cy.url().should('include', '/collections/bowmore');
  cy.go('back'); // go back for next test

  cy.contains('h4','The Macallan').click({ force: true });
  cy.url().should('include', '/collections/the-macallan');
  cy.go('back'); // go back for next test

  cy.contains('h4','Laphroaig').click({ force: true });
  cy.url().should('include', '/collections/laphroaig');
  cy.go('back'); // go back for next test
});


const tabNames = ['Scotch', 'Whisky', 'Wine', 'Spirits', 'Beer', 'Featured'];

it('should click on each nav tab and verify product visibility', () => {
  cy.get('.tab_btn')
    .should('have.length', tabNames.length)
    .each(($tab, index) => {
      const tabName = tabNames[index];

      cy.wrap($tab)
        .scrollIntoView({ duration: 300 })
        .should('be.visible')
        .click({ force: true });

      cy.log(`Clicked tab: ${tabName}`);

      // Wait for product container to update
      cy.get('.tab_header', { timeout: 5000 })
        .should('exist')
        .and('be.visible');

      // Optional short delay for UI transition
      cy.wait(300);
    });
});

it('Verifying explore now button and collections', () => {
  cy.xpath("//span[@class='cta-filled home-order-button']")
    .first()
    .scrollIntoView({ duration: 300 })
    .should('be.visible')
    .click();
    cy.contains('Collections').should('be.visible');

});


});






  