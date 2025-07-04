// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//require('cypress-plugin-retries');
/*require('@4tw/cypress-drag-drop');
import 'cypress-file-upload';
require('cypress-xpath');

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/

Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from
  // failing the test
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false
  }
})


Cypress.Commands.add('getIframe',(iFrame)=>{
  return cy.get('#mce_0_ifr')
       .its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap);

});

// cypress/support/commands.js

Cypress.Commands.add('clickButton', (selector) => {
  cy.get(selector).click({ force: true });
});


Cypress.Commands.add('hover', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).trigger('mouseover', { force: true });
});




const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}*/

// cypress/support/commands.js

// ✅ Common Cypress plugins
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
require('cypress-xpath');

// ✅ Handle known ResizeObserver loop error
const resizeObserverLoopErrRe = /ResizeObserver loop limit exceeded/;

Cypress.on('uncaught:exception', (err) => {
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});

// ✅ Custom Commands

// Get iframe body (if used in your tests)
Cypress.Commands.add('getIframe', (selector = '#mce_0_ifr') => {
  return cy
    .get(selector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});

// Force-click a button (generic)
Cypress.Commands.add('clickButton', (selector) => {
  cy.get(selector).click({ force: true });
});

// Hover over an element
Cypress.Commands.add('hover', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).trigger('mouseover', { force: true });
});

// ✅ UI Automation Custom Commands

Cypress.Commands.add('createBoard', (boardName) => {
  cy.get('[data-cy="create-board"]').click().type(`${boardName}{enter}`);
  cy.url().should('include', '/board/');
  cy.get('input.board-title').should('have.value', boardName);
});

Cypress.Commands.add('addList', (listName) => {
  cy.get('input[placeholder="Enter list title..."]').should('be.visible').type(`${listName}{enter}`);
});

Cypress.Commands.add('verifyListExists', (listName, index) => {
  cy.get('[data-cy="list-name"]')
    .should('have.length.greaterThan', index)
    .eq(index)
    .should('be.visible')
    .and('have.value', listName);
});

Cypress.Commands.add('deleteListByIndex', (index) => {
  cy.get('[data-cy="list"]')
    .eq(index)
    .within(() => {
      cy.get('[data-cy="list-options"]').click();
    });
  cy.contains('Delete list').click();
});





