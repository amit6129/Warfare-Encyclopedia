/* =========================================================
   MARCH OF EMPIRE — Home page logic
   Evolved from WWII Encyclopedia home.js
   ========================================================= */

document.addEventListener('chrome:ready', ()=>{
  renderHeroStats();
  renderFeaturedCommanders();
  renderBattleOfDay();
  renderThisDay();
  renderFeaturedBattles();
  renderCharts();
});

function renderHeroStats(){
  const el = document.getElementById('heroStats');
  if(!el) return;
  const totalBattles = BATTLES.length;
  const totalCommanders = LEADERS.length;
  const totalOps = OPERATIONS.length;
  const totalForts = typeof FORTS !== 'undefined' ? FORTS.length : 0;
  el.innerHTML = `
    <div class="stat-box"><span class="stat-number" data-count="${totalBattles}">0</span><span class="stat-label">Battles Archived</span></div>
    <div class="stat-box"><span class="stat-number" data-count="${totalCommanders}">0</span><span class="stat-label">Commanders</span></div>
    <div class="stat-box"><span class="stat-number" data-count="${totalOps}">0</span><span class="stat-label">Campaigns</span></div>
    <div class="stat-box"><span class="stat-number" data-count="${totalForts}">0</span><span class="stat-label">Forts</span></div>
    <div class="stat-box"><span class="stat-number">3000+</span><span class="stat-label">Years of History</span></div>
    <div class="stat-box"><span class="stat-number">5</span><span class="stat-label">Major Eras</span></div>
  `;
  document.querySelectorAll('[data-count]').forEach(elx=>{
    const target = parseInt(elx.dataset.count);
    const suffix = elx.dataset.suffix || '';
    let cur = 0; const steps = 40; const inc = target/steps; let i = 0;
    const t = setInterval(()=>{ i++; cur += inc; if(i>=steps){ cur = target; clearInterval(t); } elx.textContent = Math.round(cur) + suffix; }, 24);
  });
}

/* Featured commanders from across eras */
function renderFeaturedCommanders(){
  const el = document.getElementById('featuredCommandersGrid');
  if(!el) return;
  const featured = ['alexander', 'shivaji', 'napoleon', 'caesar', 'hannibal', 'tanaji', 'eisenhower', 'zhukov'];
  const commanders = featured.map(id => LEADERS.find(l => l.id === id)).filter(Boolean).slice(0, 8);
  
  el.innerHTML = commanders.map(l => `
    <a href="leaders.html#${l.id}" class="card figure-card reveal" style="cursor:pointer;">
      <div class="figure-portrait" style="background:${l.color};">${l.initials}</div>
      <div>
        <h3 style="font-size:.95rem;">${l.name}</h3>
        <span class="role">${l.role}</span>
        ${l.era ? `<span class="tag" style="margin-top:.4em; font-size:.6rem;">${ERA_LABELS[l.era] || l.era}</span>` : ''}
      </div>
    </a>
  `).join('');
  WW2_UI.initReveal();
}

function renderBattleOfDay(){
  const el = document.getElementById('battleOfDay');
  if(!el) return;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const featured = BATTLES.filter(b=>b.tier==='featured');
  const b = featured[dayOfYear % featured.length];
  const color = THEATRE_COLORS[b.theatre] || '#5C6670';

  el.innerHTML = `
    <span class="stamp">Battle of the Day</span>
    <div class="battle-map" style="height:130px; margin: 0 -1.8rem 1.2rem; width:calc(100% + 3.6rem); background-color:${color}22;">${WW2.tacticalMap(color, b.mapVariant)}</div>
    <span class="b-dates">${b.dates}</span>
    <h3>${b.name}</h3>
    <p class="b-location">${b.location}</p>
    <p style="font-size:.9rem;">${b.significance || ''}</p>
    <button class="btn btn-brass btn-sm" onclick="WW2.showBattle('${b.id}')">Read Full Entry</button>
  `;
}

function renderThisDay(){
  const now = new Date();
  const dd = now.getDate();
  const mm = now.toLocaleString('en-US', { month: 'short' });
  let found = [];
  TIMELINE.forEach(yearBlock => {
    yearBlock.events.forEach(ev => {
      if(ev.date.startsWith(String(dd) + ' ' + mm) || ev.date === `${dd} ${mm}`){
        found.push({ ...ev, year: yearBlock.year });
      }
    });
  });
  if(!found.length){
    TIMELINE.forEach(yearBlock => {
      yearBlock.events.forEach(ev => {
        const parts = ev.date.split(' ');
        if(parseInt(parts[0]) === dd && parts[1] === mm) found.push({ ...ev, year: yearBlock.year });
      });
    });
  }

  const el = document.getElementById('thisDayHistory');
  if(!el) return;
  if(found.length){
    el.innerHTML = `
      <span class="stamp" style="border-color:var(--brass); color:var(--brass-deep);">This Day in History</span>
      ${found.map(f => `
        <div style="margin-top:1rem;">
          <span class="timeline-year">${f.date} ${f.year}</span>
          <h3>${f.title}</h3>
          <p style="margin:0;">${f.detail}</p>
        </div>
      `).join('')}
    `;
  } else {
    const fallback = TIMELINE[Math.floor(Math.random()*TIMELINE.length)];
    const ev = fallback.events[Math.floor(Math.random()*fallback.events.length)];
    el.innerHTML = `
      <span class="stamp" style="border-color:var(--brass); color:var(--brass-deep);">On This Theme</span>
      <div style="margin-top:1rem;">
        <span class="timeline-year">${ev.date} ${fallback.year}</span>
        <h3>${ev.title}</h3>
        <p style="margin:0;">${ev.detail}</p>
      </div>
      <p class="form-note" style="margin-top:1rem;">No archived event lands on today's date &mdash; here's one to explore instead.</p>
    `;
  }
}

