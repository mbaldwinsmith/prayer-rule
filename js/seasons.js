// Computes Gregorian date of Orthodox Pascha for a given year.
// Uses the Julian Easter algorithm, then adds 13 days to convert
// to the Gregorian calendar (valid for 1900–2099).
function orthodoxPascha(year) {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = (d + e + 114) % 31 + 1;
  return new Date(year, month - 1, day + 13);
}

function daysBetween(from, to) {
  return Math.round((to - from) / 86_400_000);
}

// Maps a date to a liturgical season name.
// Seasons: 'advent', 'christmas', 'lent', 'eastertide', 'ordinary'
export function currentSeason(date = new Date()) {
  const year  = date.getFullYear();
  const month = date.getMonth() + 1;
  const day   = date.getDate();

  // Nativity Fast (Advent): Nov 15 – Dec 24
  if ((month === 11 && day >= 15) || (month === 12 && day <= 24)) {
    return 'advent';
  }

  // Nativity (Christmas): Dec 25 – Jan 7
  if ((month === 12 && day >= 25) || (month === 1 && day <= 7)) {
    return 'christmas';
  }

  const pascha = orthodoxPascha(year);
  const offset = daysBetween(pascha, date);

  // Eastertide: Pascha through Pentecost (49 days after)
  if (offset >= 0 && offset <= 49) return 'eastertide';

  // Great Lent: Clean Monday (48 days before Pascha) through Holy Saturday
  if (offset >= -48 && offset < 0) return 'lent';

  return 'ordinary';
}
