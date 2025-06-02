import 'cypress-mochawesome-reporter/register';

describe('Verifying PLP', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000);
    cy.get('body').click(0, 0);
  });

  it('Verifying product in new arrival section', () => {
    cy.xpath("//a[contains(text(),'spirits')]")
    .should('be.visible')
    .click({ force: true });
});

it('should display all sort by options correctly', () => {
  const expectedOptions = [
    'Featured',
    'Best Selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, Low to High',
    'Price, High to Low',
    'Date, Old to New',
    'Date, New to Old'
  ].map(option => option.toUpperCase()); // Normalize expected values

  // Navigate to the Spirits & Liqueurs page
  cy.xpath("//a[contains(text(),'spirits')]")
    .should('be.visible')
    .click({ force: true });

  // Ensure the Sort By dropdown is visible and click to open it
  cy.get('.svg-wrapper.filter-svg-wrapper')
    .scrollIntoView({ duration: 300 })
    .should('be.visible')
    .click();

  // Target the dropdown menu and assert each option
  cy.get('.facet-filters__content')
    .find('.facet-filters__link')
    .should('have.length', expectedOptions.length)
    .should('be.visible')
    .each(($el, index) => {
      cy.wrap($el).invoke('text').then(text => {
        cy.log('Option text:', text.trim().toUpperCase()); // Debug log
        expect(text.trim().toUpperCase()).to.eq(expectedOptions[index]);
      });
    });
});

it('should display and click all sort by options correctly', () => {
  const expectedOptions = [
    'Featured',
    'Best Selling',
    'Alphabetically, A-Z',
    'Alphabetically, Z-A',
    'Price, Low to High',
    'Price, High to Low',
    'Date, Old to New',
    'Date, New to Old'
  ];

  // Go to the spirits page
  cy.xpath("//a[contains(text(),'spirits')]")
    .should('be.visible')
    .click({ force: true });

  // Function to open the sort dropdown
  const openDropdown = () => {
    cy.get('.svg-wrapper.filter-svg-wrapper')
      .scrollIntoView({ duration: 300 })
      .should('be.visible')
      .click();
  };

  // Open dropdown initially
  openDropdown();

  // Loop through each sort option
  expectedOptions.forEach((expectedText, index) => {
    // Open dropdown before every click (except first, already open)
    if (index > 0) openDropdown();

    // Get the current list again (re-rendered DOM)
    cy.get('.facet-filters__content')
      .find('.facet-filters__link')
      .should('have.length', expectedOptions.length)
      .eq(index)
      .should('be.visible')
      .invoke('text')
      .then(text => {
        expect(text.trim().toUpperCase()).to.eq(expectedText.toUpperCase());
      });

    // Click the sort option
    cy.get('.facet-filters__content')
      .find('.facet-filters__link')
      .eq(index)
      .click({ force: true });

    // Optional: validate page content updates after sorting
    // e.g., check for URL change, product order, etc.
    cy.wait(2000); // wait for the sorting effect (update as needed)
  });
});

});


