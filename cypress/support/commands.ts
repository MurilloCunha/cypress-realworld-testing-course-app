/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

declare namespace Cypress {
  interface Chainable {
    getByData(dataAttribute: string): Chainable
  }
}
