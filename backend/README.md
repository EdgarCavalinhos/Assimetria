# Backend – AI Auto-Generated Blog

This is the backend service for the AI-powered blog application.
It is responsible for generating articles using an AI API, storing them in a SQLite database, and exposing REST endpoints for the frontend.

## Tech Stack

* Node.js
* Express
* SQLite
* HuggingFace API (AI text generation)
* Docker
* node-cron (daily automation)

## Features

* Generate AI articles automatically (daily cron job)
* Generate articles manually via API
* Store and retrieve articles from SQLite
* REST API for frontend integration

## Main Endpoints

* GET `/get-articles` → List all articles
* GET `/article/:id` → Get a single article
* POST `/create-article` → Create article manually
* POST `/articles/ai-generate` → Generate article using AI

## Environment Variables

Create a `.env` file with:

```
PORT=3000
HF_TOKEN=your_huggingface_token
```

## Run Locally (without Docker)

```
npm install
npm run dev
```

## Run with Docker

```
docker build -t journal-backend .
docker run -p 3000:3000 journal-backend
```

## Notes

* Articles are generated automatically every day at 07:30.
* The database is persisted using a Docker volume in production.
