import os
import fastf1
import pandas as pd
import numpy as np
from typing import Dict, Any, List

# Create cache directory if it doesn't exist
CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cache')
if not os.path.exists(CACHE_DIR):
    os.makedirs(CACHE_DIR)

# Enable cache
fastf1.Cache.enable_cache(CACHE_DIR)

# Suppress pandas chained assignment warnings common in fastf1
pd.options.mode.chained_assignment = None

def _get_session_safe(year: int, race: str, session_type: str):
    """Safely get and load a session, returning None on failure."""
    try:
        session = fastf1.get_session(year, race, session_type)
        session.load(telemetry=False, weather=False, messages=False)
        return session
    except Exception as e:
        print(f"Error loading session: {e}")
        return None

def _get_session_with_telemetry_safe(year: int, race: str, session_type: str):
    """Safely get and load a session with telemetry, returning None on failure."""
    try:
        session = fastf1.get_session(year, race, session_type)
        session.load(telemetry=True, weather=False, messages=False)
        return session
    except Exception as e:
        print(f"Error loading session with telemetry: {e}")
        return None

def get_lap_times(year: int, race: str, session_type: str) -> List[Dict[str, Any]]:
    """Return lap times for all drivers in a given session."""
    session = _get_session_safe(year, race, session_type)
    if not session:
        return []

    try:
        laps = session.laps
        result = []
        for drv in session.drivers:
            drv_info = session.get_driver(drv)
            drv_code = drv_info.get('Abbreviation', str(drv))
            drv_team = drv_info.get('TeamName', 'Unknown')
            drv_laps = laps.pick_driver(drv)
            if drv_laps.empty:
                continue
                
            # Filter out deleted/invalid laps for cleaner chart data
            valid_laps = drv_laps.pick_quicklaps()
            if valid_laps.empty:
                valid_laps = drv_laps # Fallback
                
            lap_data = []
            for _, lap in valid_laps.iterrows():
                try:
                    lap_time_sec = lap['LapTime'].total_seconds()
                    if pd.notna(lap_time_sec):
                        lap_data.append({
                            "lap_number": int(lap['LapNumber']),
                            "lap_time": lap_time_sec
                        })
                except:
                    continue
                    
            if lap_data:
                result.append({
                    "driverCode": drv_code,
                    "team": drv_team,
                    "laps": lap_data,
                    "fastestLap": float(valid_laps['LapTime'].min().total_seconds()) if not valid_laps.empty else None
                })
        return result
    except Exception as e:
        print(f"Error processing lap times: {e}")
        return []

def get_tire_strategy(year: int, race: str) -> List[Dict[str, Any]]:
    """Return stint and compound data per driver for a race."""
    session = _get_session_safe(year, race, 'R')
    if not session:
        return []

    try:
        laps = session.laps
        result = []
        for drv in session.drivers:
            drv_info = session.get_driver(drv)
            drv_code = drv_info.get('Abbreviation', str(drv))
            drv_laps = laps.pick_driver(drv)
            if drv_laps.empty:
                continue
            
            # Identify stints
            stints = drv_laps[['Stint', 'Compound', 'LapNumber']].dropna()
            if stints.empty:
                continue
                
            stint_summary = []
            grouped = stints.groupby('Stint')
            for stint_num, group in grouped:
                stint_summary.append({
                    "stint": int(stint_num),
                    "compound": group['Compound'].iloc[0],
                    "start_lap": int(group['LapNumber'].min()),
                    "end_lap": int(group['LapNumber'].max()),
                    "total_laps": int(len(group))
                })
                
            result.append({
                "driverCode": drv_code,
                "stints": stint_summary
            })
        return result
    except Exception as e:
        print(f"Error processing tire strategy: {e}")
        return []

