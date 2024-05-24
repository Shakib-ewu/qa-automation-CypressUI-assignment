describe("Verifying Homepage", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
        
        //cy.get('[data-qa="hocewoqisi"]').type('nocag98406@rc3s.com')
        //cy.get('[data-qa="jobodapuxe"]').type('Ss@123456789').should('be.visible')
        //cy.get('[data-qa="wusegasoju"] > .checkbox-radio').click()
        //cy.get('[data-qa="sibequkica"]').click({force:true})
        //cy.get("a[class='active']").click() logo click

    })
    it("Verifying Hero Banner", () => {
       
        cy.wait(6000)
        cy.get('.swiper-slide-active > .relative > .absolute').click()
        cy.get('.h-full > .text-center').contains('All Products')
        cy.wait(5000)
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.get('.swiper-pagination > :nth-child(2)').click()
        cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
        cy.get('.h-full > .text-center').contains('Reebok')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.get('.swiper-pagination > :nth-child(3)').click()
        cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
        cy.get('.h-full > .text-center').contains('Converse')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.get('.swiper-pagination > :nth-child(4)').click()
        cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
        cy.get('.h-full > .text-center').contains('Steve Madden')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

        //nav menu first item
        //cy.get('.items-center> .flex > .text-black').eq(0).click({force:true})

    })

    it("Verifying product slider",()=>{
        cy.scrollTo('center')
        cy.get("button[type='button']").eq(0).contains('Shop now').click({force:true})
        cy.wait(5000)
        cy.get('.h-full > .text-center').should('have.text','SALE')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.wait(5000)
        //cy.scrollTo('center')
        //cy.get(".swiper-wrapper").click()
        //body > main:nth-child(3) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)
       // cy.get('.flex> .rounded-lg> .items-center> .justify-center >.text-black').click({force:true})
        //cy.get('.py-5 >.justify-center').click()
        //cy.get("button[class='justify-center']").click({force:true})
    })

    it("Carosoul slider",()=>{
      cy.scrollTo('center')
      cy.get('.flex-wrap > .font-extrabold').contains('BE READY FOR SUMMER WITH MICHAEL KORS').should('exist')
      cy.get("a:contains('Shop Now')").click({force:true})
      cy.wait(5000)
      cy.get("h3").should('have.text','WOMEN - MICHAEL KORS')
      cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    })

    it("Verifying Bulk ATC",()=>{
      cy.scrollTo('center')
      cy.get("button[data-contentful-field-id='ShopTheLook_button_text']").click({force:true})
      cy.get('form.w-full > .rounded-lg').eq(0).click()
      cy.wait(4000)
      cy.get('form.w-full > .rounded-lg').click()
      cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()

      //cy.get('.mt-auto > :nth-child(4) > a > .w-full').click()

      
    })

    it.only("Verifying video dection",()=>{

      cy.scrollTo('center')
      cy.get('.relative > .flex > .font-extrabold').contains('SHOP FOR KIDS').should('exist')
      cy.get('.\\[\\&\\>a\\.transition\\]\\:text-\\[14px\\] > .inline-flex')
  .click({force:true}); 
  cy.get('.h-full > .text-center').should('have.text','KIDS')
  cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()


    })



    it("Brand Scroller verification" , ()=>{
        cy.get('.brand-container > :nth-child(1) > .swiper').should('be.visible')
        cy.get('.swiper-slide-active > .w-full').eq(1).click({force:true})
        cy.get('.h-full > .text-center').contains('Crocs')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.wait(5000)

        cy.get(".swiper-slide-next > .w-full").should('be.visible').eq(1).click({force:true})
        cy.get('.h-full > .text-center').contains('Converse')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.wait(5000)

        cy.get('[aria-label="3 / 10"] > .w-full').should('be.visible').click({force:true})
        cy.get('.h-full > .text-center').contains('Nike')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.wait(5000)

        cy.get('[aria-label="4 / 10"] > .w-full').should('be.visible').click({force:true})
        cy.get('.h-full > .text-center').contains('Puma')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.wait(5000)

        cy.get('[aria-label="5 / 10"] > .w-full').should('be.visible').click({force:true})
        cy.get('.h-full > .text-center').contains('Adidas')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        
        


    })

    it("Highlited collection section verification" , ()=>{

        cy.scrollTo('bottom')
        cy.get('.py-4> :nth-child(1)').eq(1).click({force:true})
        cy.get('.boxContainer > .text-black').should('have.text','Returns')
        cy.get('.p-0 > .py-4').click()
       
        cy.wait(5000)
        cy.scrollTo('bottom')
        cy.get('.py-4> :nth-child(1)').eq(2).click({force:true})
        cy.get('.hero-banner').contains('STORE LOCATOR')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

        cy.wait(5000)
        cy.scrollTo('bottom')
        cy.get('.py-4> :nth-child(1)').eq(3).click({force:true})
        cy.get('h3').contains('SIZE GUIDE')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

        cy.wait(5000)
        cy.scrollTo('bottom')
        cy.get('.py-4> :nth-child(1)').eq(0).click({force:true})
        cy.get('.faq-banner-heading').should('have.text','frequently asked questions')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
})

