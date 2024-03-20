/// <reference types="cypress" />

context('Funcionalidade Carrinho de compras', () => {
	
	it('Inserir item ao carrinho', () => {
		cy.addToCart('Ingrid Running Jacket', 'XS', 'Orange', 3);
		cy.addToCart('Daphne Full-Zip Hoodie', 'L', 'Purple', 2);
		cy.addToCart('Atlas Fitness Tank', 'XS', 'Blue', 1);
		
		cy.get('.mini-cart-items').should('contain', 3)
	});
});