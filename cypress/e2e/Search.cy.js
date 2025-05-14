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

it('should display no results message for an invalid search', () => {
 cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click(); // open search if hidden
  cy.get('input[name="q"]').first().type('xyz123notfound{enter}');
  cy.contains('No results found').should('be.visible');
});

it('should handle special characters gracefully', () => {
 cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click();
  cy.get('input[name="q"]').first().type('!@#$%^&*(){enter}');
  cy.contains('Search Results For !@#$%^&*()').should('be.visible');
});

it('should show suggestions while typing', () => {
   cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click();
  cy.get('input[name="q"]').first().type('wine');
  cy.get('.predictive_search_result_left').should('be.visible');
});

it('should return same results for upper/lowercase terms', () => {
  cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click();
  cy.get('input[name="q"]').first().type('WHISKY{enter}');
  cy.get('.product-grid').should('exist');

  // Go back to the previous page
  cy.go('back');

  // Reopen the search modal again (because it's likely hidden now)
  cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click();

  // Clear the input and type the lowercase version
  cy.get('input[name="q"]').first().clear().type('whisky{enter}');
  cy.get('.product-grid').should('exist');
});

it('should navigate to correct product page on result click', () => {
  cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click();
  cy.get('input[name="q"]').first().type('scotch{enter}');
  cy.get('.product-grid a:visible').first().click();
  cy.url().should('include', '/products/');
});

it('should load more products when "Load More" is clicked', () => {
  cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click();

  // Type a keyword and press enter
  cy.get('input[name="q"]').first().type('whisky{enter}');

  // Wait for initial products to load
  cy.get('.product-grid .card__content').then(initialItems => {
    const initialCount = initialItems.length;

    // Click the "Load More" button
    cy.contains('button', 'Load More')
      .should('be.visible')
      .click();

    // Assert more products are loaded
    cy.get('.product-grid .card__content')
      .should('have.length.greaterThan', initialCount);
  });
});

it('should find a specific product by search', () => {
  const productName = 'Glen Scotia Victoriana Campbeltown Single Malt Scotch Whisky';

  // Open the search modal/input
   cy.xpath("//input[contains(@id,'Search-In-Modal')]").eq(0).click();

  // Type the product name and press Enter
  cy.get('input[name="q"]').first().type(`${productName}{enter}`);

  // Verify search results contain the product
  cy.get('#CardLink--8117308457152')
    .should('exist')
    .contains(productName)
    .should('be.visible');
});





});
  