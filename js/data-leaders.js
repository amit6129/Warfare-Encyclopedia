/* =========================================================
   WWII ENCYCLOPEDIA — Leaders & Commanders
   Factual, encyclopedic profiles of major wartime figures.
   ========================================================= */

const LEADERS = [
  { id: "churchill", name: "Winston Churchill", category: "political", side: "allied", nation: "United Kingdom", role: "Prime Minister (1940–1945)", initials: "WC", color: "#4B5320",
    bio: "Churchill became Prime Minister in May 1940 as Germany invaded Western Europe, and his defiant leadership and oratory rallied British resistance during the Battle of Britain and the Blitz. He forged the wartime alliance with the United States and Soviet Union and represented Britain at the major Allied conferences at Casablanca, Tehran and Yalta." },
  { id: "roosevelt", name: "Franklin D. Roosevelt", category: "political", side: "allied", nation: "United States", role: "President (1933–1945)", initials: "FR", color: "#3D6E85",
    bio: "Roosevelt guided the United States from the Lend-Lease programme of material support through full entry into the war after Pearl Harbor. He oversaw the mobilisation of American industry into the 'Arsenal of Democracy' and worked closely with Churchill and Stalin to coordinate Allied strategy, dying in office in April 1945, weeks before Germany's surrender." },
  { id: "stalin", name: "Joseph Stalin", category: "political", side: "allied", nation: "Soviet Union", role: "Premier & General Secretary", initials: "JS", color: "#6B7A34",
    bio: "Stalin led the Soviet Union through the devastating German invasion of 1941 and the subsequent Eastern Front campaigns that inflicted the majority of German military casualties of the war. His government's brutal wartime mobilisation and scorched-earth strategies were central to the eventual Soviet victory, at an immense human cost to Soviet citizens and soldiers." },
  { id: "chiang", name: "Chiang Kai-shek", category: "political", side: "allied", nation: "China", role: "Generalissimo & Leader of the Republic of China", initials: "CK", color: "#8F7439",
    bio: "Chiang led Nationalist China's prolonged resistance against Japanese invasion from 1937 and represented China as one of the 'Big Four' Allied powers, though his forces also contended with an internal rivalry against Chinese Communist forces throughout the conflict." },
  { id: "hitler", name: "Adolf Hitler", category: "political", side: "axis", nation: "Germany", role: "Chancellor & Führer", initials: "AH", color: "#7C2A21",
    bio: "As dictator of Nazi Germany, Hitler's expansionist aims and invasion of Poland precipitated the Second World War in Europe. He directed Germany's military campaigns with increasing personal control as the war progressed, and his regime perpetrated the Holocaust, the systematic genocide of six million Jews and millions of other victims. He died by suicide in Berlin on 30 April 1945 as Soviet forces closed in." },
  { id: "mussolini", name: "Benito Mussolini", category: "political", side: "axis", nation: "Italy", role: "Prime Minister & Duce", initials: "BM", color: "#9C8348",
    bio: "Mussolini led Fascist Italy into the war alongside Germany in 1940. Military setbacks in Greece and North Africa undermined his position, and he was deposed in 1943 after the Allied invasion of Sicily; he was later executed by Italian partisans in April 1945." },
  { id: "hirohito", name: "Emperor Hirohito", category: "political", side: "axis", nation: "Japan", role: "Emperor of Japan", initials: "EH", color: "#8F4A3E",
    bio: "As Japan's head of state, Hirohito presided over the country's wartime expansion across Asia and the Pacific. He ultimately intervened to break a deadlock within the Japanese government and announce Japan's surrender by radio broadcast on 15 August 1945, following the atomic bombings and Soviet entry into the war." },
  { id: "tojo", name: "Hideki Tojo", category: "political", side: "axis", nation: "Japan", role: "Prime Minister (1941–1944)", initials: "HT", color: "#8F4A3E",
    bio: "Tojo served as Japan's Prime Minister through the attack on Pearl Harbor and much of the Pacific War, resigning in 1944 following the fall of Saipan. After the war he was tried and executed for war crimes by the International Military Tribunal for the Far East." },
  { id: "eisenhower", name: "Dwight D. Eisenhower", category: "military", side: "allied", nation: "United States", role: "Supreme Allied Commander, Europe", initials: "DE", color: "#5C6670",
    bio: "Eisenhower commanded Allied forces in North Africa and Italy before taking overall command of Operation Overlord, the invasion of Normandy, in 1944. His skill in coordinating a multinational coalition of Allied forces was central to the liberation of Western Europe." },
  { id: "zhukov", name: "Georgy Zhukov", category: "military", side: "allied", nation: "Soviet Union", role: "Marshal of the Soviet Union", initials: "GZ", color: "#6B7A34",
    bio: "Widely regarded as the Soviet Union's most capable wartime commander, Zhukov directed the decisive defences of Moscow and Stalingrad and later led the final assault on Berlin. He accepted Germany's unconditional surrender on behalf of the Soviet High Command." },
  { id: "montgomery", name: "Bernard Montgomery", category: "military", side: "allied", nation: "United Kingdom", role: "Field Marshal", initials: "BM2", color: "#4B5320",
    bio: "Montgomery commanded the British Eighth Army to victory at El Alamein, a turning point in North Africa, and later commanded Allied ground forces during the initial phase of the Normandy campaign." },
  { id: "macarthur", name: "Douglas MacArthur", category: "military", side: "allied", nation: "United States", role: "General of the Army", initials: "DM", color: "#3D6E85",
    bio: "MacArthur commanded Allied forces in the Southwest Pacific, directing the 'island-hopping' campaign back through New Guinea and the Philippines, and later accepted Japan's formal surrender aboard the USS Missouri." },
  { id: "nimitz", name: "Chester Nimitz", category: "military", side: "allied", nation: "United States", role: "Fleet Admiral", initials: "CN", color: "#3D6E85",
    bio: "As Commander-in-Chief of the Pacific Fleet, Nimitz directed the naval campaigns that turned the tide at Midway and led the Central Pacific advance through the Marianas, Iwo Jima and Okinawa." },
  { id: "rommel", name: "Erwin Rommel", category: "military", side: "axis", nation: "Germany", role: "Field Marshal, 'the Desert Fox'", initials: "ER", color: "#7C2A21",
    bio: "Rommel earned a reputation for tactical brilliance commanding the Afrika Korps in North Africa before being defeated at El Alamein. He later commanded German defences in Normandy and was implicated in the July 1944 plot against Hitler, dying by forced suicide months later." },
  { id: "manstein", name: "Erich von Manstein", category: "military", side: "axis", nation: "Germany", role: "Field Marshal", initials: "EM", color: "#7C2A21",
    bio: "Widely regarded as one of Germany's most capable strategists, Manstein devised the plan for the 1940 invasion of France and later commanded major operations on the Eastern Front, including the recapture of Kharkov in 1943." },
  { id: "yamamoto", name: "Isoroku Yamamoto", category: "military", side: "axis", nation: "Japan", role: "Admiral, Combined Fleet", initials: "IY", color: "#8F4A3E", era: "wwii",
    bio: "Yamamoto planned the attack on Pearl Harbor and commanded the Imperial Japanese Navy through its early victories and the decisive defeat at Midway. He was killed in 1943 when American aircraft, alerted by codebreakers, intercepted and shot down his aircraft." },

  /* ============================================================
     MULTI-ERA COMMANDERS
     Historically verified biographical information.
     ============================================================ */

  /* ================= ALEXANDER & ANCIENT WORLD ================= */
  { id: "alexander", name: "Alexander the Great", category: "military", side: "macedon", nation: "Kingdom of Macedon", role: "King of Macedon, Pharaoh of Egypt, King of Persia", initials: "AG", color: "#8B6914", era: "ancient",
    birth: "356 BCE", death: "323 BCE (aged 32)", title: "Basileus of Macedon",
    bio: "Alexander III of Macedon, commonly known as Alexander the Great, created one of the largest empires in ancient history by the age of 30, stretching from Greece to northwestern India. Tutored by Aristotle, he inherited a superb army from his father Philip II and embarked on a campaign of conquest against the Persian Empire in 334 BCE. He never lost a battle. His tactical innovations — particularly the use of the Macedonian phalanx combined with Companion Cavalry shock charges — revolutionised ancient warfare. His victories at Granicus, Issus, and Gaugamela ended the Achaemenid Empire. He died in Babylon at 32, and his empire fragmented among his generals." },

  { id: "hannibal", name: "Hannibal Barca", category: "military", side: "carthage", nation: "Carthage", role: "Supreme Commander of Carthaginian forces in Italy", initials: "HB", color: "#8B6914", era: "ancient",
    birth: "247 BCE", death: "c. 183–181 BCE", title: "Suffete of Carthage",
    bio: "Hannibal Barca was one of the greatest military commanders of the ancient world. His crossing of the Alps with war elephants to invade Italy in 218 BCE is one of the most audacious military manoeuvres in history. His victory at Cannae — where he encircled and destroyed a much larger Roman army using a double envelopment — remains one of the most studied tactical masterpieces. He fought in Italy for 15 years without reinforcement, winning battle after battle, but was eventually recalled to Africa and defeated by Scipio Africanus at Zama in 202 BCE." },

  { id: "caesar", name: "Gaius Julius Caesar", category: "military", side: "rome", nation: "Roman Republic", role: "Dictator of Rome, Conqueror of Gaul", initials: "JC", color: "#8B6914", era: "ancient",
    birth: "100 BCE", death: "44 BCE (assassinated)", title: "Dictator Perpetuo",
    bio: "Julius Caesar was a Roman general, statesman, and one of history's most influential military commanders. His conquest of Gaul (modern France, Belgium, and parts of Germany) extended Roman territory to the Atlantic and demonstrated his mastery of siege warfare, rapid manoeuvre, and combined arms. His siege of Alesia — where he built two concentric rings of fortification, besieging the Gauls while simultaneously defending against a massive relief army — is one of the greatest military engineering feats of antiquity. He was assassinated on the Ides of March, 44 BCE." },

  { id: "scipio", name: "Scipio Africanus", category: "military", side: "rome", nation: "Roman Republic", role: "General & Consul", initials: "SA", color: "#8B6914", era: "ancient",
    birth: "236 BCE", death: "183 BCE",
    bio: "Publius Cornelius Scipio Africanus defeated Hannibal at the Battle of Zama in 202 BCE, ending the Second Punic War and establishing Roman dominance over the western Mediterranean. He adapted Hannibal's own tactics — particularly the double envelopment — against the Carthaginian master himself." },

  /* ================= MARATHA EMPIRE ================= */
  { id: "shivaji", name: "Chhatrapati Shivaji Maharaj", category: "military", side: "maratha", nation: "Maratha Empire", role: "Founder & First Chhatrapati of the Maratha Empire", initials: "SM", color: "#CD7F32", era: "maratha",
    birth: "19 February 1630", death: "3 April 1680", title: "Chhatrapati (Sovereign Emperor)",
    bio: "Chhatrapati Shivaji Maharaj was the founder of the Maratha Empire (Hindavi Swarajya — 'Self-rule of the People'). Born in the Sahyadri hill fort of Shivneri, he carved out an independent kingdom from the declining Adil Shahi and Mughal empires through a combination of strategic fort-building, guerrilla warfare (Ganimi Kava), diplomatic skill, and conventional military campaigns. He established one of the first indigenous Indian navies, built an efficient administrative system (Ashtapradhan council), and was crowned Chhatrapati at Raigad Fort on 6 June 1674. His military innovations — particularly the use of the Western Ghats terrain, hill forts, and rapid cavalry raids — influenced Indian military strategy for generations." },

  { id: "tanaji", name: "Tanaji Malusare", category: "military", side: "maratha", nation: "Maratha Empire", role: "Subedar (Military Commander)", initials: "TM", color: "#CD7F32", era: "maratha",
    birth: "c. 1600", death: "4 February 1670 (Battle of Sinhagad)",
    bio: "Tanaji Malusare was one of Chhatrapati Shivaji Maharaj's most trusted and capable military commanders. He is immortalised for his heroic night assault on Sinhagad Fort (then called Kondhana) on 4 February 1670, where he led approximately 300 Maval soldiers in scaling the fort's steep cliff face. He was killed in the fierce fighting but his forces captured the fort. Shivaji Maharaj's tribute — 'The fort is won, but the lion is lost' — led to the fort being renamed Sinhagad (Lion's Fort)." },

  { id: "baji-prabhu", name: "Baji Prabhu Deshpande", category: "military", side: "maratha", nation: "Maratha Empire", role: "Military Commander & Hero of Pavan Khind", initials: "BP", color: "#CD7F32", era: "maratha",
    birth: "c. 1615", death: "13 July 1660 (Battle of Pavan Khind)",
    bio: "Baji Prabhu Deshpande is celebrated for his legendary last stand at Ghod Khind (later renamed Pavan Khind — 'Sacred Pass') on 13 July 1660. During Shivaji Maharaj's escape from the siege of Panhala Fort, Baji Prabhu volunteered to hold a narrow mountain pass with approximately 300 Bandal soldiers against thousands of pursuing Bijapur cavalry. Despite being mortally wounded, he fought on until he heard the cannon signal confirming Shivaji Maharaj's safe arrival at Vishalgad Fort. His sacrifice is one of the most celebrated acts of devotion and valor in Maratha history." },

  /* ================= NAPOLEONIC ERA ================= */
  { id: "napoleon", name: "Napoleon Bonaparte", category: "military", side: "france", nation: "French Empire", role: "Emperor of the French, Commander of the Grande Armée", initials: "NB", color: "#4A6741", era: "napoleonic",
    birth: "15 August 1769", death: "5 May 1821 (exile, Saint Helena)", title: "Emperor of the French",
    bio: "Napoleon Bonaparte was one of the most consequential figures in European history and one of the greatest military commanders of all time. Rising from minor Corsican nobility through the chaos of the French Revolution, he became Emperor in 1804. His Grande Armée and revolutionary Corps d'Armée system dominated European warfare for a decade. His masterpiece at Austerlitz ('The Battle of the Three Emperors') is regarded as one of the greatest tactical victories in history. He won over 40 major battles before his downfall, driven by the catastrophic 1812 Russian campaign and his final defeat at Waterloo in 1815. His legal and administrative reforms — the Napoleonic Code — reshaped European governance." },

  { id: "wellington", name: "Duke of Wellington", category: "military", side: "britain", nation: "United Kingdom", role: "Field Marshal, Commander of Anglo-Allied forces at Waterloo", initials: "DW", color: "#4A6741", era: "napoleonic",
    birth: "1 May 1769", death: "14 September 1852", title: "1st Duke of Wellington",
    bio: "Arthur Wellesley, 1st Duke of Wellington, commanded British and Allied forces to victory in the Peninsular War and at Waterloo, where he defeated Napoleon in 1815. A master of defensive tactics, he famously chose advantageous terrain and used the reverse slope to shield his troops from artillery fire. His partnership with Blücher's Prussian army at Waterloo was decisive." },

  { id: "nelson", name: "Admiral Horatio Nelson", category: "military", side: "britain", nation: "United Kingdom", role: "Vice Admiral of the White, Commander at Trafalgar", initials: "HN", color: "#4A6741", era: "napoleonic",
    birth: "29 September 1758", death: "21 October 1805 (killed at Trafalgar)", title: "1st Viscount Nelson",
    bio: "Horatio Nelson was Britain's greatest naval commander. His bold tactical innovations — particularly his decision to break the enemy line in two perpendicular columns at Trafalgar — redefined naval warfare. His victory at Trafalgar in 1805 established British naval supremacy for over a century but cost him his life. He was mortally wounded by a French sharpshooter during the battle." },

  { id: "kutuzov", name: "Mikhail Kutuzov", category: "military", side: "russia", nation: "Russian Empire", role: "Field Marshal, Commander of Russian forces against Napoleon", initials: "MK", color: "#4A6741", era: "napoleonic",
    birth: "16 September 1745", death: "28 April 1813",
    bio: "Mikhail Kutuzov commanded Russian forces during Napoleon's 1812 invasion. He fought the bloody but inconclusive Battle of Borodino, then made the controversial decision to abandon Moscow — a strategy that ultimately proved decisive. Napoleon found Moscow largely abandoned and ablaze, and without a peace agreement was forced into a catastrophic winter retreat that destroyed the Grande Armée." }
];
