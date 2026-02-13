// ============================================
// 🌺 HAWAII EXPLORER - Base de Datos Completa
// ============================================

export const islands = [
  {
    id: 'hawaii',
    name: "Hawai'i",
    nickname: 'The Big Island',
    emoji: '🌋',
    color: '#D62828',
    position: [19.57, -155.50],
    area: '10,432 km²',
    population: '200,629',
    highestPoint: { name: 'Mauna Kea', elevation: '4,205 m' },
    age: '0.4 millones de años',
    description: 'La isla más grande y más joven del archipiélago. Hogar de volcanes activos y paisajes dramáticos que van desde playas de arena negra hasta cumbres nevadas.',
    highlights: [
      '🌋 Mauna Kea: más alto que el Everest desde su base oceánica (10,200m total)',
      '🔥 Kīlauea: uno de los volcanes más activos del mundo',
      '⚫ Playas de arena negra volcánica',
      '🌌 Mejor lugar del mundo para observación astronómica',
      '❄️ La única isla tropical con nieve en sus cumbres'
    ],
    funFacts: [
      'Mauna Kea tiene la montaña más alta del mundo medida desde su base (33,500 pies)',
      'La isla sigue creciendo con cada erupción volcánica',
      'Tiene 11 de las 13 zonas climáticas del mundo',
      'El Kīlauea estuvo en erupción casi continua desde 1983 hasta 2018'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puu_Oo_cropped.jpg/800px-Puu_Oo_cropped.jpg', caption: 'Volcán Kīlauea' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Punaluu_Black_Sand_Beach%2C_Hawaii%2C_USA8.jpg/800px-Punaluu_Black_Sand_Beach%2C_Hawaii%2C_USA8.jpg', caption: 'Playa de arena negra' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mauna_Kea_from_Mauna_Loa_Observatory%2C_Hawaii_-_20100913.jpg/800px-Mauna_Kea_from_Mauna_Loa_Observatory%2C_Hawaii_-_20100913.jpg', caption: 'Mauna Kea' },
    ]
  },
  {
    id: 'maui',
    name: 'Maui',
    nickname: 'The Valley Isle',
    emoji: '🌅',
    color: '#F77F00',
    position: [20.80, -156.32],
    area: '1,883 km²',
    population: '164,221',
    highestPoint: { name: 'Haleakalā', elevation: '3,055 m' },
    age: '1.3–0.8 millones de años',
    description: 'Conocida por sus impresionantes amaneceres en el volcán Haleakalā, sus playas doradas y el histórico pueblo ballenero de Lahaina.',
    highlights: [
      '🌄 Haleakalā: "Casa del Sol" — amaneceres espectaculares a 3,055m',
      '🐋 Capital mundial del avistamiento de ballenas jorobadas',
      '🛣️ Road to Hana: 64 millas de curvas con 600+ curvas y 54 puentes',
      '🏖️ Playas de arena dorada, roja y negra',
      '🏛️ Lahaina: antigua capital del Reino de Hawaii'
    ],
    funFacts: [
      'El cráter de Haleakalā es tan grande que cabría Manhattan dentro',
      'Mark Twain la llamó "la cosa más sublime que he visto"',
      'Lahaina fue la capital del Reino de Hawaii antes que Honolulu',
      'El primer edificio de estilo occidental en Hawaii fue construido aquí en 1802'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Haleakala_Crater.jpg/800px-Haleakala_Crater.jpg', caption: 'Haleakalā al amanecer' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Road_to_Hana.JPG/800px-Road_to_Hana.JPG', caption: 'Road to Hana' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/WindsurfHookipa.jpg', caption: 'Costa de Maui' },
    ]
  },
  {
    id: 'oahu',
    name: "O'ahu",
    nickname: 'The Gathering Place',
    emoji: '🏙️',
    color: '#0077B6',
    position: [21.47, -157.99],
    area: '1,545 km²',
    population: '1,016,508',
    highestPoint: { name: "Mount Ka'ala", elevation: '1,220 m' },
    age: '3.7–2.6 millones de años',
    description: 'El corazón de Hawaii. Hogar de Honolulu, la capital, Pearl Harbor, Waikiki y la famosa North Shore del surf.',
    highlights: [
      '🏛️ Honolulu: capital del estado y ciudad más grande',
      '⚓ Pearl Harbor: memorial histórico de la WWII',
      '🏄 North Shore: meca mundial del surf con olas de hasta 18m',
      '💎 Diamond Head: cráter volcánico icónico',
      '🏖️ Waikiki: una de las playas más famosas del mundo'
    ],
    funFacts: [
      'Dos tercios de toda la población de Hawaii vive en O\'ahu',
      'Es la isla más densamente poblada (657.7/km²)',
      'Pearl Harbor fue atacado el 7 de diciembre de 1941, catalizando la entrada de EE.UU. en la WWII',
      'El Palacio ʻIolani es el único palacio real en suelo estadounidense'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Diamond_Head_from_Waikiki.jpg/800px-Diamond_Head_from_Waikiki.jpg', caption: 'Diamond Head' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Waikiki_Beach%2C_Honolulu.JPG/800px-Waikiki_Beach%2C_Honolulu.JPG', caption: 'Waikiki Beach' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/USS_Arizona_Memorial_%28aerial_view%29.jpg/800px-USS_Arizona_Memorial_%28aerial_view%29.jpg', caption: 'Pearl Harbor Memorial' },
    ]
  },
  {
    id: 'kauai',
    name: "Kaua'i",
    nickname: 'The Garden Isle',
    emoji: '🌿',
    color: '#2D6A4F',
    position: [22.08, -159.50],
    area: '1,430 km²',
    population: '73,298',
    highestPoint: { name: 'Kawaikini', elevation: '1,598 m' },
    age: '5.1 millones de años',
    description: 'La isla más antigua y verde del archipiélago. Paisajes de película con el espectacular Cañón Waimea y la costa Nā Pali.',
    highlights: [
      '🏜️ Waimea Canyon: el "Gran Cañón del Pacífico" (900m de profundidad)',
      '⛰️ Nā Pali Coast: acantilados de 1,200m que caen al mar',
      '🌧️ Monte Waialeale: uno de los lugares más lluviosos de la Tierra',
      '🎬 Locación de Jurassic Park, Piratas del Caribe, Avatar',
      '🌺 La isla más verde y exuberante'
    ],
    funFacts: [
      'Es la isla habitada más antigua (5.1 millones de años)',
      'Monte Waialeale recibe más de 11,000mm de lluvia al año',
      'Más de 70 películas de Hollywood se han filmado aquí',
      'Es la única isla donde no se permiten edificios más altos que un cocotero'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/NaPaliCoast.jpg', caption: 'Nā Pali Coast' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Waimea_Canyon%2C_Kauai_-_panoramio.jpg/800px-Waimea_Canyon%2C_Kauai_-_panoramio.jpg', caption: 'Waimea Canyon' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Wailua_River_State_Park_Fern_Grotto.jpg/800px-Wailua_River_State_Park_Fern_Grotto.jpg', caption: 'Selva tropical' },
    ]
  },
  {
    id: 'molokai',
    name: "Moloka'i",
    nickname: 'The Friendly Isle',
    emoji: '🤝',
    color: '#6C757D',
    position: [21.13, -157.02],
    area: '673 km²',
    population: '7,345',
    highestPoint: { name: 'Kamakou', elevation: '1,512 m' },
    age: '1.9–1.8 millones de años',
    description: 'La isla más hawaiana. Sin semáforos, sin edificios altos. Conserva el estilo de vida rural tradicional y los acantilados marinos más altos del mundo.',
    highlights: [
      '🏔️ Acantilados marinos más altos del mundo (1,005m)',
      '🚫 Sin semáforos ni cadenas de comida rápida',
      '🏥 Península de Kalaupapa: histórica colonia de leprosos',
      '🎣 Estilo de vida tradicional hawaiano preservado',
      '🌊 El arrecife de coral más largo de Hawaii'
    ],
    funFacts: [
      'Es la isla que mejor conserva la cultura hawaiana tradicional',
      'El Padre Damián dedicó su vida a los leprosos en Kalaupapa',
      'No tiene ni un solo semáforo en toda la isla',
      'El 60% de la población tiene ascendencia hawaiana nativa'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Molokai_Sea_Cliffs.jpg/800px-Molokai_Sea_Cliffs.jpg', caption: 'Acantilados de Molokai' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Halawa_Molokai.jpg', caption: 'Valle de Halawa' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Kalaupapa_National_Historical_Park_banner_Aerial_shot.jpg/800px-Kalaupapa_National_Historical_Park_banner_Aerial_shot.jpg', caption: 'Kalaupapa' },
    ]
  },
  {
    id: 'lanai',
    name: "Lāna'i",
    nickname: 'The Pineapple Isle',
    emoji: '🍍',
    color: '#FCBF49',
    position: [20.83, -156.93],
    area: '364 km²',
    population: '3,367',
    highestPoint: { name: 'Lānaʻihale', elevation: '1,026 m' },
    age: '1.3 millones de años',
    description: 'Antiguamente la mayor plantación de piña del mundo. Hoy es un exclusivo destino de lujo con solo 30 millas de carreteras pavimentadas.',
    highlights: [
      '🍍 Fue la mayor productora de piña del mundo',
      '🏨 Solo tiene 2 hoteles de ultra lujo (Four Seasons)',
      '🚙 Solo 30 millas de carreteras pavimentadas',
      '🏖️ Shipwreck Beach: restos de naufragios en la playa',
      '🪨 Garden of the Gods: paisaje lunar rocoso'
    ],
    funFacts: [
      'Larry Ellison (cofundador de Oracle) compró el 98% de la isla en 2012',
      'En su apogeo producía el 75% de la piña mundial',
      'Tiene más Jeeps per cápita que cualquier lugar del mundo',
      'Solo tiene 3,367 habitantes'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hawaii_-_Lanai_Island_-_NARA_-_23938207.jpg/800px-Hawaii_-_Lanai_Island_-_NARA_-_23938207.jpg', caption: 'Playa de Lāna\'i' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Garden_of_the_Gods_Lanai.jpg/800px-Garden_of_the_Gods_Lanai.jpg', caption: 'Garden of the Gods' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Shipwreck_-_Shipwreck_Beach.jpg/800px-Shipwreck_-_Shipwreck_Beach.jpg', caption: 'Shipwreck Beach' },
    ]
  },
  {
    id: 'niihau',
    name: "Ni'ihau",
    nickname: 'The Forbidden Isle',
    emoji: '🚫',
    color: '#5C0029',
    position: [21.90, -160.17],
    area: '180 km²',
    population: '84',
    highestPoint: { name: "Mount Pānī'au", elevation: '381 m' },
    age: '4.9 millones de años',
    description: 'La isla prohibida. Propiedad privada de la familia Robinson desde 1864. Solo los residentes nativos hawaianos pueden vivir aquí. El hawaiano es el idioma principal.',
    highlights: [
      '🚫 Acceso prohibido sin invitación de los propietarios',
      '🗣️ El hawaiano es el idioma principal hablado diariamente',
      '📵 Sin electricidad, agua corriente ni internet',
      '🐚 Famosos collares de conchas Ni\'ihau (pūpū)',
      '👨‍👩‍👧‍👦 Solo 84 habitantes'
    ],
    funFacts: [
      'Fue comprada por la familia Sinclair por $10,000 en oro en 1864',
      'Es el último lugar donde el hawaiano es la lengua materna',
      'Los collares de conchas de Ni\'ihau pueden costar miles de dólares',
      'Los residentes no pagan renta y viven de forma tradicional'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Niihau_sep_2007.jpg/800px-Niihau_sep_2007.jpg', caption: 'Costa de Ni\'ihau' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Kahelelani_%28Niihau%29_shell_lei%2C_Hawaii_State_Art_Museum_II.JPG/800px-Kahelelani_%28Niihau%29_shell_lei%2C_Hawaii_State_Art_Museum_II.JPG', caption: 'Collares de conchas Ni\'ihau' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lady_from_Niihau_making_a_shell_lei.JPG/800px-Lady_from_Niihau_making_a_shell_lei.JPG', caption: 'Isla prohibida' },
    ]
  },
  {
    id: 'kahoolawe',
    name: "Kaho'olawe",
    nickname: 'The Target Isle',
    emoji: '🎯',
    color: '#8B0000',
    position: [20.55, -156.60],
    area: '116 km²',
    population: '0',
    highestPoint: { name: "Pu'u Moaulanui", elevation: '452 m' },
    age: '1.0 millón de años',
    description: 'La isla deshabitada. Fue usada como campo de prácticas de bombardeo por la Marina de EE.UU. desde la WWII hasta 1990. Hoy es un sitio sagrado en proceso de restauración.',
    highlights: [
      '💣 Usada como objetivo militar desde la WWII hasta 1990',
      '⚠️ Aún puede contener munición sin explotar',
      '🙏 Sagrada para los hawaianos nativos',
      '🌱 En proceso de restauración ecológica',
      '🚷 Acceso totalmente restringido'
    ],
    funFacts: [
      'Es la isla más pequeña de las 8 principales',
      'Fue bombardeada durante casi 50 años por la Marina',
      'El movimiento para detener los bombardeos fue clave en el renacimiento cultural hawaiano',
      'Es administrada por la Comisión de Reserva de la Isla Kaho\'olawe'
    ],
    images: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/KahoolaweAerial.jpg/800px-KahoolaweAerial.jpg', caption: 'Vista aérea' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Kahoolawe_island_and_Molokini_Crater_%2844826034095%29.jpg/800px-Kahoolawe_island_and_Molokini_Crater_%2844826034095%29.jpg', caption: 'Costa deshabitada' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/K%C4%ABlauea_volcano_eruption_20201220.jpg/800px-K%C4%ABlauea_volcano_eruption_20201220.jpg', caption: 'Vista desde Maui' },
    ]
  }
];