function renderFeaturedBattles(){
  // Mix of battles from different eras
  const featuredIds = ['gaugamela', 'pratapgad', 'austerlitz', 'waterloo', 'cannae', 'stalingrad'];
  let featured = featuredIds.map(id => BATTLES.find(b => b.id === id)).filter(Boolean);
  // Fill remaining with any featured WWII battles
  if(featured.length < 6){
    const wwii = BATTLES.filter(b => b.tier === 'featured' && !featuredIds.includes(b.id));
    featured = featured.concat(wwii.slice(0, 6 - featured.length));
  }
  
  const el = document.getElementById('featuredBattlesGrid');
  if(!el) return;
  el.innerHTML = featured.map(b => {
    const color = THEATRE_COLORS[b.theatre] || '#5C6670';
    const theatreLabel = THEATRE_LABELS[b.theatre] || b.era || '';
    return `
    <article class="card battle-card reveal">
      <div class="battle-map" style="background-color:${color}22; height:130px;">
        ${WW2.tacticalMap(color, b.mapVariant || 1)}
        <span class="theatre-label">${theatreLabel}</span>
      </div>
      <div class="battle-body">
        <span class="b-dates">${b.dates}</span>
        <h3 style="font-size:1.05rem;">${b.name}</h3>
        <p class="b-location">${b.location}</p>
        <button class="btn btn-outline-dark btn-sm" onclick="WW2.showBattle('${b.id}')">View Entry</button>
      </div>
    </article>`;
  }).join('');
  WW2_UI.initReveal();
}

/* ---------------- Statistics dashboard (Chart.js) — WWII data preserved ---------------- */
function renderCharts(){
  if(typeof Chart === 'undefined') return;
  Chart.defaults.font.family = "'Courier Prime', monospace";
  Chart.defaults.color = '#9AA08C';

  new Chart(document.getElementById('chartCasualties'), {
    type: 'bar',
    data: {
      labels: ['USSR','Germany','China','Japan','Poland','UK','USA','Italy'],
      datasets: [{ label: 'Est. Deaths (millions)', data: [24,7,15,3,6,0.45,0.42,0.45], backgroundColor: '#B23A2E', borderRadius:3 }]
    },
    options: { responsive:true, maintainAspectRatio:false, indexAxis:'y', plugins:{legend:{display:false}}, scales:{ x:{ grid:{color:'#2a2f26'} }, y:{ grid:{display:false} } } }
  });

  new Chart(document.getElementById('chartProduction'), {
    type: 'bar',
    data: {
      labels: ['USA','USSR','Germany','UK','Japan'],
      datasets: [
        { label: 'Tanks (thousands)', data: [88,105,46,25,5], backgroundColor: '#C7A254', borderRadius:3 },
        { label: 'Aircraft (thousands)', data: [300,157,119,131,76], backgroundColor: '#3D6E85', borderRadius:3 }
      ]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}}, scales:{ x:{ grid:{display:false} }, y:{ grid:{color:'#2a2f26'} } } }
  });

  new Chart(document.getElementById('chartMobilised'), {
    type: 'doughnut',
    data: {
      labels: ['Soviet Union','USA','Germany','China','British Empire','Japan','Others'],
      datasets: [{ data: [34,16,18,14,11,7.5,10], backgroundColor: ['#B23A2E','#3D6E85','#7C2A21','#6B7A34','#C7A254','#8F4A3E','#5C6670'] }]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom', labels:{boxWidth:12,font:{size:10}}}} }
  });

  // Battle distribution across ALL eras now
  const allLabels = Object.values(THEATRE_LABELS);
  const allData = Object.keys(THEATRE_LABELS).map(k => BATTLES.filter(b=>b.theatre===k).length);
  const allColors = Object.keys(THEATRE_LABELS).map(k => THEATRE_COLORS[k]);

  new Chart(document.getElementById('chartTheatreBattles'), {
    type: 'pie',
    data: {
      labels: allLabels,
      datasets: [{ data: allData, backgroundColor: allColors }]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom', labels:{boxWidth:12,font:{size:10}}}} }
  });
}