it("Instagram section verification", () => {
  cy.scrollTo("bottom");
  cy.get(
    '[style="min-height: 100px; position: relative;"] > .container > .text-black'
  ).should("have.text", "FOLLOW US ON INSTAGRAM");
  //cy.get('.text-blue').click({force:true})

  cy.get("div[id='KHWHNUVMmnqbaVF2EHOLc'] button:nth-child(1)")
    .should("be.visible")
    .click({ force: true });
  cy.get(".p-0 > .text-black").should("have.text", "SHOP THIS LOOK");
  cy.get(".absolute > .bg-black").click();
  //cy.get('[data-carousel-next="true"]').click()
  //cy.get('[data-carousel-next="true"]').click()
  // cy.get('[data-carousel-next="true"]').click()
  for (let i = 0; i < 4; i++) {
    cy.get('[data-carousel-next="true"]').click();
  }
  cy.log("All slider completed");

  for (let i = 0; i < 5; i++) {
    cy.get('[data-carousel-prev="true"]').click();
  }
  cy.log("All slider completed");

  cy.get("a[class='w-full h-full flex rb-product-thumb']").click({force:true}) //a[class='w-full h-full flex rb-product-thumb']


});

it('Verifying static feature section & Membership ATC',()=>{
    cy.scrollTo("bottom");
    cy.get('.container > :nth-child(1) > .text-center').should('have.text','BECOME A RUBINO MEMBER')

    cy.get("button[type='submit']").contains(' ADD TO CART').click({force:true})
    cy.wait(4000)
    cy.log("ATC visible")
    cy.get('.cart-line-quantity > .flex-row > :nth-child(3) > .cursor-pointer').click({force:true})
    cy.get("button[type='submit']").eq(0).click({force:true})
    cy.get('h3').should('have.text','Your cart is empty')
    cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click()
})
it('Verifying footer sections',()=>{
    cy.scrollTo("bottom");
    cy.get('[href="/privacy-policy/"]').click({force:true})
    cy.wait(4000)
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    cy.get('[href="/terms-conditions/"]').click({force:true})
    cy.wait(4000)

    // FAQ, ONLINE RETURNS, SIZE GUIDE
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    cy.get(':nth-child(2) > .text-zinc-800').click({force:true})
    cy.wait(4000)
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    cy.get(':nth-child(3) > .text-zinc-800').click({force:true})
    cy.wait(4000)
    cy.get('.p-0 > .py-4').click()
    cy.get(':nth-child(4) > .text-zinc-800').click({force:true})
    cy.wait(4000)
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

    //about,store,career,contact

    cy.get('.grid> :nth-child(1) > .text-black').click({force:true})
    cy.get('.grid> :nth-child(2) > .text-black').click({force:true})
    cy.get('.grid> :nth-child(3) > .text-black').click({force:true})
    cy.get('.grid > :nth-child(4)> .text-black').click({force:true})

    cy.on("window:confirm",(t)=>{
       expect(t).to.contains('Know your location')
    })
    cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    

   


})


})