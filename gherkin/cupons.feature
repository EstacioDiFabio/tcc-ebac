Funcionalidade: API de cupons
Como cliente da EBAC-SHOP
Quero usar a API de cupons 
Para buscar e cadastrar novos cupons

Contexto:
Dado que eu esteja habilitado a usar a API

Esquema do Cenário: Buscar cupons cadastrados
Quando não enviar nada nos parâmetros da query de busca
Então irá exibir todos os cupons cadastrados

Esquema do Cenário: Buscar um cupom específico
Quando eu enviar o <cupon> na query de busca
Então irá ser exibido o cupom

Exemplos:
| cupom | 
| "novos10" |
| "ebac15" |
| "egresso5" |

Esquema do Cenário: Cadastrar um cupom novo
Quando eu preencher <codigo>, <valor>, <tipo> e <descricao> 
Então irá exibir uma mensagem de sucesso 

Exemplos:
| codigo | valor | tipo | descricao |
| "novos20" | 20 | "fixed_student" | "Para novos alunos" |
| "ebac10" | 10 | "marketing" | "Para divulgação" |
| "egresso10" | 10 | "fixed_student" | "Para divulgação" |

Esquema do Cenário: Cadastrar um cupom existente
Quando eu o código do cupom for <codigo>
Então irá exibir uma mensagem informando que já existe um cupom com o mesmo nome

Exemplos:
| codigo |
| "novos10" |
| "ebac15" |
| "egresso5" |