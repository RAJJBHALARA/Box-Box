import assert from 'node:assert/strict';
import fs from 'node:fs';

const fantasy = fs.readFileSync('D:/f1 project/frontend/src/pages/FantasyPicks.jsx', 'utf8');
const lap = fs.readFileSync('D:/f1 project/frontend/src/pages/LapExplainer.jsx', 'utf8');
const race = fs.readFileSync('D:/f1 project/frontend/src/pages/RaceAnalysis.jsx', 'utf8');
const rivalry = fs.readFileSync('D:/f1 project/frontend/src/pages/RivalryTracker.jsx', 'utf8');
const home = fs.readFileSync('D:/f1 project/frontend/src/pages/Home.jsx', 'utf8');
const beginnerBanner = fs.readFileSync('D:/f1 project/frontend/src/components/BeginnerBanner.jsx', 'utf8');

for (const [label, source] of [
  ['FantasyPicks', fantasy],
  ['LapExplainer', lap],
  ['RaceAnalysis', race],
  ['RivalryTracker', rivalry],
]) {
  assert.ok(
    source.includes('pt-24 md:pt-28'),
    `${label} should offset page content below the fixed navbar`
  );
}

assert.ok(home.includes("const heroAccentText = isBeginnerMode ? 'HEADQUARTERS' : 'OBSERVATORY';"), 'Home should split the mobile hero accent text');
assert.ok(home.includes("maxWidth: isMobile ? '9ch' : 'none'"), 'Home hero accent should constrain width on mobile');
assert.ok(beginnerBanner.includes('flexWrap: isMobile ? '), 'Beginner banner should wrap on mobile');
assert.ok(beginnerBanner.includes("We're keeping things simple for you"), 'Beginner banner should still show its helper message');

console.log('UI layout regression checks passed.');
