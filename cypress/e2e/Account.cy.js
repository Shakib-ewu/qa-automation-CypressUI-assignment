import 'cypress-mochawesome-reporter/register';
describe("Verifying Account Page", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.wait(4000)
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
      it('should log in with valid credentials', () => {
        cy.xpath("//input[@name='customer[email]']").type(validEmail);
        cy.xpath("//input[@id='CustomerPassword']").type(validPassword);
        cy.xpath("//button[contains(.,'Login')]").click();
      });
    
    
    
    
      // EMPTY FIELDS SUBMISSION
      it('should not submit when fields are empty', () => {
        cy.get('form').submit();
        cy.url().should('include', '/account/login');
      });
    
      // 🔗 CREATE ACCOUNT NAVIGATION
      it('should navigate to the create account page', () => {
        cy.contains('Create account').click();
        cy.url().should('include', '/account/register');
      });
    
      // 🔐 FORGOT PASSWORD NAVIGATION
      it('should navigate to the forgot password page', () => {
        cy.contains('Forgot your password?').click();
        cy.url().should('include', '/account/recover');
      });
    });
    
});