/* =========================================================
   MARCH OF EMPIRE — Multimedia Gallery page logic
   ========================================================= */

const GALLERY_ITEMS = [
  /* ================= ANCIENT & CLASSICAL ================= */
  { cat: "Ancient", caption: "The Alexander Mosaic (House of the Faun, Pompeii) — Alexander charging Darius III at Issus", icon: "🏛", color1: "#8B6914", color2: "#1B1F1B" },
  { cat: "Ancient", caption: "Trajan's Column relief depicting Roman Legionaries crossing the Danube on a pontoon bridge", icon: "⚔", color1: "#7C2A21", color2: "#1B1F1B" },
  { cat: "Ancient", caption: "Macedonian Syntagma — 256-man Sarissa pike phalanx reconstruction", icon: "🛡", color1: "#8B6914", color2: "#2A2010" },
  { cat: "Ancient", caption: "Hannibal Barca crossing the Alps with African war elephants, 218 BCE", icon: "🐘", color1: "#6B5B45", color2: "#1B1F1B" },

  /* ================= MARATHA EMPIRE ================= */
  { cat: "Maratha", caption: "Maha Darwaja and fortified bastion battlements at Raigad Fort, capital of the Maratha Empire", icon: "🏰", color1: "#CD7F32", color2: "#1B1F1B" },
  { cat: "Maratha", caption: "Pratapgad Fort double rampart citadel overlooking the dense Jawali forest valley", icon: "⛰", color1: "#8F5E24", color2: "#14171A" },
  { cat: "Maratha", caption: "Sindhudurg Fort — Unconquered ocean fortress walls rising out of the Arabian Sea", icon: "🌊", color1: "#2E5C6E", color2: "#0B151C" },
  { cat: "Maratha", caption: "Maratha Mavala infantry wielding traditional Dandpatta gauntlet swords and shield", icon: "⚔", color1: "#CD7F32", color2: "#2B1A08" },

  /* ================= NAPOLEONIC ERA ================= */
  { cat: "Napoleonic", caption: "Jacques-Louis David: Napoleon Crossing the Saint-Bernard Pass on horseback, 1800", icon: "🎨", color1: "#4A6741", color2: "#1B1F1B" },
  { cat: "Napoleonic", caption: "François Gérard: The Battle of Austerlitz (1805) — General Rapp presenting captured standards", icon: "🎖", color1: "#3B5234", color2: "#10160F" },
  { cat: "Napoleonic", caption: "British 95th Rifles riflemen in Baker rifle skirmish line at Waterloo", icon: "🎯", color1: "#2F4F2F", color2: "#141C14" },
  { cat: "Napoleonic", caption: "HMS Victory engaging the Redoutable at the Battle of Trafalgar, 1805", icon: "⚓", color1: "#2E5C6E", color2: "#1B1F1B" },

  /* ================= WORLD WAR II PRESERVED ================= */
  { cat: "Photographs", caption: "British troops evacuated from the Dunkirk beaches, 1940", icon: "📷", color1:"#4B5320", color2:"#1B1F1B" },
  { cat: "Tanks", caption: "German Tiger I heavy tank on the Eastern Front", icon: "🛡", color1:"#7C2A21", color2:"#1B1F1B" },
  { cat: "Aircraft", caption: "RAF Spitfires scramble during the Battle of Britain", icon: "✈", color1:"#3D6E85", color2:"#1B1F1B" },
  { cat: "Naval Ships", caption: "US Navy Essex-class carrier task force, Pacific 1944", icon: "⚓", color1:"#2E5C6E", color2:"#1B1F1B" },
  { cat: "Battlefields", caption: "The ruins of Stalingrad after months of urban combat", icon: "🏚", color1:"#B23A2E", color2:"#1B1F1B" },
  { cat: "Maps", caption: "Allied planning map for the Normandy invasion", icon: "🗺", color1:"#C7A254", color2:"#8F7439" },
  { cat: "Photographs", caption: "Flag-raising on Mount Suribachi, Iwo Jima, 1945", icon: "📷", color1:"#3D6E85", color2:"#1B1F1B" },
  { cat: "Tanks", caption: "Soviet T-34 tanks advancing near Kursk, 1943", icon: "🛡", color1:"#B23A2E", color2:"#1B1F1B" },
  { cat: "Aircraft", caption: "B-17 Flying Fortresses on a daylight bombing run", icon: "✈", color1:"#6B7A34", color2:"#1B1F1B" },
  { cat: "Naval Ships", caption: "A German Type VII U-boat departing for patrol", icon: "⚓", color1:"#2E5C6E", color2:"#0B0D0A" },
  { cat: "Battlefields", caption: "Normandy beachhead in the days following D-Day", icon: "🏚", color1:"#C7A254", color2:"#1B1F1B" },
  { cat: "Maps", caption: "Pacific theatre situation map, late 1944", icon: "🗺", color1:"#3D6E85", color2:"#1B1F1B" },
  { cat: "Photographs", caption: "V-E Day celebrations in London, 8 May 1945", icon: "📷", color1:"#C7A254", color2:"#8F7439" },
  { cat: "Battlefields", caption: "Monte Cassino abbey following the 1944 battle", icon: "🏚", color1:"#9C8348", color2:"#1B1F1B" },
  { cat: "Naval Ships", caption: "USS Missouri, site of Japan's formal surrender", icon: "⚓", color1:"#5C6670", color2:"#1B1F1B" },
  { cat: "Aircraft", caption: "Japanese Zero fighters aboard a fleet carrier", icon: "✈", color1:"#8F4A3E", color2:"#1B1F1B" }
];

document.addEventListener('chrome:ready', () => {
  renderGallery('all');
  document.querySelectorAll('#galleryFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#galleryFilters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderGallery(chip.dataset.cat);
    });
  });
});

function renderGallery(cat) {
  const list = cat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === cat);
  const el = document.getElementById('galleryGrid');
  if (!el) return;

  el.innerHTML = list.map(g => `
    <div class="gallery-item reveal" style="background:linear-gradient(150deg, ${g.color1}, ${g.color2});">
      <span class="icon">${g.icon}</span>
      <div class="cap">${g.caption}</div>
    </div>
  `).join('');

  if (typeof WW2_UI !== 'undefined' && WW2_UI.initReveal) {
    WW2_UI.initReveal();
  }
}
