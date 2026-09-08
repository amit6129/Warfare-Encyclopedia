const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 1. data-battles.js -> battles.ts
let battleContent = fs.readFileSync(path.join(__dirname, 'js', 'data-battles.js'), 'utf8');
battleContent = battleContent.replace('const BATTLES =', 'import { Battle } from "../types";\n\nexport const BATTLES: any[] =');
fs.writeFileSync(path.join(dataDir, 'battles.ts'), battleContent);

// 2. data-leaders.js -> commanders.ts
let leaderContent = fs.readFileSync(path.join(__dirname, 'js', 'data-leaders.js'), 'utf8');
leaderContent = leaderContent.replace('const LEADERS =', 'import { Commander } from "../types";\n\nexport const COMMANDERS: any[] =');
fs.writeFileSync(path.join(dataDir, 'commanders.ts'), leaderContent);

// 3. data-forts.js -> forts.ts
let fortContent = fs.readFileSync(path.join(__dirname, 'js', 'data-forts.js'), 'utf8');
fortContent = fortContent.replace('const FORTS =', 'import { Fort } from "../types";\n\nexport const FORTS: any[] =');
fs.writeFileSync(path.join(dataDir, 'forts.ts'), fortContent);

// 4. data-operations.js -> campaigns.ts
let opsContent = fs.readFileSync(path.join(__dirname, 'js', 'data-operations.js'), 'utf8');
opsContent = opsContent.replace('const OPERATIONS =', 'import { Campaign } from "../types";\n\nexport const CAMPAIGNS: any[] =');
fs.writeFileSync(path.join(dataDir, 'campaigns.ts'), opsContent);

// 5. data-weapons.js -> weapons.ts
let wepContent = fs.readFileSync(path.join(__dirname, 'js', 'data-weapons.js'), 'utf8');
wepContent = wepContent.replace('const WEAPONS =', 'import { Weapon } from "../types";\n\nexport const WEAPONS: any =');
fs.writeFileSync(path.join(dataDir, 'weapons.ts'), wepContent);

// 6. data-timeline.js -> timeline.ts
let timeContent = fs.readFileSync(path.join(__dirname, 'js', 'data-timeline.js'), 'utf8');
timeContent = timeContent.replace('const TIMELINE =', 'export const TIMELINE: any[] =');
fs.writeFileSync(path.join(dataDir, 'timeline.ts'), timeContent);

// 7. data-resources.js -> resources.ts
let resContent = fs.readFileSync(path.join(__dirname, 'js', 'data-resources.js'), 'utf8');
resContent = resContent.replace('const GLOSSARY =', 'export const GLOSSARY: any[] =')
                       .replace('const FAQS =', 'export const FAQS: any[] =')
                       .replace('const BOOKS =', 'export const BOOKS: any[] =')
                       .replace('const DOCUMENTARIES =', 'export const DOCUMENTARIES: any[] =');
fs.writeFileSync(path.join(dataDir, 'resources.ts'), resContent);

// 8. data-countries.js -> countries.ts
let countContent = fs.readFileSync(path.join(__dirname, 'js', 'data-countries.js'), 'utf8');
countContent = countContent.replace('const COUNTRIES =', 'import { Country } from "../types";\n\nexport const COUNTRIES: any[] =');
fs.writeFileSync(path.join(dataDir, 'countries.ts'), countContent);

// 9. data-maps.js -> mapsData.ts
let mapsContent = fs.readFileSync(path.join(__dirname, 'js', 'data-maps.js'), 'utf8');
mapsContent = mapsContent.replace('const MAPS_DATA =', 'export const MAPS_DATA: any[] =');
fs.writeFileSync(path.join(dataDir, 'mapsData.ts'), mapsContent);

console.log('Successfully migrated all datasets to src/data!');
