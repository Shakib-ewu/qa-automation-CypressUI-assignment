
describe('Board Management Tests', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/',{ failOnStatusCode: false });
    cy.wait(4000);
  });

  it('should create a new board successfully', () => {
    cy.get('[data-v-f495854e][data-cy="create-board"]').click().type('New Board{enter}');

    // Verify board name appears
   cy.get('input.board-title').should('have.value', 'New Board');


});

it('should create a board and add two lists under it', () => {
  // Step 1: Create a board
  cy.get('[data-v-f495854e][data-cy="create-board"]')
    .click()
    .type('New Board{enter}');

  cy.url().should('include', '/board/');
  cy.get('input.board-title').should('have.value', 'New Board');

  // Step 2: Add List One
   cy.get("input[placeholder='Enter list title...']").type('List One{enter}');

  // Step 3: Add List Two
   cy.get("input[placeholder='Enter list title...']").type('List Two{enter}');

  // Step 4: Verify both lists are created
cy.get(':nth-child(1) > [data-cy="list"] [data-cy="list-name"]')
  .should('be.visible').should('have.value', 'List One')

cy.get(':nth-child(2) > [data-cy="list"] [data-cy="list-name"]')
  .should('be.visible').should('have.value', 'List Two');

   cy.get(':nth-child(2) > [data-cy="list"] > .flex > [data-cy="list-options"] > .inline-block')
    .click();
    cy.contains('Delete list').click();

});

it('should delete the second list', () => {

 cy.get('[data-v-f495854e][data-cy="create-board"]')
    .click()
    .type('New Board{enter}');

  cy.url().should('include', '/board/');
  cy.get('input.board-title').should('have.value', 'New Board');

  // Step 2: Add List One
   cy.get("input[placeholder='Enter list title...']").type('List One{enter}');

  // Step 3: Add List Two
   cy.get("input[placeholder='Enter list title...']").type('List Two{enter}');

  // Step 4: Verify both lists are created
cy.get(':nth-child(1) > [data-cy="list"] [data-cy="list-name"]')
  .should('be.visible').should('have.value', 'List One')

cy.get(':nth-child(2) > [data-cy="list"] [data-cy="list-name"]')
  .should('be.visible').should('have.value', 'List Two');

   cy.get(':nth-child(2) > [data-cy="list"] > .flex > [data-cy="list-options"] > .inline-block')
    .click();
    cy.contains('Delete list').click();

     // Verify List One still exists
  cy.get(':nth-child(1) > [data-cy="list"] input')
    .should('have.value', 'List One');

  // Verify List Two is gone (no input with that value)
  cy.get('input').should('not.have.value', 'List Two');

})


});

