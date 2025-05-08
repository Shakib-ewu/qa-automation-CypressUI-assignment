describe("Verifying Account Page", () => {

  beforeEach(() => {

      cy.viewport(1920,1080);
      cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('/')
      cy.wait(4000)
  })

  it('Verifying products in PDP', () => {
    cy.scrollTo('center');
    cy.xpath('//a[contains(text(), " Craft Cellars Presents Champagne Gremillet Fine Wine Tasting May 15, 2025")]')
      .should('exist').eq(0).click({force:true}); // Added assertion for better test validation
      cy.xpath('//span[@class="swym-wishlist-cta"]').invoke('show').click({force:true});
      cy.xpath('//button[@id="ProductSubmitButton-template--18252412780736__main"]').eq(0).click({force:true});
      cy.wait(4000);
      cy.xpath("//button[@class='cart__checkout-button button cta-filled']").eq(0).click({force:true});
      cy.xpath("//a[@href='https://craftcellars.ca']").click();
      cy.xpath('//a[contains(text(), " Craft Cellars Presents Champagne Gremillet Fine Wine Tasting May 15, 2025")]').eq(0).click({force:true});
      cy.scrollTo('center');
      cy.get("a[href='/blogs/news/caramel-espresso-martini']").click({ force: true });
      cy.go('back');
      cy.get("a[href='/blogs/news/citrus-gin-fizz']").click({ force: true });
      cy.go('back');
      cy.get("a[href='/blogs/news']").eq(0).click({ force: true });
      cy.go('back');



    

     
});
});
  