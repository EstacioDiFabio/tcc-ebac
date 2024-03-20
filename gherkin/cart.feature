# language: pt

Funcionalidade: Carrinho de compras
Como cliente da EBAC-SHOP
Quero fazer a adição de produtos em um carrinho de compras
Para realizar pedidos

Contexto:
Dado que eu clique no botão Comprar na página do produto

Esquema do Cenário: Usuário escolhe as características do produto
Quando eu selecionar <tamanho> e <cor> e a <quantidade>
Então deve permitir comprar o produto

Exemplos:
| tamanho | cor | quantidade | 
| "xs" | "Orange" | 1 |
| "s" | "Red" | 1 |
| "m" | "White" | 1 |

Esquema do Cenário: Usuário escolhe um produto não permitido
Quando eu selecionar a <quantidade> o <preço> vai ser
Então deve mostrar uma mensagem alertando que não é possível adicionar o produto

Exemplos:
| quantidade | preco | 
| "9" | R$ 991
| "11" | R$ 150