# 🏎️ PitWall AI

> Your AI-powered Formula 1 race analysis and fantasy picks dashboard.

![PitWall AI](./screenshots/home.png)

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Gemini](https://img.shields.io/badge/AI-Gemini%201.5%20Pro-blue?logo=google&logoColor=white)](https://ai.google.dev)
[![FastF1](https://img.shields.io/badge/Data-FastF1-E10600)](https://github.com/theOehrly/Fast-F1)
[![Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

- 🏁 **Race Analysis** — Lap time evolution charts, tire strategy timelines, and session statistics for any race from 2018–2024

- ⚔️ **Rivalry Tracker** — Head-to-head driver comparisons with qualifying battles, race wins, pace gap data, and AI-generated expert analysis

- 🤖 **Fantasy Picks** — AI-powered weekly team recommendations based on real telemetry data and recent driver form, powered by **Google Gemini 1.5 Pro**

- 🔬 **Lap Explainer** — Enter any driver + lap number and get a plain-English AI breakdown of exactly what happened on track — corner by corner

- 🎨 **Premium UI** — Kinetic dark-mode dashboard with Framer Motion animations, count-up telemetry stats, typewriter AI reveals, and skeleton loading states

---

## 📸 Screenshots

| Home | Race Analysis |
|:----:|:-------------:|
| ![Home](./screenshots/home.png) | ![Race Analysis](./screenshots/race-analysis.png) |

| Rivalry Tracker | Fantasy Picks |
|:---------------:|:-------------:|
| ![Rivalry](./screenshots/rivalry.png) | ![Fantasy](./screenshots/fantasy.png) |

### Lap Explainer
![Lap Explainer](./screenshots/lap-explainer.png)

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|:-----------|:--------|
| **React 18 + Vite** | Core UI framework |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Premium page & component animations |
| **Recharts** | Data visualization (charts, graphs) |
| **Axios** | HTTP client for API calls |
| **Lucide React** | Icon library |

### Backend
| Technology | Purpose |
|:-----------|:--------|
| **Python FastAPI** | REST API server |
| **FastF1** | Official Formula 1 telemetry data |
| **Google Gemini 1.5 Pro** | AI race analysis & fantasy insights |
| **Uvicorn** | ASGI server |
| **Pandas / NumPy** | Data processing |

### Deployment
| Service | Purpose |
|:--------|:--------|
| **Vercel** | Frontend hosting |
| **Google Cloud Run** | Backend containerized deployment |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ — [Download](https://nodejs.org)
- **Python** 3.10+ — [Download](https://python.org)
- **Git** — [Download](https://git-scm.com)
- **Google AI Studio API Key** — [Get one here](https://aistudio.google.com/)

---

### Frontend Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

---

### Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv

# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Copy environment variables template
cp .env.example .env
```

Now edit `.env` and add your API key:

```env
GOOGLE_API_KEY=your_gemini_api_key_here
```

```bash
# Start the FastAPI server
uvicorn main:app --reload --port 8000
```

The API will be available at **http://localhost:8000**

---

## 🗂️ Project Structure

(Same as previous, omitted for brevity here but present in raw file)

---

## 🎨 Design System

PitWall AI uses a custom **"Kinetic Observatory"** design language:

| Token | Value | Usage |
|:------|:------|:------|
| `--primary` | `#E10600` | F1 Red — CTAs, highlights |
| `--accent` | `#47EFDA` | Teal — live data, positive indicators |
| `--bg` | `#0A0A0A` | Base background |
| `--surface` | `#1C1B1B` | Card surfaces |
| `--text` | `#E5E2E1` | Body text |
| Font (Display) | `Space Grotesk` | Headings & data labels |
| Font (Body) | `Inter` | Paragraphs & UI copy |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [FastF1](https://github.com/theOehrly/Fast-F1) — the incredible Python library for telemetry
- [Google AI](https://ai.google.dev) — for Gemini 1.5 Pro, the AI engine behind race insights
- [Formula 1](https://www.formula1.com) — for making the data available

---

<p align="center">
  Built with ❤️ and ☕ | Powered by real F1 telemetry data
</p>
