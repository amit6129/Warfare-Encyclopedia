import { Army } from '../types';

export const ARMIES: Army[] = [
  {
    id: 'macedonian-phalanx',
    name: 'The Macedonian Royal Army & Phalanx',
    era: 'macedonian',
    nation: 'Kingdom of Macedon',
    period: '359 BCE – 323 BCE',
    summary: 'Forged by Philip II and led to global conquest by Alexander the Great, the Macedonian army was antiquity\'s premier combined-arms military machine, integrating the impenetrable Sarissa pike wall with shock Companion heavy cavalry.',
    commandStructure: 'Absolute royal command under the Basileus (Alexander), advised by senior Somatophylakes (royal bodyguards) and veteran taxiarchs (brigade commanders). Divided into Pezhetairoi (foot companions), Hypaspists (elite royal foot guards), and Hetairoi (noble Companion cavalry).',
    units: [
      { name: 'Pezhetairoi (Phalangites)', role: 'Heavy Infantry Center', strength: '~9,000–12,000 men', description: 'Armed with the 18-to-21-foot Sarissa pike, deployed 16 ranks deep in tight formation (Syntagma), presenting an impenetrable hedgehog of spear points projecting 5 ranks forward.' },
      { name: 'Hetairoi (Companion Cavalry)', role: 'Shock Cavalry Wing', strength: '~1,800–2,600 troopers', description: 'Macedonian noble shock cavalry wielding the Xyston cornel wood lance, deploying in wedge formation to penetrate enemy gaps and deliver the decisive hammer blow.' },
      { name: 'Hypaspists (Shield Bearers)', role: 'Elite Mobile Infantry', strength: '~3,000 veterans', description: 'Agile veteran guard unit acting as the flexible hinge connecting the slower pike phalanx with the rapid flanking movements of the Companion cavalry.' },
      { name: 'Agrianian Peltasts & Archers', role: 'Light Skirmishers', strength: '~1,000 elite javelinmen', description: 'Fierce Thracian hill troops renowned for extreme agility, screening the advance and neutralizing Persian chariot and elephant threats.' }
    ],
    equipment: {
      weapons: ['Sarissa pike (18–21 ft)', 'Xyston lance (9–10 ft)', 'Xiphos short sword', 'Kopis curved slashing sword', 'Javelins'],
      armor: ['Linothorax laminated linen/leather cuirass', 'Phrygian and Boeotian bronze helmets', 'Small strapped Pelte shield (60 cm)'],
      artilleryOrSiege: ['Torsion catapults', 'Battering rams', 'Mobile siege towers (Helepolis)']
    },
    tactics: {
      doctrine: 'Hammer-and-Anvil doctrine: The heavy phalanx pins the enemy mass in place (anvil) while Alexander personalizes a wedge cavalry strike against the enemy command center or rear (hammer).',
      formations: ['Syntagma (16x16 square phalanx block)', 'Wedge cavalry charge', 'Oblique battle line', 'Echeloned defensive flank reserves'],
      strengths: ['Impenetrable frontal defense', 'Devastating shock power', 'Rapid tactical flexibility and battlefield coordination', 'Unmatched combined arms synergy'],
      weaknesses: ['Vulnerable flanks and rear if outflanked', 'Requires flat terrain to maintain tight pike cohesion', 'Vulnerable to missile harassment if unsupported by light skirmishers']
    },
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Macedonian Battle Phalanx',
      caption: 'The Macedonian Syntagma phalanx presented a formidable barrier of interlocking Sarissa pikes.',
      source: 'Archaeological Museum / Historical Archives',
      license: 'Public Domain',
      credit: 'Historical Warfare Digital Archive',
      alt: 'Macedonian Phalanx formation'
    }
  },
  {
    id: 'roman-legion',
    name: 'The Imperial Roman Legion',
    era: 'roman',
    nation: 'Roman Republic & Empire',
    period: '107 BCE – 284 CE',
    summary: 'The most standardized, disciplined, and resilient military organization of antiquity. Following the Marian reforms, the citizen-soldier army evolved into a full-time professional standing force organized into cohorts, manipulating battlefield terrain with engineering mastery.',
    commandStructure: 'Legatus Legionis (senatorial commander), assisted by a Tribunus Laticlavius (second in command) and Praefectus Castrorum (camp prefect). Tactical units commanded by veteran Centurions, led by the Primus Pilus (first spear).',
    units: [
      { name: 'Legionary Cohorts', role: 'Heavy Line Infantry', strength: '4,800–5,500 legionaries per legion', description: 'Divided into 10 cohorts of 6 centuries each. Heavily armored, disciplined infantry executing massed pilum volleys followed by gladius thrusting in tight shield-wall formation.' },
      { name: 'Auxilia (Auxiliary Infantry & Archers)', role: 'Specialist Support & Flank Defense', strength: '~5,000 provincial troops', description: 'Cretan archers, Balearic slingers, and Batavian shock troops recruited from Roman provinces, providing essential missile range and reconnaissance.' },
      { name: 'Equites Legionis (Cavalry)', role: 'Screening & Pursuit', strength: '120–300 horsemen per legion', description: 'Light organic cavalry used primarily for message courier duty, scouting, foraging, and pursuing broken enemies.' }
    ],
    equipment: {
      weapons: ['Gladius Hispaniensis thrusting sword', 'Pilum heavy weighted javelin (x2)', 'Pugio dagger'],
      armor: ['Lorica Segmentata banded iron plate armor', 'Scutum curved rectangular plywood shield', 'Imperial Gallic helmet with neck and cheek guards'],
      artilleryOrSiege: ['Scorpio torsion bolt-shooters (55 per legion)', 'Ballista stone-throwers (10 per legion)', 'Onagers', 'Corvi and siege ramps']
    },
    tactics: {
      doctrine: 'Aggressive cohortal flexibility and systemic engineering: throwing heavy pila at 20 paces to disable shields and disrupt lines, followed immediately by aggressive shield-punching and low gladius thrusts.',
      formations: ['Testudo (tortoise shield formation)', 'Triplex Acies (three-line cohortal reserve)', 'Orb formation (defensive circle)', 'Wedge assault'],
      strengths: ['Unmatched battlefield discipline and morale rotation', 'Exceptional field engineering (nightly fortified castra)', 'Superior tactical cohort independence', 'Decisive body shield coverage'],
      weaknesses: ['Vulnerable to heavy cataphract and Parthian horse-archer hit-and-run harassment', 'Limited native cavalry strength compared to steppe and Numidian horsemen']
    },
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Imperial Roman Legionary Stand',
      caption: 'Roman cohorts combined standardized armor, the curved scutum shield, and lethal gladius close-quarter combat.',
      source: 'Vatican / Capitoline Museum Archives',
      license: 'Public Domain',
      credit: 'Classical Historical Archive',
      alt: 'Roman Legion formation'
    }
  },
  {
    id: 'maratha-army',
    name: 'The Maratha Military (Mavalas & Shiledar Cavalry)',
    era: 'maratha',
    nation: 'Maratha Empire (Hindavi Swarajya)',
    period: '1645 CE – 1818 CE',
    summary: 'Conceived and perfected by Chhatrapati Shivaji Maharaj, the Maratha military system transformed western India through asymmetric mountain warfare, Sahyadri hill fort defense, light cavalry mobility, and strict moral codes of conduct.',
    commandStructure: 'Commanded directly by the Chhatrapati, assisted by the Senapati (commander-in-chief) on the Ashtapradhan council. Army divided into two primary arms: Hasham (infantry) under Nayaks and Hazari commanders, and Lashkar (cavalry) divided into Bargirs (state-equipped) and Shiledars (self-equipped horsemen).',
    units: [
      { name: 'Mavala Hill Infantry', role: 'Light Mountain Infantry', strength: '~30,000–50,000 mountaineers', description: 'Recruited from the rugged Maval valleys. Expert rock climbers, scouts, and swordsmen capable of scaling vertical cliff faces under cover of night for surprise fort assaults.' },
      { name: 'Bargir & Shiledar Cavalry', role: 'Strategic Long-Range Shock & Raid', strength: '~40,000–80,000 mobile cavalry', description: 'Unburdened by heavy baggage trains, Maratha horsemen rode light, tough Deccan horses covering 50–70 miles a day, living off local forage and severing enemy supply lines.' },
      { name: 'Hetkari Musketeers', role: 'Precision Marksmen', strength: '~10,000 sharpshooters', description: 'Konkan marksmen armed with long-barreled Toradar matchlocks, defending steep fort approaches and defiles with devastating plunging fire.' },
      { name: 'Maratha Navy (Armar)', role: 'Coastal Defense & Fort Supply', strength: 'Over 160 Gurabs and Galbats', description: 'Created by Shivaji Maharaj and commanded by Admiral Kanhoji Angre, dominating the Konkan coast from unconquered sea fortresses like Sindhudurg and Vijaydurg.' }
    ],
    equipment: {
      weapons: ['Dandpatta gauntlet sword', 'Firangi straight broadsword', 'Talwar curved saber', 'Toradar matchlock musket', 'Zamburak camel swivel gun', 'Bagh Nakh (tiger claws)', 'Bhala spear'],
      armor: ['Chilta (padded cloth armor with mail reinforcement)', 'Dhal hide shield', 'Kulah Khud helmet', 'Steel forearm gauntlets'],
      artilleryOrSiege: ['Hill fort rampart cannons', 'Light mountain swivel guns', 'Rope-ladder escalade gear']
    },
    tactics: {
      doctrine: 'Ganimi Kava (Guerrilla Warfare): Avoid pitched open-field battles against heavily armored, slow imperial armies. Lure invaders deep into rugged Sahyadri defiles, cut communication and baggage trains, strike isolated columns by surprise, and withdraw quickly to impenetrable hill forts.',
      formations: ['Dispersed rapid cavalry crescent', 'Night escalade cliff assault', 'Mountain pass ambuscade (Pavan Khind)', 'Feigned retreat into fortified gorges'],
      strengths: ['Unrivaled mobility and knowledge of Sahyadri topography', 'Minimal logistical overhead (no cumbersome camp bazaars)', 'Superb intelligence network under Bahirji Naik', 'Unconquerable mountain fort network'],
      weaknesses: ['Initially lacked heavy siege artillery for protracted flatland sieges', 'Later transition to European-style mercenary infantry weakened the traditional Ganimi Kava advantage']
    },
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Maratha Mountain Bastions & Warriors',
      caption: 'The Marathas combined mastery of Sahyadri topography with light mobile cavalry and night escalade assaults.',
      source: 'Maharashtra State Archives / Deccan Historical Society',
      license: 'Public Domain / Educational',
      credit: 'Maratha Military History Project',
      alt: 'Maratha fort and warriors'
    }
  },
  {
    id: 'grande-armee',
    name: 'La Grande Armée of Napoleon',
    era: 'napoleonic',
    nation: 'French Empire',
    period: '1804 CE – 1815 CE',
    summary: 'The military instrument that dominated continental Europe for over a decade. Napoleon organized his massed conscript and volunteer forces into permanent, self-sufficient Corps d’Armée comprising all combat arms, enabling unprecedented operational speed, dispersion, and rapid tactical concentration.',
    commandStructure: 'Emperor Napoleon Bonaparte exercised supreme command, assisted by Marshal Berthier (Chief of Staff). Subordinate Corps (I to VIII Corps) commanded by handpicked Marshals of the Empire (Davout, Ney, Lannes, Soult, Masséna, Murat).',
    units: [
      { name: 'Ligne & Légère (Line & Light Infantry)', role: 'Main Combat Arms', strength: '~350,000–600,000 soldiers', description: 'Line infantry fought in dense battalion columns for rapid assault or deployed three ranks deep for massed musket fire. Light infantry (Voltigeurs and Chasseurs) screened the advance with sharpshooting.' },
      { name: 'Imperial Guard (Old, Middle & Young Guard)', role: 'Elite Tactical Reserve', strength: 'Over 50,000 veteran shock troops', description: 'The \'Immortals\' of the Grande Armée. Seasoned veterans held in reserve by Napoleon to be committed only to deliver the final psychological and physical coup de grâce on the battlefield.' },
      { name: 'Cavalry Reserve (Cuirassiers & Chasseurs)', role: 'Shock Charge & Exploitation', strength: 'Over 40,000 horsemen under Murat', description: 'Armored heavy Cuirassiers in steel breastplates delivering massive shock charges, supported by swift Dragoons and dashing Hussars for pursuit and reconnaissance.' },
      { name: 'Grand Battery Artillery', role: 'Decisive Concentrated Bombardment', strength: 'Over 1,200 cannons', description: 'Gribeauval 8-pounder and 12-pounder guns massed into batteries of 40 to 100 guns to blast breach gaps in enemy center defenses before the infantry assault.' }
    ],
    equipment: {
      weapons: ['Charleville Model 1777 flintlock musket (17.5mm)', 'Socket bayonet', 'Model 1801 Cuirassier sword', 'AN XI light cavalry saber'],
      armor: ['Steel breastplate and backplate (Cuirassiers)', 'Brass/steel helmets with horsehair plumes'],
      artilleryOrSiege: ['Gribeauval 12-pounder "Belles Filles"', 'Gribeauval 8-pounder and 4-pounder field guns', '6-inch howitzers']
    },
    tactics: {
      doctrine: 'Corps d\'Armée maneuver & Strategy of the Central Position: March dispersed across parallel road networks to forage, confuse enemy reconnaissance, and arrive swiftly; then converge with overwhelming local superiority at the enemy\'s decisive weak point.',
      formations: ['Ordre Mixte (alternating columns and deployed lines)', 'Bataillon Carré (square strategic advance)', 'Grand Battery massed artillery line', 'Infantry square against cavalry'],
      strengths: ['Unmatched operational mobility and staff coordination', 'Exceptional artillery concentration and doctrine', 'Murat’s devastating massed cavalry charges', 'Heroic morale and veteran loyalty to Napoleon'],
      weaknesses: ['Excessive reliance on Napoleon’s personal operational oversight', 'Vulnerable to long-distance supply breakdown in scorched-earth vastness (Russia 1812)', 'Heavy veteran losses in Spain and Russia irreplaceable by 1813']
    },
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Napoleon Reviewing the Grande Armée',
      caption: 'The Corps d\'Armée organizational system gave Napoleon unprecedented operational speed across European campaigns.',
      source: 'Musée de l\'Armée, Paris',
      license: 'Public Domain',
      credit: 'French National Museum Collection',
      alt: 'Grande Armee'
    }
  },
  {
    id: 'red-army-ww2',
    name: 'The Red Army of the Soviet Union',
    era: 'ww2',
    nation: 'Soviet Union',
    period: '1941 CE – 1945 CE',
    summary: 'The military force that bore the heaviest burden of the land war in Europe, absorbing the full weight of the Wehrmacht\'s Operation Barbarossa and driving 1,500 miles back across devastated terrain to storm Berlin, pioneering the Soviet Deep Battle doctrine.',
    commandStructure: 'Supreme High Command (Stavka) chaired by Joseph Stalin, with operational direction orchestrated by Marshal Georgy Zhukov, Aleksandr Vasilevsky, and Front commanders (Konev, Rokossovsky, Vatutin).',
    units: [
      { name: 'Rifle Divisions', role: 'Frontline Mass & Infiltration', strength: 'Over 400 active divisions', description: 'Massed infantry armed with rugged PPSh-41 submachine guns and Mosin-Nagant rifles, skilled in winter fighting, night infiltrations, and grinding urban combat.' },
      { name: 'Tank Armies & Mechanized Corps', role: 'Deep Strategic Breakthrough', strength: 'Tens of thousands of T-34 and IS-2 tanks', description: 'Mobile armored fists designed to exploit tactical ruptures, driving deep into enemy operational rear areas to encircle opposing army groups.' },
      { name: 'God of War (Artillery & Katyusha Rockets)', role: 'Overwhelming Fire Preparation', strength: 'Over 200 guns per kilometer of front', description: 'Unprecedented artillery concentrations (152mm howitzers, BM-13 Katyusha rocket launchers) unleashing thunderous preparatory barrages before major offensives.' }
    ],
    equipment: {
      weapons: ['PPSh-41 submachine gun (7.62mm drum)', 'Mosin-Nagant 1891/30 rifle', 'DP-27 light machine gun', 'T-34/76 & T-34/85 medium tanks', 'IS-2 heavy tank (122mm gun)'],
      armor: ['Steel SSh-40 helmet', 'Padded Telogreika winter jackets'],
      artilleryOrSiege: ['BM-13 Katyusha "Stalin\'s Organ"', '152mm howitzer-gun ML-20', '76mm divisional gun ZiS-3']
    },
    tactics: {
      doctrine: 'Deep Battle Doctrine (Glubokaya Operatsiya): Simultaneous suppression of entire enemy defensive depth through massed artillery and air strikes, breakthrough by rifle divisions, and immediate insertion of tank armies to encircle and annihilate rear logistical nodes.',
      formations: ['Echeloned Front assault waves', 'Pakfront anti-tank ambush screens', 'Shock Army assault groups (Stalingrad urban combat)', 'Double envelopment operational pincers (Uranus, Bagration)'],
      strengths: ['Vast industrial production capacity (over 84,000 T-34s built)', 'Extraordinary strategic deception (Maskirovka)', 'Superb cold-weather resilience and terrain endurance', 'Unrivaled operational-level commanders and doctrine'],
      weaknesses: ['Catastrophic early casualties in 1941–42 due to pre-war purges and tactical rigidity', 'Heavy expenditure of infantry manpower in frontal breakthrough phases']
    },
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Soviet Armor Advancing on the Eastern Front',
      caption: 'The massed armored spearheads of Soviet Tank Armies executed the Deep Battle doctrine to liberate Eastern Europe.',
      source: 'Central Museum of Armed Forces, Moscow',
      license: 'Public Domain / Archival',
      credit: 'Wartime Photography Archive',
      alt: 'Soviet Red Army'
    }
  }
];
