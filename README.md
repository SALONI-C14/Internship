# ReactJS Project Setup and Planning

A simple ReactJS application for the Week 1 internship assignment. It uses Vite for a quick, beginner-friendly setup and demonstrates reusable components.

## Week 1 Objectives

- Set up a ReactJS project with Vite.
- Create a clean folder structure.
- Build reusable Header, Footer, Button, and Card components.
- Use ESLint and Prettier for consistent code.

## Technologies Used

- React and ReactDOM
- Vite
- ESLint
- Prettier
- Git and GitHub

## Installation

1. Install the current LTS version of [Node.js](https://nodejs.org/).
2. Open this project folder in a terminal.
3. Run `npm install`.

## Run the Project

```bash
npm run dev
```

Open the local address printed in the terminal (normally `http://localhost:5173`).

## Production Build

```bash
npm run build
```

The optimized files are created in `dist/`.

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── common/Card.jsx
│   ├── layout/Header.jsx
│   ├── layout/Footer.jsx
│   └── ui/Button.jsx
├── pages/
├── hooks/
├── services/
├── utils/
├── App.jsx
├── App.css
└── main.jsx
```

## Coding Standards

- Use JavaScript and JSX.
- Keep components small and reusable.
- Run `npm run lint` before committing.
- Run `npm run format` to apply Prettier formatting.

## GitHub Instructions

Create a GitHub repository, then run `git init`, `git add .`, and `git commit -m "Initial ReactJS setup"`. Add the GitHub remote you created and push your branch. Do not commit `node_modules/`, `dist/`, or `.env`.

## Future Development Roadmap

- Add pages and navigation.
- Add API integration when required.
- Add tests as the application grows.
