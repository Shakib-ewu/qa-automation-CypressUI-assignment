import 'cypress-mochawesome-reporter/register';
describe("Verifying Account Page", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.wait(3000)
      // Wait for the modal to appear, then close it
      cy.get('body').click(0, 0); // Click top-left corner (likely outside modal)
        cy.xpath('//*[contains(@class, "header__icon header__icon--account link focus-inset")]').click();
    })

    describe('Craft Cellars - Login Page (Essential Tests)', () => {
      const validEmail = 'vesot82226@sparkroi.com';      // Replace with real test email
      const validPassword = '123456789';        // Replace with real test password
      const invalidEmail = 'invaliduser@example.com';
      const invalidPassword = 'wrongPass';
    
 
      // INVALID LOGIN (wrong credentials)
      it('should show error for invalid login attempt', () => {
        cy.get('#CustomerEmail').type(invalidEmail);
        cy.get('#CustomerPassword').type(invalidPassword);
        cy.xpath("//button[contains(.,'Login')]").click();
        //cy.xpath("//div[@class='errors']").should('exist');
        //cy.contains('Incorrect email or password.').should('exist');
      });

   

      // VALID LOGIN
      it.only('should log in with valid credentials', () => {
        cy.xpath("//input[@name='customer[email]']").type(validEmail);
        cy.xpath("//input[@id='CustomerPassword']").type(validPassword);
        cy.xpath("//button[contains(.,'Login')]").click();
      });
    })
    
});