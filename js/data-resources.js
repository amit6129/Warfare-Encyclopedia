/* =========================================================
   MARCH OF EMPIRE — Historical Glossary, FAQ & Bibliography
   Educational resources across ancient, maratha, napoleonic,
   and world war eras.
   ========================================================= */

const GLOSSARY = [
  /* ================= ANCIENT & CLASSICAL ================= */
  { term: "Phalanx", def: "A tight, disciplined tactical formation of heavy infantry armed with interlocking shields and long spears or sarissas, perfected by Philip II and Alexander the Great to present an impenetrable frontal wall." },
  { term: "Double Envelopment", def: "A supreme tactical manoeuvre wherein an army engages the enemy center while simultaneously attacking and encircling both opposing flanks, famously executed by Hannibal at Cannae (216 BCE)." },
  { term: "Circumvallation", def: "An ancient siege engineering system comprising an inner ring of fortifications surrounding a besieged city and an outer ring (contravallation) defending against relieving forces, mastered by Julius Caesar at Alesia (52 BCE)." },

  /* ================= MARATHA EMPIRE ================= */
  { term: "Ganimi Kava", def: "The Maratha doctrine of guerrilla warfare perfected by Chhatrapati Shivaji Maharaj. It combined lightning cavalry ambushes, exploitation of the rugged Western Ghats terrain, feigned retreats, and hill fort bastions to defeat vastly larger imperial armies." },
  { term: "Hindavi Swarajya", def: "Literally 'Self-rule of the People' — the founding political and military doctrine of Chhatrapati Shivaji Maharaj establishing an independent, self-governing sovereign realm in western and southern India." },
  { term: "Ashtapradhan", def: "The eight-minister sovereign cabinet established by Chhatrapati Shivaji Maharaj at his coronation in 1674 to govern administrative, fiscal, diplomatic, and military operations of the Maratha Empire." },
  { term: "Mavala", def: "Fierce, sure-footed hill soldiers recruited by Shivaji Maharaj from the Maval valleys of the Sahyadri mountains, renowned for expert mountain climbing, endurance, and close-quarters night operations." },

  /* ================= NAPOLEONIC ERA ================= */
  { term: "Corps d'Armée", def: "The revolutionary Napoleonic operational structure dividing an army into all-arms, self-contained mini-armies (infantry, cavalry, and artillery) capable of independent movement, marching dispersed for speed and concentrating rapidly for battle." },
  { term: "Continental System", def: "Napoleon's Europe-wide economic blockade initiated by the Berlin Decree of 1806, designed to cripple the British economy by prohibiting French allies and neutral European ports from trading with Britain." },
  { term: "Grand Battery", def: "The massing of numerous field artillery pieces (often 40–100 cannons) into a concentrated line to deliver devastating preparatory bombardment against a single critical sector of the enemy front." },

  /* ================= WORLD WAR II (PRESERVED) ================= */
  { term: "Blitzkrieg", def: "German for 'lightning war' — a fast-moving offensive doctrine combining armour, close air support and motorised infantry to achieve rapid breakthrough and operational encirclement." },
  { term: "Axis Powers", def: "The wartime alliance led principally by Germany, Italy and Japan, formalised by the Tripartite Pact of September 1940." },
  { term: "Allied Powers", def: "The wartime coalition opposing the Axis, led principally by the United Kingdom, Soviet Union, United States and China." },
  { term: "Lend-Lease", def: "A US programme supplying war materiel to Allied nations, especially Britain and the Soviet Union, before and after America's formal entry into the war." },
  { term: "D-Day", def: "The common term for 6 June 1944, the day of the Allied invasion of Normandy — also used generically for the start date of any major operation." },
  { term: "V-E Day", def: "Victory in Europe Day, 8 May 1945, marking Germany's unconditional surrender." },
  { term: "V-J Day", def: "Victory over Japan Day, 15 August 1945, marking Japan's announcement of surrender." },
  { term: "Kamikaze", def: "Japanese pilots who carried out deliberate suicide attacks, crashing explosive-laden aircraft into Allied ships, especially during the later Pacific campaigns." },
  { term: "U-boat", def: "German submarines (from 'Unterseeboot'), the primary weapon of the Battle of the Atlantic against Allied shipping." },
  { term: "Enigma", def: "The German cipher machine used to encrypt military communications; Allied codebreaking of Enigma traffic provided crucial intelligence throughout the war." },
  { term: "Holocaust", def: "The systematic, state-sponsored genocide of six million European Jews and millions of other victims by Nazi Germany and its collaborators." },
  { term: "Manhattan Project", def: "The Allied research programme that developed the atomic bomb, culminating in the bombings of Hiroshima and Nagasaki in August 1945." },
  { term: "Island Hopping", def: "The US Pacific strategy of bypassing heavily-fortified Japanese positions to seize weaker, strategically useful islands instead." },
  { term: "Total War", def: "A conflict in which nations mobilise all available resources — military, industrial and civilian — with the whole of society engaged in the war effort." },
  { term: "War of Attrition", def: "A strategy aiming to wear down an opponent through sustained losses in manpower and material rather than decisive manoeuvre." }
];

