describe('Add product to cart', () => {
	it('should be possible to navigate to product page and add it to cart', () => {
		cy.visit('http://localhost:3000')

		cy.get('a[href^="product"]').first().click()

		cy.url().should('include', '/product')
		cy.contains('adicionar ao carrinho', {
			matchCase: false,
		}).click()
		cy.contains('Cart (1)').should('exist')
	})

	it('should not be count duplicated products on cart', () => {
		cy.visit('http://localhost:3000')

		cy.get('a[href^="product"]').first().click()

		cy.url().should('include', '/product')
		cy.contains('adicionar ao carrinho', {
			matchCase: false,
		}).click()
		cy.contains('adicionar ao carrinho', {
			matchCase: false,
		}).click()
		cy.contains('Cart (1)').should('exist')
	})

	it('should tbe able to search for a product and it to cart', () => {
		cy.visit('http://localhost:3000')

		cy.get('input[name=search]').type('moletom').parent('form').submit()

		cy.get('a[href^="product"]').first().click()
		cy.location('search').should('include', 'moletom')

		cy.contains('adicionar ao carrinho', {
			matchCase: false,
		}).click()

		cy.contains('Cart (1)').should('exist')
	})
})
