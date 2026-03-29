import json
from f1_data import get_seasons_test # wait I didn't write it, I'll test get_lap_times

from f1_data import get_lap_times, get_tire_strategy

if __name__ == "__main__":
    print("Testing get_lap_times for 2024 Monaco GP Race...")
    # Monaco 2024 Race
    laps = get_lap_times(2024, "Monaco", "R")
    print(f"Got {len(laps)} drivers lap data.")
    if laps:
        print(f"Sample for one driver: {laps[0]['driverCode']} with {len(laps[0]['laps'])} valid laps")
        print(f"Fastest valid lap: {laps[0]['fastestLap']} sec")
        
    print("\nTesting get_tire_strategy for 2024 Monaco GP...")
    strategy = get_tire_strategy(2024, "Monaco")
    print(f"Got {len(strategy)} drivers strategy.")
    if strategy:
        print(f"Sample for one driver: {strategy[0]['driverCode']} stints: {strategy[0]['stints']}")
