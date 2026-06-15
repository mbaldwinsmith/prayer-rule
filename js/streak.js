const STORAGE_KEY = 'prayer-rule-completions';

function toDateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function todayStr() {
  return toDateStr(new Date());
}

// Use noon to avoid DST edge cases when shifting days
function shiftDay(dateStr, n) {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return toDateStr(d);
}

function loadDates() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveDates(dates) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
}

export function recordCompletion() {
  const today = todayStr();
  const dates = loadDates();
  if (!dates.includes(today)) {
    dates.push(today);
    saveDates(dates);
  }
}

export function getStreak() {
  const dates = loadDates();
  if (dates.length === 0) return 0;

  const today = todayStr();
  const yesterday = shiftDay(today, -1);
  const unique = [...new Set(dates)].sort();
  const last = unique[unique.length - 1];

  // Streak is alive only if the last recorded day is today or yesterday
  if (last !== today && last !== yesterday) return 0;

  let streak = 1;
  let cursor = last;
  for (let i = unique.length - 2; i >= 0; i--) {
    if (unique[i] === shiftDay(cursor, -1)) {
      streak++;
      cursor = unique[i];
    } else {
      break;
    }
  }

  return streak;
}

export function hasCompletedToday() {
  return loadDates().includes(todayStr());
}
