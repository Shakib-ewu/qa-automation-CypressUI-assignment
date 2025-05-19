describe('Verifying Homepage', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('/');
      cy.wait(4000);
      cy.get('body').click(0, 0);
    });

    it('Verifying sample product detection', () => {
        cy.scrollTo('center');
        cy.xpath('//a[contains(text(), "Glen Keith 21 Year Old Speyside Single Malt")]')
    .should('exist')
    .first()
    .click({ force: true });
    });
});