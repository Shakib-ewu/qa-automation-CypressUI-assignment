describe("Verifying Account Page", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
    })


    it('should navigate to sign-in page when account icon is clicked', () => {

        cy.xpath("//a[@aria-label='account-icon']//*[name()='svg']").click(); // account icon
        // Assert that the URL changes to the sign-in page
        cy.url().should('include', '/account/login'); // Replace '/sign-in' with the actual URL of your sign-in page
        cy.get("input[placeholder='Email Address']").type('vedf656fbgfgggsot82fdf226@sparkroi.com');
        cy.get("input[placeholder='Password']").type('12345678');
        cy.get("button[type='submit']").click();
        cy.get('.py-2 > .m-0').should('be.visible')
    });

    // cypress/support/index.js

// Suppress ResizeObserver loop limit exceeded errors
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/

Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from
  // failing the test
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false
  }
})

// cypress/integration/your_test_spec.js

/*it.only('Verify User Can Log In', () => {
  cy.log('Clicking on account icon');
  cy.xpath("//a[@aria-label='account-icon']//*[name()='svg']").click();

  cy.log('Clicking on login link');
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();

  cy.log('Filling in login form');
  cy.get("input[placeholder='Email Address']").type('ve4dfffbgfg09897ggsot82fdf226@sparkroi.com');
  cy.get("input[placeholder='Password']").type('12345678');
  cy.get("button[type='submit']").click();

  cy.log('Checking for error message');
  cy.contains('Incorrect email or password').then($error => {
    if ($error.length > 0) {
      cy.log('Error message found: Incorrect email or password');
      cy.contains('Incorrect email or password').should('exist');

      cy.log('Navigating to sign up page');
      cy.xpath("(//a[normalize-space()='Sign up'])[1]").click();

      cy.log('Verifying sign up page URL');
      cy.url().should('include', '/account/register/');

      cy.log('Filling in sign up form');
      cy.get("input[placeholder='First name']").type('Abn');
      cy.get("input[placeholder='Last name']").type('Mahmud');
      cy.get("input[placeholder='Email address']").type('ve4dfffbgfg09897ggsot82fdf226@sparkroi.com');
      cy.get("input[placeholder='Password']").type('12345678');
      cy.get("button[type='submit']").click();

      cy.log('Verifying welcome message');
      cy.get('h3').contains('Welcome To RUBINO').should('exist');
    } else {
      cy.log('Login was successful');
      cy.url().should('not.include', '/login'); // Verify that the URL has changed from the login page
      cy.get('h1').should('contain', 'Welcome')
      // Add any additional checks for the logged-in state
    }
  });
});*/


it('Verify User Can Log In', () => {
  cy.log('Clicking on account icon');
  cy.xpath("//a[@aria-label='account-icon']//*[name()='svg']").click();

  cy.log('Clicking on login link');
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();

  cy.log('Filling in login form');
  cy.get("input[placeholder='Email Address']").type('ve4df6765897ggsot82fdf226@sparkroi.com');
  cy.get("input[placeholder='Password']").type('12345678');
  cy.get("button[type='submit']").click();

  // Give the page some time to potentially show the error message
  cy.wait(2000);

  cy.log('Checking for error message');
  cy.get('body').then($body => {
    if ($body.text().includes('Incorrect email or password')) {
      cy.log('Error message found: Incorrect email or password');
      cy.contains('Incorrect email or password').should('exist');

      cy.log('Navigating to sign up page');
      cy.xpath("(//a[normalize-space()='Sign up'])[1]").click({force:true});

      cy.log('Verifying sign up page URL');
      cy.url().should('include', '/account/register/');

      cy.log('Filling in sign up form');
      cy.get("input[placeholder='First name']").type('Abn');
      cy.get("input[placeholder='Last name']").type('Mahmud');
      cy.get("input[placeholder='Email address']").type('ve4df6765897ggsot82fdf226@sparkroi.com');
      cy.get("input[placeholder='Password']").type('12345678');
      cy.get("button[type='submit']").click();

      cy.log('Verifying welcome message');
      cy.get('h3').contains('Welcome To RUBINO').should('exist');
    } else {
      cy.log('Login was successful');
      cy.url().should('not.include', '/login'); // Verify that the URL has changed from the login page
      cy.get('h3').should('contain', 'Welcome To RUBINO');
      // Add any additional checks for the logged-in state
    }
  });
});

it('Verify Account Information Content', () => {
  cy.xpath("//a[@aria-label='account-icon']//*[name()='svg']").click();
  cy.log('Clicking on login link');
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
  cy.log('Filling in login form');
  cy.get("input[placeholder='Email Address']").type('ve4df6765897ggsot82fdf226@sparkroi.com');
  cy.get("input[placeholder='Password']").type('12345678');
  cy.get("button[type='submit']").click();
  cy.log('Checking content of account information section');
  cy.xpath("(//h3[normalize-space()='Account Dashboard'])[1]").within(() => {
    cy.xpath("//p[normalize-space()='Name: Abn Mahmud']").should('contain', 'Abn Mahmud').should('be.visible');
    cy.wait(5000)
    cy.xpath("//p[normalize-space()='Email: ve4df6765897ggsot82fdf226@sparkroi.com']").should('contain','ve4df6765897ggsot82fdf226@sparkroi.com').should('be.visible');
    // Add more assertions for other account information if needed
  });


})

