import 'cypress-mochawesome-reporter/register';

describe('Verifying Cart Drawer', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000);
  });

  it('Verifying empty cart', () => {
    cy.get('span.svg-wrapper > svg.icon-cart-empty').click();
    cy.xpath("//*[contains(text(), 'Your cart is empty')]").should('exist');
    cy.xpath("//a[@class='button cta-filled']").click();
    cy.xpath("//button[contains(@aria-labelledby,'quick-add-template--18258470273216__product-grid8117469249728-submit title-template--18258470273216__product-grid-8117469249728')]").scrollIntoView()
    .should('exist')
    .click({ force: true });
    

    cy.wait(5000);
     cy.xpath("//button[@name='button-route-3']")
    .should('exist')
    .click({ force: true });



});
});
  