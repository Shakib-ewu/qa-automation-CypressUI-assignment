import 'cypress-mochawesome-reporter/register';

describe('Verifying Cart Drawer', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/',{ failOnStatusCode: false });
    cy.wait(4000);
    cy.get('body').click(0, 0);
  });

  it('Verifying empty cart', () => {
    cy.get('span.svg-wrapper > svg.icon-cart-empty').click();
    cy.xpath("//*[contains(text(), 'Your cart is empty')]").should('exist');
    cy.xpath("//a[@class='button cta-filled']").click();
    cy.xpath("//button[@id='quick-add-template--18331466006720__product-grid8117469249728-submit']").scrollIntoView()
    .should('exist')
    .click({ force: true });
    

    cy.wait(5000);
     cy.xpath("//button[contains(@id,'CartDrawer-Checkout')]")
    .should('exist')
    .click({ force: true });
 
    cy.go('back');


});
});
  