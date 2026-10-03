# AI-Based Drug Interaction Detection System

## Mini Project Abstract
Title: AI-Based Drug Interaction Detection System

Domain: Data Analytics Group - Artificial Intelligence

This mini-project presents a lightweight AI-based Drug Interaction Detection System designed to improve medication safety through automated analysis and real-time decision support. Using rule-based interaction logic and structured medical data, the application evaluates prescribed drugs, identifies potential interactions, classifies severity levels, and generates safety alerts. The system simulates clinical decision support by processing medication combinations and providing instant risk assessment through an interactive web interface. Users can dynamically monitor warnings, side effects, and recommendations. This project bridges the gap between manual verification and intelligent healthcare assistance, enabling faster and more reliable medication safety checks without requiring complex hospital infrastructure.

## Project Overview
This repository contains a full-stack web application:
- Frontend: React + Vite
- Backend: Python FastAPI + SQLAlchemy (async)
- Core AI logic: Rule-based interaction engine with OCR-assisted scan flow (Python Tesseract)
- Database: SQLite (default for easy setup)

Current setup uses exactly one frontend and one backend:
- Frontend: Vite app in `frontend/`
- Backend: FastAPI app in `backend/app/`

## Key Features
- User registration and login with JWT (JSON Web Tokens) authentication
- Upload/Scan prescription images with Scan Prescription and findout results
- Add, update, delete, and list medications/interactions
- Check interactions among active medications
- Severity-based alerts: minor, moderate, major, critical
- Scan history tracking and risk-level summary
- Demo seed dataset for immediate presentation

## Tech Stack
- Frontend: React, Zustand, Axios, Tailwind CSS
- Backend: FastAPI, Pydantic, SQLAlchemy, python-jose
- OCR: pytesseract, OpenCV, Pillow
- Database: SQLite (aiosqlite)

## Folder Structure
- frontend: React + Vite client app
- backend: FastAPI backend service
- database: SQLite files, rule data, and Supabase migrations

## Quick Start (Submission Demo)
### 1. Start backend
Open terminal at project root, then:

cd backend

### macOS / Linux
python3.11 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

### Windows (PowerShell)
# Use current available Python (3.14 is fine) and light dependency set when possible:
py -3.14 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install --upgrade pip setuptools wheel
pip install -r requirements.txt
copy .env.example .env
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

new
pip install -r requirements.txt --upgrade
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000


# If you need full raw dependencies (slower and may fail on Pillow/bcrypt builds):
# pip install -r requirements.txt

Note: Python 3.14+ is supported; `requirements-lite.txt` is recommended for reliable local setup.

Backend API docs: http://localhost:8000/docs

### 2. Start frontend
Open another terminal at project root:

cd frontend
npm install
npm run dev

Frontend app: use the URL printed by Vite (typically http://localhost:3000 or http://localhost:3001)

The frontend uses Vite's `/api` development proxy to reach the backend at `http://localhost:8000`. Keep the backend running while scanning. For a deployed frontend, set `VITE_API_URL` to the backend API base URL (ending in `/api/v1`) before building the frontend, and configure the backend's `CORS_ORIGINS` to include the frontend origin.

### 3. Start database
This project uses SQLite files under `database/` and does not require a separate database server process.

Database location used by backend:
- database/drug_interactions.db

Optional: quick check from project root:

ls -la database

## Default Demo Flow
1. Register a new user.
2. Add medications such as Warfarin, Aspirin, Ibuprofen, Lisinopril, Metformin, Insulin.
3. Go to Interactions page to view generated risk alerts.
4. Use Scan page to upload a prescription image and inspect extracted medications plus interaction summary.

## Important Notes
- This system is for educational/demo use only, not for real clinical diagnosis.
- OCR accuracy depends on image quality and installed Tesseract binary.
- The backend creates demo drug and interaction records automatically on first start.

## Academic Submission Checklist
- Problem statement and objective
- System architecture diagram
- Dataset/rule source explanation
- Screenshots of Login, Medication Management, Interaction Alerts, Scan Results, History
- Test cases and output evidence
- Limitations and future improvements

## Future Enhancements
- Integrate trusted external drug APIs
- Improve OCR and medication NER accuracy
- Add multilingual prescription support
- Add role-based dashboard for doctors/pharmacists
- Deploy with Docker and CI/CD pipeline

## License
Use this project for academic and learning purposes.
