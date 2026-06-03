import { prayers } from '../data/prayers.js';
import { offices } from './offices.js';
import { renderPrayer } from './render.js';

const VARIABLE_SLOTS = {
  'psalm-daily': {
    id: 'psalm-daily',
    title: 'Psalm of the Day',
    body: [],
  },
};

const office = document.getElementById('office');

offices.morning.forEach(id => {
  const prayer = prayers[id] ?? VARIABLE_SLOTS[id];
  if (prayer) office.appendChild(renderPrayer(prayer));
});
