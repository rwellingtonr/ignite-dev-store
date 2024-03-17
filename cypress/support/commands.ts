/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		searchByQuery(query: string): Chainable<void>
	}
}

// -- This is a parent command --
Cypress.Commands.add('searchByQuery', (query: string) => {
	cy.visit('/')
	cy.get('input[name=search]').type(query).parent('form').submit()
})
