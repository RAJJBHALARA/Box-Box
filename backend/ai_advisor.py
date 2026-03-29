import os
import json
import google.generativeai as genai
from dotenv import load_dotenv
from typing import Dict, Any, List

load_dotenv()

# Configure Gemini
api_key = os.environ.get("GOOGLE_API_KEY", "")
genai.configure(api_key=api_key)

# We use Gemini 1.5 Pro for its deep reasoning
MODEL_NAME = "gemini-1.5-pro"
model = genai.GenerativeModel(MODEL_NAME)

def get_fantasy_picks(race_name: str, recent_form_data: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Generate fantasy picks using Gemini based on recent driver form."""
    prompt = (
        "You are an expert F1 Fantasy analyst. "
        "Given recent driver performance data, recommend the best "
        "5 drivers and 1 constructor to pick for the upcoming race. "
        "Give clear reasoning for each pick. Be specific about stats. "
        "IMPORTANT: You MUST return the response ONLY as a raw JSON object. Do not include any text before or after the JSON. "
        "Format response as JSON with keys: "
        "drivers (list of {name, code, reasoning}), "
        "constructor (name, reasoning). "
        f"\n\nUpcoming race: {race_name}\n\nRecent driver performance data:\n{json.dumps(recent_form_data, indent=2)}"
    )

    try:
        response = model.generate_content(prompt)
        text = response.text.strip()
        
        # Clean potential markdown backticks
        if "```json" in text:
            text = text.split("```json")[1].split("```")[0].strip()
        elif "```" in text:
            text = text.split("```")[1].split("```")[0].strip()
            
        return json.loads(text)
    except Exception as e:
        print(f"Error calling Gemini for fantasy picks: {e}")
        return {
            "drivers": [],
            "constructor": {"name": "", "reasoning": "Could not fetch AI analysis"}
        }

def explain_lap(telemetry_summary: Dict[str, Any], driver: str, race: str, lap: int) -> str:
    """Explain a telemetry lap in simple English using Gemini."""
    prompt = (
        "You are an F1 telemetry expert who explains data in simple, exciting language for fans. "
        "Given lap telemetry data, explain what happened in that lap — where time was gained, where it was lost, "
        "and how it compares to the race average. Keep it under 100 words. Be engaging. "
        f"\n\nDriver: {driver}\nRace: {race}\nLap Number: {lap}\n\n"
        f"Telemetry Summary:\n{json.dumps(telemetry_summary, indent=2)}"
    )

    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print(f"Error calling Gemini for lap explanation: {e}")
        return "Could not generate AI explanation. Please check your API key and connection."
