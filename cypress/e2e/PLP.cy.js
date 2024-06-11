describe("Verifying Homepage", () => {

    beforeEach(() => {
  
      cy.viewport(1920, 1080);
      cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://rubinoshoes.com/products/')
      cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
      cy.wait(4000)
    })


    it("should have a filter section", () => {
        cy.log("Checking filter section visible or not")
        cy.get("div[class='flex items-center gap-x-[30px] gap-y-[10px] flex-wrap']").should('be.visible')
    })

    it('should verify elements existence', () => {
        const elements = [
          { xpath: "//span[normalize-space()='Department']", text: 'Department' },
          { xpath: "//span[normalize-space()='Categories']", text: 'Categories' },
          { xpath: "//span[normalize-space()='Brands']", text: 'Brands' },
          { xpath: "//span[normalize-space()='Color']", text: 'Color' },
          { xpath: "//span[normalize-space()='Size']", text: 'Size' },
          { xpath: "//span[normalize-space()='Occasion']", text: 'Occasion' },
          { xpath: "//span[normalize-space()='Style']", text: 'Style' },
          { xpath: "//span[normalize-space()='Temperature']", text: 'Temperature' },
          { xpath: "//span[normalize-space()='Water proofing']", text: 'Water proofing' },
          { xpath: "//span[normalize-space()='Price']", text: 'Price' },
          { xpath: "//span[normalize-space()='Price sale']", text: 'Price sale' }
        ];
      
        elements.forEach(({ xpath, text }) => {
          cy.xpath(xpath).contains(text).should('be.visible'); // Check if element is visible
        // Check for a specific attribute
          // Add more assertions as needed
        });
      });
      
      
    // Add similar assertions for other filter labels (BRANDS, COLOR, etc.)
      it.only('should verify options under Department dropdown menu', () => {
        // Define the list of expected options
        const expectedOptions = [
          'WOMEN',
          'MEN',
          'KIDS',
          'TODDLERS',
          'SHOES CARE & INSOLES',
          'CRIBS'
        ];
      
        // Iterate over each option
        expectedOptions.forEach(option => {
          // Open the Department dropdown menu
          cy.xpath("//span[normalize-space()='Department']").click();
      
          // Click on the option
          cy.xpath(`//button[normalize-space()='${option}']`).click({force:true});
      
          // Wait for the option filter to become visible
          cy.contains(option, { timeout: 10000 }).should('be.visible');
      
          // Click outside the dropdown menu to close it
          cy.get('body').click({force:true});
        });
      });
      
      
      
      
      
      
      


    it('should have filter options under CATEGORIES', () => {
        cy.get('.filter-section .category-filter').find('.option').should('have.length.greaterThan', 0)
    })

    it('should filter products by department', () => {
        cy.get('.filter-section .department-filter').select('Men') // Replace 'Men' with the actual option value
        cy.get('.product-list').should('contain', 'Men') // Update the assertion to match how products are displayed based on filter selection
    })

    it('should have pagination when many results are filtered', () => {
        cy.get('.filter-section').selectMany('filter1', 'value1', 'filter2', 'value2') // Select multiple filters
        cy.get('.pagination').should('be.visible')
    })

    it('should load more results on infinite scroll', () => {
        cy.get('.product-list').should('have.length', 10) // Initial number of products
        cy.scrollTo('bottom')
        cy.get('.product-list').should('have.length.greaterThan', 10) // More products loaded after scroll
    })

    it('should show total results count after filtering', () => {
        cy.get('.filter-section').selectMany('filter1', 'value1')
        cy.get('.results-count').should('contain', '25 Products Found') // Adjust based on actual text
    })

    it('should show all products when no filters are selected', () => {
        cy.get('.filter-section input').clear() // Clear any pre-selected options
        cy.get('.product-list').should('have.length.greaterThan', 10) // Ensure there are products displayed
    })

    it('should handle invalid filter values', () => {
        cy.get('.filter-section .department-filter').select('Invalid Department')
        // Check for error message or verify no change in results (adjust based on website behavior)
    })

    it('should handle empty filter options', () => {
        cy.get('.filter-section .out-of-stock-filter').should('be.disabled') // Example for Out-of-Stock filter
        // Alternatively, check for a message indicating no options
    })

    it('should sort products by price (low to high)', () => {
        cy.get('.sort-dropdown').select('Price (Low to High)')
        cy.get('.product-list').should('be.sorted', { by: '.price', ascending: true }) // Assert sorted prices
    })

    it('should filter products by price range', () => {
        cy.get('.filter-section .price-range').selectRange(100, 200)
        cy.get('.product-list').each(($el) => {
            const price = parseInt($el.find('.price').text())
            expect(price).to.be.greaterThanOrEqual(100).and.lessThanOrEqual(200)
        })
    })



          
          
          


      



})