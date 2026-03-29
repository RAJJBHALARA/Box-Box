from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import fastf1

from f1_data import (
    get_lap_times,
    get_tire_strategy,
    get_rivalry_stats,
    get_recent_driver_form,
    get_lap_telemetry
)
from ai_advisor import get_fantasy_picks, explain_lap

app = FastAPI(title="PitWall AI Backend", version="1.0.0")

# Setup CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this. We allow all origins for dev.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FantasyPicksReq(BaseModel):
    race: str
    year: int

class LapExplainerReq(BaseModel):
    year: int
    race: str
    driver: str
    lap: int

@app.get("/api/seasons")
async def get_seasons():
    """Return list of available seasons (2018-2024)."""
    # FastF1 is most reliable from 2018 up to 2024 currently.
    return {"seasons": list(range(2018, 2025))}

@app.get("/api/races")
async def get_races(year: int):
    """Return list of races for that year."""
    try:
        events = fastf1.get_event_schedule(year)
        # Filter testing out
        races = events[events['EventFormat'] != 'testing']
        return {"races": races['EventName'].tolist()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/sessions")
async def get_sessions(year: int, race: str):
    """Return available sessions. Using static generic sessions for F1 for simplicity."""
    return {"sessions": ["FP1", "FP2", "FP3", "Q", "S", "SS", "R"]}

@app.get("/api/lap-times")
async def fetch_lap_times(year: int, race: str, session: str):
    """Return lap times for all drivers."""
    data = get_lap_times(year, race, session)
    if not data:
        raise HTTPException(status_code=404, detail="Lap times not found or could not be processed.")
    return {"data": data}

@app.get("/api/tire-strategy")
async def fetch_tire_strategy(year: int, race: str):
    """Return stint and compound data per driver."""
    data = get_tire_strategy(year, race)
    if not data:
        raise HTTPException(status_code=404, detail="Tire strategy not found.")
    return {"data": data}

@app.get("/api/rivalry")
async def fetch_rivalry(year: int, driver1: str, driver2: str):
    """Return head to head stats."""
    data = get_rivalry_stats(year, driver1, driver2)
    if not data:
        raise HTTPException(status_code=404, detail="Rivalry stats not found.")
    return data

@app.post("/api/fantasy-picks")
async def fetch_fantasy_picks(req: FantasyPicksReq):
    """Fetch recent form data, send to Claude, return AI picks + reasoning."""
    # We will grab form data for top drivers as a sample (or you can specify specific ones).
    # Since fast get_recent_driver_form is slow sequentially for all, we will fetch for top 5 teams' drivers.
    top_drivers = ["VER", "PER", "LEC", "SAI", "NOR", "PIA", "HAM", "RUS", "ALO", "STR"]
    recent_data = []
    
    # We use 2024 to fetch form
    for drv in top_drivers:
        form = get_recent_driver_form(drv, last_n_races=3)
        if form:
            recent_data.append(form)
            
    if not recent_data:
        raise HTTPException(status_code=500, detail="Could not gather recent driver form.")
        
    picks = get_fantasy_picks(req.race, recent_data)
    return picks

@app.post("/api/lap-explainer")
async def fetch_lap_explainer(req: LapExplainerReq):
    """Fetch telemetry, send to Claude, return plain English explanation."""
    telemetry = get_lap_telemetry(req.year, req.race, req.driver, req.lap)
    if not telemetry:
        raise HTTPException(status_code=404, detail="Lap telemetry not found.")
        
    explanation = explain_lap(telemetry, req.driver, req.race, req.lap)
    return {"explanation": explanation, "telemetry": telemetry}
