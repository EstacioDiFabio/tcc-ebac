class ProdutosPage {
    
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        const urlFormatada = nomeProduto.replace(/ /g, '-', nomeProduto);
        
        cy.visit(`produtos/${urlFormatada}`);
    }

    adicionarProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-'+tamanho).click();
        cy.get(`.button-variable-item-${cor}`).click();
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click();
    }
}

export default new ProdutosPage()