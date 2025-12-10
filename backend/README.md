### 🇵🇹 Versão em Português (Para tua conferência)

**Título:** API Backend do Blog

**Descrição:**
Esta é a aplicação do lado do servidor para o Blog Auto-Gerado. Fornece uma API RESTful para gerir artigos, trata da persistência de dados usando **SQLite**, e integra com a **IA da Hugging Face** para gerar conteúdo diário automaticamente.

**🛠️ Tecnologias Usadas:**
* **Runtime:** Node.js (v20)
* **Framework:** Express.js
* **Base de Dados:** SQLite (Sem configuração, baseada em ficheiro)
* **Integração de IA:** API de Inferência Hugging Face (Modelos Gemma/TinyLlama)
* **Automação:** `node-cron` para agendar tarefas
* **Arquitetura:** MVC Modular (Models, Views, Controllers) usando ES Modules (import/export).

**⚙️ Configuração e Instalação:**

**Pré-requisitos:** Node.js ou Docker.

**1. Instalação Local (Sem Docker):**
1.  Entra na pasta `backend`.
2.  Instala as dependências com `npm install`.
3.  Cria o ficheiro `.env` e coloca o teu `HF_TOKEN`.
4.  Inicia com `npm start`. O servidor corre na porta 3000.

**2. Correr com Docker:**
Este backend está "contentorizado". Para correr tudo junto: `docker compose up --build`.

**📡 Rotas da API (Endpoints):**
* `GET /get-articles`: Devolve todos os artigos.
* `GET /article/:id`: Devolve um artigo específico pelo ID.
* `POST /create-article`: Cria um artigo manualmente.
* `POST /generate-ai`: Força a IA a criar um artigo agora mesmo.

**🤖 Funcionalidades de Automação:**
* **Cron Job Diário:** O sistema está agendado para correr todos os dias às **07:30 da manhã**. Ele verifica o último tópico usado (para não repetir) e gera um artigo novo.
* **Processamento Inteligente:** O código limpa e valida o JSON que vem da IA para garantir que não há erros na base de dados.

---

### O que fazer agora:
Copia apenas a **versão em Inglês** e cola dentro do ficheiro `backend/README.md` (podes apagar o que lá tinhas antes). Está profissional e cobre todos os requisitos do desafio!




# Blog Backend API

This is the server-side application for the Auto-Generated Blog. It provides a RESTful API to manage articles, handles data persistence using **SQLite**, and integrates with **Hugging Face AI** to automatically generate daily content.

## 🛠️ Tech Stack

* **Runtime:** Node.js (v20)
* **Framework:** Express.js
* **Database:** SQLite (Zero-configuration, file-based)
* **AI Integration:** Hugging Face Inference API (Gemma/TinyLlama models)
* **Automation:** `node-cron` for task scheduling
* **Architecture:** Modular MVC (Models, Views, Controllers) using ES Modules (import/export).

## ⚙️ Configuration & Installation

**Prerequisites:** Node.js or Docker.

### 1. Local Setup (Without Docker)

1.  Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file and add your token:
    ```env
    HF_TOKEN=your_huggingface_token_here
    ```
4.  Start the server:
    ```bash
    npm start
    ```
    The server runs on port 3000.

### 2. Running with Docker

This backend is fully containerized. To run everything together (Backend + Frontend + DB):
```bash
docker compose up --build