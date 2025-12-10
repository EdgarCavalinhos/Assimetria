# AI Auto-Generated Blog – Full Stack Project

This project is a full-stack AI-powered blog application.
Articles are generated automatically using Artificial Intelligence and displayed through a modern React frontend.

It was built as part of a Full-Stack & DevOps technical challenge.

---

## Tech Stack

### Frontend

* React
* React Router
* CSS
* Docker

### Backend

* Node.js
* Express
* SQLite
* HuggingFace AI API
* node-cron
* Docker

### Infrastructure

* Docker & Docker Compose
* AWS EC2
* AWS ECR
* AWS CodeBuild

---

## Main Features

* AI-generated articles
* Daily automatic article generation
* Article listing and full article views
* Featured article system
* Fully dockerized frontend and backend
* Ready for AWS deployment

---

## Project Structure

```
.
├── backend/
├── frontend/
├── infra/
│   └── buildspec.yml
├── docker-compose.yml
└── README.md
```

---

## Run Locally with Docker

```
docker-compose up --build
```

Frontend:

```
http://localhost
```

Backend:

```
http://localhost:3000
```

---

## Backend API

* GET `/get-articles`
* GET `/article/:id`
* POST `/create-article`
* POST `/articles/ai-generate`

---

## Deployment (AWS)

* Docker images are built with AWS CodeBuild
* Images are stored in Amazon ECR
* Containers are deployed on an EC2 instance
* Frontend runs on port 80
* Backend runs on port 3000

---

## Author

Built by **Edgar Cavalinhos** as part of a Full-Stack & DevOps technical challenge.
