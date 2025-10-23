# 04_express_33755196 — Simple Express Server

Short lab project showing a minimal Express web app and extra routes.

## Overview
This project implements a simple Express server that serves several routes:
- `/` — Hello message
- `/about` — About page
- `/contact` — Contact details
- `/date` — Current date and time

Routes can be moved to `routes/main.js` for organization. The app listens on port 8000.

## Prerequisites
- Node.js (v12+ recommended)
- npm
- Git (for deployment)

## Quick install (development)
1. Open project folder in VS Code.
2. Initialize project (if not done):
    ```
    npm init -y
    ```
3. Install Express:
    ```
    npm install express
    ```

## Run locally
Start the server:
```
node index.js
```
Open a browser:
- http://localhost:8000
- http://localhost:8000/about
- http://localhost:8000/contact
- http://localhost:8000/date

Test with curl:
```
curl http://localhost:8000/date
```

## Project structure (expected)
- index.js
- package.json
- package-lock.json
- routes/
  - main.js
- .gitignore (should contain `node_modules/`)

Example: `routes/main.js` exports an Express router with the route handlers; `index.js` mounts it with `app.use('/', mainRoutes)`.

## Notes for code
- Keep route handlers simple and add comments explaining each section.
- Use `new Date()` to get current date/time for `/date`.
- Use parameterised routes for extensions (`/welcome/:name`).



Replace repository and VM URLs with your own as required by the assignment.

## Extensions (optional)
- `/welcome/:name` — show provided name

## Author
Student ID: 33755196
