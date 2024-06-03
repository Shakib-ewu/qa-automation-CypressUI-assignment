describe("Verifying Cart Drawer", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
    })


    it('Cart Drawer Tests', () => {
        cy.get('header').within(() => {
            cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click(); // Adjust the selector as necessary
          });
          // Verify the presence of "Your Bag" text
          cy.contains('YOUR BAG').should('be.visible');
          cy.get('.flex-1').within(() => {
            cy.contains("Looks like you haven't added anything yet, let's get you started!").should('be.visible');
            cy.contains('Continue shopping').should('be.visible').and('not.be.empty');
          });

          cy.get('.flex-col > .h-full').click({force:true})
          cy.scrollTo("bottom");
          cy.get("button[type='submit']").contains(' ADD TO CART').click({force:true})
          cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click() // cart delete icon
          
          cy.scrollTo("topRight");
          cy.wait(4000)
          cy.xpath("//span[@class='flex items-center justify-center w-max h-max relative isolate']//*[name()='svg']").click();  
          cy.xpath("/html[1]/body[1]/aside[1]/main[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/a[1]/div[1]").click({force:true})
          cy.wait(4000)

          cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/header[1]/div[1]/p[1]/div[1]/span[1]/a[1]").click({force:true})
          
          
           // cy.get("button[class='w-full h-full items-center cursor-pointer hidden lg:block justify-end']").click().should('be.visible'); // Adjust the selector as necessary

          });

    })