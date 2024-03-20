import produtosPage from './/page_objects/product.page.js';

Cypress.Commands.add('addToCart', (productName, size, color, quantity) => {
    produtosPage.buscarProduto(productName);
    produtosPage.adicionarProdutoCarrinho(size, color, quantity);
});