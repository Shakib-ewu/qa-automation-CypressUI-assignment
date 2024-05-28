// Define the array of class selectors
const classSelectors = [
    '.tbl-section-items-wrap > .h-full > :nth-child(1) > [href="/products/men/"]',
    '[href="/products/men/?style=casual"]',
    '[href="/products/men/converse/"]',
    '[href="/products/men/birkenstock/"]',
    '[href="/products/men/all-brands/sandals/"]',
    // Add the rest of your 20 class selectors here
  ];
  
  // Cypress test
  describe('Check if elements are clickable and present on nav items', () => {
    it('checks each element', () => {
      // Open navigation items
      cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
      cy.get('.items-center> .flex > .text-black').eq(1).click({ force: true });
  
      // Iterate over each class selector
      classSelectors.forEach((selector) => {
        cy.get('body').then(($body) => {
          if ($body.find(selector).length > 0) {
            // Element is present, now check if it's clickable
            cy.get(selector).should('be.visible').and('not.be.disabled').click({ force: true })
              .then(() => {
                cy.log(`${selector} is clickable`);
              });
          } else {
            cy.log(`${selector} is not present on the page`);
          }
        });
      });
    });
  });
  