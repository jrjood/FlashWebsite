# Real Estate CMS (Frontend + Backend)

This repository contains a minimal full-stack real estate site scaffold with:

- Frontend: React 18 + Vite (JavaScript)
- Backend: Node 18 + Express + MySQL (Sequelize)
- File uploads via Multer (served at /uploads)
- JWT-based admin authentication
- Docker Compose to run MySQL, phpMyAdmin, backend, frontend

Basic run (Docker):

1. Ensure Docker is running.
2. From the repo root run:

```bash
docker compose up -d --build
```

3. Seed the database (once backend is healthy):

```bash
docker compose exec backend npm run seed
```

4. Open frontend: http://localhost:5173
