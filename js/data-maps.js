/* =========================================================
   MARCH OF EMPIRE — Campaign & Historical Maps Database
   ========================================================= */

const MAPS_DATA = [
  /* ================= ALEXANDER THE GREAT ================= */
  {
    id: "alexander-empire", era: "ancient", name: "Alexander's Empire at its Greatest Extent",
    description: "The Macedonian Empire under Alexander stretched from Greece to the Indus River at its zenith in 323 BCE, encompassing Egypt, Persia, Bactria, and parts of northwest India.",
    category: "empire",
    keyLocations: [
      { name: "Pella", desc: "Capital of Macedonia", lat: 40.76, lng: 22.52 },
      { name: "Granicus", desc: "First major battle vs Persia, 334 BCE", lat: 40.34, lng: 27.09 },
      { name: "Issus", desc: "Decisive battle vs Darius III, 333 BCE", lat: 36.84, lng: 36.18 },
      { name: "Tyre", desc: "Epic 7-month siege, 332 BCE", lat: 33.27, lng: 35.20 },
      { name: "Alexandria", desc: "Founded 331 BCE in Egypt", lat: 31.20, lng: 29.92 },
      { name: "Gaugamela", desc: "Decisive defeat of Persian Empire, 331 BCE", lat: 36.56, lng: 43.45 },
      { name: "Persepolis", desc: "Ceremonial capital of Persia, captured 330 BCE", lat: 29.93, lng: 52.89 },
      { name: "Hydaspes", desc: "Battle vs King Porus, 326 BCE", lat: 32.49, lng: 73.68 },
      { name: "Babylon", desc: "Alexander's death, 323 BCE", lat: 32.54, lng: 44.42 }
    ]
  },
  /* ================= NAPOLEONIC CAMPAIGNS ================= */
  {
    id: "napoleon-europe", era: "napoleonic", name: "Napoleon's European Campaigns",
    description: "The campaigns of Napoleon Bonaparte reshaped the political map of Europe between 1796 and 1815, from the Italian Campaign to the final defeat at Waterloo.",
    category: "campaign",
    keyLocations: [
      { name: "Paris", desc: "Capital of the French Empire", lat: 48.86, lng: 2.35 },
      { name: "Austerlitz", desc: "Napoleon's masterpiece, 2 Dec 1805", lat: 49.13, lng: 16.76 },
      { name: "Jena", desc: "Crushing defeat of Prussia, 14 Oct 1806", lat: 50.93, lng: 11.59 },
      { name: "Borodino", desc: "Bloodiest single day, 7 Sep 1812", lat: 55.52, lng: 35.82 },
      { name: "Leipzig", desc: "Battle of Nations, 16-19 Oct 1813", lat: 51.34, lng: 12.38 },
      { name: "Waterloo", desc: "Final defeat, 18 Jun 1815", lat: 50.68, lng: 4.41 },
      { name: "Moscow", desc: "Captured then abandoned, Sep-Oct 1812", lat: 55.75, lng: 37.62 },
      { name: "Trafalgar", desc: "Nelson's naval victory, 21 Oct 1805", lat: 36.18, lng: -6.13 }
    ]
  },
  /* ================= MARATHA EMPIRE ================= */
  {
    id: "maratha-empire", era: "maratha", name: "Maratha Empire Expansion",
    description: "The Maratha Empire, founded by Chhatrapati Shivaji Maharaj in the 17th century, expanded across western and central India, challenging Mughal supremacy and establishing Hindavi Swarajya.",
    category: "empire",
    keyLocations: [
      { name: "Raigad", desc: "Capital of the Maratha Empire, coronation site 1674", lat: 18.24, lng: 73.45 },
      { name: "Rajgad", desc: "First capital, c. 1648–1674", lat: 18.25, lng: 73.68 },
      { name: "Pratapgad", desc: "Battle of Pratapgad, 1659", lat: 17.93, lng: 73.58 },
      { name: "Sinhagad", desc: "Night assault by Tanaji, 1670", lat: 18.37, lng: 73.76 },
      { name: "Pune", desc: "Maratha heartland city", lat: 18.52, lng: 73.86 },
      { name: "Panhala", desc: "Major siege and escape, 1660", lat: 16.81, lng: 74.11 },
      { name: "Sindhudurg", desc: "Naval fortress, built 1664–1667", lat: 16.04, lng: 73.47 },
      { name: "Surat", desc: "Raided by Shivaji Maharaj, 1664", lat: 21.17, lng: 72.83 },
      { name: "Jinji", desc: "Karnataka expedition, 1677–1678", lat: 12.25, lng: 79.32 },
      { name: "Panipat", desc: "Third Battle of Panipat, 1761", lat: 29.39, lng: 76.97 },
      { name: "Salher", desc: "Battle of Salher, 1672", lat: 20.58, lng: 73.71 }
    ]
  },
  /* ================= WORLD WAR II ================= */
  {
    id: "wwii-europe", era: "wwii", name: "World War II — European Theatre",
    description: "The major campaigns and fronts of the Second World War in Europe, from the invasion of Poland in 1939 to the fall of Berlin in 1945.",
    category: "theatre",
    keyLocations: [
      { name: "Berlin", desc: "Fall of Berlin, April-May 1945", lat: 52.52, lng: 13.41 },
      { name: "Stalingrad", desc: "Turning point of the war, 1942-1943", lat: 48.71, lng: 44.51 },
      { name: "Normandy", desc: "D-Day landings, 6 June 1944", lat: 49.38, lng: -0.88 },
      { name: "El Alamein", desc: "Desert victory, Oct-Nov 1942", lat: 30.83, lng: 28.95 },
      { name: "Kursk", desc: "Largest tank battle, July 1943", lat: 51.73, lng: 36.19 },
      { name: "Dunkirk", desc: "Evacuation, May-June 1940", lat: 51.03, lng: 2.38 },
      { name: "Monte Cassino", desc: "Italian campaign, 1944", lat: 41.49, lng: 13.81 }
    ]
  },
  {
    id: "wwii-pacific", era: "wwii", name: "World War II — Pacific Theatre",
    description: "The vast Pacific campaigns stretching from Pearl Harbor to the Japanese home islands, encompassing island-hopping campaigns and carrier battles.",
    category: "theatre",
    keyLocations: [
      { name: "Pearl Harbor", desc: "Japanese surprise attack, 7 Dec 1941", lat: 21.36, lng: -157.95 },
      { name: "Midway", desc: "Decisive naval battle, June 1942", lat: 28.21, lng: -177.38 },
      { name: "Guadalcanal", desc: "First Allied offensive, 1942-1943", lat: -9.43, lng: 160.00 },
      { name: "Iwo Jima", desc: "Iconic battle, Feb-Mar 1945", lat: 24.78, lng: 141.32 },
      { name: "Okinawa", desc: "Last major battle, Apr-Jun 1945", lat: 26.34, lng: 127.77 },
      { name: "Hiroshima", desc: "Atomic bomb, 6 Aug 1945", lat: 34.40, lng: 132.46 }
    ]
  },
  /* ================= ROMAN EMPIRE ================= */
  {
    id: "roman-campaigns", era: "ancient", name: "Key Battles of the Roman Republic & Empire",
    description: "From the Punic Wars against Carthage to Caesar's conquest of Gaul, the Roman Republic and Empire's military campaigns shaped the ancient Mediterranean world.",
    category: "campaign",
    keyLocations: [
      { name: "Rome", desc: "Capital of the Republic and Empire", lat: 41.90, lng: 12.50 },
      { name: "Cannae", desc: "Hannibal's masterpiece, 216 BCE", lat: 41.31, lng: 16.13 },
      { name: "Zama", desc: "Scipio defeats Hannibal, 202 BCE", lat: 35.67, lng: 8.35 },
      { name: "Alesia", desc: "Caesar's siege, 52 BCE", lat: 47.54, lng: 4.50 },
      { name: "Carthage", desc: "Destroyed 146 BCE", lat: 36.85, lng: 10.32 },
      { name: "Pharsalus", desc: "Caesar vs Pompey, 48 BCE", lat: 39.28, lng: 22.38 }
    ]
  }
];
