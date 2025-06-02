import 'cypress-mochawesome-reporter/register';

describe('Verifying Footer Sections', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/',{ failOnStatusCode: false });
    cy.wait(4000);
    cy.get('body').click(0, 0);
  });

  context('Visit Our Store Section', () => {
    it('Checks address and phone number and opening hour are visible', () => {
    cy.scrollTo('bottom');
      cy.contains('1345 32 Ave NE. Calgary, AB').scrollIntoView().should('be.visible');
      cy.contains(' +1 (403) 277-1868').scrollIntoView().should('be.visible');
     cy.xpath("//div[normalize-space()='Sunday to Tuesday']").should('have.text', 'Sunday to Tuesday');
    cy.xpath("//div[normalize-space()='Wednesday to Friday']").should('have.text', 'Wednesday to Friday');
    });


    it('Checks social icons are visible', () => {
      cy.get('a[href*="facebook"]').should('be.visible');
      cy.get('a[href*="instagram"]').should('be.visible');
      cy.get('a[href*="youtube"]').should('be.visible');
    });
  });

  context('OUR COLLECTION Section', () => {
  const collectionLinks = [
    { label: 'SCOTCH', path: '/collections/scotch' },
    { label: 'WHISKY', path: '/collections/whisky' },
    { label: 'WINE', path: '/collections/wine' },
    { label: 'SPIRITS', path: '/collections/spirits' },
    { label: 'BEER', path: '/collections/beer' },
    { label: 'MY ACCOUNT', path: '/account' },
    { label: 'WISHLIST', path: '/pages/swym-wishlist' },       // Adjust path if needed    // Adjust path if needed
     { label: 'PRIVACY POLICY', path: '/pages/privacy-policy' },
    { label: 'TERMS & CONDITIONS', path: '/pages/terms-conditions' },
   

  ];

  // Define the helper function
  function clickAndVerify(label, expectedPath) {
    cy.contains(label).scrollIntoView().click({ force: true });
    cy.url().should('include', expectedPath);
    cy.go('back'); // if needed
  }

  // Loop through all the links and test them
  collectionLinks.forEach(link => {
    it(`should redirect correctly for ${link.label}`, () => {
      clickAndVerify(link.label, link.path);
    });
  });
});

});
  