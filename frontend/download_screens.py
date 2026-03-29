import json
import urllib.request
import os

files = [
    r"C:/Users/rajbh/.gemini/antigravity/brain/b4e1d863-572a-4f9b-b702-17f3f8db3efc/.system_generated/steps/130/output.txt",
    r"C:/Users/rajbh/.gemini/antigravity/brain/b4e1d863-572a-4f9b-b702-17f3f8db3efc/.system_generated/steps/131/output.txt",
    r"C:/Users/rajbh/.gemini/antigravity/brain/b4e1d863-572a-4f9b-b702-17f3f8db3efc/.system_generated/steps/132/output.txt",
    r"C:/Users/rajbh/.gemini/antigravity/brain/b4e1d863-572a-4f9b-b702-17f3f8db3efc/.system_generated/steps/133/output.txt"
]

names = ["race_analysis.html", "fantasy_picks.html", "rivalry_tracker.html", "lap_explainer.html"]

os.makedirs("screens", exist_ok=True)

for fpath, name in zip(files, names):
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        url = data['outputComponents'][0]['design']['screens'][0]['htmlCode']['downloadUrl']
        print(f"Downloading {name} from {url}")
        
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read()
            with open(os.path.join("screens", name), 'wb') as out_f:
                out_f.write(html)
        print(f"Saved {name}")
