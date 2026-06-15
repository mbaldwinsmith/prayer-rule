import { prayers } from '../data/prayers.js';
import { offices } from './offices.js';
import { renderPrayer } from './render.js';
import { morningPsalmId, eveningPsalmId } from './psalms.js';
import { currentSeason } from './seasons.js';
import { recordCompletion, getStreak, hasCompletedToday } from './streak.js';

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

// ── Streak ─────────────────────────────────────────────────
function updateStreakDisplay() {
  const el = document.getElementById('streak');
  if (!el) return;
  const n = getStreak();
  el.textContent = n > 0 ? `${n} ${n === 1 ? 'day' : 'days'}` : '';
  el.hidden = n === 0;
}

function appendAmenButton() {
  const container = document.getElementById('office');
  const footer = document.createElement('div');
  footer.className = 'office-footer';

  const btn = document.createElement('button');
  btn.className = 'amen-btn';
  const done = hasCompletedToday();
  btn.textContent = done ? 'Amen ✓' : 'Amen';
  btn.setAttribute('aria-pressed', done ? 'true' : 'false');
  if (done) btn.classList.add('amen-done');

  btn.addEventListener('click', () => {
    recordCompletion();
    btn.textContent = 'Amen ✓';
    btn.classList.add('amen-done');
    btn.setAttribute('aria-pressed', 'true');
    updateStreakDisplay();
  });

  footer.appendChild(btn);
  container.appendChild(footer);
}

// ── Animations ─────────────────────────────────────────────
function observePrayers() {
  const prayerEls = document.querySelectorAll('#office .prayer');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = Array.from(prayerEls).indexOf(entry.target);
        entry.target.style.animationDelay = `${Math.min(idx * 55, 220)}ms`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  prayerEls.forEach(el => observer.observe(el));
}

function buildOfficeContent(name) {
  const container = document.getElementById('office');
  const psalmId = resolvePsalmId(name);
  container.innerHTML = '';
  offices[name].forEach(id => {
    const prayer = prayers[id === 'psalm-daily' ? psalmId : id];
    if (prayer) container.appendChild(renderPrayer(prayer));
  });
  appendAmenButton();
  observePrayers();
}

function renderOffice(name) {
  const container = document.getElementById('office');
  if (!container.innerHTML.trim()) {
    buildOfficeContent(name);
    return;
  }
  container.classList.add('is-leaving');
  setTimeout(() => {
    buildOfficeContent(name);
    container.classList.remove('is-leaving');
  }, 250);
}

function setActiveOffice(name) {
  document.querySelectorAll('.office-nav button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.office === name);
    btn.setAttribute('aria-pressed', btn.dataset.office === name ? 'true' : 'false');
  });
  renderOffice(name);
}

setActiveOffice(defaultOffice());
updateStreakDisplay();

document.querySelector('.office-nav').addEventListener('click', e => {
  const btn = e.target.closest('[data-office]');
  if (btn) setActiveOffice(btn.dataset.office);
});

// ── Service Worker ──────────────────────────────────────────
if ('serviceWorker' in navigator) {
  const hadController = !!navigator.serviceWorker.controller;
  let reloading = false;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});

    // When a new SW takes control, show the update banner (skip on first install)
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || reloading) return;
      document.getElementById('update-banner').hidden = false;
    });
  });

  document.getElementById('update-reload').addEventListener('click', () => {
    reloading = true;
    window.location.reload();
  });
}

// ── PWA Install ─────────────────────────────────────────────
let deferredInstallPrompt = null;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  if (outcome === 'accepted') installBtn.hidden = true;
  deferredInstallPrompt = null;
});

window.addEventListener('appinstalled', () => {
  installBtn.hidden = true;
  deferredInstallPrompt = null;
});