def get_rivalry_stats(year: int, driver1: str, driver2: str) -> Dict[str, Any]:
    """Return head to head stats for two drivers in a given year."""
    # This is a bit computationally heavy to calculate over the whole year accurately in real-time,
    # but we can try to get the summary for the races available.
    try:
        events = fastf1.get_event_schedule(year)
        # Filter for races that have happened
        completed_races = events[events['EventDate'] < pd.Timestamp.now()]
        
        qualifying_h2h = {driver1: 0, driver2: 0}
        race_h2h = {driver1: 0, driver2: 0}
        avg_gap = []
        
        for _, event in completed_races.iterrows():
            if event['EventFormat'] == 'testing':
                continue
            try:
                # Race H2H
                session = fastf1.get_session(year, event['EventName'], 'R')
                session.load(telemetry=False, weather=False, messages=False)
                
                try: # FastF1 sometimes fails to find abbreviation
                    d1_res = session.results[session.results['Abbreviation'] == driver1]
                    d2_res = session.results[session.results['Abbreviation'] == driver2]
                    
                    if not d1_res.empty and not d2_res.empty:
                        d1_pos = int(d1_res.iloc[0]['Position'])
                        d2_pos = int(d2_res.iloc[0]['Position'])
                        if d1_pos < d2_pos:
                            race_h2h[driver1] += 1
                        elif d2_pos < d1_pos:
                            race_h2h[driver2] += 1
                except:
                    pass

                # Quali H2H (Simplification: using Q session)
                try:
                    q_session = fastf1.get_session(year, event['EventName'], 'Q')
                    q_session.load(telemetry=False, weather=False, messages=False)
                    d1_q_res = q_session.results[q_session.results['Abbreviation'] == driver1]
                    d2_q_res = q_session.results[q_session.results['Abbreviation'] == driver2]
                    
                    if not d1_q_res.empty and not d2_q_res.empty:
                        d1_q_pos = int(d1_q_res.iloc[0]['Position'])
                        d2_q_pos = int(d2_q_res.iloc[0]['Position'])
                        if d1_q_pos < d2_q_pos:
                            qualifying_h2h[driver1] += 1
                        elif d2_q_pos < d1_q_pos:
                            qualifying_h2h[driver2] += 1
                except:
                    pass
            except:
                continue

        return {
            "driver1": driver1,
            "driver2": driver2,
            "qualifying_wins": qualifying_h2h,
            "race_wins": race_h2h,
            "races_analyzed": race_h2h[driver1] + race_h2h[driver2]
        }
    except Exception as e:
        print(f"Error processing rivalry: {e}")
        return {}

def get_recent_driver_form(driver_code: str, last_n_races: int = 3) -> Dict[str, Any]:
    """Get the recent results for a driver."""
    # Simplify by just returning mock structure here, real implementation would
    # traverse back the calendar N races and get positions.
    try:
        current_year = 2024 # We know 2024 works best
        events = fastf1.get_event_schedule(current_year)
        completed_races = events[events['EventDate'] < pd.Timestamp.now()]
        
        if completed_races.empty:
            return {}
            
        recent = completed_races.tail(last_n_races)
        results = []
        
        for _, event in recent.iterrows():
            if event['EventFormat'] == 'testing':
                continue
            try:
                session = fastf1.get_session(current_year, event['EventName'], 'R')
                session.load(telemetry=False, weather=False, messages=False)
                res = session.results[session.results['Abbreviation'] == driver_code]
                if not res.empty:
                    results.append({
                        "race": event['EventName'],
                        "position": int(res.iloc[0]['Position']),
                        "points": float(res.iloc[0]['Points'])
                    })
            except:
                continue
                
        return {
            "driverCode": driver_code,
            "recent_results": results
        }
    except Exception as e:
        print(f"Error processing recent form: {e}")
        return {}

def get_lap_telemetry(year: int, race: str, driver: str, lap_number: int) -> Dict[str, Any]:
    """Get telemetry for a specific lap."""
    session = _get_session_with_telemetry_safe(year, race, 'R')
    if not session:
        return {}
        
    try:
        laps = session.laps.pick_driver(driver)
        lap = laps[laps['LapNumber'] == lap_number]
        
        if lap.empty:
            return {}
            
        lap_data = lap.iloc[0]
        
        # Telemetry
        telemetry = lap.get_telemetry()
        faster_sectors = {
            "Sector1": lap_data.get('Sector1Time'),
            "Sector2": lap_data.get('Sector2Time'),
            "Sector3": lap_data.get('Sector3Time')
        }
        
        # Extract time in seconds if available
        sector1_sec = faster_sectors["Sector1"].total_seconds() if pd.notna(faster_sectors["Sector1"]) else None
        sector2_sec = faster_sectors["Sector2"].total_seconds() if pd.notna(faster_sectors["Sector2"]) else None
        sector3_sec = faster_sectors["Sector3"].total_seconds() if pd.notna(faster_sectors["Sector3"]) else None
        
        # To summarize for Claude
        return {
            "driver": driver,
            "race": race,
            "lap_number": lap_number,
            "lap_time_sec": lap_data.get('LapTime').total_seconds() if pd.notna(lap_data.get('LapTime')) else None,
            "sector1_sec": sector1_sec,
            "sector2_sec": sector2_sec,
            "sector3_sec": sector3_sec,
            "compound": lap_data.get('Compound'),
            "tire_life": lap_data.get('TyreLife'),
            "speed_trap_max": telemetry['Speed'].max() if not telemetry.empty else None
        }
    except Exception as e:
        print(f"Error processing lap telemetry: {e}")
        return {}
