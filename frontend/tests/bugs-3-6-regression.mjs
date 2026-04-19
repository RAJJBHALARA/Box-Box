import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = 'D:/f1 project/frontend/src';

const read = (relativePath) => readFile(path.join(root, relativePath), 'utf8');

const shareModal = await read('components/ShareModal.jsx');
const shareCard = await read('components/ShareCard.jsx');
const app = await read('App.jsx');
const navbar = await read('components/Navbar.jsx');
const mobileBottomNav = await read('components/MobileBottomNav.jsx');
const driverImage = await read('components/DriverImage.jsx');
const fantasy = await read('pages/FantasyPicks.jsx');
const home = await read('pages/Home.jsx');
const raceAnalysis = await read('pages/RaceAnalysis.jsx');
const rivalry = await read('pages/RivalryTracker.jsx');
const standings = await read('pages/Standings.jsx');

assert.ok(shareModal.includes("import domtoimage from 'dom-to-image-more'"), 'ShareModal should use dom-to-image-more');
assert.ok(!shareModal.includes("import html2canvas from 'html2canvas'"), 'ShareModal should no longer import html2canvas');
assert.ok(shareModal.includes("window.open(dataUrl, '_blank')"), 'ShareModal should include the mobile fallback open-in-new-tab path');
assert.ok(!shareCard.includes('pitwall.ai'), 'ShareCard branding should not reference pitwall.ai');
assert.ok(shareCard.includes('boxbox.app'), 'ShareCard should reference boxbox.app');

assert.ok(app.includes('const Home = lazy(() => import('), 'App should lazy-load routes');
assert.ok(app.includes('<Suspense fallback='), 'App should wrap routes in Suspense');

assert.ok(navbar.includes('mobileMenuToggle'), 'Navbar should dispatch the mobile menu toggle event');
assert.ok(mobileBottomNav.includes("window.addEventListener('mobileMenuToggle'"), 'MobileBottomNav should listen for the mobile menu toggle event');
assert.ok(mobileBottomNav.includes('if (menuOpen) return null'), 'MobileBottomNav should hide when the menu is open');

for (const [label, source] of [
  ['DriverImage', driverImage],
  ['FantasyPicks', fantasy],
  ['Home', home],
  ['RaceAnalysis', raceAnalysis],
  ['RivalryTracker', rivalry],
  ['Standings', standings],
]) {
  assert.ok(source.includes('loading="lazy"'), `${label} images should lazy-load`);
  assert.ok(source.includes('decoding="async"'), `${label} images should decode asynchronously`);
}

console.log('Bugs 3-6 frontend regression checks passed.');
