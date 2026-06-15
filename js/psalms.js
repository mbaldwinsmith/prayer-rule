// Weekday-to-psalm resolver for the daily office.
//
// Morning cycle follows Monday–Saturday: Psalms 3, 37, 62, 87, 102, 142.
// Sunday repeats Psalm 3 (the opening of the cycle).
// Evening uses Psalm 140 (LXX), the traditional Orthodox vespers psalm
// ("Let my prayer arise before You as incense").

const MORNING_CYCLE = [
  'psalm-3',    // Sunday  — repeats the cycle opener
  'psalm-3',    // Monday
  'psalm-37',   // Tuesday
  'psalm-62',   // Wednesday
  'psalm-87',   // Thursday
  'psalm-102',  // Friday
  'psalm-142',  // Saturday
];

const EVENING_PSALM = 'psalm-140';

export function morningPsalmId(date = new Date()) {
  return MORNING_CYCLE[date.getDay()];
}

export function eveningPsalmId() {
  return EVENING_PSALM;
}