export const historicalTimeline = [
  {
    year: '940-1200',
    title: 'Descubrimiento Polinesio',
    description: 'Navegantes polinesios de Tahití y las Islas Marquesas descubren y colonizan las islas hawaianas, guiándose por las estrellas, corrientes oceánicas y el vuelo de las aves.',
    icon: '⛵',
    era: 'Antigua',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/H%C5%8Dk%C5%ABle%CA%BBa_voyaging_canoe_behind_Hawaii_convention_Center.jpg/800px-H%C5%8Dk%C5%ABle%CA%BBa_voyaging_canoe_behind_Hawaii_convention_Center.jpg'
  },
  {
    year: '1400s',
    title: 'Era de los Aliʻi',
    description: 'Surgen los grandes jefes (Aliʻi) que gobiernan las diferentes islas. Se establece el sistema de castas y el kapu (tabú) como ley sagrada.',
    icon: '👑',
    era: 'Antigua',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hula_Kahiko_Hawaii_Volcanoes_National_Park_01.jpg/800px-Hula_Kahiko_Hawaii_Volcanoes_National_Park_01.jpg'
  },
  {
    year: '1778',
    title: 'Llegada de James Cook',
    description: 'El explorador británico James Cook llega a las islas durante su tercer viaje de exploración. Las nombra "Islas Sandwich" en honor a su mecenas.',
    icon: '🚢',
    era: 'Colonial',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Captainjamescookportrait.jpg/800px-Captainjamescookportrait.jpg'
  },
  {
    year: '1779',
    title: 'Muerte de Cook',
    description: 'Cook regresa a Hawaii y muere en un conflicto violento con los nativos hawaianos en la Bahía de Kealakekua, isla de Hawai\'i.',
    icon: '⚔️',
    era: 'Colonial',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Zoffany_Death_of_Captain_Cook.jpg/800px-Zoffany_Death_of_Captain_Cook.jpg'
  },
  {
    year: '1795',
    title: 'Unificación de Hawaii',
    description: 'Kamehameha I, con ayuda de armas europeas, conquista y unifica todas las islas hawaianas, fundando el Reino de Hawaii.',
    icon: '🤴',
    era: 'Moderna',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Kamehameha_I%2C_portrait_by_James_Gay_Sawkins.jpg/800px-Kamehameha_I%2C_portrait_by_James_Gay_Sawkins.jpg'
  },
  {
    year: '1810',
    title: 'Reino Soberano',
    description: 'El Reino de Hawaii es reconocido internacionalmente como nación soberana. Kamehameha I consolida su poder sobre todas las islas.',
    icon: '🏰',
    era: 'Moderna',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Royal_Coat_of_Arms_of_Hawaii.svg/800px-Royal_Coat_of_Arms_of_Hawaii.svg.png'
  },
  {
    year: '1840',
    title: 'Primera Constitución',
    description: 'Kamehameha III promulga la primera constitución hawaiana, estableciendo derechos humanos y un nuevo sistema de propiedad de tierras.',
    icon: '📜',
    era: 'Moderna',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Kamehameha_III%2C_daguerreotype%2C_c._1853.jpg/800px-Kamehameha_III%2C_daguerreotype%2C_c._1853.jpg'
  },
  {
    year: '1893',
    title: 'Derrocamiento de la Reina',
    description: 'La Reina Lili\'uokalani es derrocada ilegalmente por empresarios estadounidenses y europeos con apoyo de los Marines de EE.UU.',
    icon: '👸',
    era: 'Contemporánea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Frontispiece_photograph_from_Hawaii%27s_Story_by_Hawaii%27s_Queen%2C_Liliuokalani_%281898%29.jpg/800px-Frontispiece_photograph_from_Hawaii%27s_Story_by_Hawaii%27s_Queen%2C_Liliuokalani_%281898%29.jpg'
  },
  {
    year: '1898',
    title: 'Anexión por EE.UU.',
    description: 'Hawaii es oficialmente anexada por los Estados Unidos y se convierte en territorio estadounidense.',
    icon: '🇺🇸',
    era: 'Contemporánea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Raising_of_American_flag_at_Iolani_Palace_with_US_Marines_in_the_foreground.jpg'
  },
  {
    year: '1941',
    title: 'Ataque a Pearl Harbor',
    description: 'El 7 de diciembre, Japón ataca la base naval de Pearl Harbor en O\'ahu, provocando la entrada de EE.UU. en la Segunda Guerra Mundial.',
    icon: '💥',
    era: 'Contemporánea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg/800px-The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg'
  },
  {
    year: '1959',
    title: 'Estado #50',
    description: 'Hawaii se convierte en el estado número 50 de los Estados Unidos con un 94.3% de votos a favor en el referéndum.',
    icon: '⭐',
    era: 'Contemporánea',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/800px-Flag_of_Hawaii.svg.png'
  }
];

