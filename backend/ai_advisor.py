import os
import json
from anthropic import Anthropic
from dotenv import load_dotenv
from typing import Dict, Any, List

load_dotenv()

client = Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY", "")
)

MODEL_NAME = "claude-sonnet-4-20250514"

def get_fantasy_picks(race_name: str, recent_form_data: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Generate fantasy picks using Claude based on recent driver form."""
    system_prompt = (
        "You are an expert F1 Fantasy analyst. "
        "Given recent driver performance data, recommend the best "
        "5 drivers and 1 constructor to pick for the upcoming race. "
        "Give clear reasoning for each pick. Be specific about "
        "stats. Format response as JSON with keys: "
        "drivers (list of {name, code, reasoning}), "
        "constructor (name, reasoning)"
    )

    user_message = f"Upcoming race: {race_name}\n\nRecent driver performance data:\n{json.dumps(recent_form_data, indent=2)}"

    try:
        response = client.messages.create(
            model=MODEL_NAME,
            max_tokens=1000,
            system=system_prompt,
            messages=[
                {"role": "user", "content": user_message}
            ]
        )
        
        # Parse the JSON response
        text = response.content[0].text
        # Extract JSON block if surrounded by markdown
        if "```json" in text:
            json_str = text.split("```json")[1].split("```")[0].strip()
        elif "```" in text:
            json_str = text.split("```")[1].split("```")[0].strip()
        else:
            json_str = text.strip()
            
        return json.loads(json_str)
    except Exception as e:
        print(f"Error calling Claude for fantasy picks: {e}")
        return {
            "drivers": [],
            "constructor": {"name": "", "reasoning": "Could not fetch AI analysis"}
        }

def explain_lap(telemetry_summary: Dict[str, Any], driver: str, race: str, lap: int) -> str:
    """Explain a telemetry lap in simple English using Claude."""
    system_prompt = (
        "You are an F1 telemetry expert who explains "
        "data in simple, exciting language for fans. Given lap "
        "telemetry data, explain what happened in that lap — "
        "where time was gained, where it was lost, how it compares "
        "to the race average. Keep it under 100 words. Be engaging."
    )

    user_message = (
        f"Driver: {driver}\nRace: {race}\nLap Number: {lap}\n\n"
        f"Telemetry Summary:\n{json.dumps(telemetry_summary, indent=2)}"
    )

    try:
        response = client.messages.create(
            model=MODEL_NAME,
            max_tokens=400,
            system=system_prompt,
            messages=[
                {"role": "user", "content": user_message}
            ]
        )
        return response.content[0].text
    except Exception as e:
        print(f"Error calling Claude for lap explanation: {e}")
        return "Could not generate AI explanation. Please check your API key and connection."
