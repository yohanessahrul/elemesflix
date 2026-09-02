# 🎬 Elflix

A modern movie discovery web application built as part of a Frontend Developer Technical Test for Elemes Group.

Demo: https://elflix.vercel.app/

## Features

- Upcoming & Popular Movies
- Popular & Top Rated TV Shows
- Watching List
- Search Movie

## Run Locally

Clone the project

```bash
  git clone https://github.com/yohanessahrul/elemesflix.git
```

Go to the project directory

```bash
  cd elemesflix
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

To run this project, you will need to add the following environment variables to your .env file

`VITE_TMDB_API_KEY`
`VITE_TMDB_BASE_URL`
`VITE_TMDB_IMAGE_URL`

## API Reference

#### Popular, upcoming, and latest movies

```http
  GET /movie/popular
```

```http
  GET /movie/upcoming
```

```http
  GET /discover/movie
```

#### Popular, top rated, and latest tv shows

```http
  GET /tv/popular
```

```http
  GET /tv/top_rated
```

```http
  GET /discover/tv
```

## Tech Stack

Vite, React, React Router DOM, Typescript, Tanstack-Query, Zustand, Axios, Embla Carousel
