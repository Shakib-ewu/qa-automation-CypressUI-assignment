describe("Verifying Nav menus", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
        
        //cy.get("a[class='active']").click() logo click

    })

    it("Verifying Women's section",()=>{
        cy.get('.items-center> .flex > .text-black').eq(0).click({ force: true })
        cy.get('[href="/products/women/all-brands/shoes/"]').contains('Shoes').click()  //shoes
        cy.get('h3').should("have.text", "WOMEN'S SHOES")
        cy.wait(4000)


        cy.get('.items-center> .flex > .text-black').eq(0).click({ force: true })
        cy.get('[href="/products/women/?winterized=water%252520resistant"]').click() // water resistant  ALL DEPARTMENTS
        cy.wait(4000)
        cy.get('h3').should("have.text", "ALL DEPARTMENTS")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(0).click({ force: true })
        cy.get(':nth-child(4) > .text-sm').eq(0).click({ force: true }) //view all brands
        cy.get('h3').contains('BRANDS')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
        

    })

    it("Verifying Men's section",()=>{
        cy.get('.items-center> .flex > .text-black').eq(1).click({force:true})
        cy.get('.tbl-section-items-wrap > .h-full > :nth-child(1) > [href="/products/men/"]').click()  //All
        cy.get('h3').should("have.text","Men")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(1).click({force:true})
        cy.get('[href="/products/men/all-brands/sandals/"]').click()  //Sandals
        cy.get('h3').should("have.text","MEN'S SANDALS")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(1).click({force:true})
        cy.get('[href="/products/men/?style=casual"]').click() //Casual boots
        cy.get('h3').should("have.text","Men")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(1).click({force:true})
        cy.get('[href="/products/men/converse/"]').click()  //Converse
        cy.get('h3').should("have.text","MEN - CONVERSE")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(1).click({force:true})
        cy.get('[href="/products/men/birkenstock/"]').click() // Birkenstock
        cy.get('h3').should("have.text","MEN - BIRKENSTOCK")
        cy.wait(4000)

        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage

    })

    it('Nav menu items (Men) with random selector',()=>{

        const selectors = [
            '.tbl-section-items-wrap > .h-full > :nth-child(1) > [href="/products/men/"]',
            '[href="/products/men/?style=casual"]',
            '[href="/products/men/converse/"]',
            '[href="/products/men/birkenstock/"]',
            '[href="/products/men/all-brands/sandals/"]'
            
          ];
          
          // Function to select a random selector
          function getRandomSelector() {
            const randomIndex = Math.floor(Math.random() * selectors.length);
            return selectors[randomIndex];
          }

          const randomSelector = getRandomSelector();

          cy.get('.items-center> .flex > .text-black').eq(1).click({force:true})
          // Use Cypress to get and click the random element
          cy.get(randomSelector).click();

    })

    it("Verifying Kid's section",()=>{
        cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
        cy.get('[href="/products/kids/?collections=kids-best-sellers"]').click()  //All
        cy.get('h3').should("have.text","KIDS")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
        cy.get('[href="/products/kids/all-brands/winter-boots/?collections=kids-best-sellers"]').click()  //Winter boots
        cy.get('h3').should("have.text","UNDEFINED")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
        cy.get('[href="/products/toddlers/?collections=kids-best-sellers"]').click()  //Toddlers
        cy.get('h3').should("have.text","TODDLERS")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(2).click({force:true})
        cy.get(':nth-child(4) > .font-light').click() // Cribs all
        cy.wait(4000)

        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage

    })

    it("Verifying Accessories's section",()=>{
    
        cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
        cy.get('[href="/products/shoes-care-&-insoles/"]').click()  //Shoe care & insole
        cy.get('h3').should("have.text","SHOE CARE & INSOLES")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
        cy.get('[href="/products/women/all-brands/accessories/?style=cap&style=hat&style=beanie"]').click()  //Caps and hats
        cy.get('h3').should("have.text","WOMEN'S ACCESSORIES")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
        cy.get('[href="/products/men/all-brands/accessories/?style=backpacks&style=crossbody&style=duffel%252520bags&style=fanny%252520packs"]').click()  //Bags
        cy.get('h3').should("have.text","WOMEN'S ACCESSORIES")
        cy.wait(4000)

        cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
        cy.get('[href="/products/all-departments/all-brands/accessories/?style=lunch%2520box"]').click()  //Lunch boxes
        cy.get('h3').should("have.text","UNDEFINED")
        cy.wait(4000)



        cy.get('.items-center> .flex > .text-black').eq(3).click({force:true})
        cy.get('[href="/products/all-departments/all-brands/accessories/?style=pencil%2520case"]').click() // Pencil cases
        cy.get('h3').should("have.text","UNDEFINED")
        cy.wait(4000)

        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage

    })

    it('Verifying Sales section',()=>{
        cy.get(':nth-child(5) > .mega-menu-trigger-sibling > .flex-col').click()
        cy.get('.h-full > .text-center').should('have.text','SALE')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
    })

    it('Verifying Brands section',()=>{
        cy.get(':nth-child(6) > .mega-menu-trigger-sibling > .flex-col').click()
        cy.get('.\\[\\@media\\(max-width\\:1921px\\)\\]\\:max-w-\\[1920px\\] > .flex-col > .uppercase')
        .contains('BRANDS')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
    })

})