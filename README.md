Gerenciador de Tarefas – API REST
API REST desenvolvida como trabalho avaliativo da disciplina Programação para Internet II, do curso de Análise e Desenvolvimento de Sistemas.
O sistema permite criar, listar, atualizar e remover tarefas, utilizando boas práticas de desenvolvimento backend.

🛠️ Tecnologias Utilizadas
Node.js
TypeScript
Express
PostgreSQL
Zod
Postman

Estrutura do Projeto
src
├── app.ts
├── server.ts
├── config
├── controllers
├── middlewares
├── models
├── routes
├── schemas
└── services

🗄️ Banco de Dados
Banco: gerenciador_tarefas
Tabela principal: tasks
id
title
description
completed
created_at

🚀 Como Executar o Projeto
npm run dev
Servidor iniciado em:
http://localhost:3333

🌐 Rotas da API
GET /health – Verifica status da API
POST /tasks – Criar tarefa
GET /tasks – Listar tarefas
PUT /tasks/:id – Atualizar tarefa
DELETE /tasks/:id – Remover tarefa

✅ Validação de Dados
A validação das requisições é feita com Zod, garantindo:
Tipos corretos
Campos obrigatórios
Tratamento adequado de erros

🧪 Testes
Os endpoints foram testados utilizando o Postman