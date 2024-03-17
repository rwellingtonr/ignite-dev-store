describe('Search Products', () => {
	it('should be able to search for products', () => {
		cy.searchByQuery('camiseta')

		cy.location('pathname').should('include', '/search')

		cy.location('search').should('include', 'q=camiseta')

		cy.get('a[href^="product"]').should('exist')
	})

	it('should be redirect to home page if there is no search params', () => {
		cy.on('uncaught:exception', () => false)
		cy.visit('/search')

		cy.location('pathname').should('equal', '/')
	})
})
