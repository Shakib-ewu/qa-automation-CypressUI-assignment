describe("Verifying Nav menus", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
        
        //cy.get("a[class='active']").click() logo click

    })

    function getRandomSelector() {
        const randomNum = Math.floor(Math.random() * 26) + 1;
        return `.hidden > .grid > :nth-child(${randomNum})`;
      }
      
    it('Verifying Brands section', () => {
        cy.get(':nth-child(6) > .mega-menu-trigger-sibling > .flex-col').click()
        cy.get('.\\[\\@media\\(max-width\\:1921px\\)\\]\\:max-w-\\[1920px\\] > .flex-col > .uppercase')
            .contains('BRANDS')
        cy.get('h3').eq(1).should('have.text', 'Featured brands')

        const randomSelector = getRandomSelector();
        cy.get(randomSelector).click({ force: true });

        //cy.get('.grid > :nth-child(20)')  cy.get('[href="/products/all-departments/teva/"]')

        // Scroll to the right alphabet section
        cy.xpath(`/html[1]/body[1]/main[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]`).scrollIntoView().should('be.visible');

        const selectors = [
            '[href="/products/all-departments/teva/"]',
            '[href="/products/all-departments/nike/"]',
            '[href="/products/all-departments/adidas/"]',
            '[href="/products/all-departments/vans/"]',
            '[href="/products/all-departments/vince-camuto/"]',
            '[href="/products/all-departments/the-north-face/"]',
            'href="/products/all-departments/steve-madden/"]',
            '[href="/products/all-departments/reebok/"]',
            '[href="/products/all-departments/selv-rituel/"]',
            '[href="/products/all-departments/skechers/"]',
            '[href="/products/all-departments/palladium/"]',
            '[href="/products/all-departments/native/"]',
            '[href="/products/all-departments/merrell/"]',
            '[href="/products/all-departments/lacoste/"]',
            '[href="/products/all-departments/ipanema/"]',
            '[href="/products/all-departments/jansport/"]',
              // Add more selectors as needed
        ];

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * selectors.length);

        // Observe the corresponding alphabet section (wait for it to be visible)
        cy.xpath(`/html[1]/body[1]/main[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]`).should('be.visible').then(() => {
            cy.xpath(`/html[1]/body[1]/main[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]`)
                .should('be.visible')
                .find(selectors[randomIndex])
                .first()
                .click({ force: true })
                .should('exist');
        });

        // cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()  //Homepage
    })

})