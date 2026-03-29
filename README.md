# 🏎️ PitWall AI

> Your AI-powered Formula 1 race analysis and fantasy picks dashboard.

![PitWall AI](./screenshots/home.png)

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Claude](https://img.shields.io/badge/AI-Claude%20Sonnet-D97706?logo=anthropic&logoColor=white)](https://www.anthropic.com)
[![FastF1](https://img.shields.io/badge/Data-FastF1-E10600)](https://github.com/theOehrly/Fast-F1)
[![Framer Motion](https://img.shields.io/badge/Animations-Framer%20Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

- 🏁 **Race Analysis** — Lap time evolution charts, tire strategy timelines, and session statistics for any race from 2018–2024

- ⚔️ **Rivalry Tracker** — Head-to-head driver comparisons with qualifying battles, race wins, pace gap data, and AI-generated expert analysis

- 🤖 **Fantasy Picks** — AI-powered weekly team recommendations based on real telemetry data and recent driver form, powered by Claude Sonnet

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
| **Anthropic Claude Sonnet** | AI race analysis & fantasy insights |
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
- **Anthropic API Key** — [Get one here](https://console.anthropic.com)

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
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxx
```

```bash
# Start the FastAPI server
uvicorn main:app --reload --port 8000
```

The API will be available at **http://localhost:8000**

API docs (auto-generated): **http://localhost:8000/docs**

---

## 🗂️ Project Structure

```
pitwall-ai/
├── 📁 backend/
│   ├── main.py              ← FastAPI app & route definitions
│   ├── f1_data.py           ← FastF1 data fetching & processing
│   ├── ai_advisor.py        ← Claude API integration & prompts
│   ├── requirements.txt     ← Python dependencies
│   ├── .env.example         ← Environment variable template
│   └── cache/               ← FastF1 local data cache
│
├── 📁 frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          ← Animated navigation bar
│   │   │   ├── Layout.jsx          ← Root layout wrapper
│   │   │   ├── CustomDropdown.jsx  ← Animated dropdown selector
│   │   │   ├── SkeletonLoader.jsx  ← Shimmer loading states
│   │   │   ├── ScrollProgress.jsx  ← Scroll depth indicator
│   │   │   └── PageTransition.jsx  ← Global route transition
│   │   ├── pages/
│   │   │   ├── Home.jsx            ← Hero dashboard
│   │   │   ├── RaceAnalysis.jsx    ← Lap charts & tire strategy
│   │   │   ├── RivalryTracker.jsx  ← Driver H2H comparison
│   │   │   ├── FantasyPicks.jsx    ← AI team picker
│   │   │   └── LapExplainer.jsx    ← Per-lap AI breakdown
│   │   ├── utils/
│   │   │   ├── useAnimatedCounter.js  ← Count-up hook
│   │   │   ├── useTypewriter.js       ← Typewriter text hook
│   │   │   └── useStaggerChildren.js  ← Grid stagger hook
│   │   └── api.js               ← Axios client configuration
│   └── package.json
│
├── 📁 screenshots/              ← App screenshots for README
├── README.md
└── LICENSE
```

---

## 🌐 API Reference

| Method | Endpoint | Description |
|:------:|:---------|:------------|
| `GET` | `/api/lap-times` | Lap time data for a given session |
| `GET` | `/api/tire-strategy` | Tire compound strategy per driver |
| `GET` | `/api/rivalry` | Head-to-head stats between two drivers |
| `POST` | `/api/fantasy-picks` | AI-generated fantasy team recommendations |
| `POST` | `/api/lap-explainer` | Plain-English AI lap breakdown |
| `GET` | `/health` | Health check endpoint |

Full interactive API documentation available at `/docs` when the backend is running.

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

## 🗺️ Roadmap

- [x] Core page layout & routing
- [x] Framer Motion animation system
- [x] Premium dark UI with "Kinetic Observatory" theme
- [x] Custom animation hooks (`useAnimatedCounter`, `useTypewriter`)
- [x] Skeleton loading states & shimmer effects
- [ ] **Backend API integration** ← *In Progress*
- [ ] FastF1 live data connection
- [ ] Claude AI insights (Fantasy Picks + Lap Explainer)
- [ ] Cloud deployment (Vercel + Cloud Run)
- [ ] Historical data browser (2018–2024)
- [ ] Mobile app (React Native)

---

## 🤝 Contributing

Contributions are warmly welcomed! Here's how:

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

Please follow [Conventional Commits](https://www.conventionalcommits.org) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [FastF1](https://github.com/theOehrly/Fast-F1) — the incredible Python library that powers all F1 telemetry data
- [Anthropic](https://www.anthropic.com) — for Claude, the AI engine behind race insights
- [Formula 1](https://www.formula1.com) — for making the data available

---

<p align="center">
  Built with ❤️ and ☕ | Powered by real F1 telemetry data
</p>
<p align="center">
  <strong>PitWall AI</strong> — Because every millisecond matters.
</p>
