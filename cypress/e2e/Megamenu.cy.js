
/*import 'cypress-mochawesome-reporter/register';

describe('Mega Menu Navigation', () => {
  const menuItems = ['Highland', 'Lowland', 'Campbelton', 'Island', 'Islay', 'Speyside', 'View all'];

   const scotchSingleMaltItems = [
    '#HeaderMenu-scotch-single-malt-highland',
    '#HeaderMenu-scotch-single-malt-lowland',
    '#HeaderMenu-scotch-single-malt-campbeltown',
    '#HeaderMenu-scotch-single-malt-island',
    '#HeaderMenu-scotch-single-malt-islay',
    '#HeaderMenu-scotch-single-malt-speyside',
    '#HeaderMenu-scotch-single-malt-view-all'
  ];

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000); // Optional: Replace with wait for specific page element
  });


it('should trigger menu hover for "Scotch" and click all submenu items under "Single Malt"', () => {
    // Hover over the "Scotch" menu item
    cy.contains('.mega-menu', 'Scotch')
      .trigger('mouseover', { force: true });

    // Ensure the menu content is visible
    cy.get('.mega_menu_content').should('be.visible');

    // Hover over the "Single Malt" submenu under Scotch
    cy.contains('.mega_menu_content', 'Single Malt')
      .trigger('mouseover', { force: true });

    // Wait for the submenu items to be available (you can adjust this to wait for a specific element to appear)
    cy.get('ul.list-unstyled > li').should('have.length.greaterThan', 0);

    // Iterate over each Single Malt submenu item and click it
    scotchSingleMaltItems.forEach(item => {
      // Scroll into view before clicking
      cy.get(item)
        .scrollIntoView()
        .click({ force: true });

      // Verify that the page has loaded after clicking the item (you can adjust this based on your actual page)
      cy.get('body').should('be.visible'); // Replace with a specific element to verify page load
      cy.wait(1000); // Optional: wait between clicks for stability
    });
  });


});*/

import 'cypress-mochawesome-reporter/register';

describe('Mega Menu Navigation - Dynamic Submenu Test', () => {
  const parentMenu = 'Scotch';
  const subMenu = 'Single Malt';

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.wait(4000); // Optional: Replace with smarter waits
  });

  it.skip('should dynamically click each submenu under Single Malt', () => {
    cy.contains('.mega-menu', parentMenu)
      .trigger('mouseover', { force: true });

    cy.contains('.mega_menu_content', subMenu)
      .trigger('mouseover', { force: true });

    // Get all visible submenu links
    cy.get('ul.list-unstyled > li:visible a').each(($link, index, $list) => {
      const linkText = $link.text().trim();
      const href = $link.attr('href');

      cy.log(`Visiting: ${linkText} -> ${href}`);

      // Visit the link directly instead of clicking (avoids stale DOM)
      cy.visit(href);

      // Assert page loaded — you can use URL or content validation
      cy.url().should('include', href);
      cy.wait(1000); // Optional

      
      // Go back to the homepage and re-open menu for next iteration
      cy.visit('/');
      cy.contains('.mega-menu', parentMenu).trigger('mouseover', { force: true });
      cy.contains('.mega_menu_content', subMenu).trigger('mouseover', { force: true });
    });
  });
});


  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.wait(4000); // Optional: Replace with smarter waits
  });
const parentMenu = 'Scotch';
  const subMenu = 'Single Malt';


  it('should dynamically click each submenu under Single Malt (internal links only)', () => {
    const isExternalLink = (url) => /^https?:\/\//.test(url);

    cy.contains('.mega-menu', parentMenu)
      .trigger('mouseover', { force: true });

    cy.contains('.mega_menu_content', subMenu)
      .trigger('mouseover', { force: true });

    cy.get('ul.list-unstyled > li:visible a').each(($link, index, $list) => {
      const linkText = $link.text().trim();
      const href = $link.attr('href');

      if (!href) {
        cy.log(`Skipping empty href for: ${linkText}`);
        return;
      }

      if (isExternalLink(href)) {
        cy.log(`Skipping external link: ${href}`);
        return;
      }

      cy.log(`Visiting: ${linkText} -> ${href}`);
      cy.visit(href, { failOnStatusCode: false });

      // Optional: Assert page load
      cy.url().should('include', href);
      cy.wait(1000);

      // Go back and reopen menu
      cy.visit('/');
      cy.contains('.mega-menu', parentMenu).trigger('mouseover', { force: true });
      cy.contains('.mega_menu_content', subMenu).trigger('mouseover', { force: true });
    });
  });