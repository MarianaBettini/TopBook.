# TopBook.
# Sistema de Biblioteca - Controle de Empréstimos 📚

Trabalho prático desenvolvido para a disciplina de *Programação para Internet* do curso de *Sistemas de Informação* da Faculdade *Multivix. O objetivo do projeto é consolidar o aprendizado em desenvolvimento Full Stack funcional utilizando **Node.js, **Express, **TypeScript* e *HTML5/CSS3* modernos.

Nota de Desenvolvimento: Este projeto foi desenvolvido com o auxílio do Gemini, um modelo de IA, como colaborador técnico para estruturação, otimização de código e melhores práticas de desenvolvimento.
---

## 👥 Integrantes do Grupo
* Gabriely Permanhane Leal
* Graciane Lima Costa da Silva
* Mariana Bettini Neves

---

## 🏛️ Sobre o Projeto
*Sistema de Biblioteca com Empréstimo de Livros - TopBook.*
O ecossistema simula o gerenciamento de acervo de uma biblioteca universitária, permitindo o cadastro de obras literárias, indicação do aluno responsável pelo empréstimo, registro da data de movimentação e o status atual da reserva (Disponível ou Emprestado).

---

## 🛠️ Requisitos Técnicos Implementados
* *Back-end:* API REST estruturada em Node.js com Express e TypeScript. Os dados são armazenados temporariamente em memória utilizando arrays fortemente tipados por meio de interfaces.
* *Front-end:* Interface de usuário construída com HTML5 Semântico e CSS3 Moderno seguindo a metodologia Mobile-First para garantir responsividade.
* *Comunicação:* Integração assíncrona feita nativamente através da API fetch com o padrão async/await.

---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o ecossistema em sua máquina de desenvolvimento:

### 1. Pré-requisitos
Certifique-se de ter o *Node.js* (versão LTS) instalado em seu computador para a criação da pasta "node_modules" na pasta do sistema, permitindo sua execução.

### 2. Configurando e Executando o Servidor (Back-end)
Abra o seu terminal, navegue até a pasta do servidor e instale as dependências:
```bash
# Navegar até o diretório do servidor
cd server

# Instalar todas as dependências do projeto
npm install

# Iniciar o servidor em ambiente de desenvolvimento
npm run dev
