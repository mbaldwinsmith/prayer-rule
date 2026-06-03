// Content model for all prayers.
//
// Block types within `body`:
//   { type: 'rubric',    text }         — liturgical instruction, rendered italic/muted
//   { type: 'paragraph', text }         — prose block
//   { type: 'lines',     lines: [] }    — line-break-sensitive content (poetry, psalm verses)
//
// Stubs (body: []) will be filled in Phase 4.

export const prayers = {

  // ── Morning rubric ────────────────────────────────────────────────────────

  'morning-rubric': {
    id: 'morning-rubric',
    title: null,
    body: [
      { type: 'rubric', text: 'Before checking messages' },
    ],
  },

  // ── Morning opening ───────────────────────────────────────────────────────

  'morning-opening': {
    id: 'morning-opening',
    title: null,
    body: [
      { type: 'paragraph', text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.' },
      { type: 'paragraph', text: 'Glory to You, our God. Glory be to Thee.' },
    ],
  },

  // ── Prayer to the Holy Spirit ─────────────────────────────────────────────

  'holy-spirit': {
    id: 'holy-spirit',
    title: 'Prayer to the Holy Spirit',
    body: [
      { type: 'paragraph', text: 'Heavenly King, Comforter, the Spirit of Truth, present in all places and filling all things, Treasury of Goodness and Giver of life: come and abide in us. Cleanse us from every stain of sin and save our souls, O Gracious Lord.' },
    ],
  },

  // ── Trisagion ─────────────────────────────────────────────────────────────

  'trisagion': {
    id: 'trisagion',
    title: 'Trisagion Prayer',
    body: [
      { type: 'paragraph', text: 'Holy God. Holy Mighty. Holy Immortal Have mercy on us.(3)' },
      { type: 'paragraph', text: 'Glory to the Father, and the Son and the Holy Spirit, both now and forever and to the ages of ages. Amen.' },
      { type: 'paragraph', text: 'All Holy Trinity, have mercy on us. Lord, forgive our sins. Master, pardon our transgressions. Holy One, visit and heal our infirmities, for the glory of Your Name.' },
      { type: 'paragraph', text: 'Lord, have mercy.(3)' },
      { type: 'paragraph', text: 'Glory to the Father, and the Son and the Holy Spirit, both now and forever and to the ages of ages. Amen.' },
    ],
  },

  // ── Lord's Prayer (stub — Phase 4) ───────────────────────────────────────

  'lords-prayer': {
    id: 'lords-prayer',
    title: "Lord's Prayer",
    body: [],
  },

  // ── Doxology ──────────────────────────────────────────────────────────────

  'doxology': {
    id: 'doxology',
    title: 'Doxology',
    body: [
      { type: 'paragraph', text: 'Glory to God, Who has shown us the Light!' },
      { type: 'paragraph', text: 'Glory to God in the highest, and on earth, peace, good will toward men!' },
      { type: 'lines', lines: [
        'We praise You! We bless You! We worship You!',
        'We glorify You and give thanks to You for Your great glory!',
      ]},
    ],
  },

  // ── Morning Dismissal ─────────────────────────────────────────────────────

  'morning-dismissal': {
    id: 'morning-dismissal',
    title: 'Dismissal',
    body: [
      { type: 'paragraph', text: 'Confirm, O God, the holy Christian Faith unto ages of ages! Amen.' },
      { type: 'lines', lines: [
        'Most holy Theotokos, save us!',
        'More honorable than the cherubim and more glorious beyond compare than the seraphim! Without corruption you gave birth to God the Word. True Theotokos, we magnify you!',
      ]},
      { type: 'lines', lines: [
        'Glory to You, O Christ, our God and our hope, glory to You!',
        'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.',
      ]},
      { type: 'lines', lines: [
        'Lord, have mercy!',
        'Lord, have mercy!',
        'Lord, have mercy!',
      ]},
      { type: 'paragraph', text: 'Through the prayers of our holy fathers, O Lord Jesus Christ, our God, have mercy on us and save us. Amen.' },
    ],
  },

  // ── Jesus Prayer (stub — Phase 4) ────────────────────────────────────────

  'jesus-prayer': {
    id: 'jesus-prayer',
    title: 'Jesus Prayer',
    body: [],
  },

  // ── Evening rubric ────────────────────────────────────────────────────────

  'evening-rubric': {
    id: 'evening-rubric',
    title: null,
    body: [
      { type: 'rubric', text: 'Light a candle or vigil lamp' },
    ],
  },

  // ── Ten Commandments (stub — Phase 4) ────────────────────────────────────

  'ten-commandments': {
    id: 'ten-commandments',
    title: 'Ten Commandments (NKJV)',
    body: [],
  },

  // ── Psalm 50 (51) ─────────────────────────────────────────────────────────

  'psalm-50': {
    id: 'psalm-50',
    title: 'Psalm 50 (51)',
    body: [
      { type: 'lines', lines: [
        'Have mercy upon me, O God, according to Your lovingkindness; according to the multitude of Your tender mercies, blot out my transgressions.',
        'Wash me thoroughly from my iniquity, and cleanse me from my sin.',
        'For I acknowledge my transgressions, and my sin is ever before me.',
        'Against You, You only, have I sinned, and done this evil in Your sight that You may be found just when You speak, and blameless when You judge.',
        'Behold, I was brought forth in iniquity, and in sin my mother conceived me.',
        'Behold, You desire truth in the inward parts, and in the hidden part You will make me to know wisdom.',
        'Purge me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow.',
        'Make me to hear joy and gladness, that the bones which You have broken may rejoice.',
        'Hide Your face from my sins, and blot out all my iniquities.',
        'Create in me a clean heart, O God, and renew a steadfast spirit within me.',
        'Do not cast me away from Your presence, and do not take Your Holy Spirit from me.',
        'Restore to me the joy of Your salvation, and uphold me with Your generous Spirit.',
        'Then I will teach transgressors Your ways, and sinners shall be converted to You.',
        'Deliver me from blood-guiltiness, O God, the God of my salvation, and my tongue shall sing aloud of Your righteousness.',
        'O Lord, open my lips, and my mouth shall show forth Your praise.',
        'For You do not desire sacrifice, or else I would give it; You do not delight in burnt offering.',
        'The sacrifices of God are a broken spirit, a broken and a contrite heart — these, O God, You will not despise.',
        'Do good in Your good pleasure to Zion; build the walls of Jerusalem.',
        'Then You shall be pleased with the sacrifices of righteousness, with burnt offering and whole burnt offering; then they shall offer bulls on Your altar.',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
  },

  // ── Beatitudes (stub — Phase 4) ──────────────────────────────────────────

  'beatitudes': {
    id: 'beatitudes',
    title: 'Beatitudes (NKJV)',
    body: [],
  },

  // ── It Is Truly Meet ──────────────────────────────────────────────────────

  'it-is-truly-meet': {
    id: 'it-is-truly-meet',
    title: 'It Is Truly Meet',
    body: [
      { type: 'paragraph', text: 'It is truly meet to bless thee, O Theotokos, ever-blessed and most pure and the Mother of our God.' },
      { type: 'paragraph', text: 'More honorable than the cherubim and more glorious beyond compare than the seraphim: without corruption thou gavest birth to God the Word. True Theotokos, we magnify thee.' },
    ],
  },

  // ── Magnificat (stub — Phase 4) ──────────────────────────────────────────

  'magnificat': {
    id: 'magnificat',
    title: 'Magnificat (NKJV)',
    body: [],
  },

  // ── Benedictus (stub — Phase 4) ──────────────────────────────────────────

  'benedictus': {
    id: 'benedictus',
    title: 'Benedictus (NKJV)',
    body: [],
  },

  // ── Evening Dismissal ─────────────────────────────────────────────────────

  'evening-dismissal': {
    id: 'evening-dismissal',
    title: 'The Dismissal',
    body: [
      { type: 'paragraph', text: 'Through the prayers of our holy Fathers, O Lord Jesus Christ our God, have mercy on us.' },
    ],
  },

};
