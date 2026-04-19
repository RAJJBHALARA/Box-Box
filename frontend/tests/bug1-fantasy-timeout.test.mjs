import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const readSource = (relativePath) => readFile(path.join(__dirname, '..', relativePath), 'utf8');

const fantasyPage = await readSource('src/pages/FantasyPicks.jsx');
const apiSource = await readSource('src/services/api.js');

assert.ok(
  !fantasyPage.includes('getCurrentForm'),
  'FantasyPicks should not trigger a separate current form request'
);

assert.ok(
  fantasyPage.includes('Backend waking up, retrying automatically...'),
  'FantasyPicks should show the automatic retry message during Render wake-up'
);

assert.ok(
  fantasyPage.includes('}, 8000)'),
  'FantasyPicks should wait 8 seconds before retrying'
);

assert.ok(
  apiSource.includes('export const slowApi = axios.create({'),
  'api.js should export the slow AI client'
);

assert.ok(
  apiSource.includes('timeout: 120000'),
  'slowApi should allow 120 seconds for cold starts and Gemini work'
);

assert.ok(
  apiSource.includes("export const getFantasyPicks = (race, year) =>\n  slowApi.post('/api/fantasy-picks', { race, year })"),
  'Fantasy picks should use slowApi'
);

console.log('Bug 1 fantasy timeout regression checks passed.');