export const funFacts = [
  {
    id: 1,
    category: 'Geografía',
    icon: '🗺️',
    fact: 'Hawaii es el único estado de EE.UU. que no está en Norteamérica — está en Oceanía, en el Triángulo Polinésico.',
    color: '#0077B6'
  },
  {
    id: 2,
    category: 'Naturaleza',
    icon: '🌋',
    fact: 'Mauna Kea mide 10,200m desde su base oceánica — ¡es más alto que el Monte Everest!',
    color: '#D62828'
  },
  {
    id: 3,
    category: 'Fauna',
    icon: '🐟',
    fact: 'El pez estatal es el Humuhumunukunukuāpuaʻa — ¡intenta pronunciarlo!',
    color: '#F77F00'
  },
  {
    id: 4,
    category: 'Cultura',
    icon: '🏄',
    fact: 'El surf es el deporte estatal de Hawaii. Los antiguos hawaianos lo llamaban "He\'e nalu" (deslizarse sobre las olas).',
    color: '#48CAE4'
  },
  {
    id: 5,
    category: 'Geología',
    icon: '🔥',
    fact: 'Un nuevo volcán submarino (Kamaʻehuakanaloa) está formándose y será la próxima isla en 10,000-100,000 años.',
    color: '#D62828'
  },
  {
    id: 6,
    category: 'Historia',
    icon: '📖',
    fact: 'Hawaii y Texas son los únicos 2 estados que fueron naciones soberanas reconocidas internacionalmente antes de unirse a EE.UU.',
    color: '#5C0029'
  },
  {
    id: 7,
    category: 'Clima',
    icon: '🌈',
    fact: 'La Isla Grande de Hawaii tiene 11 de las 13 zonas climáticas del mundo — desde desiertos hasta glaciares.',
    color: '#2D6A4F'
  },
  {
    id: 8,
    category: 'Idioma',
    icon: '🗣️',
    fact: 'El alfabeto hawaiano solo tiene 13 letras: A, E, H, I, K, L, M, N, O, P, U, W y la ʻokina (ʻ).',
    color: '#FCBF49'
  },
  {
    id: 9,
    category: 'Vida',
    icon: '❤️',
    fact: 'Los residentes de Hawaii tienen la esperanza de vida más alta de EE.UU.: 80.7 años.',
    color: '#FF6B6B'
  },
  {
    id: 10,
    category: 'Naturaleza',
    icon: '🌺',
    fact: 'La flor estatal es el Pua Aloalo (Hibisco amarillo). El árbol estatal es el Kukui (nuez de la India).',
    color: '#FFB4D2'
  },
  {
    id: 11,
    category: 'Geografía',
    icon: '🏖️',
    fact: 'Hawaii tiene la 4ª línea costera más larga de EE.UU. con aproximadamente 1,210 km de costa.',
    color: '#0077B6'
  },
  {
    id: 12,
    category: 'Record',
    icon: '🌧️',
    fact: 'El Monte Waialeale en Kaua\'i es uno de los lugares más lluviosos del planeta con 11,000mm de lluvia al año.',
    color: '#48CAE4'
  }
];