it('Verify Personal Information Page Tests', () => {
  cy.xpath("//a[@aria-label='account-icon']//*[name()='svg']").click();
  cy.log('Clicking on login link');
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
  cy.log('Filling in login form');
  cy.get("input[placeholder='Email Address']").type('ve4df6765897ggsot82fdf226@sparkroi.com');
  cy.get("input[placeholder='Password']").type('12345678');
  cy.get("button[type='submit']").click();
  cy.log('Checking content of Personal Information Page');
  cy.wait(3000)

  cy.get('[href="/account/profile/"]').click()    // Clicked personal info page

  cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First name');
  cy.get('#lastName').should('be.visible').and('have.attr', 'placeholder', 'Last name');
  cy.get('#dob').should('be.visible').and('have.attr', 'placeholder', 'mm/dd/yyyy');

  // Assuming the shopping preferences checkboxes have unique identifiers like 'checkbox-shopping-preference-1', 'checkbox-shopping-preference-2', etc.
  cy.xpath("//legend[normalize-space()='shopping preferences']").should('be.visible')
  cy.xpath("(//*[name()='svg'][@class='absolute'])[1]").as('btn').click().should('be.visible');
  cy.xpath("(//*[name()='svg'][@class='absolute'])[2]").as('btn').click().should('be.visible');
  cy.xpath("(//*[name()='svg'][@class='absolute'])[3]").as('btn').click().should('be.visible');;

  // Assuming the language preferences checkboxes have unique identifiers like 'checkbox-language-preference-1', 'checkbox-language-preference-2', etc.
  cy.get('.language-preference > .font-Open-Sans').should('be.visible')
  cy.xpath("(//*[name()='circle'])[2]").as('btn').click({ force: true }).should('be.visible');
  cy.xpath("(//*[name()='circle'])[4]").as('btn').click({ force: true }).should('be.visible');

  // Assuming the newsletter signup checkboxes have unique identifiers like 'checkbox-newsletter-signup-1', 'checkbox-newsletter-signup-2', etc.
  cy.xpath("//legend[@for='acceptsMarketing']").should('be.visible')
  cy.xpath("(//*[name()='svg'])[27]").as('btn').click({ force: true }).should('be.visible');
  cy.xpath("(//*[name()='circle'])[9]").as('btn').click({ force: true }).should('be.visible');

  cy.get('form > .inline-flex').click()    //Save button clicked

  cy.get("input[name='password']").type(12345678)
  cy.xpath("//button[normalize-space()='Continue']").contains('Continue').click()
  cy.wait(4000)
  cy.xpath("//p[@class='flex flex-row justify-start items-center gap-2']").should('have.text','Profile information updated')

  //

  });

  it('Verify Edit Password Page Tests', () => {
    cy.xpath("//a[@aria-label='account-icon']//*[name()='svg']").click();
    cy.log('Clicking on login link');
    cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
    cy.log('Filling in login form');
    cy.get("input[placeholder='Email Address']").type('ve4df6765897ggsot82fdf226@sparkroi.com');
    cy.get("input[placeholder='Password']").type('123456789');
    cy.get("button[type='submit']").click();
    cy.log('Checking content of edit password page');
    cy.wait(3000)
    cy.get('[href="/account/password/"]').click()
    cy.get("#currentPassword").type(12345678).should('be.visible').and('have.attr', 'placeholder', 'Current password')
    cy.get("#newPassword").type(123456789).should('be.visible').and('have.attr', 'placeholder', 'New password')
    cy.get("#newPasswordConfirm").type(123456789).should('be.visible').and('have.attr', 'placeholder', 'Confirm new password')
    cy.xpath("//button[normalize-space()='SAVE']").click()

    cy.xpath("(//small[@class='text-[#559937]'])[1]").should('have.text','Updated Password Successfully')
 



  })

  it.only('Verify Order History', () => {
    cy.xpath("//a[@aria-label='account-icon']//*[name()='svg']").click();
    cy.log('Clicking on login link');
    cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
    cy.log('Filling in login form');
    cy.get("input[placeholder='Email Address']").type('ve4df6765897ggsot82fdf226@sparkroi.com');
    cy.get("input[placeholder='Password']").type('123456789');
    cy.get("button[type='submit']").click();
    cy.log('Checking content of Personal Information Page');
    cy.wait(3000)

    cy.get('[href="/account/orders/"]').click()  //clicking order history page
    cy.xpath("(//h3[normalize-space()='Order History'])[1]").contains('Order History').should('exist')
    cy.xpath("(//p[@class='text-black font-Mulish text-[13px] font-[400] leading-[120%] -tracking-[0.32px] capitalize'])[1]").should('be.visible')




  })

})