const FAQS = [
  { q: "What is March of Empire?", a: "March of Empire is a digital historical warfare encyclopedia and battlefield atlas covering key military conflicts, commanders, empires, and technologies from Antiquity and Classical Rome, through the Maratha Empire and Napoleonic Wars, to the World Wars." },
  { q: "Why did Shivaji Maharaj build so many hill and coastal forts?", a: "The Maratha heartland lies within the rugged Sahyadri mountains (Western Ghats). Hill forts functioned as unassailable regional command centers, grain repositories, and defense strongholds that negated the numerical advantage of Mughal and Adil Shahi heavy cavalry armies. Coastal sea forts (such as Sindhudurg and Vijaydurg) protected the coastline and founded the Maratha Navy." },
  { q: "What made Napoleon such a formidable general?", a: "Napoleon combined extraordinary operational speed, mathematical terrain mastery, the Corps d'Armée organizational system, and psychological dominance over his adversaries. He excelled at the 'Strategy of the Central Position' — inserting his army between divided enemy forces to destroy them piecemeal." },
  { q: "What caused the Second World War?", a: "The war's causes included the punitive terms of the Treaty of Versailles, the rise of fascism and militarism in Germany, Italy and Japan, economic devastation from the Great Depression, and the failure of the League of Nations to check aggressive expansion in the 1930s." },
  { q: "What were the primary turning points of WWII?", a: "Historians commonly identify the Battle of Midway (Pacific, June 1942), the Battle of Stalingrad (Eastern Front, 1942–43), and the Second Battle of El Alamein (North Africa, November 1942) as the irreversible turning points." },
  { q: "Are casualty and troop statistics definitive?", a: "In historical warfare scholarship, ancient and medieval troop figures are frequently subject to contemporary exaggeration and scholarly debate; modern 20th-century military losses are documented from government and museum archives, though civilian death tolls often represent consensus estimates." }
];

const BOOKS = [
  { title: "The Campaigns of Napoleon", author: "David G. Chandler", note: "The definitive masterpiece detailing Napoleon's military career, grand strategies, and every campaign." },
  { title: "Shivaji and His Times", author: "Sir Jadunath Sarkar", note: "The seminal scholarly biography analyzing the founder of the Maratha Empire using original Persian, Marathi, and European archives." },
  { title: "Alexander the Great", author: "Robin Lane Fox", note: "A rich, vivid historical narrative following Alexander's expedition from Macedon to the banks of the Hyphasis." },
  { title: "The Grand Strategy of the Roman Empire", author: "Edward N. Luttwak", note: "An authoritative strategic analysis of Roman frontier defense, legionary logistics, and imperial power." },
  { title: "The Second World War", author: "Antony Beevor", note: "A single-volume narrative history covering the full global scope of WWII." },
  { title: "Stalingrad", author: "Antony Beevor", note: "A gripping, visceral account of the war's most brutal turning-point engagement." },
  { title: "Inferno: The World at War, 1939–1945", author: "Max Hastings", note: "A sweeping global history emphasising the soldier and civilian experience across theatres." }
];

const DOCUMENTARIES = [
  { title: "The World at War (1973)", note: "A landmark 26-part documentary series featuring extensive archival footage and first-hand interviews with principal participants." },
  { title: "Napoleon (PBS Empires)", note: "An acclaimed four-part biographical series examining Bonaparte's rise, military genius, and tragic fall." },
  { title: "Forts of Maharashtra (Films Division)", note: "Architectural and strategic exploration of the Sahyadri mountain and sea fortresses of the Maratha Empire." },
  { title: "Five Came Back (2017)", note: "Chronicles how five legendary Hollywood directors documented frontline combat on film during World War II." }
];
