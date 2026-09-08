/* =========================================================
   MARCH OF EMPIRE — Weapons & Technology
   Historical materiel across ancient, maratha, napoleonic,
   and world war eras.
   ========================================================= */

const WEAPONS = {
  ancient: [
    { id: "sarissa", name: "Macedonian Sarissa", nation: "Kingdom of Macedon", specs: { length: "4.5 to 6.2 meters (14–20 ft)", weight: "~5.5–6.5 kg", material: "Cornel wood shaft with iron spearhead and bronze butt-spike", formation: "Syntagma (16x16 deep Macedonian Phalanx)", range: "Frontal wall projecting over 5 ranks" },
      notes: "Introduced by Philip II and wielded to devastating effect by Alexander's Pezhetairoi. Its extraordinary reach kept opposing hoplites and Persian cavalry at bay before contact." },
    { id: "gladius", name: "Roman Gladius Hispaniensis", nation: "Roman Republic / Empire", specs: { bladeLength: "50–65 cm", weight: "~0.7–1.0 kg", design: "Double-edged pointed thrusting short sword", use: "Legionary close-quarters formation fighting behind scutum", standardIssue: "Roman Legio infantry" },
      notes: "Adopted from Iberian warriors during the Punic Wars, the gladius was optimized for lethal thrusting in tight legionary battle lines, inflicting catastrophic puncture wounds." },
    { id: "scutum", name: "Roman Scutum Shield", nation: "Roman Republic / Empire", specs: { height: "~105–120 cm", width: "~66–75 cm", weight: "~6–10 kg", construction: "Curved wood laminate covered in canvas and calfskin, iron/bronze umbo", tactic: "Testudo (tortoise) and kinetic shield thrust" },
      notes: "The iconic curved rectangular body shield protected legionaries from head to shin. In formation it could form an impenetrable shell against missiles and push enemy infantry off balance." },
    { id: "ballista", name: "Classical Ballista / Torsion Engine", nation: "Ancient Greece & Rome", specs: { mechanism: "Torsion springs of twisted sinew and horsehair", projectile: "Heavy stone balls (10–30 kg) or massive iron-tipped darts", effectiveRange: "~350–450 meters", role: "Field artillery and siege circumvallation" },
      notes: "Precision siege and field weapon perfected by Greek and Roman engineers, capable of punching through defensive palisades and breaking enemy troop concentrations at extreme range." }
  ],

  maratha: [
    { id: "dandpatta", name: "Dandpatta (Gauntlet Sword)", nation: "Maratha Empire", specs: { bladeType: "Flexible high-carbon Wootz steel straight blade", length: "1.0–1.3 meters (3.3–4.3 ft)", guard: "Armoured steel forearm gauntlet lined with padding", technique: "Whirling circular sweep cutting (Ganimi Kava)", user: "Specialist Maratha Mavala shock troops" },
      notes: "A signature weapon of the Maratha military. The gauntlet shielded the forearm while allowing the swordsman to execute rapid spinning cuts through enemy infantry lines." },
    { id: "firangi", name: "Firangi Straight Broadsword", nation: "Maratha Empire", specs: { bladeType: "High-grade tempered straight double-edged blade", hilt: "Traditional Hindu basket hilt with curved spike pommel", length: "~90–110 cm", role: "Heavy cavalry and command officer weapon" },
      notes: "Often fitted with imported European blades prized for superior steel flexibility, the Firangi was a devastating slashing weapon used by Maratha cavalry troopers during high-speed raids." },
    { id: "toradar", name: "Toradar Matchlock Musket", nation: "Maratha Empire", specs: { mechanism: "Matchlock serpentine ignition", barrel: "Damascus twist wrought steel barrel", caliber: "15–20 mm (.60–.75 cal)", effectiveRange: "~80–120 meters", role: "Hill fort rampart defense and mountain sharpshooters" },
      notes: "The standard firearm of Maratha fort garrisons and infantry, capable of firing down upon besiegers from Sahyadri cliff battlements with deadly effect." },
    { id: "zamburak", name: "Zamburak (Camel Swivel Gun)", nation: "Maratha & Indian Warfare", specs: { mount: "Camel saddle swivel carriage", caliber: "25–40 mm muzzle-loading swivel cannon", range: "~300–500 meters", mobility: "Extreme rough-terrain rapid deployment" },
      notes: "A highly mobile light artillery piece mounted on camels or light carriages, allowing Maratha armies to deploy rapid cannon fire in rugged mountain passes where wheeled artillery could not travel." },
    { id: "baghnakh", name: "Bagh Nakh (Tiger Claws)", nation: "Maratha Empire", specs: { design: "Concealed steel crossbar with 4–5 curved razor claws", grip: "Held inside the palm with ring loops over outer fingers", historicalEvent: "Used decisively by Shivaji Maharaj against Afzal Khan at Pratapgad (1659)", role: "Concealed close-quarters combat" },
      notes: "Immortalised in Maratha history when Chhatrapati Shivaji Maharaj concealed the claws in his left hand during his truce meeting with Afzal Khan, countering a treacherous ambush." }
  ],

  napoleonic: [
    { id: "gribeauval-12pdr", name: "Gribeauval 12-Pounder Cannon", nation: "French Empire", specs: { caliber: "121 mm (4.8 in)", projectile: "12 lb iron cannonball or canister shot", effectiveRange: "~900 m (solid shot) / ~400 m (canister)", system: "Gribeauval standardized artillery system", role: "Grand battery breakthrough artillery" },
      notes: "Napoleon's 'Belles Filles' (Beautiful Daughters). As an artillery officer by training, Napoleon massed these heavy guns into devastating grand batteries at Austerlitz, Wagram, and Waterloo." },
    { id: "charleville-1777", name: "Charleville Model 1777 Musket", nation: "French Empire", specs: { mechanism: "Flintlock smoothbore", caliber: "17.5 mm (.69 in)", rateOfFire: "2–3 rounds per minute", length: "1.52 meters with socket bayonet", standardIssue: "French Grande Armée infantry" },
      notes: "The primary infantry arm of the French Revolutionary and Napoleonic armies. Rugged and reliable, it equipped French soldiers across Europe from Spain to the gates of Moscow." },
    { id: "baker-rifle", name: "Baker Rifle (Pattern 1800)", nation: "United Kingdom", specs: { mechanism: "Flintlock rifled barrel (7 grooves)", caliber: "15.9 mm (.625 in)", effectiveRange: "~200–300 meters (sniper grade accuracy)", standardIssue: "95th Rifles and 60th Royal Americans" },
      notes: "The first purpose-built rifle issued to the British Army. Its rifled barrel gave the green-jacketed 95th Rifles extraordinary marksmanship in the Peninsular War and at Waterloo." },
    { id: "brown-bess", name: "Brown Bess Flintlock Musket", nation: "United Kingdom", specs: { mechanism: "Flintlock smoothbore", caliber: "19 mm (.75 in)", rateOfFire: "3–4 rounds per minute", role: "British line infantry massed volley fire" },
      notes: "The standard infantry firearm of the British Empire for over a century. Fired in disciplined two-rank volleys, it broke French infantry columns throughout Wellington's campaigns." }
  ],

  tanks: [
    { id: "tiger1", name: "Tiger I", nation: "Germany", specs: { crew: "5", weight: "57 tonnes", speed: "38 km/h", armament: "88mm KwK 36 gun", armor: "Up to 120mm" },
      notes: "A heavily-armoured, powerfully-armed tank feared by Allied crews, though mechanically complex and expensive to produce in numbers." },
    { id: "tiger2", name: "Tiger II (King Tiger)", nation: "Germany", specs: { crew: "5", weight: "68 tonnes", speed: "38 km/h", armament: "88mm KwK 43 gun", armor: "Up to 180mm" },
      notes: "The heaviest operational tank of the war, with formidable frontal armour but limited by unreliability and fuel consumption." },
    { id: "panther", name: "Panther", nation: "Germany", specs: { crew: "5", weight: "45 tonnes", speed: "46 km/h", armament: "75mm KwK 42 gun", armor: "Up to 80mm" },
      notes: "Developed in response to the Soviet T-34, widely regarded as one of the best-balanced tank designs of the war." },
    { id: "sherman", name: "M4 Sherman", nation: "United States", specs: { crew: "5", weight: "30 tonnes", speed: "39 km/h", armament: "75mm gun (later 76mm)", armor: "Up to 76mm" },
      notes: "Produced in huge numbers (~50,000) and prized for reliability and ease of maintenance, though outgunned by later German heavy tanks." },
    { id: "t34", name: "T-34", nation: "Soviet Union", specs: { crew: "4", weight: "26 tonnes", speed: "53 km/h", armament: "76mm (later 85mm) gun", armor: "Up to 65mm" },
      notes: "Combined sloped armour, firepower and mobility in a design produced in vast numbers (~80,000), forming the backbone of Soviet armoured forces." },
    { id: "churchill-tank", name: "Churchill Tank", nation: "United Kingdom", specs: { crew: "5", weight: "40 tonnes", speed: "24 km/h", armament: "6-pounder (later 75mm) gun", armor: "Up to 152mm" },
      notes: "A heavily-armoured infantry support tank valued for its ability to cross difficult terrain and absorb punishment." }
  ],

  aircraft: [
    { id: "spitfire", name: "Supermarine Spitfire", nation: "United Kingdom", specs: { role: "Fighter", topSpeed: "594 km/h", range: "1,827 km", armament: "8x .303 machine guns" },
      notes: "The iconic fighter of the Battle of Britain, prized for its manoeuvrability and continuously upgraded throughout the war." },
    { id: "mustang", name: "P-51 Mustang", nation: "United States", specs: { role: "Long-range Fighter", topSpeed: "703 km/h", range: "1,529 km (combat)", armament: "6x .50cal machine guns" },
      notes: "With drop tanks, its long range allowed it to escort bombers deep into Germany, decisively shifting the air war over Europe." },
    { id: "b17", name: "B-17 Flying Fortress", nation: "United States", specs: { role: "Heavy Bomber", topSpeed: "462 km/h", range: "3,219 km", armament: "Up to 13x .50cal machine guns" },
      notes: "A heavily-armed daylight strategic bomber central to the Allied bombing campaign against German industry." },
    { id: "bf109", name: "Messerschmitt Bf 109", nation: "Germany", specs: { role: "Fighter", topSpeed: "640 km/h", range: "850 km", armament: "2x machine guns, 1x cannon" },
      notes: "Germany's primary fighter throughout the war and one of the most-produced aircraft in history, with over 33,000 built." },
    { id: "zero", name: "Mitsubishi A6M Zero", nation: "Japan", specs: { role: "Carrier Fighter", topSpeed: "533 km/h", range: "3,105 km", armament: "2x machine guns, 2x cannon" },
      notes: "Dominant early in the Pacific War thanks to exceptional range and manoeuvrability, though its light construction became a liability against later Allied fighters." },
    { id: "lancaster", name: "Avro Lancaster", nation: "United Kingdom", specs: { role: "Heavy Bomber", topSpeed: "442 km/h", range: "2,671 km", armament: "8x .303 machine guns" },
      notes: "The primary RAF heavy bomber for night raids over Germany, capable of carrying the largest bombs used in the war." }
  ],

  naval: [
    { id: "yamato", name: "Yamato-class Battleship", nation: "Japan", specs: { displacement: "~72,000 tonnes", armament: "9x 460mm guns", speed: "27 knots" },
      notes: "The largest and most heavily-armed battleships ever built; both Yamato and sister ship Musashi were sunk by overwhelming US air power." },
    { id: "iowa", name: "Iowa-class Battleship", nation: "United States", specs: { displacement: "~45,000 tonnes", armament: "9x 406mm guns", speed: "33 knots" },
      notes: "Fast, well-armed battleships that served throughout the Pacific War, escorting carrier task forces and providing shore bombardment." },
    { id: "essex-class", name: "Essex-class Aircraft Carrier", nation: "United States", specs: { displacement: "~27,000 tonnes", aircraft: "~90-100", speed: "33 knots" },
      notes: "The backbone of the US Pacific Fleet's carrier force from 1943 onward; 24 were built, forming the core of the island-hopping campaign." },
    { id: "type-vii", name: "Type VII U-boat", nation: "Germany", specs: { displacement: "~760 tonnes (surfaced)", armament: "5x torpedo tubes, deck gun", speed: "17 knots (surfaced)" },
      notes: "The most numerous U-boat class of the war, forming the backbone of Germany's Battle of the Atlantic campaign against Allied shipping." },
    { id: "hood", name: "HMS Hood", nation: "United Kingdom", specs: { displacement: "~46,000 tonnes", armament: "8x 381mm guns", speed: "32 knots" },
      notes: "Once the largest warship in the world, the pride of the Royal Navy was lost in 1941 after a catastrophic magazine explosion during the Battle of the Denmark Strait." }
  ],

  smallArms: [
    { id: "mp40", name: "MP40", nation: "Germany", specs: { type: "Submachine gun", caliber: "9mm Parabellum", rateOfFire: "~500 rounds/min" },
      notes: "A compact, reliable submachine gun widely issued to German infantry and often (inaccurately) called the 'Schmeisser' by Allied troops." },
    { id: "thompson", name: "Thompson Submachine Gun", nation: "United States", specs: { type: "Submachine gun", caliber: ".45 ACP", rateOfFire: "~700 rounds/min" },
      notes: "The iconic 'Tommy Gun' saw widespread use with US and Allied forces, prized for stopping power at close range." },
    { id: "m1-garand", name: "M1 Garand", nation: "United States", specs: { type: "Semi-automatic rifle", caliber: ".30-06 Springfield", rateOfFire: "~40-50 rounds/min" },
      notes: "The standard US infantry rifle, its semi-automatic action gave American troops a significant firepower advantage over bolt-action rifles." },
    { id: "kar98k", name: "Karabiner 98k", nation: "Germany", specs: { type: "Bolt-action rifle", caliber: "7.92x57mm Mauser", rateOfFire: "~15 rounds/min" },
      notes: "The standard German infantry rifle throughout the war, based on the reliable Mauser bolt-action design used since the late 19th century." },
    { id: "ppsh41", name: "PPSh-41", nation: "Soviet Union", specs: { type: "Submachine gun", caliber: "7.62x25mm", rateOfFire: "~900 rounds/min" },
      notes: "Cheap, rugged and mass-produced (over 6 million made), it equipped entire Soviet infantry units for close-quarters urban fighting." },
    { id: "bren", name: "Bren Gun", nation: "United Kingdom", specs: { type: "Light machine gun", caliber: ".303 British", rateOfFire: "~500 rounds/min" },
      notes: "The standard British and Commonwealth light machine gun, valued for its accuracy and reliability at the squad level." }
  ]
};
