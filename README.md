# API RESTful com Prisma, TypeScript e Node.js

Este é um repositório que contém um projeto de API RESTful criado com Prisma, TypeScript e Node.js. Esta API utiliza o framework Fastify para criar endpoints RESTful e o Prisma para interagir com o banco de dados. Abaixo, você encontrará informações sobre como configurar, executar e personalizar este projeto.

## Requisitos

Certifique-se de ter os seguintes requisitos instalados em seu sistema antes de prosseguir:

- Node.js
- TypeScript
- Prisma
- Fastify
- Outras dependências listadas no `package.json`

## Configuração

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/api-rest-ts.git
   cd api-rest-ts
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Configure o arquivo `.env` para fornecer as informações do banco de dados, como a URL de conexão.

4. Gere as migrações do Prisma e aplique-as ao banco de dados:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O servidor estará em execução em [http://localhost:3000](http://localhost:3000). Você pode acessar a API por meio desta URL.

## Uso

A API possui os seguintes endpoints:

- `GET /users`: Obtém a lista de todos os usuários.
- `GET /users/:id`: Obtém os detalhes de um usuário específico.
- `POST /users`: Cria um novo usuário.
- `PUT /users/:id`: Atualiza os detalhes de um usuário existente.
- `DELETE /users/:id`: Exclui um usuário.

Você pode personalizar e adicionar mais endpoints de acordo com as necessidades do seu projeto.

## Contribuição

Fique à vontade para contribuir para este projeto ou relatar problemas. Sua contribuição é bem-vinda!

## Licença

Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para obter mais informações.

---

Divirta-se criando sua API RESTful com Prisma, TypeScript e Node.js! Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato.
