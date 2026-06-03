import { prayers } from '../data/prayers.js';
import { offices } from './offices.js';
import { renderPrayer } from './render.js';
import { morningPsalmId, eveningPsalmId } from './psalms.js';
import { currentSeason } from './seasons.js';

// ── Season ─────────────────────────────────────────────────
document.documentElement.dataset.season = currentSeason();

// ── Theme ──────────────────────────────────────────────────
function defaultTheme() {
  return new Date().getHours() >= 16 ? 'night' : 'day';
}

function applyTheme(name) {
  if (name === 'night') {
    document.documentElement.dataset.theme = 'night';
  } else {
    delete document.documentElement.dataset.theme;
  }
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = name === 'night' ? 'Day' : 'Night';
}

let currentTheme = defaultTheme();
applyTheme(currentTheme);

document.getElementById('theme-toggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'night' ? 'day' : 'night';
  applyTheme(currentTheme);
});

// ── Office ─────────────────────────────────────────────────
function defaultOffice() {
  return new Date().getHours() >= 16 ? 'evening' : 'morning';
}

function resolvePsalmId(office) {
  return office === 'morning' ? morningPsalmId() : eveningPsalmId();
}

function renderOffice(name) {
  const container = document.getElementById('office');
  const psalmId = resolvePsalmId(name);
  container.innerHTML = '';
  offices[name].forEach(id => {
    const prayer = prayers[id === 'psalm-daily' ? psalmId : id];
    if (prayer) container.appendChild(renderPrayer(prayer));
  });
}

function setActiveOffice(name) {
  document.querySelectorAll('.office-nav button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.office === name);
    btn.setAttribute('aria-pressed', btn.dataset.office === name ? 'true' : 'false');
  });
  renderOffice(name);
}

setActiveOffice(defaultOffice());

document.querySelector('.office-nav').addEventListener('click', e => {
  const btn = e.target.closest('[data-office]');
  if (btn) setActiveOffice(btn.dataset.office);
});
