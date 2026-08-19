# FastAPI JWT MySQL UI

Frontend application for FastAPI JWT authentication flow using React, Vite, Tailwind CSS, and Axios.

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- Axios
- React Router

## Project Structure

src/
	api/
		client.js
	components/
	context/
		AuthContext.jsx
	hooks/
	layouts/
	pages/
		Home.jsx
		auth/
			Login.jsx
			Register.jsx
		dashboard/
			Dashboard.jsx
	routes/
		AppRoutes.jsx
		ProtectedRoute.jsx
	utils/
	App.jsx
	index.css
	main.jsx

## Environment Variables

Create `.env` in the project root:

VITE_API_BASE_URL=http://127.0.0.1:8000

Example file is available in `.env.example`.

## Install Dependencies

npm install

## Run Frontend

npm run dev

Default Vite URL:

http://localhost:5173

## Build Frontend

npm run build

## Backend Requirements

Run FastAPI backend on:

http://127.0.0.1:8000

Required backend auth routes:

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

## Authentication Flow

1. User logs in at `/login`
2. Frontend calls `POST /api/auth/login`
3. Backend returns `access_token`
4. Token is saved to `localStorage` as `access_token`
5. Axios interceptor automatically adds `Authorization: Bearer <token>`
6. Protected route `/dashboard` calls `GET /api/auth/me`

## Route Summary

Public routes:

- /
- /login
- /register

Protected routes (require token):

- /dashboard
- /profile

## Notes

- `.env` is gitignored.
- If Vite runs on another port (for example 5174), backend CORS must allow that origin.
