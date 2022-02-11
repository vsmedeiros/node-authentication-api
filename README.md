# Microserviço de autenticação com Node.js
API criada durante curso de Node.js da [Digital Innovation One](dio.me) ministrado por [Renan JP](https://github.com/RenanJPaula)
## Conceitos e tecnologias aplicadas📙:
* Node.js
* Express;
* Métodos HTTP;
* Arquitetura Rest;
* Linguagem Typescript;
* Bancos de dados relacionais (SQL);
* Autenticação JWT e basic authentication;
* REST API client (Insomnia)
* Variáveis de ambiente.

## Como utilizar:
* Criar arquivo .env e variável de ambiente DB_URL com a url do banco de dados;
* Rodar comando **`npm install`** no terminal para instalar dependências.
* Rodar comando **`npm run dev`** no terminal. Servidor executado na porta 3000🎯.

## Composição do projeto
### Rotas de autenticação:
* Criar jwt token utilizando autenticação do tipo basic (POST) **`/token`**
* Validar token jwt (Bearer token) (POST) **`/token/validate`**
* Renovar token (Refresh token) a partir do token jwt (POST) **`/token/refresh`**

### Rotas usuário:
* Visualizar (GET) e criar (POST) usuário **`/users`**
* Visualizar (GET) e alterar (PUT) e deletar (DELETE) usuário por id **`/users/:uuid`**

### Rotas status:
* Verificar status do servidor (GET) **`/status`**