export const stateSymbols = {
  bird: { name: 'Nēnē', hawaiian: 'Nēnē', emoji: '🐦', description: 'Ganso hawaiano, el ave estatal más rara del mundo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Branta_sandvicensis_-Kilauea_Point_National_Wildlife_Refuge%2C_Hawaii%2C_USA-8.jpg/800px-Branta_sandvicensis_-Kilauea_Point_National_Wildlife_Refuge%2C_Hawaii%2C_USA-8.jpg' },
  fish: { name: 'Humuhumunukunukuāpuaʻa', hawaiian: 'Humuhumu', emoji: '🐟', description: 'Pez ballesta con el nombre más largo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Rhinecanthus_rectangulus.jpg/800px-Rhinecanthus_rectangulus.jpg' },
  flower: { name: 'Pua Aloalo', hawaiian: 'Pua Aloalo', emoji: '🌺', description: 'Hibisco amarillo nativo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hibiscus_brackenridgei.jpg/800px-Hibiscus_brackenridgei.jpg' },
  tree: { name: 'Kukui', hawaiian: 'Kukui', emoji: '🌳', description: 'Árbol de nuez de la India, símbolo de iluminación', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Starr_020803-0119_Aleurites_moluccana.jpg/800px-Starr_020803-0119_Aleurites_moluccana.jpg' },
  insect: { name: 'Pulelehua', hawaiian: 'Pulelehua', emoji: '🦋', description: 'Mariposa Kamehameha, la única nativa', image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Kamehamehabutterfly2.jpg' },
  dance: { name: 'Hula', hawaiian: 'Hula', emoji: '💃', description: 'Danza sagrada que cuenta historias a través del movimiento', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hula_Kahiko_Hawaii_Volcanoes_National_Park_01.jpg/800px-Hula_Kahiko_Hawaii_Volcanoes_National_Park_01.jpg' },
  sport: { name: "He'e Nalu", hawaiian: "He'e Nalu", emoji: '🏄', description: 'Surf — inventado por los antiguos hawaianos', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Surfer_at_Banzai_Pipeline%2C_North_Shore_%28Oahu%29.jpg/800px-Surfer_at_Banzai_Pipeline%2C_North_Shore_%28Oahu%29.jpg' },
  food: { name: 'Kalo', hawaiian: 'Kalo', emoji: '🍠', description: 'Taro — la base de la dieta tradicional hawaiana', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Taro_Fields%2C_Hanalei%2C_Kauai_%289863657395%29.jpg/800px-Taro_Fields%2C_Hanalei%2C_Kauai_%289863657395%29.jpg' },
  gem: { name: "ʻĒkaha kū moana", hawaiian: "ʻĒkaha kū moana", emoji: '💎', description: 'Coral negro de las profundidades', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Antipathes_dichotoma1.jpg' }
};

export const generalInfo = {
  name: "Hawai'i",
  officialName: "State of Hawai'i",
  nickname: 'The Aloha State',
  motto: 'Ua Mau ke Ea o ka ʻĀina i ka Pono',
  mottoTranslation: 'La Vida de la Tierra se Perpetúa en la Rectitud',
  anthem: "Hawai'i Pono'ī",
  capital: 'Honolulu',
  stateNumber: 50,
  admissionDate: '21 de agosto de 1959',
  totalIslands: 137,
  mainIslands: 8,
  totalArea: '28,311 km²',
  population: '1,446,146',
  officialLanguages: ['Inglés', 'Hawaiano'],
  timeZone: 'UTC−10:00 (Hawaii)',
  coordinates: { lat: 21.5, lng: -158.0 },
  coastline: '1,210 km',
  highestPoint: 'Mauna Kea (4,205 m)',
};

export const mapConfig = {
  center: [20.9, -157.0],
  zoom: 7,
  minZoom: 6,
  maxZoom: 11,
  bounds: [
    [18.5, -161.0],
    [22.5, -154.0]
  ]
};

// ============================================
// 🧠 QUIZ - Cuestionario Interactivo
// ============================================
export const quizQuestions = [
  {
    id: 1,
    question: '¿Cuál es la isla más grande de Hawaii?',
    options: ["O'ahu", "Maui", "Hawai'i (Big Island)", "Kaua'i"],
    correct: 2,
    explanation: "Hawai'i, conocida como Big Island, es la isla más grande con 10,432 km².",
    difficulty: 'fácil',
    category: 'Geografía',
    emoji: '🏝️'
  },
  {
    id: 2,
    question: '¿Qué montaña es más alta que el Everest medida desde su base oceánica?',
    options: ['Haleakalā', 'Mauna Kea', 'Mauna Loa', 'Kawaikini'],
    correct: 1,
    explanation: 'Mauna Kea mide 10,200m desde su base oceánica, superando al Everest (8,849m).',
    difficulty: 'fácil',
    category: 'Geografía',
    emoji: '⛰️'
  },
  {
    id: 3,
    question: '¿Cuántas letras tiene el alfabeto hawaiano?',
    options: ['10', '13', '18', '26'],
    correct: 1,
    explanation: "El alfabeto hawaiano tiene 13 letras: A, E, H, I, K, L, M, N, O, P, U, W y la ʻokina (ʻ).",
    difficulty: 'medio',
    category: 'Cultura',
    emoji: '🗣️'
  },
  {
    id: 4,
    question: '¿Qué isla es conocida como "La Isla Prohibida"?',
    options: ["Kaho'olawe", "Ni'ihau", "Moloka'i", "Lāna'i"],
    correct: 1,
    explanation: "Ni'ihau es propiedad privada de la familia Robinson desde 1864 y el acceso está restringido.",
    difficulty: 'medio',
    category: 'Historia',
    emoji: '🚫'
  },
  {
    id: 5,
    question: '¿Quién unificó todas las islas hawaianas en 1795?',
    options: ['James Cook', 'Kamehameha I', "Lili'uokalani", 'Kamehameha III'],
    correct: 1,
    explanation: 'Kamehameha I conquistó y unificó las islas hawaianas con ayuda de armas europeas.',
    difficulty: 'medio',
    category: 'Historia',
    emoji: '🤴'
  },
  {
    id: 6,
    question: '¿Cuál es el nombre del pez estatal de Hawaii?',
    options: ['Nēnē', 'Pulelehua', 'Humuhumunukunukuāpuaʻa', 'Kukui'],
    correct: 2,
    explanation: 'El Humuhumunukunukuāpuaʻa (pez ballesta) es el pez estatal con el nombre más largo.',
    difficulty: 'fácil',
    category: 'Naturaleza',
    emoji: '🐟'
  },
  {
    id: 7,
    question: '¿Qué evento ocurrió el 7 de diciembre de 1941 en Hawaii?',
    options: ['Erupción del Kīlauea', 'Ataque a Pearl Harbor', 'Hawaii se convirtió en estado', 'Derrocamiento de la Reina'],
    correct: 1,
    explanation: 'El ataque japonés a la base naval de Pearl Harbor provocó la entrada de EE.UU. en la WWII.',
    difficulty: 'fácil',
    category: 'Historia',
    emoji: '💥'
  },
  {
    id: 8,
    question: '¿Qué isla fue usada como campo de prácticas de bombardeo?',
    options: ["Ni'ihau", "Lāna'i", "Kaho'olawe", "Moloka'i"],
    correct: 2,
    explanation: "Kaho'olawe fue bombardeada por la Marina de EE.UU. desde la WWII hasta 1990.",
    difficulty: 'medio',
    category: 'Historia',
    emoji: '🎯'
  },
  {
    id: 9,
    question: '¿Cuál es el apodo de Maui?',
    options: ['The Garden Isle', 'The Valley Isle', 'The Gathering Place', 'The Friendly Isle'],
    correct: 1,
    explanation: 'Maui es conocida como "The Valley Isle" (La Isla del Valle).',
    difficulty: 'medio',
    category: 'Geografía',
    emoji: '🌅'
  },
  {
    id: 10,
    question: '¿Cuántas zonas climáticas tiene la Isla Grande de Hawaii?',
    options: ['5 de 13', '8 de 13', '11 de 13', '13 de 13'],
    correct: 2,
    explanation: 'La Isla Grande tiene 11 de las 13 zonas climáticas del mundo, desde desiertos hasta glaciares.',
    difficulty: 'difícil',
    category: 'Naturaleza',
    emoji: '🌈'
  },
  {
    id: 11,
    question: '¿En qué año Hawaii se convirtió en el estado #50 de EE.UU.?',
    options: ['1941', '1950', '1959', '1969'],
    correct: 2,
    explanation: 'Hawaii se convirtió en estado el 21 de agosto de 1959 con un 94.3% de votos a favor.',
    difficulty: 'medio',
    category: 'Historia',
    emoji: '⭐'
  },
  {
    id: 12,
    question: '¿Quién compró el 98% de la isla Lānaʻi en 2012?',
    options: ['Jeff Bezos', 'Elon Musk', 'Larry Ellison', 'Mark Zuckerberg'],
    correct: 2,
    explanation: 'Larry Ellison, cofundador de Oracle, compró el 98% de Lānaʻi.',
    difficulty: 'difícil',
    category: 'Curiosidades',
    emoji: '🍍'
  },
  {
    id: 13,
    question: '¿Cuál es el cañón conocido como "el Gran Cañón del Pacífico"?',
    options: ['Haleakalā', 'Nā Pali', 'Waimea Canyon', 'Kalaupapa'],
    correct: 2,
    explanation: "El Waimea Canyon en Kaua'i tiene 900m de profundidad y se asemeja al Gran Cañón.",
    difficulty: 'medio',
    category: 'Geografía',
    emoji: '🏜️'
  },
  {
    id: 14,
    question: '¿Cuántos habitantes tiene la isla Niʻihau?',
    options: ['0', '84', '3,367', '7,345'],
    correct: 1,
    explanation: "Ni'ihau tiene solo 84 habitantes que viven de forma tradicional sin electricidad ni internet.",
    difficulty: 'difícil',
    category: 'Curiosidades',
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    id: 15,
    question: '¿Qué porcentaje de la piña mundial producía Lānaʻi en su apogeo?',
    options: ['25%', '50%', '75%', '90%'],
    correct: 2,
    explanation: "Lāna'i llegó a producir el 75% de la piña mundial.",
    difficulty: 'difícil',
    category: 'Curiosidades',
    emoji: '🍍'
  },
  {
    id: 16,
    question: '¿Cuál es la isla más antigua del archipiélago hawaiano?',
    options: ["Hawai'i", "O'ahu", "Kaua'i", "Ni'ihau"],
    correct: 2,
    explanation: "Kaua'i es la isla habitada más antigua con 5.1 millones de años.",
    difficulty: 'medio',
    category: 'Geología',
    emoji: '🌿'
  },
  {
    id: 17,
    question: '¿Dónde se encuentra el único palacio real en suelo estadounidense?',
    options: ["Maui", "Kaua'i", "O'ahu", "Hawai'i"],
    correct: 2,
    explanation: "El Palacio ʻIolani en O'ahu es el único palacio real en suelo estadounidense.",
    difficulty: 'difícil',
    category: 'Historia',
    emoji: '🏛️'
  },
  {
    id: 18,
    question: '¿Cuál es la flor estatal de Hawaii?',
    options: ['Orquídea', 'Plumeria', 'Pua Aloalo (Hibisco)', 'Pikake'],
    correct: 2,
    explanation: 'El Pua Aloalo (Hibisco amarillo nativo) es la flor estatal oficial.',
    difficulty: 'fácil',
    category: 'Naturaleza',
    emoji: '🌺'
  },
  {
    id: 19,
    question: '¿Qué isla NO tiene semáforos?',
    options: ["Lāna'i", "Moloka'i", "Ni'ihau", "Las tres"],
    correct: 3,
    explanation: "Moloka'i, Lāna'i y Ni'ihau no tienen semáforos. Moloka'i es famosa por esto.",
    difficulty: 'difícil',
    category: 'Curiosidades',
    emoji: '🚫'
  },
  {
    id: 20,
    question: '¿Cuánto costó la isla Niʻihau cuando fue comprada en 1864?',
    options: ['$1,000 en oro', '$10,000 en oro', '$100,000 en oro', '$1,000,000 en oro'],
    correct: 1,
    explanation: "Ni'ihau fue comprada por la familia Sinclair por $10,000 en oro al Rey Kamehameha V.",
    difficulty: 'difícil',
    category: 'Historia',
    emoji: '💰'
  }
];

