import { Battlefield } from '../types';

export const BATTLEFIELDS: Battlefield[] = [
  {
    id: 'pratapgad-field',
    name: 'Jawali Forest & Pratapgad Slopes',
    battleName: 'Battle of Pratapgad (1659)',
    location: 'Mahabaleshwar, Satara District, Maharashtra, India',
    region: 'Western Ghats (Sahyadri Mountains)',
    coordinates: '17.9333° N, 73.5833° E',
    era: 'maratha',
    terrain: 'Extremely dense, nearly impenetrable subtropical mountain jungle (Jawali forest), steep ravines, and vertical basalt escarpments dominated by the towering twin-rampart citadel of Pratapgad Fort at 1,080 meters elevation.',
    strategicGeography: 'The Jawali valley was historically known as a natural fortress where cavalry armies could neither deploy nor maneuver. The narrow forest trails allowed only single-file movement, making Bijapur’s 10,000-strong heavy cavalry force completely vulnerable to concealed mountain ambushes.',
    tacticalImpact: 'Shivaji Maharaj deliberately selected this meeting site at the foot of Pratapgad. When Afzal Khan was struck down during their meeting, pre-arranged cannon shots from Pratapgad battlements signaled hidden Mavala divisions under Kanhoji Jedhe and Netaji Palkar to emerge from the dense foliage, encircling and decimating the trapped Bijapur army.',
    commanders: ['Chhatrapati Shivaji Maharaj', 'Kanhoji Jedhe', 'Moropant Pingle', 'Afzal Khan (Bijapur)'],
    modernCondition: 'Pratapgad Fort stands remarkably well-preserved as a national historical monument. The dense Jawali forests and Koyna river valley retain their rugged, dramatic geographical character.',
    memorials: 'Equestrian bronze statue of Chhatrapati Shivaji Maharaj inaugurated by Jawaharlal Nehru in 1957; the tomb of Afzal Khan located at the base of the fort as per Shivaji Maharaj\'s honorable decree.',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Pratapgad Fort overlooking Jawali Valley',
      caption: 'The dramatic cliffs and dense forest of the Jawali basin trapped the invading Bijapur army.',
      source: 'Archaeological Survey of India / Maharashtra Tourism',
      license: 'Public Domain / Educational',
      credit: 'Historical Geography Archive',
      alt: 'Pratapgad Battlefield'
    }
  },
  {
    id: 'austerlitz-field',
    name: 'The Pratzen Heights & Goldbach Valley',
    battleName: 'Battle of Austerlitz (1805)',
    location: 'Slavkov u Brna, South Moravian Region, Czech Republic',
    region: 'Central Europe (Moravia)',
    coordinates: '49.1294° N, 16.7628° E',
    era: 'napoleonic',
    terrain: 'Rolling agricultural hills bisected by the Goldbach stream, marshes, and ponds in the south, dominated in the center by the commanding plateau of the Pratzen Heights (elevation ~300 meters).',
    strategicGeography: 'Situated on the main road between Vienna and Olmütz. Whoever controlled the Pratzen Heights possessed panoramic command of the entire battlefield and could divide the opponent\'s forces.',
    tacticalImpact: 'Napoleon\'s tactical masterpiece: he deliberately feigned weakness on his right flank along the Goldbach, tempting the Austro-Russian allies to strip their center on the Pratzen Heights to launch a southern envelopment. When the allied center was hollowed out, Soult’s IV Corps burst through the morning mist to seize the heights, cutting the allied army in half.',
    commanders: ['Napoleon Bonaparte', 'Louis-Nicolas Davout', 'Jean-de-Dieu Soult', 'Tsar Alexander I', 'General Mikhail Kutuzov'],
    modernCondition: 'Preserved agrarian landscape with preserved historic villages (Telnitz, Sokolnitz) and the commanding hill crest unchanged.',
    memorials: 'The Peace Memorial (Mohyla míru) designed by Josef Fanta atop the Pratzen Heights, honoring the fallen of all three participating nations.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Pratzen Heights at Austerlitz',
      caption: 'Napoleon lured the Austro-Russian coalition off the Pratzen Heights before splitting their army in two.',
      source: 'Moravian Museum Archive',
      license: 'Public Domain',
      credit: 'European Battlefield Society',
      alt: 'Austerlitz Pratzen Heights'
    }
  },
  {
    id: 'gaugamela-field',
    name: 'The Plains of Gaugamela',
    battleName: 'Battle of Gaugamela (331 BCE)',
    location: 'Near Erbil and Mosul, Nineveh Governorate, Modern Iraq',
    region: 'Upper Mesopotamia',
    coordinates: '36.3600° N, 43.2500° E',
    era: 'macedonian',
    terrain: 'Vast, flat arid plain between the Tigris River and the Zagros Mountains, deliberately leveled by Darius III’s engineers to facilitate the charge of scythed chariots and massed Persian cavalry.',
    strategicGeography: 'The gateway to the imperial capitals of Babylon, Susa, and Persepolis. The wide expanse allowed Darius to deploy an immense host estimated at over 100,000 men with room for double envelopment.',
    tacticalImpact: 'Alexander countered the flat terrain by advancing his line at an oblique angle toward the Persian right, drawing Persian cavalry away from the center. When a gap opened between Darius\'s center and left, Alexander formed his Companion cavalry and Hypaspists into a gigantic wedge and charged straight at Darius\'s royal bodyguard.',
    commanders: ['Alexander the Great', 'Parmenion', 'Darius III (Persia)', 'Bessus (Bactria)'],
    modernCondition: 'Agricultural plains of northern Iraq, near modern Tel Gomel. Archaeological surveys have identified terrain features consistent with ancient accounts.',
    memorials: 'Historic archaeological marker and site documentation under Kurdish Regional Antiquities Authority.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Plains of Upper Mesopotamia',
      caption: 'Alexander executed a wedge charge into the center gap on the leveled plains of Gaugamela.',
      source: 'British Museum / Antiquities Archive',
      license: 'Public Domain',
      credit: 'Classical Historical Mapping',
      alt: 'Gaugamela Battlefield'
    }
  },
  {
    id: 'cannae-field',
    name: 'The Aufidus Plain at Cannae',
    battleName: 'Battle of Cannae (216 BCE)',
    location: 'Near Barletta, Apulia, Southern Italy',
    region: 'Adriatic Coast of Italy',
    coordinates: '41.3061° N, 16.1528° E',
    era: 'roman',
    terrain: 'Open, sun-baked agricultural plain bordered on one flank by the meandering Aufidus River (modern Ofanto), swept by the strong Volturnus wind blowing dust into Roman faces.',
    strategicGeography: 'Hannibal seized the Roman supply depot at Cannae, cutting off Rome from the grain-rich southern agricultural provinces and forcing the Roman Consuls to seek decisive battle.',
    tacticalImpact: 'Hannibal deployed his weaker Iberian and Celtic infantry in an outward convex crescent while placing veteran African infantry and superior Numidian cavalry on the wings. As the massed 86,000-strong Roman legion pressed forward, Hannibal\'s center yielded backward into a concave bowl, drawing Rome inside until the African infantry and cavalry snapped shut the trap in history\'s premier double envelopment.',
    commanders: ['Hannibal Barca', 'Hasdrubal', 'Lucius Aemilius Paullus (Rome)', 'Gaius Terentius Varro (Rome)'],
    modernCondition: 'Cannae archaeological park (Canne della Battaglia) featuring ancient ruins, an antiquarium museum, and preserved plain topography.',
    memorials: 'Column memorial and Latin inscription at the summit of the Cannae citadel overlooking the Ofanto River plain.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'The Battlefield of Cannae in Apulia',
      caption: 'The meandering Aufidus River anchored Hannibal\'s flank as he executed history\'s most studied double envelopment.',
      source: 'Soprintendenza Archeologia della Puglia',
      license: 'Public Domain',
      credit: 'Italian National Heritage Archive',
      alt: 'Cannae Battlefield'
    }
  },
  {
    id: 'waterloo-field',
    name: 'The Mont-Saint-Jean Ridge',
    battleName: 'Battle of Waterloo (1815)',
    location: 'Waterloo and Braine-l\'Alleud, Walloon Brabant, Belgium',
    region: 'Low Countries',
    coordinates: '50.6797° N, 4.4061° E',
    era: 'napoleonic',
    terrain: 'A narrow 4-kilometer front consisting of two parallel low ridges separated by a shallow valley of sodden mud and rye crops, anchored by three walled forward bastion outposts: Hougoumont chateau, La Haye Sainte farm, and Papelotte.',
    strategicGeography: 'Located on the Brussels highway where the Charleroi road crosses the Ohain sunken road. Wellington specifically chose this ridge to protect the approaches to Brussels while awaiting Blücher’s Prussian army.',
    tacticalImpact: 'Wellington positioned the majority of his Anglo-Allied troops on the reverse slope of Mont-Saint-Jean, shielding them from Napoleon’s massed Grand Battery artillery. The forward bastions of Hougoumont and La Haye Sainte broken French column assaults, buying time until Blücher’s 50,000 Prussians slammed into Napoleon’s right flank at Plancenoit.',
    commanders: ['Napoleon Bonaparte', 'Duke of Wellington', 'Field Marshal Gebhard von Blücher', 'Marshal Michel Ney'],
    modernCondition: 'One of the best-preserved battlefields in Europe, legally protected from commercial development since 1914.',
    memorials: 'The Lion\'s Mound (Butte du Lion) — an artificial 43-meter conical hill topped by a 28-ton bronze lion cast from captured French cannons; Panorama of the Battle of Waterloo rotunda.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'The Lion Mound on the Battlefield of Waterloo',
      caption: 'Wellington shielded his infantry behind the reverse slope of Mont-Saint-Jean until the Prussian arrival.',
      source: 'Mémorial 1815 / Waterloo Heritage Trust',
      license: 'Public Domain',
      credit: 'Historic Battlefields of Europe',
      alt: 'Waterloo Battlefield'
    }
  },
  {
    id: 'stalingrad-field',
    name: 'The Volga Shore & Mamayev Kurgan',
    battleName: 'Battle of Stalingrad (1942–1943)',
    location: 'Volgograd (formerly Stalingrad), Russia',
    region: 'Lower Volga Basin',
    coordinates: '48.7428° N, 44.5372° E',
    era: 'ww2',
    terrain: 'A narrow 30-mile urban corridor of concrete factory monoliths (Red Barricades, Tractor Plant, Red October), multi-story apartment blocks, rail yards, and gullies running down to the sheer bank of the 1-mile-wide Volga River, dominated by the ancient burial mound of Mamayev Kurgan (Hill 102).',
    strategicGeography: 'Stalingrad was the vital industrial and railway hub securing the Volga water corridor, through which oil from the Caucasus and Lend-Lease supplies from Iran flowed to Moscow.',
    tacticalImpact: 'General Vasily Chuikov’s 62nd Army adopted the tactic of "hugging the enemy" — staying within grenade-throwing distance of German lines to negate the Luftwaffe’s air superiority. Grinding room-to-room, cellar-to-cellar combat sucked the German 6th Army into an attritional quagmire until Operation Uranus encircled them from the flanks.',
    commanders: ['Vasily Chuikov', 'Georgy Zhukov', 'Friedrich Paulus (Germany)', 'Erich von Manstein'],
    modernCondition: 'Rebuilt modern city of Volgograd; key ruins such as the Pavlov House and the Grudinina Mill preserved in their war-torn condition as sacred monuments.',
    memorials: 'The Motherland Calls (Rodina-Mat Zovyot!) on Mamayev Kurgan — an 85-meter concrete colossus; Hall of Military Glory with eternal flame.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    imageMeta: {
      title: 'Mamayev Kurgan Memorial overlooking Volgograd',
      caption: 'The heights of Mamayev Kurgan changed hands dozens of times during the brutal urban struggle.',
      source: 'Stalingrad Battle Museum-Reserve',
      license: 'Public Domain / Archival',
      credit: 'WWII Historical Memorials',
      alt: 'Stalingrad Battlefield'
    }
  }
];
