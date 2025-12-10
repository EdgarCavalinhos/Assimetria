# Frontend – AI Auto-Generated Blog

This is the frontend application for the AI-powered blog.
It displays the list of articles and allows users to read each article in full.

## Tech Stack

* React
* React Router
* CSS (custom styling)
* Docker

## Features

* Home page with featured article
* Articles feed page
* Full article detail page
* Navigation between pages
* Responsive layout

## API Integration

The frontend connects to the backend at:

```
http://localhost:3000
```

Main endpoints used:

* GET `/get-articles`
* GET `/article/:id`

## Run Locally (without Docker)

```
npm install
npm start
```

## Run with Docker

```
docker build -t journal-frontend .
docker run -p 80:80 journal-frontend
```

## Notes

* The frontend is fully integrated with the backend API.
* Navigation is handled using React Router.
