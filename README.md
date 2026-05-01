# 🚀 API RESTful - CRUD de Usuários com Node.js e Prisma

API Backend simples e eficiente para gerenciamento de usuários. Desenvolvida com **Node.js**, **Express** e **Prisma ORM**, este projeto demonstra a implementação de operações CRUD (Create, Read, Update, Delete) básicas seguindo a arquitetura RESTful.

O foco deste projeto é fornecer uma base sólida, rápida e tipada para manipulação de dados utilizando tecnologias modernas do ecossistema JavaScript.

---

## 🔗 Links do Projeto
- **Localhost:** `http://localhost:3000`

---

## 🧠 Decisões de Arquitetura

### **1. Escolha do Prisma ORM**
Utilizei o Prisma para garantir agilidade no desenvolvimento e facilidade na manipulação do banco de dados. O Prisma simplifica as consultas, reduzindo código boilerplate e fornecendo uma interface clara para interagir com os dados.

### **2. Framework Express**
A API foi construída com Express devido à sua simplicidade, performance e vasta adoção na comunidade, tornando o roteamento das operações CRUD direto e fácil de manter.

---

## 🛠️ Tecnologias Utilizadas

### **Backend (Node.js & Express)**
- **Express (v5.2.1):** Engine de rotas ágil e moderna.
- **Prisma ORM (v6.19.3):** Modelagem de dados e comunicação simplificada com o banco.
- **Node.js:** Ambiente de execução em JavaScript.
- **Nodemon:** Utilizado para reiniciar o servidor automaticamente durante o desenvolvimento.
- **CORS:** Para permitir e controlar requisições de diferentes origens.
- **Axios:** Cliente HTTP para possíveis integrações.

---

## 📋 Principais Funcionalidades

O sistema implementa as seguintes rotas e funcionalidades de forma completa:

- [x] **Criar Usuário:** Rota `POST /users` (Recebe `name` e `idade`).
- [x] **Listar Todos os Usuários:** Rota `GET /users`.
- [x] **Buscar Usuário por ID:** Rota `GET /users/:id`.
- [x] **Atualizar Usuário:** Rota `PUT /users/:id` (Atualiza `name` e `idade`).
- [x] **Deletar Usuário:** Rota `DELETE /users/:id`.

---

## 🔮 Possíveis Evoluções

- [ ] **Validação de Dados:** Implementar bibliotecas como Zod ou Joi para validar o `body` das requisições.
- [ ] **Tratamento de Erros:** Criar middlewares de erro para lidar com falhas de banco de dados (ex: usuário não encontrado) de forma mais elegante.
- [ ] **Separação em Controllers e Rotas:** Refatorar o `app.js` movendo a lógica para pastas de `controllers` e `routes`.
- [ ] **Testes Automatizados:** Adicionar testes com Jest ou Supertest.

---

## 📂 Estrutura do Projeto

```text
├── prisma/               # Configuração do Prisma e Schema do banco de dados
├── node_modules/         # Dependências do projeto
├── app.js                # Arquivo principal contendo as rotas e lógica da API
├── package.json          # Configuração de dependências e scripts do Node
├── package-lock.json     # Árvore de versões exatas das dependências
└── teste.http            # Arquivo para testar as requisições HTTP (Client REST)
```

---

## 🚀 Como Rodar o Projeto

### **1. Clone o repositório ou navegue até a pasta**
```bash
cd c:\Users\Victor Langa\Documents\GitHub\js\CRUD
```

### **2. Instale as dependências**
```bash
npm install
```

### **3. Configure o Banco de Dados (Prisma)**
Certifique-se de configurar a sua variável de ambiente `DATABASE_URL` no arquivo `.env` gerado pelo Prisma. Em seguida, crie ou atualize as tabelas do banco:
```bash
npx prisma db push
# ou npx prisma migrate dev
```

### **4. Inicie o servidor em modo de desenvolvimento**
```bash
npm run dev
```
A API estará rodando em `http://localhost:3000`.

---

## ✍️ Autor

Desenvolvido por **Victor Langa** como um projeto para demonstrar operações CRUD no backend usando Node.js, Express e Prisma.
