import 'cypress-mochawesome-reporter/register';

describe('Verifying Gift Page', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/');
    cy.wait(4000);
    cy.get('body').click(0, 0);
  });

  
  it('verifying gift center page', () => {
    // Navigate to gift card page
    cy.xpath("//a[contains(text(),'Make Their Day')]")
      .should('be.visible')
      .scrollIntoView()
      .click();

    cy.xpath("//a[contains(text(),'Buy a Gift Card')]")
      .should('be.visible')
      .click();

    cy.url().should('include', '/products/craft-cellars-online-gift-card');

    // Add to cart
    cy.xpath("//button[contains(@class,'product-form__submit button button--full-width cta-filled--liquid button--primary')]")
      .eq(0)
      .should('be.visible')
      .click({ force: true });

    // Close cart drawer
    cy.xpath("//*[contains(@onclick, \"this.closest('cart-drawer').close()\")]")
      .should('exist')
      .should('be.visible')
      .click({ force: true });

    // Enable gift option
    cy.xpath("//span[contains(.,'I want to send this as a gift')]")
      .should('be.visible')
      .click({ force: true });

    // Fill out gift form
    cy.xpath("//input[@placeholder='Email']")
      .should('be.visible')
      .type('sakib.sarkar@bevycommeerce.com');

    cy.xpath("//input[@placeholder='Name']")
      .should('be.visible')
      .type('sakib Sarkar');

    cy.xpath("//textarea[@class='text-area field__input']")
      .should('be.visible')
      .type('This is a test message');

    // Interact with date picker
    cy.xpath("//input[@class='field__input text-body']")
      .should('be.visible')
      .click()
      .clear()
      .type('2025-06-20');

    // Add again to cart
    cy.xpath("//button[contains(@class,'product-form__submit button button--full-width cta-filled--liquid button--primary')]")
      .eq(0)
      .should('be.visible')
      .click({ force: true });

    // Proceed to checkout
    cy.xpath("//button[contains(@class, 'cart__checkout-button')]", { timeout: 10000 })
      .should('be.visible')
      .eq(0)
      .click({ force: true });
  });


  it('should show validation errors when required gift fields are empty', () => {
  // Navigate to gift card page
   cy.xpath("//a[contains(text(),'Make Their Day')]")
      .should('be.visible')
      .scrollIntoView()
      .click();

    cy.xpath("//a[contains(text(),'Buy a Gift Card')]")
      .should('be.visible')
      .click();
  cy.url().should('include', '/products/craft-cellars-online-gift-card');

  // Click gift option
  cy.xpath("//span[contains(.,'I want to send this as a gift')]")
    .should('be.visible')
    .click({ force: true });

  // Submit without filling any gift fields
  cy.xpath("//button[contains(@class,'product-form__submit button button--full-width cta-filled--liquid button--primary')]")
    .eq(0)
    .click({ force: true });

  // Assert expected validation messages (adjust based on actual app behavior)
  cy.contains("Email can't be blank").should('be.visible');
});

});







