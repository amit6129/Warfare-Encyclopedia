/* =========================================================
   WWII ENCYCLOPEDIA — Battles Database
   Two tiers:
   - tier "featured": full detail (commanders, forces, casualties,
     significance, related battles)
   - tier "standard": encyclopedia-scale breadth (date, location,
     theatre, concise summary)
   Casualty/strength figures are widely-cited approximate ranges —
   historians' estimates vary by source, especially for the
   Eastern Front and Sino-Japanese theatres.
   ========================================================= */

export const THEATRE_COLORS: Record<string, string> = {
  start:    "#5C6670",
  western:  "#C7A254",
  eastern:  "#B23A2E",
  pacific:  "#3D6E85",
  africa:   "#9C8348",
  atlantic: "#2E5C6E",
  asia:     "#6B7A34"
};

export const THEATRE_LABELS: Record<string, string> = {
  start:    "Opening of the War",
  western:  "Western Front",
  eastern:  "Eastern Front",
  pacific:  "Pacific Theatre",
  africa:   "North Africa & Mediterranean",
  atlantic: "Battle of the Atlantic",
  asia:     "Asia & Burma Campaign"
};

import { Battle } from "../types";

export const BATTLES: any[] = [
  /* ================= FEATURED (full detail) ================= */
  {
    id: "poland", tier: "featured", name: "Invasion of Poland",
    dates: "1 Sep – 6 Oct 1939", year: 1939, theatre: "start", location: "Poland", mapVariant: 1,
    commanders: { allied: "Marshal Edward Rydz-Śmigły (Poland)", axis: "Walther von Brauchitsch (Germany)" },
    allied: { label: "Poland", forces: "~1,000,000 troops" },
    axis: { label: "Germany & Slovakia (from 17 Sep, USSR)", forces: "~1,850,000 troops" },
    casualties: [ { value: "66,000+", label: "Polish killed" }, { value: "16,000", label: "German killed" } ],
    significance: "Formal start of the Second World War in Europe.",
    outcome: "Poland was defeated within five weeks and partitioned between Germany and the Soviet Union under the Molotov–Ribbentrop Pact. Britain and France declared war on Germany on 3 September 1939.",
    related: ["france", "britain"]
  },
  {
    id: "france", tier: "featured", name: "Battle of France",
    dates: "10 May – 25 Jun 1940", year: 1940, theatre: "western", location: "France & the Low Countries", mapVariant: 2,
    commanders: { allied: "Maurice Gamelin / Maxime Weygand (France)", axis: "Gerd von Rundstedt (Germany)" },
    allied: { label: "France, UK, Belgium, Netherlands", forces: "~3,300,000 troops" },
    axis: { label: "Germany", forces: "~3,000,000 troops" },
    casualties: [ { value: "~360,000", label: "Allied casualties" }, { value: "~160,000", label: "German casualties" } ],
    significance: "Germany's rapid Blitzkrieg victory knocked France out of the war and forced the British evacuation from Dunkirk.",
    outcome: "France surrendered on 22 June 1940; the country was divided into a German-occupied zone and the collaborationist Vichy regime.",
    related: ["dunkirk", "britain"]
  },
  {
    id: "dunkirk", tier: "featured", name: "Dunkirk Evacuation (Operation Dynamo)",
    dates: "26 May – 4 Jun 1940", year: 1940, theatre: "western", location: "Dunkirk, France", mapVariant: 4,
    commanders: { allied: "Bertram Ramsay (UK)", axis: "Gerd von Rundstedt (Germany)" },
    allied: { label: "United Kingdom, France, Belgium", forces: "~400,000 encircled troops" },
    axis: { label: "Germany", forces: "Army Group A" },
    casualties: [ { value: "338,000", label: "troops evacuated" }, { value: "~68,000", label: "British killed/captured/wounded" } ],
    significance: "Preserved the core of the British Army to continue the war after the fall of France.",
    outcome: "A hastily organised sea evacuation, using naval vessels and civilian 'little ships', rescued the bulk of the encircled Allied force despite the loss of nearly all heavy equipment.",
    related: ["france", "britain"]
  },
  {
    id: "britain", tier: "featured", name: "Battle of Britain",
    dates: "10 Jul – 31 Oct 1940", year: 1940, theatre: "western", location: "United Kingdom (airspace)", mapVariant: 2,
    commanders: { allied: "Hugh Dowding (UK)", axis: "Hermann Göring (Germany)" },
    allied: { label: "United Kingdom (RAF)", forces: "~2,900 aircrew" },
    axis: { label: "Nazi Germany (Luftwaffe)", forces: "~2,550 aircraft committed" },
    casualties: [ { value: "~1,500", label: "RAF aircrew lost" }, { value: "~2,500", label: "Luftwaffe aircrew lost" } ],
    significance: "First major defeat suffered by Nazi Germany, preserving Britain as a base for the later liberation of Europe.",
    outcome: "The RAF successfully defended British airspace against a sustained German bombing campaign, forcing Hitler to indefinitely postpone Operation Sea Lion, the planned invasion of Britain.",
    related: ["france", "dunkirk", "atlantic"]
  },
  {
    id: "moscow", tier: "featured", name: "Battle of Moscow",
    dates: "2 Oct 1941 – 7 Jan 1942", year: 1941, theatre: "eastern", location: "Moscow, Soviet Union", mapVariant: 3,
    commanders: { allied: "Georgy Zhukov (USSR)", axis: "Fedor von Bock (Germany)" },
    allied: { label: "Soviet Union", forces: "~1,250,000 troops" },
    axis: { label: "Germany (Army Group Centre)", forces: "~1,000,000 troops" },
    casualties: [ { value: "~500,000", label: "German casualties" }, { value: "~650,000+", label: "Soviet casualties" } ],
    significance: "Ended German hopes of a swift Blitzkrieg victory over the USSR, forcing a prolonged war on the Eastern Front.",
    outcome: "A Soviet winter counteroffensive halted the German advance short of the capital, the first major strategic failure of the German invasion.",
    related: ["barbarossa-battle", "stalingrad", "kiev-1941"]
  },
  {
    id: "stalingrad", tier: "featured", name: "Battle of Stalingrad",
    dates: "23 Aug 1942 – 2 Feb 1943", year: 1942, theatre: "eastern", location: "Stalingrad, Soviet Union", mapVariant: 3,
    commanders: { allied: "Vasily Chuikov / Georgy Zhukov (USSR)", axis: "Friedrich Paulus (Germany)" },
    allied: { label: "Soviet Union", forces: "~1,140,000 troops" },
    axis: { label: "Germany (6th Army) & allies", forces: "~1,040,000 troops" },
    casualties: [ { value: "~1.1M", label: "Soviet casualties" }, { value: "~850,000", label: "Axis casualties" } ],
    significance: "Widely regarded as the turning point of the war in Europe.",
    outcome: "One of the bloodiest battles in history ended with the complete encirclement and surrender of the German 6th Army, the first surrender of a German field army.",
    related: ["moscow", "kursk", "caucasus"]
  },
  {
    id: "kursk", tier: "featured", name: "Battle of Kursk",
    dates: "5 Jul – 23 Aug 1943", year: 1943, theatre: "eastern", location: "Kursk, Soviet Union", mapVariant: 4,
    commanders: { allied: "Georgy Zhukov (USSR)", axis: "Erich von Manstein (Germany)" },
    allied: { label: "Soviet Union", forces: "~1,900,000 troops" },
    axis: { label: "Germany", forces: "~780,000 troops" },
    casualties: [ { value: "Heavy", label: "losses, both sides" }, { value: "6,000+", label: "tanks engaged" } ],
    significance: "The largest tank battle in history; permanently shifted strategic initiative on the Eastern Front to the Soviets.",
    outcome: "Germany's offensive, Operation Citadel, failed to break the Soviet defensive lines, after which the Red Army never again lost the strategic initiative in the East.",
    related: ["stalingrad", "dnieper", "kharkov-3"]
  },
  {
    id: "leningrad", tier: "featured", name: "Siege of Leningrad",
    dates: "8 Sep 1941 – 27 Jan 1944", year: 1941, theatre: "eastern", location: "Leningrad, Soviet Union", mapVariant: 1,
    commanders: { allied: "Leonid Govorov (USSR)", axis: "Wilhelm von Leeb (Germany)" },
    allied: { label: "Soviet Union & Leningrad civil defence", forces: "~930,000 troops" },
    axis: { label: "Germany & Finland", forces: "~725,000 troops" },
    casualties: [ { value: "~1.1M+", label: "civilian deaths (famine)" }, { value: "~1.1M", label: "Soviet military casualties" } ],
    significance: "One of the longest and most costly sieges in history, defined by mass civilian starvation.",
    outcome: "The nearly 900-day siege was finally broken by a Soviet offensive in January 1944, though the human cost within the city was immense.",
    related: ["moscow", "narva"]
  },
  {
    id: "monte-cassino", tier: "featured", name: "Battle of Monte Cassino",
    dates: "17 Jan – 18 May 1944", year: 1944, theatre: "western", location: "Monte Cassino, Italy", mapVariant: 2,
    commanders: { allied: "Harold Alexander (UK)", axis: "Albert Kesselring (Germany)" },
    allied: { label: "US, UK, France, Poland & others", forces: "~150,000 troops" },
    axis: { label: "Germany", forces: "~80,000 troops" },
    casualties: [ { value: "~55,000", label: "Allied casualties" }, { value: "~20,000", label: "German casualties" } ],
    significance: "Cleared the path to Rome after four grinding assaults on Germany's fortified Gustav Line.",
    outcome: "Following months of costly attacks, a final assault led largely by Polish forces captured the hilltop abbey, opening the road to Rome, which fell days later.",
    related: ["anzio", "husky"]
  },
  {
    id: "berlin", tier: "featured", name: "Battle of Berlin",
    dates: "16 Apr – 2 May 1945", year: 1945, theatre: "eastern", location: "Berlin, Germany", mapVariant: 4,
    commanders: { allied: "Georgy Zhukov / Ivan Konev (USSR)", axis: "Helmuth Weidling (Germany)" },
    allied: { label: "Soviet Union", forces: "~2,500,000 troops" },
    axis: { label: "Germany", forces: "~760,000 troops" },
    casualties: [ { value: "~80,000", label: "Soviet dead" }, { value: "~92,000+", label: "German dead" } ],
    significance: "The fall of the German capital led directly to Germany's unconditional surrender.",
    outcome: "Soviet forces encircled and stormed Berlin; Hitler died by suicide on 30 April, and Germany surrendered unconditionally on 8 May 1945 (V-E Day).",
    related: ["bulge", "rhineland", "vistula-oder"]
  },
  {
    id: "bulge", tier: "featured", name: "Battle of the Bulge",
    dates: "16 Dec 1944 – 25 Jan 1945", year: 1944, theatre: "western", location: "Ardennes, Belgium/Luxembourg", mapVariant: 2,
    commanders: { allied: "Dwight D. Eisenhower (US)", axis: "Gerd von Rundstedt (Germany)" },
    allied: { label: "United States & Allies", forces: "~610,000 troops" },
    axis: { label: "Germany", forces: "~410,000 troops" },
    casualties: [ { value: "~89,000", label: "US casualties" }, { value: "~100,000", label: "German casualties" } ],
    significance: "Germany's last major offensive in the west; its failure exhausted reserves it could not replace.",
    outcome: "A surprise German offensive through the Ardennes created a 'bulge' in the Allied lines but was ultimately repelled, hastening the collapse of the Western Front.",
    related: ["berlin", "aachen", "market-garden"]
  },
  {
    id: "pearl-harbor", tier: "featured", name: "Attack on Pearl Harbor",
    dates: "7 December 1941", year: 1941, theatre: "pacific", location: "Oahu, Hawaii, United States", mapVariant: 4,
    commanders: { allied: "Husband E. Kimmel (US)", axis: "Chuichi Nagumo (Japan)" },
    allied: { label: "United States", forces: "8 battleships, ~390 aircraft" },
    axis: { label: "Empire of Japan", forces: "6 carriers, 353 aircraft" },
    casualties: [ { value: "2,403", label: "American dead" }, { value: "64", label: "Japanese dead" } ],
    significance: "Brought the United States into the Second World War.",
    outcome: "A surprise carrier-launched strike crippled the US Pacific Fleet's battleships but missed its aircraft carriers, which were at sea. The US declared war on Japan the following day.",
    related: ["midway", "coral-sea", "wake-island"]
  },
  {
    id: "midway", tier: "featured", name: "Battle of Midway",
    dates: "4 – 7 June 1942", year: 1942, theatre: "pacific", location: "Midway Atoll, Pacific Ocean", mapVariant: 1,
    commanders: { allied: "Chester Nimitz (US)", axis: "Chuichi Nagumo (Japan)" },
    allied: { label: "United States", forces: "3 carriers, 233 aircraft" },
    axis: { label: "Empire of Japan", forces: "4 carriers, 248 aircraft" },
    casualties: [ { value: "~307", label: "American dead" }, { value: "~3,057", label: "Japanese dead" } ],
    significance: "Widely regarded as the turning point of the Pacific War.",
    outcome: "A decisive American victory sank four Japanese fleet carriers, ending Japanese naval dominance in the Pacific.",
    related: ["pearl-harbor", "coral-sea", "guadalcanal"]
  },
  {
    id: "guadalcanal", tier: "featured", name: "Battle of Guadalcanal",
    dates: "7 Aug 1942 – 9 Feb 1943", year: 1942, theatre: "pacific", location: "Guadalcanal, Solomon Islands", mapVariant: 3,
    commanders: { allied: "Alexander Vandegrift (US)", axis: "Harukichi Hyakutake (Japan)" },
    allied: { label: "United States & Allies", forces: "~60,000 troops" },
    axis: { label: "Empire of Japan", forces: "~36,000 troops" },
    casualties: [ { value: "~7,100", label: "Allied dead" }, { value: "~20,800", label: "Japanese dead" } ],
    significance: "The first major Allied ground offensive against Japan, marking a shift from defence to attack in the Pacific.",
    outcome: "A grinding six-month land, sea and air campaign ended in a costly Japanese withdrawal, the first major setback for Japan's advance.",
    related: ["midway", "savo-island", "bismarck-sea"]
  },
  {
    id: "iwo-jima", tier: "featured", name: "Battle of Iwo Jima",
    dates: "19 Feb – 26 Mar 1945", year: 1945, theatre: "pacific", location: "Iwo Jima, Volcano Islands", mapVariant: 3,
    commanders: { allied: "Holland Smith (US)", axis: "Tadamichi Kuribayashi (Japan)" },
    allied: { label: "United States", forces: "~70,000 troops" },
    axis: { label: "Empire of Japan", forces: "~21,000 troops" },
    casualties: [ { value: "~26,000", label: "US casualties" }, { value: "~18,000+", label: "Japanese dead" } ],
    significance: "Secured a crucial airbase for the planned invasion of Japan; immortalised by the flag-raising on Mount Suribachi.",
    outcome: "A costly US victory against an entrenched defence fighting almost to the last man, one of the highest-casualty battles for the US Marine Corps.",
    related: ["okinawa", "saipan"]
  },
  {
    id: "okinawa", tier: "featured", name: "Battle of Okinawa",
    dates: "1 Apr – 22 Jun 1945", year: 1945, theatre: "pacific", location: "Okinawa, Ryukyu Islands", mapVariant: 4,
    commanders: { allied: "Simon B. Buckner Jr. (US)", axis: "Mitsuru Ushijima (Japan)" },
    allied: { label: "United States", forces: "~183,000 troops" },
    axis: { label: "Empire of Japan", forces: "~100,000 troops" },
    casualties: [ { value: "~50,000", label: "US casualties" }, { value: "~110,000", label: "Japanese dead" } ],
    significance: "The largest and bloodiest Pacific battle, its heavy casualties heavily influenced the decision to use the atomic bomb rather than invade Japan.",
    outcome: "The last and largest battle of the Pacific War included heavy kamikaze attacks and mass civilian casualties, ending in a costly Allied victory.",
    related: ["iwo-jima", "leyte-gulf"]
  },
  {
    id: "coral-sea", tier: "featured", name: "Battle of the Coral Sea",
    dates: "4 – 8 May 1942", year: 1942, theatre: "pacific", location: "Coral Sea, Pacific Ocean", mapVariant: 2,
    commanders: { allied: "Frank J. Fletcher (US)", axis: "Takeo Takagi (Japan)" },
    allied: { label: "United States & Australia", forces: "2 carriers" },
    axis: { label: "Empire of Japan", forces: "3 carriers" },
    casualties: [ { value: "~656", label: "Allied dead" }, { value: "~966", label: "Japanese dead" } ],
    significance: "The first naval battle fought entirely by carrier-based aircraft, and the first check on Japanese expansion.",
    outcome: "A tactically inconclusive battle that strategically halted Japan's planned invasion of Port Moresby, New Guinea.",
    related: ["midway", "guadalcanal"]
  },
  {
    id: "leyte-gulf", tier: "featured", name: "Battle of Leyte Gulf",
    dates: "23 – 26 October 1944", year: 1944, theatre: "pacific", location: "Leyte Gulf, Philippines", mapVariant: 1,
    commanders: { allied: "William Halsey / Thomas Kinkaid (US)", axis: "Takeo Kurita (Japan)" },
    allied: { label: "United States & Australia", forces: "~8 fleet/light carriers" },
    axis: { label: "Empire of Japan", forces: "~4 carriers (mostly decoys)" },
    casualties: [ { value: "~3,500", label: "Allied dead" }, { value: "~10,000+", label: "Japanese dead" } ],
    significance: "Widely considered the largest naval battle of the Second World War, and possibly in history.",
    outcome: "A decisive Allied victory that destroyed the remaining strength of the Imperial Japanese Navy and saw the first organised kamikaze attacks.",
    related: ["philippine-sea", "manila"]
  },
  {
    id: "philippine-sea", tier: "featured", name: "Battle of the Philippine Sea",
    dates: "19 – 20 June 1944", year: 1944, theatre: "pacific", location: "Philippine Sea", mapVariant: 3,
    commanders: { allied: "Raymond Spruance (US)", axis: "Jisaburō Ozawa (Japan)" },
    allied: { label: "United States", forces: "15 carriers" },
    axis: { label: "Empire of Japan", forces: "9 carriers" },
    casualties: [ { value: "~123", label: "US aircraft lost" }, { value: "~600", label: "Japanese aircraft lost" } ],
    significance: "So lopsided the air battle became known as 'the Great Marianas Turkey Shoot'.",
    outcome: "Devastating Japanese aircraft losses effectively destroyed Japan's carrier aviation capability for the remainder of the war.",
    related: ["saipan", "leyte-gulf"]
  },
  {
    id: "el-alamein", tier: "featured", name: "Second Battle of El Alamein",
    dates: "23 Oct – 11 Nov 1942", year: 1942, theatre: "africa", location: "El Alamein, Egypt", mapVariant: 2,
    commanders: { allied: "Bernard Montgomery (UK)", axis: "Erwin Rommel (Germany)" },
    allied: { label: "British Commonwealth", forces: "~195,000 troops" },
    axis: { label: "Germany & Italy", forces: "~116,000 troops" },
    casualties: [ { value: "~13,500", label: "Allied casualties" }, { value: "~30,000+", label: "Axis casualties/captured" } ],
    significance: "Halted the Axis advance toward Egypt and the Suez Canal, and began the roll-back of Axis forces from North Africa.",
    outcome: "A decisive Allied victory. Churchill called it \"the end of the beginning.\"",
    related: ["tobruk", "kasserine", "torch"]
  },
  {
    id: "tobruk", tier: "featured", name: "Siege of Tobruk",
    dates: "10 Apr – 27 Nov 1941", year: 1941, theatre: "africa", location: "Tobruk, Libya", mapVariant: 1,
    commanders: { allied: "Leslie Morshead (Australia)", axis: "Erwin Rommel (Germany)" },
    allied: { label: "Australia, UK & Allies", forces: "~25,000 troops" },
    axis: { label: "Germany & Italy", forces: "~35,000 troops" },
    casualties: [ { value: "~3,800", label: "Allied casualties" }, { value: "~8,000+", label: "Axis casualties" } ],
    significance: "The prolonged Allied defence tied down significant Axis forces and denied Rommel a key supply port for months.",
    outcome: "The garrison, largely Australian, held out under siege for 241 days before being relieved by Operation Crusader.",
    related: ["el-alamein", "kasserine"]
  },
  {
    id: "kasserine", tier: "featured", name: "Battle of Kasserine Pass",
    dates: "19 – 25 February 1943", year: 1943, theatre: "africa", location: "Kasserine Pass, Tunisia", mapVariant: 4,
    commanders: { allied: "Lloyd Fredendall (US)", axis: "Erwin Rommel (Germany)" },
    allied: { label: "United States & Allies", forces: "~30,000 troops" },
    axis: { label: "Germany & Italy", forces: "~22,000 troops" },
    casualties: [ { value: "~6,500", label: "US casualties" }, { value: "~2,000", label: "Axis casualties" } ],
    significance: "The first major clash between US and German forces exposed serious American shortcomings, prompting reforms in leadership and doctrine.",
    outcome: "German forces inflicted a sharp early defeat on inexperienced US troops before being halted and pushed back by reinforced Allied lines.",
    related: ["torch", "el-alamein", "tobruk"]
  },
  {
    id: "crete", tier: "featured", name: "Battle of Crete",
    dates: "20 May – 1 June 1941", year: 1941, theatre: "africa", location: "Crete, Greece", mapVariant: 2,
    commanders: { allied: "Bernard Freyberg (New Zealand)", axis: "Kurt Student (Germany)" },
    allied: { label: "UK, Greece, Australia, New Zealand", forces: "~40,000 troops" },
    axis: { label: "Germany", forces: "~22,000 airborne troops" },
    casualties: [ { value: "~4,000", label: "Allied dead" }, { value: "~4,000+", label: "German dead" } ],
    significance: "The first largely airborne invasion in history; German paratrooper losses were so severe that Hitler never again attempted a major airborne assault.",
    outcome: "Germany captured the island despite heavy losses, forcing an Allied evacuation, but the costly victory shaped future German airborne doctrine.",
    related: ["greece", "el-alamein"]
  },
  {
    id: "atlantic", tier: "featured", name: "Battle of the Atlantic",
    dates: "3 Sep 1939 – 8 May 1945", year: 1939, theatre: "atlantic", location: "Atlantic Ocean", mapVariant: 3,
    commanders: { allied: "Max Horton (UK)", axis: "Karl Dönitz (Germany)" },
    allied: { label: "UK, Canada, United States & Allies", forces: "Convoy escort fleets" },
    axis: { label: "Germany (U-boat fleet)", forces: "~1,150 U-boats built" },
    casualties: [ { value: "~3,500", label: "Allied merchant ships sunk" }, { value: "~783", label: "German U-boats lost" } ],
    significance: "The longest continuous campaign of the war; keeping Atlantic supply lines open was essential to Britain's survival and the later liberation of Europe.",
    outcome: "Allied advances in code-breaking, radar, sonar and air cover gradually defeated the German U-boat threat, securing the sea lanes for the 1944 invasion of Europe.",
    related: ["britain", "normandy"]
  },
  {
    id: "kiev-1941", tier: "featured", name: "Battle of Kiev (1941)",
    dates: "23 Aug – 26 Sep 1941", year: 1941, theatre: "eastern", location: "Kiev, Ukrainian SSR", mapVariant: 1,
    commanders: { allied: "Semyon Budyonny (USSR)", axis: "Gerd von Rundstedt (Germany)" },
    allied: { label: "Soviet Union", forces: "~627,000 troops" },
    axis: { label: "Germany", forces: "Army Group South" },
    casualties: [ { value: "~700,000", label: "Soviet casualties/captured" }, { value: "~128,000", label: "German casualties" } ],
    significance: "The largest encirclement in military history, though the diversion of German forces to achieve it delayed the assault on Moscow.",
    outcome: "A massive German encirclement destroyed several Soviet armies, but the delay it caused is often cited as a contributing factor in the later failure at Moscow.",
    related: ["moscow", "barbarossa-battle"]
  },
  {
    id: "dnieper", tier: "featured", name: "Battle of the Dnieper",
    dates: "Aug – Dec 1943", year: 1943, theatre: "eastern", location: "Dnieper River, Ukrainian SSR", mapVariant: 2,
    commanders: { allied: "Nikolai Vatutin (USSR)", axis: "Erich von Manstein (Germany)" },
    allied: { label: "Soviet Union", forces: "~2,650,000 troops" },
    axis: { label: "Germany", forces: "~1,240,000 troops" },
    casualties: [ { value: "~1.4M", label: "Soviet casualties" }, { value: "~400,000+", label: "German casualties" } ],
    significance: "One of the largest operations of the war, breaking Germany's 'Eastern Wall' defensive line.",
    outcome: "Soviet forces forced multiple crossings of the heavily-defended river and recaptured Kiev in November 1943.",
    related: ["kursk", "kiev-1941"]
  },
  {
    id: "normandy", tier: "featured", name: "Normandy Landings (D-Day) & Operation Overlord",
    dates: "6 Jun – 30 Aug 1944", year: 1944, theatre: "western", location: "Normandy, France", mapVariant: 1,
    commanders: { allied: "Dwight D. Eisenhower (US) / Bernard Montgomery (UK)", axis: "Gerd von Rundstedt / Erwin Rommel (Germany)" },
    allied: { label: "US, UK, Canada, Free France & allies", forces: "~156,000 landed on D-Day" },
    axis: { label: "Germany", forces: "Atlantic Wall garrison forces" },
    casualties: [ { value: "~10,000+", label: "Allied casualties, D-Day" }, { value: "~4,000-9,000", label: "German casualties, D-Day" } ],
    significance: "The largest seaborne invasion in history; established the Western Front that would liberate France within months.",
    outcome: "After a hard-fought campaign through the Normandy hedgerows (the 'bocage'), Allied forces broke out in late July and liberated Paris by 25 August 1944.",
    related: ["bulge", "falaise", "market-garden"]
  },
  /* ================= STANDARD (encyclopedia entries) ================= */
  { id: "khalkhin-gol", tier: "standard", name: "Battle of Khalkhin Gol", dates: "May – Sep 1939", year: 1939, theatre: "asia", location: "Mongolia–Manchuria border",
    summary: "A decisive Soviet-Mongolian victory over Japan's Kwantung Army that discouraged Japan from further conflict with the USSR, contributing to its later decision to expand southward instead." },
  { id: "shanghai", tier: "standard", name: "Battle of Shanghai", dates: "Aug – Nov 1937", year: 1937, theatre: "asia", location: "Shanghai, China",
    summary: "A brutal early battle of the Second Sino-Japanese War, often considered a prelude to the wider Pacific conflict; ended in a costly Japanese victory." },
  { id: "nanking", tier: "standard", name: "Battle & Fall of Nanking", dates: "Dec 1937", year: 1937, theatre: "asia", location: "Nanking, China",
    summary: "The fall of the Chinese capital was followed by mass atrocities against civilians, one of the war's most notorious episodes." },
  { id: "wuhan", tier: "standard", name: "Battle of Wuhan", dates: "Jun – Oct 1938", year: 1938, theatre: "asia", location: "Wuhan, China",
    summary: "One of the largest battles of the Sino-Japanese War; Chinese forces inflicted heavy losses before withdrawing, marking a shift to protracted warfare." },
  { id: "bialystok-minsk", tier: "standard", name: "Battle of Białystok–Minsk", dates: "Jun – Jul 1941", year: 1941, theatre: "eastern", location: "Belarus",
    summary: "An early encirclement battle of Operation Barbarossa in which German forces trapped and destroyed large Soviet formations near the border." },
  { id: "uman", tier: "standard", name: "Battle of Uman", dates: "Jul – Aug 1941", year: 1941, theatre: "eastern", location: "Uman, Ukrainian SSR",
    summary: "A major German encirclement that destroyed two Soviet armies during the early advance into Ukraine." },
  { id: "odessa-1941", tier: "standard", name: "Siege of Odessa", dates: "Aug – Oct 1941", year: 1941, theatre: "eastern", location: "Odessa, Ukrainian SSR",
    summary: "A prolonged Romanian-German siege of the Black Sea port, resisted stubbornly before a Soviet evacuation by sea." },
  { id: "sevastopol", tier: "standard", name: "Siege of Sevastopol", dates: "Oct 1941 – Jul 1942", year: 1941, theatre: "eastern", location: "Sevastopol, Crimea",
    summary: "An eight-month siege of the fortified Black Sea naval base, ending in a costly German capture after some of the heaviest artillery bombardment of the war." },
  { id: "kerch", tier: "standard", name: "Battle of Kerch", dates: "Nov 1941 – May 1942", year: 1941, theatre: "eastern", location: "Kerch Peninsula, Crimea",
    summary: "A see-saw campaign for the Crimean peninsula that ended in a major Soviet defeat and the loss of over 100,000 troops." },
  { id: "rostov-1941", tier: "standard", name: "Battle of Rostov (1941)", dates: "Nov 1941", year: 1941, theatre: "eastern", location: "Rostov-on-Don, Soviet Union",
    summary: "A successful Soviet counteroffensive that recaptured the city, one of the first major German retreats of the war." },
  { id: "voronezh", tier: "standard", name: "Battle of Voronezh", dates: "Jun – Jul 1942", year: 1942, theatre: "eastern", location: "Voronezh, Soviet Union",
    summary: "Part of the German summer 1942 offensive toward the Caucasus and Stalingrad, resulting in a protracted, costly urban battle." },
  { id: "caucasus", tier: "standard", name: "Battle of the Caucasus", dates: "Jul 1942 – Oct 1943", year: 1942, theatre: "eastern", location: "Caucasus, Soviet Union",
    summary: "A prolonged German campaign to seize Soviet oil fields, ultimately repelled after the German defeat at Stalingrad exposed its flank." },
  { id: "rzhev", tier: "standard", name: "Battles of Rzhev", dates: "Jan 1942 – Mar 1943", year: 1942, theatre: "eastern", location: "Rzhev, Soviet Union",
    summary: "A series of extremely costly Soviet offensives against a German salient, sometimes called the 'Rzhev meat grinder' for its casualty toll." },
  { id: "kharkov-1", tier: "standard", name: "First Battle of Kharkov", dates: "Oct 1941", year: 1941, theatre: "eastern", location: "Kharkov, Ukrainian SSR",
    summary: "German forces captured the major industrial city during the initial invasion of the Soviet Union." },
  { id: "kharkov-2", tier: "standard", name: "Second Battle of Kharkov", dates: "May 1942", year: 1942, theatre: "eastern", location: "Kharkov, Ukrainian SSR",
    summary: "A failed Soviet offensive to retake the city ended in a major encirclement and heavy Red Army losses." },
  { id: "kharkov-3", tier: "standard", name: "Third Battle of Kharkov", dates: "Feb – Mar 1943", year: 1943, theatre: "eastern", location: "Kharkov, Ukrainian SSR",
    summary: "A skilful German counteroffensive under Erich von Manstein recaptured the city shortly after Stalingrad, stabilising the southern front." },
  { id: "demyansk", tier: "standard", name: "Demyansk Pocket", dates: "Feb – Apr 1942", year: 1942, theatre: "eastern", location: "Demyansk, Soviet Union",
    summary: "A German force survived encirclement via sustained aerial resupply, a precedent later (mistakenly) cited to justify the doomed Stalingrad airlift." },
  { id: "narva", tier: "standard", name: "Battle of Narva", dates: "Feb – Aug 1944", year: 1944, theatre: "eastern", location: "Narva, Estonia",
    summary: "A prolonged defensive battle that delayed the Soviet advance into the Baltic states for several months." },
  { id: "korsun", tier: "standard", name: "Korsun–Cherkassy Pocket", dates: "Jan – Feb 1944", year: 1944, theatre: "eastern", location: "Cherkasy, Ukrainian SSR",
    summary: "A Soviet encirclement trapped two German corps; most managed a costly breakout, but with heavy losses in men and equipment." },
  { id: "lvov-sandomierz", tier: "standard", name: "Lvov–Sandomierz Offensive", dates: "Jul – Aug 1944", year: 1944, theatre: "eastern", location: "Western Ukraine & Poland",
    summary: "A major Soviet offensive that cleared German forces from western Ukraine and established bridgeheads across the Vistula." },
  { id: "debrecen", tier: "standard", name: "Battle of Debrecen", dates: "Oct 1944", year: 1944, theatre: "eastern", location: "Debrecen, Hungary",
    summary: "A large Soviet-Romanian tank battle against German and Hungarian forces during the advance into Hungary." },
  { id: "budapest", tier: "standard", name: "Siege of Budapest", dates: "Dec 1944 – Feb 1945", year: 1944, theatre: "eastern", location: "Budapest, Hungary",
    summary: "A brutal 50-day siege, sometimes called the 'Stalingrad of the Waffen-SS', ending in the city's capture and heavy civilian suffering." },
  { id: "vienna", tier: "standard", name: "Vienna Offensive", dates: "Apr 1945", year: 1945, theatre: "eastern", location: "Vienna, Austria",
    summary: "Soviet forces captured the Austrian capital with relatively limited destruction after Wehrmacht defences collapsed." },
  { id: "konigsberg", tier: "standard", name: "Battle of Königsberg", dates: "Apr 1945", year: 1945, theatre: "eastern", location: "Königsberg, East Prussia",
    summary: "A heavily fortified German city fell after an intense Soviet siege and assault, part of the final collapse of the Eastern Front." },
  { id: "vistula-oder", tier: "standard", name: "Vistula–Oder Offensive", dates: "Jan – Feb 1945", year: 1945, theatre: "eastern", location: "Poland",
    summary: "A rapid Soviet offensive that advanced over 300 miles in three weeks, bringing the Red Army to within reach of Berlin." },
  { id: "warsaw-uprising", tier: "standard", name: "Warsaw Uprising", dates: "Aug – Oct 1944", year: 1944, theatre: "eastern", location: "Warsaw, Poland",
    summary: "The Polish Home Army rose against German occupation; after 63 days without adequate outside support, the uprising was crushed and the city largely destroyed." },
  { id: "barbarossa-battle", tier: "standard", name: "Border Battles of Operation Barbarossa", dates: "Jun – Jul 1941", year: 1941, theatre: "eastern", location: "Soviet western border",
    summary: "The opening battles of Germany's invasion of the USSR saw catastrophic Soviet losses as entire fronts collapsed in the war's first weeks." },
  { id: "narvik", tier: "standard", name: "Battles of Narvik", dates: "Apr – Jun 1940", year: 1940, theatre: "western", location: "Narvik, Norway",
    summary: "Allied naval and land forces temporarily recaptured the strategic port before withdrawing following the collapse of France." },
  { id: "netherlands", tier: "standard", name: "Battle of the Netherlands", dates: "10 – 17 May 1940", year: 1940, theatre: "western", location: "Netherlands",
    summary: "A swift German campaign, including the bombing of Rotterdam, forced Dutch surrender within days." },
  { id: "belgium-1940", tier: "standard", name: "Battle of Belgium", dates: "10 – 28 May 1940", year: 1940, theatre: "western", location: "Belgium",
    summary: "Part of the wider Battle of France; German forces overran Belgian defences, including the fall of Fort Eben-Emael in a daring glider assault." },
  { id: "malta", tier: "standard", name: "Siege of Malta", dates: "1940 – 1942", year: 1940, theatre: "africa", location: "Malta", 
    summary: "One of the most intensively bombed places of the war; the island's endurance disrupted Axis supply lines to North Africa, earning it the George Cross." },
  { id: "taranto", tier: "standard", name: "Battle of Taranto", dates: "Nov 1940", year: 1940, theatre: "africa", location: "Taranto, Italy",
    summary: "A pioneering British carrier-launched night raid crippled the Italian battle fleet, and is often cited as an inspiration for the Pearl Harbor attack." },
  { id: "matapan", tier: "standard", name: "Battle of Cape Matapan", dates: "Mar 1941", year: 1941, theatre: "africa", location: "Cape Matapan, Greece",
    summary: "A decisive British naval victory over the Italian fleet, enabled by radar and codebreaking, that secured Allied control of the Eastern Mediterranean." },
  { id: "greece", tier: "standard", name: "Battle of Greece", dates: "Apr 1941", year: 1941, theatre: "africa", location: "Greece",
    summary: "German forces overran Greece in three weeks, forcing an Allied evacuation and delaying (by disputed degree) the launch of Operation Barbarossa." },
  { id: "denmark-strait", tier: "standard", name: "Battle of the Denmark Strait", dates: "May 1941", year: 1941, theatre: "atlantic", location: "Denmark Strait",
    summary: "The German battleship Bismarck sank the British battlecruiser HMS Hood in minutes before being hunted down and sunk days later." },
  { id: "channel-dash", tier: "standard", name: "Channel Dash", dates: "Feb 1942", year: 1942, theatre: "atlantic", location: "English Channel",
    summary: "German capital ships made a bold daylight dash through the Channel back to Germany, evading British forces in an embarrassing episode for the Royal Navy." },
  { id: "dieppe", tier: "standard", name: "Dieppe Raid", dates: "Aug 1942", year: 1942, theatre: "western", location: "Dieppe, France",
    summary: "A costly Allied amphibious raid, mainly by Canadian troops, provided hard lessons later applied to the planning of D-Day." },
  { id: "torch", tier: "standard", name: "Operation Torch Landings", dates: "Nov 1942", year: 1942, theatre: "africa", location: "Morocco & Algeria",
    summary: "Allied landings opened a new front in French North Africa, bringing US ground forces into the war against Germany for the first time." },
  { id: "anzio", tier: "standard", name: "Battle of Anzio", dates: "Jan – Jun 1944", year: 1944, theatre: "western", location: "Anzio, Italy",
    summary: "An Allied amphibious landing behind German lines became bogged down for months before finally breaking out toward Rome." },
  { id: "falaise", tier: "standard", name: "Falaise Pocket", dates: "Aug 1944", year: 1944, theatre: "western", location: "Falaise, France",
    summary: "Allied forces encircled and destroyed much of the German army in Normandy, effectively ending organised German resistance in the region." },
  { id: "market-garden", tier: "standard", name: "Battle of Arnhem (Market Garden)", dates: "Sep 1944", year: 1944, theatre: "western", location: "Arnhem, Netherlands",
    summary: "An ambitious Allied airborne operation to seize Rhine bridges fell short at Arnhem, memorialised as 'a bridge too far'." },
  { id: "aachen", tier: "standard", name: "Battle of Aachen", dates: "Oct 1944", year: 1944, theatre: "western", location: "Aachen, Germany",
    summary: "The first German city captured by the Allies, taken after brutal house-to-house urban combat." },
  { id: "hurtgen", tier: "standard", name: "Battle of Hürtgen Forest", dates: "Sep 1944 – Feb 1945", year: 1944, theatre: "western", location: "Hürtgen Forest, Germany",
    summary: "The longest single battle fought by the US Army in the war, a costly and controversial campaign through dense, heavily-defended forest terrain." },
  { id: "scheldt", tier: "standard", name: "Battle of the Scheldt", dates: "Oct – Nov 1944", year: 1944, theatre: "western", location: "Scheldt Estuary, Netherlands",
    summary: "Canadian-led forces cleared German defences to open the vital port of Antwerp to Allied shipping." },
  { id: "remagen", tier: "standard", name: "Battle of Remagen", dates: "Mar 1945", year: 1945, theatre: "western", location: "Remagen, Germany",
    summary: "US forces captured the Ludendorff Bridge intact, providing the first Allied crossing of the Rhine." },
  { id: "rhineland", tier: "standard", name: "Battle of the Rhineland", dates: "Feb – Mar 1945", year: 1945, theatre: "western", location: "Rhineland, Germany",
    summary: "Allied forces cleared German territory west of the Rhine, setting up the final push into the German heartland." },
  { id: "prague-1945", tier: "standard", name: "Prague Offensive", dates: "May 1945", year: 1945, theatre: "eastern", location: "Prague, Czechoslovakia",
    summary: "The last major Soviet offensive of the European war, liberating Prague days after Germany's official surrender." },
  { id: "wake-island", tier: "standard", name: "Battle of Wake Island", dates: "Dec 1941", year: 1941, theatre: "pacific", location: "Wake Island",
    summary: "A small US garrison mounted a fierce defence before being overwhelmed by Japanese forces in the war's opening weeks." },
  { id: "singapore", tier: "standard", name: "Fall of Singapore", dates: "Feb 1942", year: 1942, theatre: "pacific", location: "Singapore",
    summary: "The surrender of over 80,000 British Commonwealth troops was described by Churchill as the 'worst disaster' in British military history." },
  { id: "java-sea", tier: "standard", name: "Battle of the Java Sea", dates: "Feb 1942", year: 1942, theatre: "pacific", location: "Java Sea",
    summary: "A decisive Japanese naval victory destroyed the main Allied fleet defending the Dutch East Indies." },
  { id: "bataan", tier: "standard", name: "Battle of Bataan", dates: "Jan – Apr 1942", year: 1942, theatre: "pacific", location: "Bataan, Philippines",
    summary: "A prolonged US-Filipino defence ended in surrender, followed by the notorious Bataan Death March of prisoners of war." },
  { id: "corregidor", tier: "standard", name: "Battle of Corregidor", dates: "May 1942", year: 1942, theatre: "pacific", location: "Corregidor, Philippines",
    summary: "The fall of the fortified island completed the Japanese conquest of the Philippines in 1942." },
  { id: "savo-island", tier: "standard", name: "Battle of Savo Island", dates: "Aug 1942", year: 1942, theatre: "pacific", location: "Savo Island, Solomon Islands",
    summary: "One of the worst defeats in US Navy history, as a night attack by Japanese cruisers sank four Allied warships." },
  { id: "eastern-solomons", tier: "standard", name: "Battle of the Eastern Solomons", dates: "Aug 1942", year: 1942, theatre: "pacific", location: "Solomon Islands",
    summary: "A carrier battle during the Guadalcanal campaign that checked a Japanese reinforcement effort." },
  { id: "santa-cruz", tier: "standard", name: "Battle of the Santa Cruz Islands", dates: "Oct 1942", year: 1942, theatre: "pacific", location: "Santa Cruz Islands",
    summary: "A costly carrier battle during the Guadalcanal campaign that left the US Navy with only one operational carrier in the Pacific." },
  { id: "naval-guadalcanal", tier: "standard", name: "Naval Battle of Guadalcanal", dates: "Nov 1942", year: 1942, theatre: "pacific", location: "Guadalcanal, Solomon Islands",
    summary: "A fierce multi-day surface action that thwarted a major Japanese attempt to reinforce and resupply Guadalcanal." },
  { id: "buna-gona", tier: "standard", name: "Battle of Buna–Gona", dates: "Nov 1942 – Jan 1943", year: 1942, theatre: "pacific", location: "New Guinea",
    summary: "A brutal jungle campaign by US and Australian forces ended Japan's overland threat to Port Moresby." },
  { id: "bismarck-sea", tier: "standard", name: "Battle of the Bismarck Sea", dates: "Mar 1943", year: 1943, theatre: "pacific", location: "Bismarck Sea, New Guinea",
    summary: "Allied air power devastated a Japanese troop convoy, effectively ending large-scale Japanese reinforcement of New Guinea by sea." },
  { id: "tarawa", tier: "standard", name: "Battle of Tarawa", dates: "Nov 1943", year: 1943, theatre: "pacific", location: "Tarawa Atoll, Gilbert Islands",
    summary: "A costly amphibious assault against a heavily fortified atoll taught hard lessons in amphibious warfare later applied across the Pacific." },
  { id: "makin", tier: "standard", name: "Battle of Makin", dates: "Nov 1943", year: 1943, theatre: "pacific", location: "Makin Atoll, Gilbert Islands",
    summary: "Fought alongside Tarawa, US forces captured the lightly-defended atoll after several days of resistance." },
  { id: "kwajalein", tier: "standard", name: "Battle of Kwajalein", dates: "Jan – Feb 1944", year: 1944, theatre: "pacific", location: "Kwajalein Atoll, Marshall Islands",
    summary: "Applying lessons from Tarawa, US forces captured the atoll relatively swiftly, accelerating the Central Pacific advance." },
  { id: "eniwetok", tier: "standard", name: "Battle of Eniwetok", dates: "Feb 1944", year: 1944, theatre: "pacific", location: "Eniwetok Atoll, Marshall Islands",
    summary: "A rapid US victory secured a further forward base in the Central Pacific advance toward the Marianas." },
  { id: "saipan", tier: "standard", name: "Battle of Saipan", dates: "Jun – Jul 1944", year: 1944, theatre: "pacific", location: "Saipan, Mariana Islands",
    summary: "A costly battle that brought Japan's home islands within range of US B-29 bombers and led to the fall of Japan's wartime government." },
  { id: "guam", tier: "standard", name: "Battle of Guam", dates: "Jul – Aug 1944", year: 1944, theatre: "pacific", location: "Guam, Mariana Islands",
    summary: "US forces recaptured the island, which had been under Japanese occupation since December 1941." },
  { id: "peleliu", tier: "standard", name: "Battle of Peleliu", dates: "Sep – Nov 1944", year: 1944, theatre: "pacific", location: "Peleliu, Palau Islands",
    summary: "A costly and controversial battle against deeply entrenched Japanese defenders, with a casualty rate among the highest of the Pacific War." },
  { id: "manila", tier: "standard", name: "Battle of Manila", dates: "Feb – Mar 1945", year: 1945, theatre: "pacific", location: "Manila, Philippines",
    summary: "The month-long battle to retake the Philippine capital caused massive civilian casualties and left the city devastated." },
  { id: "attu", tier: "standard", name: "Battle of Attu", dates: "May 1943", year: 1943, theatre: "pacific", location: "Attu Island, Alaska",
    summary: "US forces recaptured the remote Aleutian island in brutal cold-weather fighting, one of the few WWII battles fought on North American soil." },
  { id: "kiska", tier: "standard", name: "Battle of Kiska", dates: "Aug 1943", year: 1943, theatre: "pacific", location: "Kiska Island, Alaska",
    summary: "Allied forces landed to retake the island only to find Japanese forces had secretly evacuated weeks earlier." },
  { id: "milne-bay", tier: "standard", name: "Battle of Milne Bay", dates: "Aug – Sep 1942", year: 1942, theatre: "pacific", location: "New Guinea",
    summary: "Australian-led forces inflicted the first outright defeat of a Japanese amphibious invasion of the war." },
  { id: "imphal", tier: "standard", name: "Battle of Imphal", dates: "Mar – Jul 1944", year: 1944, theatre: "asia", location: "Imphal, India",
    summary: "A major British-Indian victory that halted Japan's invasion of India, considered a key turning point in the Burma campaign." },
  { id: "kohima", tier: "standard", name: "Battle of Kohima", dates: "Apr – Jun 1944", year: 1944, theatre: "asia", location: "Kohima, India",
    summary: "Fought alongside Imphal, fierce close-quarters fighting halted the Japanese offensive and marked the start of their retreat from India." },
  { id: "changde", tier: "standard", name: "Battle of Changde", dates: "Nov – Dec 1943", year: 1943, theatre: "asia", location: "Changde, China",
    summary: "Chinese forces, aided by Allied air support, mounted a determined defence of the strategic city against a major Japanese offensive." },
  { id: "burma-campaign", tier: "standard", name: "Burma Campaign", dates: "1942 – 1945", year: 1942, theatre: "asia", location: "Burma",
    summary: "A prolonged campaign across dense jungle terrain, involving British, Indian, Chinese and American forces, that eventually pushed Japanese forces out of Burma." },

  /* ============================================================
     MULTI-ERA BATTLES — Ancient, Classical, Maratha, Napoleonic
     Historically verified. Estimates clearly marked.
     ============================================================ */

  /* ================= ALEXANDER THE GREAT ================= */
  {
    id: "granicus", tier: "featured", name: "Battle of the Granicus",
    dates: "May 334 BCE", year: -334, theatre: "ancient", location: "River Granicus, Asia Minor (modern Turkey)", mapVariant: 1,
    era: "ancient", conflict: "Wars of Alexander the Great",
    commanders: { side1: "Alexander III of Macedon", side2: "Arsites, Spithridates (Persian satraps)" },
    side1: { label: "Macedon & Greek allies", forces: "~35,000–40,000 (est.)" },
    side2: { label: "Persian Empire (Achaemenid satraps)", forces: "~10,000–20,000 infantry + ~10,000 cavalry (est.)" },
    casualties: [ { value: "~115", label: "Macedonian killed (ancient sources — likely undercount)" }, { value: "~4,000+", label: "Persian killed (est.)" } ],
    significance: "Alexander's first major victory in Asia, opening the door to the conquest of Asia Minor.",
    outcome: "Alexander's cavalry charge across the river carried the day. The Persian satraps' army was routed, and several satraps were killed in the fighting. This victory gave Alexander control of western Asia Minor and set the stage for the advance into the Persian heartland.",
    related: ["issus", "gaugamela"]
  },
  {
    id: "issus", tier: "featured", name: "Battle of Issus",
    dates: "November 333 BCE", year: -333, theatre: "ancient", location: "Issus, Cilicia (southern Turkey)", mapVariant: 2,
    era: "ancient", conflict: "Wars of Alexander the Great",
    commanders: { side1: "Alexander III of Macedon", side2: "Darius III, King of Kings" },
    side1: { label: "Macedon & Greek allies", forces: "~40,000 (est.)" },
    side2: { label: "Persian Empire", forces: "~60,000–100,000 (ancient sources claim much higher; modern estimates vary widely)" },
    casualties: [ { value: "~450", label: "Macedonian killed (ancient sources)" }, { value: "~20,000+", label: "Persian killed (est.)" } ],
    significance: "Alexander's first direct confrontation with the Persian Great King Darius III — a decisive Macedonian victory.",
    outcome: "Alexander personally led the Companion Cavalry charge against Darius's position. Darius fled the battlefield, abandoning his family and royal camp. The victory gave Alexander control of the eastern Mediterranean coast and opened the route to Egypt.",
    related: ["granicus", "gaugamela", "tyre-siege"]
  },
  {
    id: "tyre-siege", tier: "featured", name: "Siege of Tyre",
    dates: "January – July 332 BCE", year: -332, theatre: "ancient", location: "Tyre, Phoenicia (modern Lebanon)", mapVariant: 3,
    era: "ancient", conflict: "Wars of Alexander the Great",
    commanders: { side1: "Alexander III of Macedon", side2: "Azemilcus, King of Tyre" },
    side1: { label: "Macedon & allied naval forces", forces: "~40,000 troops + assembled fleet" },
    side2: { label: "City-state of Tyre", forces: "~30,000 defenders (est.)" },
    casualties: [ { value: "~400", label: "Macedonian killed (ancient sources)" }, { value: "~8,000", label: "Tyrian killed; ~30,000 enslaved" } ],
    significance: "One of Alexander's greatest engineering feats — he built a causeway to reach the island fortress city.",
    outcome: "After seven months, Alexander's forces breached the island city's walls using siege towers mounted on ships and the completed causeway. The city was sacked, demonstrating that no fortress could resist Alexander's combined arms approach.",
    related: ["issus", "gaugamela"]
  },
  {
    id: "gaugamela", tier: "featured", name: "Battle of Gaugamela",
    dates: "1 October 331 BCE", year: -331, theatre: "ancient", location: "Gaugamela, Mesopotamia (near modern Erbil, Iraq)", mapVariant: 4,
    era: "ancient", conflict: "Wars of Alexander the Great",
    commanders: { side1: "Alexander III of Macedon", side2: "Darius III, King of Kings" },
    side1: { label: "Macedon & Greek allies", forces: "~47,000 (est.)" },
    side2: { label: "Persian Empire & allied contingents", forces: "~50,000–100,000 (ancient sources claim 200,000–1,000,000; modern historians dispute these figures)" },
    casualties: [ { value: "~1,200", label: "Macedonian casualties (ancient sources)" }, { value: "~40,000–90,000", label: "Persian casualties (heavily disputed)" } ],
    significance: "The decisive battle of Alexander's Persian campaign — ended the Achaemenid Empire.",
    outcome: "Despite being outnumbered and facing scythed chariots and war elephants, Alexander executed a brilliant tactical plan. His oblique advance and a decisive cavalry wedge assault shattered the Persian centre. Darius again fled, and the Persian Empire effectively ceased to exist as a unified state. Alexander became the undisputed ruler of the largest empire in the ancient world.",
    related: ["issus", "hydaspes", "granicus"]
  },
  {
    id: "hydaspes", tier: "featured", name: "Battle of the Hydaspes",
    dates: "May 326 BCE", year: -326, theatre: "ancient", location: "Hydaspes River (Jhelum River), Punjab (modern Pakistan)", mapVariant: 1,
    era: "ancient", conflict: "Indian Campaign of Alexander",
    commanders: { side1: "Alexander III of Macedon", side2: "King Porus (Paurava kingdom)" },
    side1: { label: "Macedon & Greek allies", forces: "~40,000 (est.)" },
    side2: { label: "Paurava Kingdom", forces: "~30,000–50,000 infantry, ~3,000–4,000 cavalry, ~200 war elephants (est.)" },
    casualties: [ { value: "~700–1,000", label: "Macedonian casualties (est.)" }, { value: "~12,000", label: "Indian killed (ancient sources — uncertain)" } ],
    significance: "Alexander's last major battle — the war elephants of Porus posed the greatest tactical challenge of his career.",
    outcome: "Alexander crossed the rain-swollen Hydaspes River at night and defeated Porus in a hard-fought battle. Impressed by Porus's courage, Alexander restored his kingdom as a vassal ally. The battle marked the eastern limit of Alexander's conquests; his weary army refused to march further into India.",
    related: ["gaugamela"]
  },

  /* ================= ANCIENT ROME ================= */
  {
    id: "cannae", tier: "featured", name: "Battle of Cannae",
    dates: "2 August 216 BCE", year: -216, theatre: "ancient", location: "Cannae, Apulia, Italy", mapVariant: 2,
    era: "ancient", conflict: "Second Punic War",
    commanders: { side1: "Hannibal Barca (Carthage)", side2: "Lucius Aemilius Paullus & Gaius Terentius Varro (Rome)" },
    side1: { label: "Carthage & allies", forces: "~50,000 (est.)" },
    side2: { label: "Roman Republic", forces: "~80,000–86,000 (est.)" },
    casualties: [ { value: "~5,700", label: "Carthaginian casualties" }, { value: "~50,000–70,000", label: "Roman killed (est. — one of the bloodiest single-day losses in ancient history)" } ],
    significance: "Hannibal's masterwork — the double envelopment at Cannae remains one of the most studied tactical victories in military history.",
    outcome: "Hannibal's weaker centre deliberately gave ground, drawing the Romans forward into a pocket, while Carthaginian cavalry destroyed the Roman horsemen and swung behind the Roman lines. The resulting encirclement annihilated the Roman army. Despite this catastrophic defeat, Rome refused to surrender and eventually won the war.",
    related: ["zama"]
  },
  {
    id: "zama", tier: "featured", name: "Battle of Zama",
    dates: "19 October 202 BCE", year: -202, theatre: "ancient", location: "Zama Regia, North Africa (modern Tunisia)", mapVariant: 3,
    era: "ancient", conflict: "Second Punic War",
    commanders: { side1: "Scipio Africanus (Rome)", side2: "Hannibal Barca (Carthage)" },
    side1: { label: "Roman Republic & Numidian allies", forces: "~36,000–40,000 (est.)" },
    side2: { label: "Carthage", forces: "~36,000–58,000 + 80 war elephants (est.)" },
    casualties: [ { value: "~2,500", label: "Roman killed (est.)" }, { value: "~20,000", label: "Carthaginian killed (est.)" } ],
    significance: "The decisive battle of the Second Punic War — ended Carthaginian military power.",
    outcome: "Scipio neutralised Hannibal's elephants by opening gaps in the Roman lines. The Numidian cavalry under Masinissa routed the Carthaginian horsemen and returned to attack Hannibal's rear — using the same double-envelopment tactic Hannibal had used at Cannae. Carthage was forced to accept harsh peace terms, ending its status as a Mediterranean military power.",
    related: ["cannae"]
  },
  {
    id: "alesia", tier: "featured", name: "Siege of Alesia",
    dates: "September 52 BCE", year: -52, theatre: "ancient", location: "Alesia, Gaul (modern Alise-Sainte-Reine, France)", mapVariant: 4,
    era: "ancient", conflict: "Gallic Wars",
    commanders: { side1: "Gaius Julius Caesar (Rome)", side2: "Vercingetorix (Gallic confederation)" },
    side1: { label: "Roman Republic", forces: "~60,000–70,000 legionaries (est.)" },
    side2: { label: "Gallic confederation", forces: "~80,000 inside Alesia + ~250,000 relief force (ancient sources — modern estimates lower)" },
    casualties: [ { value: "~12,800", label: "Roman casualties (est.)" }, { value: "~unknown", label: "Gallic — very heavy; entire garrison surrendered" } ],
    significance: "Caesar's engineering masterwork — he built two concentric rings of fortification to besiege Alesia while defending against a massive relief army.",
    outcome: "Caesar constructed circumvallation (facing inward) and contravallation (facing outward) lines stretching approximately 18 km and 21 km respectively. Despite being attacked from both sides simultaneously, Roman discipline and Caesar's tactical leadership held. The Gallic relief force was defeated and Vercingetorix surrendered, effectively ending Gallic resistance to Roman rule.",
    related: ["cannae"]
  },

  /* ================= MARATHA EMPIRE ================= */
  {
    id: "pratapgad", tier: "featured", name: "Battle of Pratapgad",
    dates: "10 November 1659", year: 1659, theatre: "maratha", location: "Pratapgad Fort, Jawali, Maharashtra, India", mapVariant: 1,
    era: "maratha", conflict: "Maratha–Bijapur conflict",
    commanders: { side1: "Chhatrapati Shivaji Maharaj", side2: "Afzal Khan (Bijapur Sultanate general)" },
    side1: { label: "Maratha forces", forces: "~10,000 (est.)" },
    side2: { label: "Adil Shahi (Bijapur) Sultanate", forces: "~10,000–12,000 (est.)" },
    casualties: [ { value: "Minimal", label: "Maratha losses" }, { value: "~3,000", label: "Bijapur killed; Afzal Khan killed (est.)" } ],
    significance: "A defining moment in Maratha history — Shivaji Maharaj's victory over the veteran Bijapur general established the Marathas as a serious military power.",
    outcome: "Shivaji Maharaj met Afzal Khan at the foot of Pratapgad Fort for negotiations. When Afzal Khan attacked Shivaji Maharaj during the meeting (or vice versa — accounts differ), Shivaji Maharaj killed him using concealed weapons, reportedly a wagh nakh (tiger claw) and a bichwa (dagger). The pre-positioned Maratha forces then launched an immediate assault, routing the leaderless Bijapur army. The victory brought the Jawali region under Maratha control and boosted the morale of the growing Swarajya.",
    related: ["kolhapur-1659", "pavan-khind", "sinhagad"]
  },
  {
    id: "kolhapur-1659", tier: "standard", name: "Battle of Kolhapur",
    dates: "28 December 1659", year: 1659, theatre: "maratha", location: "Kolhapur, Maharashtra, India",
    era: "maratha", conflict: "Maratha–Bijapur conflict",
    summary: "A Maratha victory following Pratapgad. The Bijapur Sultanate sent a large force under Rustam Zaman to avenge Afzal Khan's death. The Marathas, led by Shivaji Maharaj's commanders, defeated this force, further consolidating Maratha control over the southern Deccan."
  },
  {
    id: "pavan-khind", tier: "featured", name: "Battle of Pavan Khind",
    dates: "13 July 1660", year: 1660, theatre: "maratha", location: "Ghod Khind (Pavan Khind), near Vishalgad, Maharashtra, India", mapVariant: 2,
    era: "maratha", conflict: "Maratha–Bijapur conflict (Siege of Panhala)",
    commanders: { side1: "Baji Prabhu Deshpande (Maratha rearguard)", side2: "Siddi Masud (Bijapur Sultanate cavalry)" },
    side1: { label: "Maratha rearguard", forces: "~300 Bandal infantry (est.)" },
    side2: { label: "Adil Shahi (Bijapur) cavalry", forces: "~several thousand (est.)" },
    casualties: [ { value: "~300", label: "Most of the Maratha rearguard killed, including Baji Prabhu" }, { value: "~unknown", label: "Bijapur casualties — significant" } ],
    significance: "One of the most celebrated last stands in Indian military history. Baji Prabhu Deshpande's sacrifice at the narrow mountain pass enabled Shivaji Maharaj's escape from the siege of Panhala Fort.",
    outcome: "During Shivaji Maharaj's daring escape from the Bijapur siege of Panhala Fort, Baji Prabhu Deshpande volunteered to hold the narrow Ghod Khind mountain pass with approximately 300 soldiers against thousands of pursuing cavalry. Despite being mortally wounded, Baji Prabhu continued fighting until he heard the pre-arranged cannon signal from Vishalgad Fort confirming Shivaji Maharaj's safe arrival. The pass was renamed 'Pavan Khind' (Sacred Pass) in his honour.",
    related: ["pratapgad", "sinhagad"]
  },
  {
    id: "purandar-battle", tier: "standard", name: "Siege of Purandar",
    dates: "March – June 1665", year: 1665, theatre: "maratha", location: "Purandar Fort, Pune, Maharashtra, India",
    era: "maratha", conflict: "Maratha–Mughal conflict",
    summary: "Mughal general Mirza Raja Jai Singh I besieged the twin fort of Purandar with a massive army. Murarbaji Deshpande defended the outer fort of Vajragad heroically, dying in its defence. The overwhelming Mughal strength forced Shivaji Maharaj to negotiate the Treaty of Purandar, ceding 23 forts to the Mughals."
  },
  {
    id: "sinhagad", tier: "featured", name: "Battle of Sinhagad",
    dates: "4 February 1670", year: 1670, theatre: "maratha", location: "Sinhagad (Kondhana) Fort, Pune, Maharashtra, India", mapVariant: 3,
    era: "maratha", conflict: "Maratha–Mughal conflict",
    commanders: { side1: "Tanaji Malusare (Maratha assault commander)", side2: "Udaybhan Rathod (Mughal garrison commander)" },
    side1: { label: "Maratha assault force", forces: "~300–500 Maval soldiers (est.)" },
    side2: { label: "Mughal garrison", forces: "~1,000–1,500 (est.)" },
    casualties: [ { value: "~300+", label: "Maratha killed including Tanaji Malusare" }, { value: "~1,000+", label: "Mughal garrison killed including Udaybhan" } ],
    significance: "A legendary night assault that recaptured a strategically vital fort from the Mughals. Tanaji Malusare's sacrifice became immortal in Maratha history.",
    outcome: "Tanaji Malusare led a daring night assault, scaling the steep cliff face of the fort using ropes (tradition mentions a large monitor lizard named Yashwanti helping anchor the ropes). The small Maratha force overwhelmed the Mughal garrison in fierce hand-to-hand fighting. Both Tanaji and the Mughal commander Udaybhan Rathod were killed. Upon learning of Tanaji's death, Shivaji Maharaj reportedly said: 'Gad aala, pan Sinha gela' — 'The fort is won, but the lion is lost.' The fort was renamed Sinhagad (Lion's Fort) in his honour.",
    related: ["pratapgad", "pavan-khind", "salher"]
  },
  {
    id: "salher", tier: "featured", name: "Battle of Salher",
    dates: "February 1672", year: 1672, theatre: "maratha", location: "Salher Fort, Nashik, Maharashtra, India", mapVariant: 4,
    era: "maratha", conflict: "Maratha–Mughal conflict",
    commanders: { side1: "Moropant Pingle & Prataprao Gujar (Maratha generals)", side2: "Ikhlas Khan & Bahlol Khan (Mughal commanders)" },
    side1: { label: "Maratha cavalry and infantry", forces: "~40,000–50,000 (est.)" },
    side2: { label: "Mughal Empire", forces: "~40,000–50,000 (est.)" },
    casualties: [ { value: "~2,000", label: "Maratha killed (est.)" }, { value: "~6,000", label: "Mughal killed; Ikhlas Khan captured (est.)" } ],
    significance: "The largest pitched battle between the Marathas and the Mughals — a decisive open-field Maratha victory that proved the Marathas could defeat the Mughals in conventional warfare, not just guerrilla tactics.",
    outcome: "The Mughals had besieged the Maratha fort of Salher. Shivaji Maharaj dispatched two armies under Moropant Pingle and Prataprao Gujar in a pincer movement. The Maratha forces attacked the Mughals from two sides simultaneously, routing the Mughal army in a decisive open-field engagement. This was the first major pitched battle in which the Marathas decisively defeated the Mughal army.",
    related: ["sinhagad", "pratapgad"]
  },
  {
    id: "panipat-3", tier: "featured", name: "Third Battle of Panipat",
    dates: "14 January 1761", year: 1761, theatre: "maratha", location: "Panipat, Haryana, India", mapVariant: 1,
    era: "maratha", conflict: "Maratha–Afghan conflict",
    commanders: { side1: "Sadashivrao Bhau (Maratha Generalissimo)", side2: "Ahmad Shah Durrani (Afghan Empire)" },
    side1: { label: "Maratha Confederacy", forces: "~45,000–60,000 combat troops + ~200,000 non-combatants (est.)" },
    side2: { label: "Durrani Empire & Indian allies", forces: "~60,000–80,000 (est.)" },
    casualties: [ { value: "~30,000–40,000", label: "Maratha killed (est.)" }, { value: "~20,000–30,000", label: "Afghan & allied killed (est.)" } ],
    significance: "One of the bloodiest battles of the 18th century. A devastating Maratha defeat that temporarily halted Maratha expansion into northern India.",
    outcome: "After months of manoeuvring and starvation, the Maratha army launched a desperate assault against the Afghan forces. Despite initial success, the Maratha lines broke when key commanders including Vishwasrao (the Peshwa's son and heir) were killed. The resulting rout caused catastrophic Maratha casualties. The defeat was a profound shock but did not destroy the Maratha Empire — it recovered under Mahadji Shinde within a decade.",
    related: ["salher", "wadgaon"]
  },
  {
    id: "wadgaon", tier: "standard", name: "Battle of Wadgaon",
    dates: "12–13 January 1779", year: 1779, theatre: "maratha", location: "Wadgaon (Talegaon), near Pune, Maharashtra, India",
    era: "maratha", conflict: "First Anglo-Maratha War",
    summary: "A significant Maratha victory over the British East India Company. Maratha forces under Mahadji Shinde and Tukojirao Holkar surrounded and defeated a British force, forcing them to sign the humiliating Convention of Wadgaon — one of the most significant British military defeats in 18th-century India."
  },
  {
    id: "kharda", tier: "standard", name: "Battle of Kharda",
    dates: "11 March 1795", year: 1795, theatre: "maratha", location: "Kharda, near Ahmednagar, Maharashtra, India",
    era: "maratha", conflict: "Maratha–Nizam conflict",
    summary: "The last significant Maratha military victory. A combined Maratha force under the Peshwa's generals decisively defeated the Nizam of Hyderabad's army, reasserting Maratha dominance in the Deccan."
  },

  /* ================= NAPOLEONIC ERA ================= */
  {
    id: "austerlitz", tier: "featured", name: "Battle of Austerlitz",
    dates: "2 December 1805", year: 1805, theatre: "napoleonic", location: "Austerlitz, Moravia (modern Slavkov, Czech Republic)", mapVariant: 2,
    era: "napoleonic", conflict: "War of the Third Coalition",
    commanders: { side1: "Napoleon Bonaparte (French Empire)", side2: "Tsar Alexander I & Emperor Francis II (Russia & Austria)" },
    side1: { label: "French Empire (Grande Armée)", forces: "~68,000 (est.)" },
    side2: { label: "Russian Empire & Austrian Empire", forces: "~85,000–90,000 (est.)" },
    casualties: [ { value: "~1,300 killed", label: "French casualties: ~9,000 total" }, { value: "~16,000 killed/wounded", label: "Allied casualties: ~27,000 total (inc. 12,000 captured)" } ],
    significance: "Napoleon's tactical masterpiece — widely considered one of the greatest battles in military history. Known as the 'Battle of the Three Emperors.'",
    outcome: "Napoleon deliberately weakened his right flank to lure the Allies into attacking, then drove through their centre at the Pratzen Heights, splitting their army in two. The resulting envelopment destroyed the Allied army. The victory led to the Treaty of Pressburg, dissolved the Holy Roman Empire, and established French hegemony over continental Europe.",
    related: ["jena", "borodino", "waterloo"]
  },
  {
    id: "jena", tier: "featured", name: "Battle of Jena–Auerstedt",
    dates: "14 October 1806", year: 1806, theatre: "napoleonic", location: "Jena & Auerstedt, Saxony (modern Germany)", mapVariant: 3,
    era: "napoleonic", conflict: "War of the Fourth Coalition",
    commanders: { side1: "Napoleon Bonaparte & Marshal Davout", side2: "Prince Hohenlohe & Duke of Brunswick (Prussia)" },
    side1: { label: "French Empire", forces: "~54,000 at Jena + ~27,000 at Auerstedt" },
    side2: { label: "Kingdom of Prussia", forces: "~38,000 at Jena + ~50,000 at Auerstedt" },
    casualties: [ { value: "~5,000", label: "French killed/wounded at Jena" }, { value: "~25,000+", label: "Prussian killed/wounded/captured (combined)" } ],
    significance: "The twin battles shattered the Prussian army in a single day, leading to the occupation of Berlin within weeks.",
    outcome: "In simultaneous battles, Napoleon defeated the Prussian force at Jena while his Marshal Davout — outnumbered nearly 2 to 1 — won an even more remarkable victory at Auerstedt against the main Prussian army. The Prussian military, still largely following Frederick the Great's outdated tactics, collapsed completely. Berlin fell on 27 October.",
    related: ["austerlitz", "borodino"]
  },
  {
    id: "trafalgar", tier: "featured", name: "Battle of Trafalgar",
    dates: "21 October 1805", year: 1805, theatre: "napoleonic", location: "Cape Trafalgar, off the coast of Spain", mapVariant: 4,
    era: "napoleonic", conflict: "War of the Third Coalition",
    commanders: { side1: "Admiral Horatio Nelson (Royal Navy)", side2: "Admiral Pierre-Charles Villeneuve (French & Spanish fleet)" },
    side1: { label: "Royal Navy (United Kingdom)", forces: "27 ships of the line" },
    side2: { label: "French & Spanish combined fleet", forces: "33 ships of the line" },
    casualties: [ { value: "~449 killed", label: "British killed (including Nelson); ~1,242 wounded" }, { value: "~4,400 killed", label: "French & Spanish killed; 22 ships captured/destroyed" } ],
    significance: "Britain's greatest naval victory — established unchallenged British naval supremacy for over a century. Nelson was killed at the moment of his triumph.",
    outcome: "Nelson broke with tradition by attacking the Franco-Spanish line in two perpendicular columns, cutting it into segments and engaging in close-range broadsides. The tactic was devastating: 22 enemy ships were captured or destroyed without a single British ship lost. However, Nelson was mortally wounded by a French sharpshooter during the battle. Trafalgar ended any realistic prospect of a French invasion of Britain.",
    related: ["austerlitz"]
  },
  {
    id: "borodino", tier: "featured", name: "Battle of Borodino",
    dates: "7 September 1812", year: 1812, theatre: "napoleonic", location: "Borodino, near Moscow, Russia", mapVariant: 1,
    era: "napoleonic", conflict: "French Invasion of Russia",
    commanders: { side1: "Napoleon Bonaparte (French Empire)", side2: "General Mikhail Kutuzov (Russian Empire)" },
    side1: { label: "French Empire & allies (Grande Armée)", forces: "~130,000–135,000" },
    side2: { label: "Russian Empire", forces: "~120,000–130,000" },
    casualties: [ { value: "~30,000–35,000", label: "French killed/wounded" }, { value: "~39,000–45,000", label: "Russian killed/wounded" } ],
    significance: "The bloodiest single day of the Napoleonic Wars. A Pyrrhic French tactical victory that failed to destroy the Russian army.",
    outcome: "Napoleon attacked the Russian fortified positions in a series of frontal assaults, particularly against the Bagration flèches and the Great Redoubt. The Russians fought with extraordinary tenacity before conducting an orderly withdrawal. Napoleon entered Moscow a week later, but found it largely abandoned and soon set ablaze. Without a decisive victory to force a peace, the subsequent retreat from Moscow destroyed the Grande Armée.",
    related: ["austerlitz", "leipzig", "waterloo"]
  },
  {
    id: "leipzig", tier: "featured", name: "Battle of Leipzig (Battle of the Nations)",
    dates: "16–19 October 1813", year: 1813, theatre: "napoleonic", location: "Leipzig, Saxony (modern Germany)", mapVariant: 2,
    era: "napoleonic", conflict: "War of the Sixth Coalition",
    commanders: { side1: "Napoleon Bonaparte", side2: "Schwarzenberg, Blücher, Bernadotte (Austria, Prussia, Russia, Sweden)" },
    side1: { label: "French Empire & allies", forces: "~195,000 (est.)" },
    side2: { label: "Coalition (Austria, Russia, Prussia, Sweden)", forces: "~365,000 (est.)" },
    casualties: [ { value: "~38,000", label: "French killed/wounded" }, { value: "~54,000", label: "Coalition killed/wounded" } ],
    significance: "The largest battle before World War I — involved over 500,000 troops from more than a dozen nations. Decided the fate of Napoleon's empire.",
    outcome: "Overwhelmed by the sheer weight of the coalition forces converging from multiple directions, Napoleon's army was driven from its positions around Leipzig. The defection of Saxon and other German allied troops during the battle worsened the French position. Napoleon retreated westward across the Rhine, effectively ending French control of Germany and central Europe. Paris fell six months later.",
    related: ["borodino", "waterloo"]
  },
  {
    id: "waterloo", tier: "featured", name: "Battle of Waterloo",
    dates: "18 June 1815", year: 1815, theatre: "napoleonic", location: "Waterloo, near Brussels, Belgium", mapVariant: 3,
    era: "napoleonic", conflict: "Hundred Days / War of the Seventh Coalition",
    commanders: { side1: "Napoleon Bonaparte (French Empire)", side2: "Duke of Wellington (Britain & allies) & Gebhard von Blücher (Prussia)" },
    side1: { label: "French Empire (Armée du Nord)", forces: "~72,000" },
    side2: { label: "Anglo-allied army + Prussian army", forces: "~68,000 (Wellington) + ~50,000 (Blücher arriving during battle)" },
    casualties: [ { value: "~25,000", label: "French killed/wounded" }, { value: "~22,000", label: "Coalition killed/wounded (combined)" } ],
    significance: "Napoleon's final battle — ended the Napoleonic Wars and reshaped European politics for a century.",
    outcome: "Napoleon attacked Wellington's defensive position throughout the day, launching cavalry charges and the assault on Hougoumont farmhouse. Wellington's army held on grimly until the late-afternoon arrival of Blücher's Prussian forces on Napoleon's right flank. The combined pressure broke the French army. Napoleon's final guard attack failed, and the French army disintegrated. Napoleon abdicated four days later and was exiled to Saint Helena, where he died in 1821.",
    related: ["austerlitz", "borodino", "leipzig"]
  }
];

/* ---- Era metadata for multi-era filtering (extends theatre system) ---- */
export const ERA_COLORS: Record<string, string> = {
  ancient:    "#8B6914",
  maratha:    "#CD7F32",
  napoleonic: "#4A6741",
  wwi:        "#6B5B45",
  wwii:       "#5C6670"
};

export const ERA_LABELS: Record<string, string> = {
  ancient:    "Ancient & Classical",
  maratha:    "Maratha Empire",
  napoleonic: "Napoleonic Era",
  wwi:        "World War I",
  wwii:       "World War II"
};

/* Add era-specific theatre entries */
THEATRE_COLORS.ancient    = "#8B6914";
THEATRE_COLORS.maratha    = "#CD7F32";
THEATRE_COLORS.napoleonic = "#4A6741";

THEATRE_LABELS.ancient    = "Ancient & Classical";
THEATRE_LABELS.maratha    = "Maratha Empire";
THEATRE_LABELS.napoleonic = "Napoleonic Era";
