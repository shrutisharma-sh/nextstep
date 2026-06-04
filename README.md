# NextStep

An AI-powered career guidance platform that analyzes your query, detects emotional context, and returns personalized career roadmaps, market insights, and skill learning paths.

---

## Running the Project

### AI Service (FastAPI)

```bash
cd nextstep-ai-service

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\Activate.ps1

# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run
uvicorn app:app --reload
```

Runs on: `http://127.0.0.1:8000`

---

### Frontend (React)

```bash
cd nextstep-frontend

npm install
npm run dev
```

---

### Backend (Spring Boot) — 🚧 WIP

`nextstep-backend` is not required to run the app yet. Planned for auth, database, and API orchestration once core features are stable.
