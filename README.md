# Todo List App - Backend

This repository contains the backend for the Todo List application, built with **Express.js** and **Prisma**. It provides REST API endpoints for managing tasks and interacts with a **MySQL** database.

## Features
- Fetch all tasks.
- Fetch a single task by ID.
- Create a new task.
- Update an existing task.
- Delete a task.

## Prerequisites
Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) (v8.0 or later)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <backend-repo-url>
cd <backend-repo-directory>
```
### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure the Database
```bash
npm install
# or
yarn install
```

1) Create a database in MySQL:
```bash
CREATE DATABASE todo_db;
```
2) Update the .env file in the project root with your MySQL credentials:
```bash
DATABASE_URL="mysql://<username>:<password>@localhost:3306/todo_db"
```
Replace <username> and <password> with your MySQL credentials.

3) Apply the Prisma schema to the database:
```bash
npx prisma db push
```
This will create the necessary Task table in the database.

### 4. Start the Development Server
Run the backend server:
```bash
npm start
# or
yarn start
```
The backend server should now be running at http://localhost:4000/api.

### 5. API Endpoints
The following endpoints are available:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Fetch all task |
| GET | /tasks/:id | Fetch a single task by ID |
| POST | /tasks | Creare a new task |
| PUT | /tasks/:id | Update an existing task |
| DELETE | /tasks/:id | Delete a task by ID |

### Scripts
- npm start: Start the development server.
- npm run dev: Start the development server with live reloading.
- npx prisma studio: Open Prisma Studio for database management.

### Tech Stack
- Framework: Express.js
- Styling: Tailwind CSS
- ORM: Prisma
- Database: MySQL