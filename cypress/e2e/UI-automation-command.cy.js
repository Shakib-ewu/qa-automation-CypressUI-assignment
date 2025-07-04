/// <reference types="cypress" />

describe('Board Management Tests', () => {
  const BOARD_NAME = 'New Board';
  const LIST_ONE = 'List One';
  const LIST_TWO = 'List Two';

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    cy.visit('/', { failOnStatusCode: false });
  });

  it('should create a new board successfully', () => {
    cy.createBoard(BOARD_NAME);
  });

  it('should create a board and add two lists under it', () => {
    cy.createBoard(BOARD_NAME);

    cy.addList(LIST_ONE);
    cy.addList(LIST_TWO);

    cy.get('[data-cy="list-name"]').should('have.length', 2);

    cy.verifyListExists(LIST_ONE, 0);
    cy.verifyListExists(LIST_TWO, 1);
  });

  it('should delete the second list', () => {
    cy.createBoard(BOARD_NAME);
    cy.addList(LIST_ONE);
    cy.addList(LIST_TWO);

    cy.verifyListExists(LIST_ONE, 0);
    cy.verifyListExists(LIST_TWO, 1);

    cy.deleteListByIndex(1);

    // Verify only List One remains
    cy.get('[data-cy="list-name"]').should('have.length', 1);
    cy.get('[data-cy="list-name"]').eq(0).should('have.value', LIST_ONE);
  });
});
