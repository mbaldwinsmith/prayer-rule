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

  // ── Daily Morning Psalms ──────────────────────────────────────────────────
  // Monday (and Sunday): Psalm 3

  'psalm-3': {
    id: 'psalm-3',
    title: 'Psalm 3',
    body: [
      { type: 'lines', lines: [
        'Lord, how they have increased who trouble me! Many are they who rise up against me.',
        'Many are they who say of me, "There is no help for him in God." Selah',
        'But You, O Lord, are a shield for me, my glory and the One who lifts up my head.',
        'I cried to the Lord with my voice, and He heard me from His holy hill. Selah',
        'I lay down and slept; I awoke, for the Lord sustained me.',
        'I will not be afraid of ten thousands of people who have set themselves against me all around.',
        'Arise, O Lord; save me, O my God! For You have struck all my enemies on the cheekbone; You have broken the teeth of the ungodly.',
        'Salvation belongs to the Lord. Your blessing is upon Your people. Selah',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
  },

  // Tuesday: Psalm 37 (LXX) = Psalm 38 (Hebrew)

  'psalm-37': {
    id: 'psalm-37',
    title: 'Psalm 37 (38)',
    body: [
      { type: 'lines', lines: [
        'O Lord, do not rebuke me in Your wrath, nor chasten me in Your hot displeasure!',
        'For Your arrows pierce me deeply, and Your hand presses me down.',
        'There is no soundness in my flesh because of Your anger, nor any health in my bones because of my sin.',
        'For my iniquities have gone over my head; like a heavy burden they are too heavy for me.',
        'My wounds are foul and festering because of my foolishness.',
        'I am troubled; I am bowed down greatly; I go mourning all the day long.',
        'For my loins are full of inflammation, and there is no soundness in my flesh.',
        'I am feeble and severely broken; I groan because of the turmoil of my heart.',
        'Lord, all my desire is before You; and my sighing is not hidden from You.',
        'My heart pants, my strength fails me; as for the light of my eyes, it also has gone from me.',
        'My loved ones and my friends stand aloof from my plague, and my relatives stand afar off.',
        'Those also who seek my life lay snares for me; those who seek my hurt speak of destruction, and plan deception all the day long.',
        'But I, like a deaf man, do not hear; and I am like a mute who does not open his mouth.',
        'Thus I am like a man who does not hear, and in whose mouth is no response.',
        'For in You, O Lord, I hope; You will hear, O Lord my God.',
        'For I said, "Hear me, lest they rejoice over me, lest when my foot slips, they exalt themselves against me."',
        'For I am ready to fall, and my sorrow is continually before me.',
        'For I will declare my iniquity; I will be in anguish over my sin.',
        'But my enemies are vigorous, and they are strong; and those who hate me wrongfully have multiplied.',
        'Those also who render evil for good, they are my adversaries, because I follow what is good.',
        'Do not forsake me, O Lord; O my God, be not far from me!',
        'Make haste to help me, O Lord, my salvation!',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
  },

  // Wednesday: Psalm 62 (LXX) = Psalm 63 (Hebrew)

  'psalm-62': {
    id: 'psalm-62',
    title: 'Psalm 62 (63)',
    body: [
      { type: 'lines', lines: [
        'O God, You are my God; early will I seek You; my soul thirsts for You; my flesh longs for You in a dry and thirsty land where there is no water.',
        'So I have looked for You in the sanctuary, to see Your power and Your glory.',
        'Because Your lovingkindness is better than life, my lips shall praise You.',
        'Thus I will bless You while I live; I will lift up my hands in Your name.',
        'My soul shall be satisfied as with marrow and fatness, and my mouth shall praise You with joyful lips.',
        'When I remember You on my bed, I meditate on You in the night watches.',
        'Because You have been my help, therefore in the shadow of Your wings I will rejoice.',
        'My soul follows close behind You; Your right hand upholds me.',
        'But those who seek my life, to destroy it, shall go into the lower parts of the earth.',
        'They shall fall by the sword; they shall be a portion for jackals.',
        'But the king shall rejoice in God; everyone who swears by Him shall glory; but the mouth of those who speak lies shall be stopped.',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
  },

  // Thursday: Psalm 87 (LXX) = Psalm 88 (Hebrew)

  'psalm-87': {
    id: 'psalm-87',
    title: 'Psalm 87 (88)',
    body: [
      { type: 'lines', lines: [
        'O Lord, God of my salvation, I have cried out day and night before You.',
        'Let my prayer come before You; incline Your ear to my cry.',
        'For my soul is full of troubles, and my life draws near to the grave.',
        'I am counted with those who go down to the pit; I am like a man who has no strength,',
        'Adrift among the dead, like the slain who lie in the grave, whom You remember no more, and who are cut off from Your hand.',
        'You have laid me in the lowest pit, in darkness, in the depths.',
        'Your wrath lies heavy upon me, and You have afflicted me with all Your waves. Selah',
        'You have put away my acquaintances far from me; You have made me an abomination to them; I am shut up, and I cannot get out;',
        'My eye wastes away because of affliction. Lord, I have called daily upon You; I have stretched out my hands to You.',
        'Will You work wonders for the dead? Shall the dead arise and praise You? Selah',
        'Shall Your lovingkindness be declared in the grave? Or Your faithfulness in the place of destruction?',
        'Shall Your wonders be known in the dark? And Your righteousness in the land of forgetfulness?',
        'But to You I have cried out, O Lord, and in the morning my prayer comes before You.',
        'Lord, why do You cast off my soul? Why do You hide Your face from me?',
        'I have been afflicted and ready to die from my youth; I suffer Your terrors; I am distraught.',
        'Your fierce wrath has gone over me; Your terrors have cut me off.',
        'They came around me all day long like water; they engulfed me altogether.',
        'Loved one and friend You have put far from me, and my acquaintances into darkness.',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
  },

  // Friday: Psalm 102 (LXX) = Psalm 103 (Hebrew)

  'psalm-102': {
    id: 'psalm-102',
    title: 'Psalm 102 (103)',
    body: [
      { type: 'lines', lines: [
        'Bless the Lord, O my soul; and all that is within me, bless His holy name!',
        'Bless the Lord, O my soul, and forget not all His benefits:',
        'Who forgives all your iniquities, who heals all your diseases,',
        'Who redeems your life from destruction, who crowns you with lovingkindness and tender mercies,',
        'Who satisfies your mouth with good things, so that your youth is renewed like the eagle\'s.',
        'The Lord executes righteousness and justice for all who are oppressed.',
        'He made known His ways to Moses, His acts to the children of Israel.',
        'The Lord is merciful and gracious, slow to anger, and abounding in mercy.',
        'He will not always strive with us, nor will He keep His anger forever.',
        'He has not dealt with us according to our sins, nor punished us according to our iniquities.',
        'For as the heavens are high above the earth, so great is His mercy toward those who fear Him;',
        'As far as the east is from the west, so far has He removed our transgressions from us.',
        'As a father pities his children, so the Lord pities those who fear Him.',
        'For He knows our frame; He remembers that we are dust.',
        'As for man, his days are like grass; as a flower of the field, so he flourishes.',
        'For the wind passes over it, and it is gone, and its place remembers it no more.',
        'But the mercy of the Lord is from everlasting to everlasting on those who fear Him, and His righteousness to children\'s children,',
        'To such as keep His covenant, and to those who remember His commandments to do them.',
        'The Lord has established His throne in heaven, and His kingdom rules over all.',
        'Bless the Lord, you His angels, who excel in strength, who do His word, heeding the voice of His word.',
        'Bless the Lord, all you His hosts, you ministers of His, who do His pleasure.',
        'Bless the Lord, all His works, in all places of His dominion. Bless the Lord, O my soul!',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
  },

  // Saturday: Psalm 142 (LXX) = Psalm 143 (Hebrew)

  'psalm-142': {
    id: 'psalm-142',
    title: 'Psalm 142 (143)',
    body: [
      { type: 'lines', lines: [
        'Hear my prayer, O Lord, give ear to my supplications! In Your faithfulness answer me, and in Your righteousness.',
        'Do not enter into judgment with Your servant, for in Your sight no one living is righteous.',
        'For the enemy has persecuted my soul; he has crushed my life to the ground; he has made me dwell in darkness, like those who have long been dead.',
        'Therefore my spirit is overwhelmed within me; my heart within me is distressed.',
        'I remember the days of old; I meditate on all Your works; I muse on the work of Your hands.',
        'I spread out my hands to You; my soul longs for You like a thirsty land. Selah',
        'Answer me speedily, O Lord; my spirit fails! Do not hide Your face from me, lest I be like those who go down into the pit.',
        'Cause me to hear Your lovingkindness in the morning, for in You do I trust; cause me to know the way in which I should walk, for I lift up my soul to You.',
        'Deliver me, O Lord, from my enemies; in You I take shelter.',
        'Teach me to do Your will, for You are my God; Your Spirit is good. Lead me in the land of uprightness.',
        'Revive me, O Lord, for Your name\'s sake! For Your righteousness\' sake bring my soul out of trouble.',
        'In Your mercy cut off my enemies, and destroy all those who afflict my soul; for I am Your servant.',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
  },

  // ── Evening Psalm ─────────────────────────────────────────────────────────
  // Psalm 140 (LXX) = Psalm 141 (Hebrew) — fixed for every evening

  'psalm-140': {
    id: 'psalm-140',
    title: 'Psalm 140 (141)',
    body: [
      { type: 'lines', lines: [
        'Lord, I cry out to You; make haste to me! Give ear to my voice when I cry out to You.',
        'Let my prayer be set before You as incense, the lifting up of my hands as the evening sacrifice.',
        'Set a guard, O Lord, over my mouth; keep watch over the door of my lips.',
        'Do not incline my heart to any evil thing, to practice wicked works with men who work iniquity; and do not let me eat of their delicacies.',
        'Let the righteous strike me; it shall be a kindness. And let him rebuke me; it shall be as excellent oil; let my head not refuse it. For still my prayer is against the deeds of the wicked.',
        'Their judges are overthrown by the sides of the cliff, and they hear my words, for they are sweet.',
        'Our bones are scattered at the mouth of the grave, as when one plows and breaks up the earth.',
        'But my eyes are upon You, O God the Lord; in You I take refuge; do not leave my soul destitute.',
        'Keep me from the snares they have laid for me, and from the traps of the workers of iniquity.',
        'Let the wicked fall into their own nets, while I escape safely.',
      ]},
      { type: 'paragraph', text: 'Glory to the Father and to the Son and to the Holy Spirit, now and ever and unto ages of ages. Amen.' },
    ],
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
