const monsters = [
  {
    countsAs: 0.15,
    level: 2,
    name: 'bone imp mage-eater',
    strength: 'weakling',
    type: 'mook',
    page: '2B:20',
    class: 'DEMON'
  },
  {
    countsAs: 0.15,
    level: 0,
    name: 'squib swarm',
    strength: 'normal',
    type: 'mook',
    page: 'B:179',
    class: 'BEAST'
  },
  {
    countsAs: 0.15,
    level: 0,
    name: 'stirgelings',
    strength: 'normal',
    type: 'mook',
    page: 'B:197',
    class: 'BEAST'
  },
  {
    countsAs: 0.15,
    level: 0,
    name: 'kobold grand wizard',
    strength: 'normal',
    type: 'mook',
    page: 'B:123',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'meteorite xombie',
    strength: 'normal',
    type: 'mook',
    page: '2B:257',
    class: 'ABBERATION'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'firegeist',
    strength: 'normal',
    type: 'mook',
    page: 'M:44',
    class: 'ABBERATION'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'dainty lizard',
    strength: 'normal',
    type: 'mook',
    page: '2B:270',
    class: 'BEAST'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'dire rat',
    strength: 'normal',
    type: 'mook',
    page: 'A:206',
    class: 'BEAST'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'bone crab',
    strength: 'normal',
    type: 'mook',
    page: 'M:11',
    class: 'BEAST'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'wibble',
    strength: 'normal',
    type: 'mook',
    page: 'B:223',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'goblin scum',
    strength: 'normal',
    type: 'mook',
    page: 'A:229',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'kobold archer',
    strength: 'normal',
    type: 'mook',
    page: 'A:237',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'ettercap acolyte',
    strength: 'normal',
    type: 'mook',
    page: 'B:73',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'decrepit skeleton',
    strength: 'normal',
    type: 'mook',
    page: 'A:246',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'zombie shuffler',
    strength: 'normal',
    type: 'mook',
    page: 'A:251',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.2,
    level: 1,
    name: 'grave meat',
    strength: 'normal',
    type: 'mook',
    page: 'B:97',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'xombie egg swarm',
    strength: 'normal',
    type: 'mook',
    page: '2B:257',
    class: 'ABBERATION'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'razor shark',
    strength: 'normal',
    type: 'mook',
    page: 'B:187',
    class: 'BEAST'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'conglomerate',
    strength: 'normal',
    type: 'mook',
    page: '2B:283',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'jackal grave wrecker',
    strength: 'normal',
    type: 'mook',
    page: '2B:122',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'Hell Marsh fanatic',
    strength: 'normal',
    type: 'mook',
    page: '2B:135',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'Silver Hand cultist',
    strength: 'normal',
    type: 'mook',
    page: '2B:248',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'frogspawn grunt',
    strength: 'normal',
    type: 'mook',
    page: '2B:96',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'kobold skyclaw',
    strength: 'normal',
    type: 'mook',
    page: 'B:124',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'human rabble',
    strength: 'normal',
    type: 'mook',
    page: 'B:208',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'aerial spore',
    strength: 'normal',
    type: 'mook',
    page: 'B:83',
    class: 'PLANT'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'broken shade',
    strength: 'normal',
    type: 'mook',
    page: '2B:10',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'coin zombie',
    strength: 'normal',
    type: 'mook',
    page: '2B:33',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.3,
    level: 2,
    name: 'newly-risen ghoul',
    strength: 'normal',
    type: 'mook',
    page: 'A:225',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'weaver swarm',
    strength: 'normal',
    type: 'mook',
    page: 'B:61',
    class: 'BEAST'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'fire bat',
    strength: 'normal',
    type: 'mook',
    page: 'TW:162',
    class: 'BEAST'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'clockwork weaver',
    strength: 'normal',
    type: 'mook',
    page: 'M:15',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'dretch',
    strength: 'normal',
    type: 'mook',
    page: 'A:210',
    class: 'DEMON'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'lemure',
    strength: 'normal',
    type: 'mook',
    page: 'TW:169',
    class: 'DEVIL'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'kobold berserker',
    strength: 'normal',
    type: 'mook',
    page: '2B:156',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'fallen derro',
    strength: 'normal',
    type: 'mook',
    page: '2B:36',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'rascal',
    strength: 'normal',
    type: 'mook',
    page: '2B:65',
    class: 'HUMANOID, FEY'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'cave orc',
    strength: 'normal',
    type: 'mook',
    page: 'B:156',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'poddling',
    strength: 'normal',
    type: 'mook',
    page: 'B:161',
    class: 'PLANT'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'lesser haunting',
    strength: 'normal',
    type: 'mook',
    page: '2B:106',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.4,
    level: 3,
    name: 'darakhul citizen',
    strength: 'normal',
    type: 'mook',
    page: 'M:17',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.45,
    level: 4,
    name: 'lesser xorn',
    strength: 'elite',
    type: 'spoiler',
    page: '2B:290',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 0.6,
    level: 2,
    name: 'pit-spawn orc',
    strength: 'double-strength',
    type: 'mook',
    page: 'B:156',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.6,
    level: 2,
    name: 'bloody shade',
    strength: 'double-strength',
    type: 'mook',
    page: '2B:10',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'chaos glorp',
    strength: 'normal',
    type: 'mook',
    page: 'B:39',
    class: 'ABBERATION'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'cambion dirk',
    strength: 'normal',
    type: 'mook',
    page: 'B:31',
    class: 'DEMON'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'woven',
    strength: 'normal',
    type: 'mook',
    page: 'B:121',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'kobold shadow-warrior',
    strength: 'normal',
    type: 'mook',
    page: 'B:125',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'ravenous cannibal',
    strength: 'normal',
    type: 'mook',
    page: 'B:212',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'drow soldier',
    strength: 'normal',
    type: 'mook',
    page: 'B:58',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'freecanton mercenary',
    strength: 'normal',
    type: 'mook',
    page: 'M:56',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'kelplets',
    strength: 'normal',
    type: 'mook',
    page: '2B:199',
    class: 'PLANT'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'elder spore',
    strength: 'normal',
    type: 'mook',
    page: 'B:85',
    class: 'PLANT'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'awakened trees',
    strength: 'normal',
    type: 'mook',
    page: 'TW:202',
    class: 'PLANT'
  },
  {
    countsAs: 0.6,
    level: 4,
    name: 'zombie of the SilverRose',
    strength: 'normal',
    type: 'mook',
    page: 'TW:207',
    class: 'UNDEAD'
  },
  {
    countsAs: 0.7,
    level: 0,
    name: 'fast xombie',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:257',
    class: 'ABBERATION'
  },
  {
    countsAs: 0.7,
    level: 0,
    name: 'giant ant',
    strength: 'normal',
    type: 'troop',
    page: 'A:206',
    class: 'BEAST'
  },
  {
    countsAs: 0.7,
    level: 0,
    name: 'stirge',
    strength: 'normal',
    type: 'troop',
    page: 'B:197',
    class: 'BEAST'
  },
  {
    countsAs: 0.7,
    level: 0,
    name: 'kobold ghetto guard',
    strength: 'normal',
    type: 'troop',
    page: 'M:60',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.7,
    level: 0,
    name: 'kobold guard owl rider',
    strength: 'normal',
    type: 'archer',
    page: 'M:61',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.8,
    level: 3,
    name: 'Golden Demon cultist',
    strength: 'double-strength',
    type: 'mook',
    page: '2B:159',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.8,
    level: 5,
    name: 'scuttlingstar-mask',
    strength: 'normal',
    type: 'mook',
    page: '2B:259',
    class: 'ABBERATION'
  },
  {
    countsAs: 0.8,
    level: 5,
    name: 'dwarf shield bearer',
    strength: 'normal',
    type: 'mook',
    page: 'M:56',
    class: 'DWARF'
  },
  {
    countsAs: 0.8,
    level: 5,
    name: 'jackal bearer',
    strength: 'normal',
    type: 'mook',
    page: '2B:122',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.8,
    level: 5,
    name: 'kobold Glinter',
    strength: 'normal',
    type: 'mook',
    page: '2B:158',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.8,
    level: 5,
    name: 'roachling urban scuttler',
    strength: 'normal',
    type: 'mook',
    page: 'M:78',
    class: 'HUMANOID'
  },
  {
    countsAs: 0.8,
    level: 5,
    name: 'jackpot zombie',
    strength: 'normal',
    type: 'mook',
    page: '2B:33',
    class: 'UNDEAD'
  },
  {
    countsAs: 1,
    level: 3,
    name: 'snowy owl bear cub',
    strength: 'weakling',
    type: 'troop',
    page: '2B:212',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 3,
    name: 'really angry kobold',
    strength: 'weakling',
    type: 'troop',
    page: '2B:157',
    class: 'HUMANOID'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'badger',
    strength: 'normal',
    type: 'wrecker',
    page: '2B:55',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'rat swarm',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:55',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'venomous snake',
    strength: 'normal',
    type: 'troop',
    page: '2B:55',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'giant scorpion',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:206',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'wolf',
    strength: 'normal',
    type: 'troop',
    page: 'A:207',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'swarm of bats',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:13',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'archer stirge',
    strength: 'normal',
    type: 'archer',
    page: 'B:197',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'cobbler stirge',
    strength: 'normal',
    type: 'blocker',
    page: 'B:197',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'giant owl',
    strength: 'normal',
    type: 'troop',
    page: 'M:61',
    class: 'BEAST'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'clockwork beetle',
    strength: 'normal',
    type: 'troop',
    page: 'M:13',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'clockwork hound',
    strength: 'normal',
    type: 'troop',
    page: 'M:14',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'clockwork scullion',
    strength: 'normal',
    type: 'leader',
    page: 'M:14',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'clockwork watchmen',
    strength: 'normal',
    type: 'troop',
    page: 'M:14',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'white dragon hatchling',
    strength: 'normal',
    type: 'troop',
    page: 'B:219',
    class: 'DRAGON'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'alehouse drake',
    strength: 'normal',
    type: 'spoiler',
    page: 'M:32',
    class: 'DRAGON'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'goblin grunt',
    strength: 'normal',
    type: 'troop',
    page: 'A:229',
    class: 'HUMANOID'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'human thug',
    strength: 'normal',
    type: 'troop',
    page: 'A:235',
    class: 'HUMANOID'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'kobold warrior',
    strength: 'normal',
    type: 'troop',
    page: 'A:237',
    class: 'HUMANOID'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'orc warrior',
    strength: 'normal',
    type: 'troop',
    page: 'A:242',
    class: 'HUMANOID'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'kobold ghetto guard sergeant',
    strength: 'normal',
    type: 'troop',
    page: 'M:61',
    class: 'HUMANOID'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'fungaloid creeper',
    strength: 'normal',
    type: 'troop',
    page: 'B:83',
    class: 'PLANT'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'skeletal hound',
    strength: 'normal',
    type: 'blocker',
    page: 'A:246',
    class: 'UNDEAD'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'skeleton archer',
    strength: 'normal',
    type: 'archer',
    page: 'A:246',
    class: 'UNDEAD'
  },
  {
    countsAs: 1,
    level: 1,
    name: 'watch skull',
    strength: 'normal',
    type: 'troop',
    page: 'B:109',
    class: 'UNDEAD'
  },
  {
    countsAs: 1.5,
    level: 4,
    name: 'honey devil',
    strength: 'weakling',
    type: 'troop',
    page: 'TW:171',
    class: 'DEVIL'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'skull crab xombie',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:258',
    class: 'ABBERATION'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'hunting spider',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:206',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'bear',
    strength: 'normal',
    type: 'troop',
    page: 'A:207',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'goblin shaman',
    strength: 'normal',
    type: 'caster',
    page: 'A:229',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'boom bug',
    strength: 'normal',
    type: 'troop',
    page: 'B:113',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'hell wasp',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:113',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'hook scuttler',
    strength: 'normal',
    type: 'blocker',
    page: 'B:113',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'swarming maw',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:113',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'dire bat',
    strength: 'normal',
    type: 'troop',
    page: 'B:14',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'were rat',
    strength: 'normal',
    type: 'troop',
    page: 'TW:204',
    class: 'BEAST'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'clockwork huntsman',
    strength: 'normal',
    type: 'spoiler',
    page: 'M:14',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'clockwork myrmidon',
    strength: 'normal',
    type: 'troop',
    page: 'M:15',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'ink devil',
    strength: 'normal',
    type: 'troop',
    page: 'M:26',
    class: 'DEMON'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'skin devil',
    strength: 'normal',
    type: 'troop',
    page: 'TW:168',
    class: 'DEVIL'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'medium white dragon',
    strength: 'normal',
    type: 'troop',
    page: 'A:218',
    class: 'DRAGON'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'medium brass dragon',
    strength: 'normal',
    type: 'troop',
    page: 'TW:184',
    class: 'DRAGON'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'Golden Demon warrior',
    strength: 'normal',
    type: 'archer',
    page: '2B:159',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'faun troubadour',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:59',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'hobgoblin warrior',
    strength: 'normal',
    type: 'troop',
    page: 'A:230',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'kobold hero',
    strength: 'normal',
    type: 'leader',
    page: 'A:237',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'lizardman savage',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:237',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'orc berserker',
    strength: 'normal',
    type: 'troop',
    page: 'A:242',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'orc shaman',
    strength: 'normal',
    type: 'leader',
    page: 'A:242',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'Trog',
    strength: 'normal',
    type: 'spoiler',
    page: 'A:247',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'orc archer',
    strength: 'normal',
    type: 'archer',
    page: 'B:156',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'splotchcap',
    strength: 'normal',
    type: 'archer',
    page: 'B:175',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'sahuagin raider',
    strength: 'normal',
    type: 'troop',
    page: 'B:187',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'avenging orb',
    strength: 'normal',
    type: 'caster',
    page: 'B:204',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'destroying sword',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:204',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'enduring shield',
    strength: 'normal',
    type: 'blocker',
    page: 'B:204',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'ettercap hunter',
    strength: 'normal',
    type: 'blocker',
    page: 'B:73',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'niemheim puck',
    strength: 'normal',
    type: 'caster',
    page: 'M:43',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'goblin shark',
    strength: 'normal',
    type: 'troop',
    page: 'M:45',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'goblin shark shaman',
    strength: 'normal',
    type: 'caster',
    page: 'M:45',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'dustdigger watchman',
    strength: 'normal',
    type: 'archer',
    page: 'M:48',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'rothenian centaur bandit',
    strength: 'normal',
    type: 'troop',
    page: 'M:81',
    class: 'HUMANOID'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'claw flower',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:161',
    class: 'PLANT'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'sporrior',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:84',
    class: 'PLANT'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'sadsack',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:106',
    class: 'UNDEAD'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'skeleton warrior',
    strength: 'normal',
    type: 'troop',
    page: 'A:246',
    class: 'UNDEAD'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'human zombie',
    strength: 'normal',
    type: 'troop',
    page: 'A:251',
    class: 'UNDEAD'
  },
  {
    countsAs: 1.5,
    level: 2,
    name: 'ghost goblin horror',
    strength: 'normal',
    type: 'troop',
    page: 'M;47',
    class: 'UNDEAD'
  },
  {
    countsAs: 1.6,
    level: 5,
    name: 'Iron Sea shark',
    strength: 'double-strength',
    type: 'mook',
    page: 'B:188',
    class: 'BEAST'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'xombie spiders',
    strength: 'normal',
    type: 'blocker',
    page: '2B:258',
    class: 'ABBERATION'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'hungry star',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:235',
    class: 'ABBERATION'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'intellect devourer',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:116',
    class: 'ABBERATION'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'rust monster',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:184',
    class: 'ABBERATION'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'great cat',
    strength: 'normal',
    type: 'wrecker',
    page: '2B:55',
    class: 'BEAST'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'hell hound',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:234',
    class: 'BEAST'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'barbellite',
    strength: 'normal',
    type: 'troop',
    page: 'B:179',
    class: 'BEAST'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'alseid warrior',
    strength: 'normal',
    type: 'troop',
    page: 'M:7',
    class: 'BEAST'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'werewolf',
    strength: 'normal',
    type: 'troop',
    page: 'TW:205',
    class: 'BEAST'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'goblin bat mage',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:14',
    class: 'BEAST, HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'dawn zorigami',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:225',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'gear drake',
    strength: 'normal',
    type: 'troop',
    page: 'M:34',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'gear dwarf marksman',
    strength: 'normal',
    type: 'archer',
    page: 'M:86',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'zorbeck legionnaire',
    strength: 'normal',
    type: 'troop',
    page: 'M:86',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'magma brute',
    strength: 'normal',
    type: 'wrecker',
    page: 'TW:163',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'bone imp archer',
    strength: 'normal',
    type: 'wrecker',
    page: '2B:20',
    class: 'DEMON'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'bone imp tormentor',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:20',
    class: 'DEMON'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'Imp',
    strength: 'normal',
    type: 'spoiler',
    page: 'A:210',
    class: 'DEMON'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'gilded devil',
    strength: 'normal',
    type: 'spoiler',
    page: 'M:27',
    class: 'DEMON'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'medium black dragon',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:218',
    class: 'DRAGON'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'cenotaph dragon',
    strength: 'normal',
    type: 'troop',
    page: 'B:219',
    class: 'DRAGON'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'medium bronze dragon',
    strength: 'normal',
    type: 'wrecker',
    page: 'TW:184',
    class: 'DRAGON'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'small air elemental',
    strength: 'normal',
    type: 'wrecker',
    page: 'TW:189',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'small earth elemental',
    strength: 'normal',
    type: 'troop',
    page: 'TW:189',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'small fire elemental',
    strength: 'normal',
    type: 'troop',
    page: 'TW:189',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'small water elemental',
    strength: 'normal',
    type: 'blocker',
    page: 'TW:189',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'Hell Marsh priest',
    strength: 'normal',
    type: 'leader',
    page: '2B:135',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'red haze berserker',
    strength: 'normal',
    type: 'wrecker',
    page: '2B:157',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'Golden Demon priest',
    strength: 'normal',
    type: 'leader',
    page: '2B:159',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'green scale wild stalker',
    strength: 'normal',
    type: 'archer',
    page: '2B:175',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'derro berserker',
    strength: 'normal',
    type: 'troop',
    page: '2B:36',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'frogspawn monk',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:96',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'gnoll savage',
    strength: 'normal',
    type: 'troop',
    page: 'A:228',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'gnoll ranger',
    strength: 'normal',
    type: 'archer',
    page: 'A:229',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'bugbear',
    strength: 'normal',
    type: 'troop',
    page: 'A:230',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'trog chanter',
    strength: 'normal',
    type: 'leader',
    page: 'A:247',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'spinneret doxy',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:120',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'kobold dog rider',
    strength: 'normal',
    type: 'troop',
    page: 'B:124',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'kobold engineer',
    strength: 'normal',
    type: 'leader',
    page: 'B:124',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'orc battle screamer',
    strength: 'normal',
    type: 'leader',
    page: 'B:157',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'orc tusker',
    strength: 'normal',
    type: 'troop',
    page: 'B:157',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'redcap',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:175',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'blue sorcerer',
    strength: 'normal',
    type: 'caster',
    page: 'B:21',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'bugbear schemer',
    strength: 'normal',
    type: 'leader',
    page: 'B:25',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'drow spider-mage',
    strength: 'normal',
    type: 'caster',
    page: 'B:58',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'ettercap supplicant',
    strength: 'normal',
    type: 'caster',
    page: 'B:73',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'ettercap warrior',
    strength: 'normal',
    type: 'blocker',
    page: 'B:74',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'derro savant shrieker',
    strength: 'normal',
    type: 'spoiler',
    page: 'M:24',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'niemheim choirmaster',
    strength: 'normal',
    type: 'caster',
    page: 'M:44',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'kyprion deck cleaner',
    strength: 'normal',
    type: 'troop',
    page: 'M:74',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'minotaur librarian',
    strength: 'normal',
    type: 'troop',
    page: 'M:74',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'rothenian centaur chief',
    strength: 'normal',
    type: 'troop',
    page: 'M:81',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'pixie warrior',
    strength: 'normal',
    type: 'spoiler',
    page: 'TW:198',
    class: 'HUMANOID'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'fungaloid drudge',
    strength: 'normal',
    type: 'troop',
    page: 'B:84',
    class: 'PLANT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'cavelight moss',
    strength: 'normal',
    type: 'troop',
    page: 'M:20',
    class: 'PLANT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'attached eidolon',
    strength: 'normal',
    type: 'troop',
    page: '2B:46',
    class: 'SPIRIT'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'bladeshade',
    strength: 'normal',
    type: 'troop',
    page: '2B:10',
    class: 'UNDEAD'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'archer shade',
    strength: 'normal',
    type: 'wrecker',
    page: '2B:11',
    class: 'UNDEAD'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'drudge citizen',
    strength: 'normal',
    type: 'troop',
    page: '2B:248',
    class: 'UNDEAD'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'ghoul',
    strength: 'normal',
    type: 'spoiler',
    page: 'A:225',
    class: 'UNDEAD'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'slime skull',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:109',
    class: 'UNDEAD'
  },
  {
    countsAs: 2,
    level: 3,
    name: 'lich hound',
    strength: 'normal',
    type: 'troop',
    page: 'M:63',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 1,
    name: 'eidolon in humanoid form',
    strength: 'triple-strength',
    type: 'troop',
    page: '2B:46',
    class: 'SPIRIT'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'giant web spider',
    strength: 'large',
    type: 'blocker',
    page: 'A:207',
    class: 'BEAST'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'ankheg',
    strength: 'large',
    type: 'troop',
    page: 'A:208',
    class: 'BEAST'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'dog mole',
    strength: 'large',
    type: 'troop',
    page: 'M:29',
    class: 'BEAST'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'dire weasel',
    strength: 'large',
    type: 'wrecker',
    page: 'M:60',
    class: 'BEAST'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'bat cavalry',
    strength: 'large',
    type: 'wrecker',
    page: 'B:14',
    class: 'BEAST, HUMANOID'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'feral war banner',
    strength: 'double-strength',
    type: 'caster',
    page: 'B:207',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'wood nymph (dryad)',
    strength: 'double-strength',
    type: 'spoiler',
    page: '2B:206',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'bugbear scout',
    strength: 'double-strength',
    type: 'troop',
    page: 'B:24',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 2,
    name: 'zombie beast',
    strength: 'large',
    type: 'troop',
    page: 'TW:207',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'gibbering mouther',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:109',
    class: 'ABBERATION'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'chaos beast',
    strength: 'normal',
    type: 'troop',
    page: 'B:39',
    class: 'ABBERATION'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'chuulish slave',
    strength: 'normal',
    type: 'troop',
    page: 'B:51',
    class: 'ABBERATION'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'giant bird of prey',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:56',
    class: 'BEAST'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'alseid prince',
    strength: 'normal',
    type: 'leader',
    page: 'M:7',
    class: 'BEAST'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'beautific gargoyle',
    strength: 'normal',
    type: 'troop',
    page: '2B:128',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'gear forged assassin',
    strength: 'normal',
    type: 'troop',
    page: 'M:87',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'demon drake',
    strength: 'normal',
    type: 'troop',
    page: '2B:159',
    class: 'DEMON'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'bone imp skull biter',
    strength: 'normal',
    type: 'troop',
    page: '2B:20',
    class: 'DEMON'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'ember imp',
    strength: 'normal',
    type: 'troop',
    page: '2B:133',
    class: 'DEVIL'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'hell imp',
    strength: 'normal',
    type: 'spoiler',
    page: 'TW:170',
    class: 'DEVIL'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'medium green dragon',
    strength: 'normal',
    type: 'spoiler',
    page: 'A:219',
    class: 'DRAGON'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'crag drake',
    strength: 'normal',
    type: 'troop',
    page: 'M:33',
    class: 'DRAGON'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'medium copper dragon',
    strength: 'normal',
    type: 'spoiler',
    page: 'TW:185',
    class: 'DRAGON'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'azer soldier',
    strength: 'normal',
    type: 'troop',
    page: 'TW:162',
    class: 'DWARF'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'Hell Marsh wizard',
    strength: 'normal',
    type: 'caster',
    page: '2B:136',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'kobold assassin',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:156',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'blue scale lightning caller',
    strength: 'normal',
    type: 'caster',
    page: '2B:175',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'derro seer',
    strength: 'normal',
    type: 'leader',
    page: '2B:37',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'derro whisperer',
    strength: 'normal',
    type: 'archer',
    page: '2B:37',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'Ebon Gauntlet sword',
    strength: 'normal',
    type: 'troop',
    page: '2B:40',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'faun harrier',
    strength: 'normal',
    type: 'archer',
    page: '2B:59',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'sprite',
    strength: 'normal',
    type: 'caster',
    page: '2B:66',
    class: 'HUMANOID, FEY'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'frogspawn spell croaker',
    strength: 'normal',
    type: 'leader',
    page: '2B:96',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'despoiler',
    strength: 'normal',
    type: 'caster',
    page: 'A:210',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'derro maniac',
    strength: 'normal',
    type: 'troop',
    page: 'A:216',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'derro sage',
    strength: 'normal',
    type: 'caster',
    page: 'A:216',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'gnoll war leader',
    strength: 'normal',
    type: 'leader',
    page: 'A:229',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'hobgoblin captain',
    strength: 'normal',
    type: 'leader',
    page: 'A:230',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'half-orc legionnaire',
    strength: 'normal',
    type: 'troop',
    page: 'A:233',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'harpy',
    strength: 'normal',
    type: 'spoiler',
    page: 'A:234',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'lethall othario',
    strength: 'normal',
    type: 'leader',
    page: 'B:121',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'kobold bravescale',
    strength: 'normal',
    type: 'blocker',
    page: 'B:125',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'barbarous bugbear',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:25',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'centaur lancer',
    strength: 'normal',
    type: 'troop',
    page: 'B:35',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'ettercap keeper',
    strength: 'normal',
    type: 'leader',
    page: 'B:74',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'merrow',
    strength: 'normal',
    type: 'troop',
    page: 'M:69',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'mharoti dragonkin guard',
    strength: 'normal',
    type: 'troop',
    page: 'M:71',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'minotaur bodyguard',
    strength: 'normal',
    type: 'troop',
    page: 'M:74',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'rothenian centaur roughneck',
    strength: 'normal',
    type: 'troop',
    page: 'M:81',
    class: 'HUMANOID'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'shadow mongoose destroyer of fate',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:239',
    class: 'SPIRIT'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'phantomaton',
    strength: 'normal',
    type: 'troop',
    page: '2B:248',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'Blackamber skeletal legionnaire',
    strength: 'normal',
    type: 'troop',
    page: 'A:246',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'wight',
    strength: 'normal',
    type: 'spoiler',
    page: 'A:249',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'jestbones',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:109',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'screaming skull',
    strength: 'normal',
    type: 'troop',
    page: 'B:110',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'lich baroness',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:135',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'ghoul fleshwripper',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:97',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'ghoul licklash',
    strength: 'normal',
    type: 'blocker',
    page: 'B:97',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'ghoul pusbuster',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:97',
    class: 'UNDEAD'
  },
  {
    countsAs: 3,
    level: 4,
    name: 'spectral wolf',
    strength: 'normal',
    type: 'troop',
    page: 'M:63',
    class: 'UNDEAD'
  },
  {
    countsAs: 4,
    level: 2,
    name: 'blue flame salamander',
    strength: 'huge',
    type: 'troop',
    page: '2B:234',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'otyugh',
    strength: 'large',
    type: 'blocker',
    page: 'A:243',
    class: 'ABBERATION'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'horned azinth calf',
    strength: 'double-strength',
    type: 'wrecker',
    page: '2B:145',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'snowy owl bear',
    strength: 'large',
    type: 'spoiler',
    page: '2B:212',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'clubtail',
    strength: 'large',
    type: 'troop',
    page: '2B:271',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'dire wolf',
    strength: 'large',
    type: 'troop',
    page: 'A:207',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'crusader war banner',
    strength: 'double-strength',
    type: 'caster',
    page: 'B:208',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'clockwork devil',
    strength: 'large',
    type: 'troop',
    page: 'M:26',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'catacomb dragon',
    strength: 'large',
    type: 'wrecker',
    page: 'B:17',
    class: 'DRAGON'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'large brass dragon',
    strength: 'large',
    type: 'troop',
    page: 'TW:184',
    class: 'DRAGON'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'wild dryad',
    strength: 'double-strength',
    type: 'wrecker',
    page: '2B:206',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'flame bird phoenix',
    strength: 'double-strength',
    type: 'wrecker',
    page: '2B:216',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'taranar coryphée',
    strength: 'large',
    type: 'blocker',
    page: '2B:283',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'ogre',
    strength: 'large',
    type: 'troop',
    page: 'A:240',
    class: 'GIANT'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'ogre penitent',
    strength: 'large',
    type: 'blocker',
    page: 'B:149',
    class: 'GIANT'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'Clasterian minotaur guard',
    strength: 'large',
    type: 'archer',
    page: '2B:196',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'river nymph (naiad)',
    strength: 'double-strength',
    type: 'spoiler',
    page: '2B:206',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'death-plague orc',
    strength: 'large',
    type: 'spoiler',
    page: 'B:156',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'Orc Lord warbanner',
    strength: 'double-strength',
    type: 'caster',
    page: 'B:209',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'ochre jelly',
    strength: 'large',
    type: 'wrecker',
    page: 'A:241',
    class: 'OOZE'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'pixie pod',
    strength: 'double-strength',
    type: 'leader',
    page: 'B:161',
    class: 'PLANT'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'braincap',
    strength: 'double-strength',
    type: 'wrecker',
    page: 'B:84',
    class: 'PLANT'
  },
  {
    countsAs: 4,
    level: 3,
    name: 'gray hoarder',
    strength: 'double-strength',
    type: 'wrecker',
    page: '2B:113',
    class: 'UNDEAD'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'star-maskcultist',
    strength: 'normal',
    type: 'archer',
    page: '2B:259',
    class: 'ABBERATION'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'whispering prophet',
    strength: 'normal',
    type: 'leader',
    page: 'B:216',
    class: 'ABBERATION'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'warped beast',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:70',
    class: 'ABBERATION'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'koruku larva',
    strength: 'normal',
    type: 'wrecker',
    page: '2B:165',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'thunder bat',
    strength: 'normal',
    type: 'archer',
    page: 'B:15',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'ravenous bumoorah',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:28',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'carrion beetle',
    strength: 'normal',
    type: 'troop',
    page: 'M:12',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'horakh',
    strength: 'normal',
    type: 'spoiler',
    page: 'M:52',
    class: 'BEAST'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'gargoyle',
    strength: 'normal',
    type: 'troop',
    page: 'A:224',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'fell forged',
    strength: 'normal',
    type: 'spoiler',
    page: 'M:37',
    class: 'CONSTRUCT, UNDEAD'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'frenzy demon',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:211',
    class: 'DEMON'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'rustmonster obliterator',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:184',
    class: 'DEMON'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'cambion sickle',
    strength: 'normal',
    type: 'troop',
    page: 'B:31',
    class: 'DEMON'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'invisible sand devil',
    strength: 'normal',
    type: 'troop',
    page: 'M:66',
    class: 'DEMON'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'smoke devil',
    strength: 'normal',
    type: 'troop',
    page: 'TW:172',
    class: 'DEVIL'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'medium blue dragon',
    strength: 'normal',
    type: 'caster',
    page: 'A:219',
    class: 'DRAGON'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'pact drake',
    strength: 'normal',
    type: 'troop',
    page: 'M:35',
    class: 'DRAGON'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'flux elemental',
    strength: 'normal',
    type: 'troop',
    page: '2B:77',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'air elemental',
    strength: 'normal',
    type: 'wrecker',
    page: 'TW:190',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'earth elemental',
    strength: 'normal',
    type: 'blocker',
    page: 'TW:190',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'fire elemental',
    strength: 'normal',
    type: 'wrecker',
    page: 'TW:190',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'water elemental',
    strength: 'normal',
    type: 'blocker',
    page: 'TW:190',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'jackal scout',
    strength: 'normal',
    type: 'archer',
    page: '2B:122',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'white scale rimewalker',
    strength: 'normal',
    type: 'troop',
    page: '2B:175',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'trog fouler',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:275',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'faun bandleader',
    strength: 'normal',
    type: 'leader',
    page: '2B:59',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'faun keeper',
    strength: 'normal',
    type: 'blocker',
    page: '2B:59',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'frogspawn deceiver',
    strength: 'normal',
    type: 'spoiler',
    page: '2B:97',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'frog knight',
    strength: 'normal',
    type: 'blocker',
    page: '2B:98',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'hobgoblin warmage',
    strength: 'normal',
    type: 'caster',
    page: 'A:230',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'half-orc tribal champion',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:233',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'demon-touched human ranger',
    strength: 'normal',
    type: 'archer',
    page: 'A:235',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'sahuagin',
    strength: 'normal',
    type: 'wrecker',
    page: 'A:245',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'binding bride',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:121',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'swarm prince',
    strength: 'normal',
    type: 'spoiler',
    page: 'B:121',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'kobold dragon-soul',
    strength: 'normal',
    type: 'troop',
    page: 'B:125',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'sahuagin glow priest',
    strength: 'normal',
    type: 'caster',
    page: 'B:188',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'centaur raider',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:35',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'drow sword maiden',
    strength: 'normal',
    type: 'troop',
    page: 'B:58',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'ice maiden',
    strength: 'normal',
    type: 'caster',
    page: 'M:53',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'freecanton siege breaker',
    strength: 'normal',
    type: 'troop',
    page: 'M:56',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'merrow slaughter priest',
    strength: 'normal',
    type: 'caster',
    page: 'M:69',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'mharoti dragonkin emissary',
    strength: 'normal',
    type: 'caster',
    page: 'M:71',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'shadow fey courtier',
    strength: 'normal',
    type: 'troop',
    page: 'M:83',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'arbonesse exiled mage',
    strength: 'normal',
    type: 'caster',
    page: 'M:9',
    class: 'HUMANOID'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'common treant',
    strength: 'normal',
    type: 'spoiler',
    page: 'TW:202',
    class: 'PLANT'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'hungry mouth ghost',
    strength: 'normal',
    type: 'blocker',
    page: '2B:106',
    class: 'UNDEAD'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'gray raider',
    strength: 'normal',
    type: 'wrecker',
    page: '2B:113',
    class: 'UNDEAD'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'wraith',
    strength: 'normal',
    type: 'spoiler',
    page: 'A:250',
    class: 'UNDEAD'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'flaming skull',
    strength: 'normal',
    type: 'caster',
    page: 'B:110',
    class: 'UNDEAD'
  },
  {
    countsAs: 4,
    level: 5,
    name: 'ghast',
    strength: 'normal',
    type: 'wrecker',
    page: 'B:98',
    class: 'UNDEAD'
  },
  {
    countsAs: 4.5,
    level: 4,
    name: 'lesser xorn',
    strength: 'elite',
    type: 'spoiler',
    page: '2B:290',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 6,
    level: 3,
    name: 'dogmole juggernaut',
    strength: 'triple-strength',
    type: 'wrecker',
    page: 'M:30',
    class: 'BEAST'
  },
  {
    countsAs: 6,
    level: 3,
    name: 'bonded hero',
    strength: 'triple-strength',
    type: 'wrecker',
    page: '2B:14',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'brain-absorber xombie',
    strength: 'large',
    type: 'caster',
    page: '2B:258',
    class: 'ABBERATION'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'chaos brute',
    strength: 'large',
    type: 'wrecker',
    page: 'B:39',
    class: 'ABBERATION'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'spiketail',
    strength: 'large',
    type: 'wrecker',
    page: '2B:271',
    class: 'BEAST'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'trihorn',
    strength: 'large',
    type: 'troop',
    page: '2B:271',
    class: 'BEAST'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'basilisk',
    strength: 'large',
    type: 'wrecker',
    page: 'B:10',
    class: 'BEAST'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'wereboar',
    strength: 'double-strength',
    type: 'troop',
    page: 'TW:205',
    class: 'BEAST'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'flesh golem',
    strength: 'large',
    type: 'blocker',
    page: 'A:231',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'Lich King warbanner',
    strength: 'double-strength',
    type: 'caster',
    page: 'B:210',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'dire bear',
    strength: 'large',
    type: 'troop',
    page: 'A:207',
    class: 'DEMON'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'large white dragon',
    strength: 'large',
    type: 'troop',
    page: 'A:218',
    class: 'DRAGON'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'dwarf berserker',
    strength: 'double-strength',
    type: 'wrecker',
    page: 'M:55',
    class: 'DWARF'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'taranar hunter',
    strength: 'large',
    type: 'spoiler',
    page: '2B:282',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'broken taranar',
    strength: 'large',
    type: 'troop',
    page: '2B:283',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'troll',
    strength: 'large',
    type: 'troop',
    page: 'A:248',
    class: 'GIANT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'demonic ogre',
    strength: 'large',
    type: 'spoiler',
    page: 'B:149',
    class: 'GIANT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'ogre berserker',
    strength: 'large',
    type: 'wrecker',
    page: 'B:149',
    class: 'GIANT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'ogre crusader',
    strength: 'large',
    type: 'troop',
    page: 'B:150',
    class: 'GIANT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'hill nymph (oread)',
    strength: 'double-strength',
    type: 'spoiler',
    page: '2B:207',
    class: 'HUMANOID'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'minotaur',
    strength: 'large',
    type: 'troop',
    page: 'A:239',
    class: 'HUMANOID'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'owlbear',
    strength: 'large',
    type: 'wrecker',
    page: 'A:243',
    class: 'HUMANOID'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'kobold dungeon-shaman',
    strength: 'double-strength',
    type: 'caster',
    page: 'B:125',
    class: 'HUMANOID'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'fungaloid monarch',
    strength: 'double-strength',
    type: 'leader',
    page: 'B:84',
    class: 'PLANT'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'slaughter pit shade',
    strength: 'large',
    type: 'wrecker',
    page: '2B:11',
    class: 'UNDEAD'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'big zombie',
    strength: 'large',
    type: 'wrecker',
    page: 'A:251',
    class: 'UNDEAD'
  },
  {
    countsAs: 6,
    level: 4,
    name: 'iron ghoul',
    strength: 'double-strength',
    type: 'wrecker',
    page: 'M:17',
    class: 'UNDEAD'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'chaos behemoth',
    strength: 'huge',
    type: 'spoiler',
    page: 'B:40',
    class: 'ABBERATION'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'bonded veil',
    strength: 'triple-strength',
    type: 'troop',
    page: '2B:15',
    class: 'CONSTRUCT'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'Purple Dragon (adventurer)',
    strength: 'huge',
    type: 'caster',
    page: '2B:186',
    class: 'DRAGON'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'huge brass dragon',
    strength: 'huge',
    type: 'troop',
    page: 'TW:185',
    class: 'DRAGON'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'doom lantern salamander',
    strength: 'huge',
    type: 'blocker',
    page: '2B:234',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'gelatinous tetrahedron',
    strength: 'huge',
    type: 'blocker',
    page: 'B:88',
    class: 'OOZE'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'fungaloid empress',
    strength: 'huge',
    type: 'wrecker',
    page: 'B:85',
    class: 'PLANT'
  },
  {
    countsAs: 8,
    level: 4,
    name: 'eidolon in warform',
    strength: 'triple-strength',
    type: 'troop',
    page: '2B:47',
    class: 'SPIRIT'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'kohwa messenger',
    strength: 'large',
    type: 'caster',
    page: '2B:162',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'great horned owlbear',
    strength: 'large',
    type: 'spoiler',
    page: '2B:211',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'stalker',
    strength: 'large',
    type: 'troop',
    page: '2B:272',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'great hound',
    strength: 'large',
    type: 'wrecker',
    page: '2B:67',
    class: 'BEAST, FEY'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'mutant bullfrog',
    strength: 'large',
    type: 'wrecker',
    page: '2B:98',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'bulette',
    strength: 'large',
    type: 'wrecker',
    page: 'A:208',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'wyvern',
    strength: 'large',
    type: 'wrecker',
    page: 'A:250',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'manticore bard',
    strength: 'large',
    type: 'caster',
    page: 'B:139',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'mantikumhar',
    strength: 'large',
    type: 'spoiler',
    page: 'B:139',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'swaysong naga',
    strength: 'large',
    type: 'leader',
    page: 'B:143',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'green bulette',
    strength: 'large',
    type: 'wrecker',
    page: 'B:27',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'dire boar',
    strength: 'large',
    type: 'troop',
    page: 'TW:160',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'werebear',
    strength: 'large',
    type: 'troop',
    page: 'TW:206',
    class: 'BEAST'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'gorge dragon',
    strength: 'large',
    type: 'spoiler',
    page: 'B:17',
    class: 'DRAGON'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'mausoleum dragon',
    strength: 'large',
    type: 'troop',
    page: 'B:219',
    class: 'DRAGON'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'wild naiad',
    strength: 'double-strength',
    type: 'spoiler',
    page: '2B:207',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'resurgent phoenix',
    strength: 'large',
    type: 'leader',
    page: '2B:216',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'taranar bugler',
    strength: 'large',
    type: 'caster',
    page: '2B:282',
    class: 'ELEMENTAL'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'ettin',
    strength: 'large',
    type: 'troop',
    page: 'A:224',
    class: 'GIANT'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'ogre champion',
    strength: 'large',
    type: 'wrecker',
    page: 'B:150',
    class: 'GIANT'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'minotaur adept',
    strength: 'large',
    type: 'caster',
    page: '2B:192',
    class: 'HUMANOID'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'tribal minotaur berserker',
    strength: 'large',
    type: 'wrecker',
    page: '2B:192',
    class: 'HUMANOID'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'sea nymph (nereid)',
    strength: 'double-strength',
    type: 'spoiler',
    page: '2B:208',
    class: 'HUMANOID'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'Ebon Gauntlet adjudicator',
    strength: 'large',
    type: 'wrecker',
    page: '2B:40',
    class: 'HUMANOID'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'owl harpy',
    strength: 'double-strength',
    type: 'blocker',
    page: 'M:76',
    class: 'HUMANOID'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'kelpling',
    strength: 'double-strength',
    type: 'wrecker',
    page: '2B:199',
    class: 'PLANT'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'petulant never-was',
    strength: 'double-strength',
    type: 'caster',
    page: '2B:107',
    class: 'UNDEAD'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'wendigo spirit',
    strength: 'large',
    type: 'wrecker',
    page: 'B:212',
    class: 'UNDEAD'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'ghost boar of the ring wood',
    strength: 'double-strength',
    type: 'troop',
    page: 'M:39',
    class: 'UNDEAD'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'ghost knight of morgau',
    strength: 'large',
    type: 'troop',
    page: 'M:41',
    class: 'UNDEAD'
  },
  {
    countsAs: 8,
    level: 5,
    name: 'imperial ghast centurion',
    strength: 'double-strength',
    type: 'troop',
    page: 'M:54',
    class: 'UNDEAD'
  }
]

export default monsters
