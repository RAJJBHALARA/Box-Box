from pathlib import Path


source = Path(r"D:\f1 project\backend\ai_advisor.py").read_text(encoding="utf-8")

assert '"temperature": 0.2' in source, "Gemini temperature should be reduced to 0.2"
assert '"top_p": 0.8' in source, "Gemini top_p should be 0.8"
assert '"top_k": 40' in source, "Gemini top_k should be 40"
assert '"max_output_tokens": 300' in source, "Gemini max_output_tokens should be 300"
assert '"gemini-1.5-pro"' in source, "Gemini model should be gemini-1.5-pro"
assert "if not text or len(text) < 30:" in source, "Validation should reject short responses"
assert "if not text[0].isupper():" in source, "Validation should require a capitalized opening"
assert "r'\\buuber'" in source, "Validation should reject uuber corruption"
assert "r'\\bbeeng\\b'" in source, "Validation should reject beeng corruption"
assert 'r"[a-z]\'[a-z]{1,2}\\s+lie\\b"' in source, "Validation should reject broken contraction patterns"

print("Bug 2 AI typo checks passed.")
