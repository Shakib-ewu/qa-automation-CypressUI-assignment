describe("Verifying Account Page", () => {

  beforeEach(() => {

      cy.viewport(1920,1080);
      cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('/')
      cy.wait(4000)
      cy.get('body').click(0, 0);
  })

  it('Verifying products in PDP', () => {
    cy.scrollTo('center');
    cy.xpath('//a[contains(text(), " Glen Keith 21 Year Old Speyside Single Malt")]')
      .should('exist').eq(0).click({force:true}); // Added assertion for better test validation
      cy.xpath('//span[@class="swym-wishlist-cta"]').invoke('show').click({force:true});
      cy.xpath('//button[@id="ProductSubmitButton-template--18252412780736__main"]').eq(0).click({force:true});
      cy.wait(4000);
      cy.xpath("//button[@class='cart__checkout-button button cta-filled']").eq(0).click({force:true});
      cy.xpath("//a[@href='https://craftcellars.ca']").click({force:true});
      cy.xpath('//a[contains(text(), " Glen Keith 21 Year Old Speyside Single Malt")]').eq(0).click({force:true});
      cy.scrollTo('center');
      cy.get("a[href='/blogs/news/caramel-espresso-martini']").click({ force: true });
      cy.go('back');
      cy.get("a[href='/blogs/news/citrus-gin-fizz']").click({ force: true });
      cy.go('back');
      cy.get("a[href='/blogs/news']").eq(0).click({ force: true });
      cy.go('back');



    

     
});

it.only('Verifies product, adds to wishlist and cart, checks out and visits blogs', () => {
  // Scroll to center and open the product
  cy.scrollTo('center');
  cy.xpath('//a[contains(text(), "Glen Keith 21 Year Old Speyside Single Malt")]')
    .should('exist')
    .first()
    .click({ force: true });

  // Add to wishlist
  cy.xpath('//span[@class="swym-wishlist-cta"]').invoke('show').click({force:true});
  // Add to cart
  cy.xpath('//button[@id="ProductSubmitButton-template--18288524755136__main"]')   //ProductSubmitButton-template--18258470961344__main
    .should('be.visible').
    eq(0).click({ force: true });



  // Proceed to checkout
  cy.xpath("//button[contains(@class, 'cart__checkout-button')]", { timeout: 10000 })
    .should('be.visible').eq(0)
    .click({ force: true });

    cy.xpath("//a[@href='https://craftcellars.ca']").click({force:true});

  // Reopen the same product
  cy.xpath('//a[contains(text(), "Glen Keith 21 Year Old Speyside Single Malt")]')
    .should('exist')
    . eq(0)
    .click({ force: true });


  // Visit blog: Caramel Espresso Martini
  cy.get("a[href='/blogs/news/caramel-espresso-martini']")
    .should('exist').scrollIntoView()
    .click({ force: true });
  cy.go('back');

  // Visit blog: Citrus Gin Fizz
  cy.get("a[href='/blogs/news/citrus-gin-fizz']")
    .should('exist').scrollIntoView()
    .click({ force: true });
  cy.go('back');

  // Visit the general blog page
  cy.get("a[href='/blogs/news']")
    .first()
    .should('exist').scrollIntoView()
    .click({ force: true });
  cy.go('back');
});

});


  