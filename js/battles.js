/* =========================================================
   MARCH OF EMPIRE — Battles Encyclopedia page logic
   Evolved from WWII battles.js with multi-era filtering.
   ========================================================= */

let activeTheatre = 'all';
let activeEra = 'all';
let activeYear = 'all';
let visibleCount = 12;
const PAGE_SIZE = 12;

document.addEventListener('chrome:ready', ()=>{
  document.getElementById('battleCountTotal').textContent = BATTLES.length;

  // Handle URL params for era/theatre pre-filtering
  const params = new URLSearchParams(window.location.search);
  const qTheatre = params.get('theatre');
  const qEra = params.get('era');

  if(qEra && (ERA_LABELS[qEra] || qEra === 'wwii')){
    activeEra = qEra;
    document.querySelectorAll('#eraFilters .chip').forEach(c=> c.classList.toggle('active', c.dataset.era===qEra));
  }
  if(qTheatre && THEATRE_LABELS[qTheatre]){
    activeTheatre = qTheatre;
    document.querySelectorAll('#theatreFilters .chip').forEach(c=> c.classList.toggle('active', c.dataset.theatre===qTheatre));
  }

  populateYearFilter();
  renderBattles();
  initFilters();
  initCompare();
  document.getElementById('battleSearch')?.addEventListener('input', ()=>{ visibleCount = PAGE_SIZE; renderBattles(); });
  document.getElementById('loadMoreBtn')?.addEventListener('click', ()=>{ visibleCount += PAGE_SIZE; renderBattles(); });
});

function populateYearFilter(){
  const yearFilter = document.getElementById('yearFilter');
  if(!yearFilter) return;
  const years = [...new Set(BATTLES.map(b => b.year))].sort((a,b) => a-b);
  yearFilter.innerHTML = `<option value="all">All Years</option>` +
    years.map(y => {
      const label = y < 0 ? `${Math.abs(y)} BCE` : String(y);
      return `<option value="${y}">${label}</option>`;
    }).join('');
}

function getFiltered(){
  const search = (document.getElementById('battleSearch')?.value || '').trim().toLowerCase();
  return BATTLES.filter(b=>{
    // Era filter
    let matchEra = true;
    if(activeEra !== 'all'){
      if(activeEra === 'wwii'){
        // WWII = anything without an era or with era=wwii or with WWII theatre values
        matchEra = !b.era || b.era === 'wwii' || ['start','western','eastern','pacific','africa','atlantic','asia'].includes(b.theatre);
      } else {
        matchEra = b.era === activeEra || b.theatre === activeEra;
      }
    }
    const matchTheatre = activeTheatre === 'all' || b.theatre === activeTheatre;
    const matchYear = activeYear === 'all' || String(b.year) === activeYear;
    const matchSearch = !search || b.name.toLowerCase().includes(search) || b.location.toLowerCase().includes(search);
    return matchEra && matchTheatre && matchYear && matchSearch;
  });
}

function renderBattles(){
  const el = document.getElementById('battleGrid');
  const full = getFiltered();
  const list = full.slice(0, visibleCount);

  document.getElementById('battleCount').textContent = `${full.length} engagement${full.length!==1?'s':''} matched`;

  if(!list.length){
    el.innerHTML = `<div class="empty-state"><h3>No engagements found</h3><p>Try a different era, theatre, year or search term.</p></div>`;
    document.getElementById('loadMoreWrap').style.display = 'none';
    return;
  }

  el.innerHTML = list.map(b => {
    const color = THEATRE_COLORS[b.theatre] || '#5C6670';
    const isFeatured = b.tier === 'featured';
    const theatreLabel = THEATRE_LABELS[b.theatre] || b.era || '';
    return `
    <article class="card battle-card reveal" id="card-${b.id}">
      <div class="battle-map" style="background-color:${color}22; height:130px;">
        ${WW2.tacticalMap(color, b.mapVariant||1)}
        <span class="theatre-label">${theatreLabel}</span>
        ${isFeatured ? `<span class="stamp" style="border-color:${color}; color:${color};">Featured</span>` : ''}
      </div>
      <div class="battle-body">
        <span class="b-dates">${b.dates}</span>
        <h3 style="font-size:1.08rem;">${b.name}</h3>
        <p class="b-location">${b.location}</p>
        ${b.conflict ? `<span class="tag" style="margin-bottom:.5em; font-size:.6rem;">${b.conflict}</span>` : ''}
        <div style="display:flex; gap:.4rem; flex-wrap:wrap; margin-top:.4rem;">
          <button class="btn btn-outline-dark btn-sm" onclick="WW2.showBattle('${b.id}')">Quick View</button>
          <a href="battle-detail.html?id=${b.id}" class="btn btn-outline-dark btn-sm" style="color:var(--brass); border-color:var(--brass); text-decoration:none;">Deep Dive &rarr;</a>
        </div>
      </div>
    </article>`;
  }).join('');

  document.getElementById('loadMoreWrap').style.display = full.length > visibleCount ? 'block' : 'none';
  WW2_UI.initReveal();
}

function initFilters(){
  // Era filters
  document.querySelectorAll('#eraFilters .chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      document.querySelectorAll('#eraFilters .chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      activeEra = chip.dataset.era;
      // Reset theatre when changing era
      activeTheatre = 'all';
      document.querySelectorAll('#theatreFilters .chip').forEach(c=>c.classList.toggle('active', c.dataset.theatre==='all'));
      visibleCount = PAGE_SIZE;
      renderBattles();
    });
  });

  // Theatre filters
  document.querySelectorAll('#theatreFilters .chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      document.querySelectorAll('#theatreFilters .chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      activeTheatre = chip.dataset.theatre;
      visibleCount = PAGE_SIZE;
      renderBattles();
    });
  });

  document.getElementById('yearFilter')?.addEventListener('change', (e)=>{
    activeYear = e.target.value;
    visibleCount = PAGE_SIZE;
    renderBattles();
  });
}

/* ---------------- Comparison tool (multi-era capable) ---------------- */
function initCompare(){
  const selA = document.getElementById('compareA');
  const selB = document.getElementById('compareB');
  if(!selA || !selB) return;
  const featured = BATTLES.filter(b=>b.tier==='featured');
  const opts = featured.map(b=>`<option value="${b.id}">${b.name} (${b.dates})</option>`).join('');
  selA.innerHTML = `<option value="">Select a battle…</option>${opts}`;
  selB.innerHTML = `<option value="">Select a battle…</option>${opts}`;
  selA.addEventListener('change', renderCompare);
  selB.addEventListener('change', renderCompare);
}

function renderCompare(){
  const a = BATTLES.find(b=>b.id === document.getElementById('compareA').value);
  const b = BATTLES.find(b=>b.id === document.getElementById('compareB').value);
  const out = document.getElementById('compareResult');
  if(!a || !b){ out.innerHTML = ''; return; }

  function sideHtml(battle){
    const s1 = battle.side1 || battle.allied || {};
    const s2 = battle.side2 || battle.axis || {};
    return `
      <h4>${battle.name}</h4>
      <p style="font-family:var(--font-mono); font-size:.78rem; color:var(--steel);">${battle.dates} &middot; ${battle.location}</p>
      <div class="casualty-row" style="border:none; padding:0;">${(battle.casualties||[]).map(c=>`<div><b>${c.value}</b><span>${c.label}</span></div>`).join('')}</div>
      <p style="font-size:.85rem; margin-top:.8rem;"><strong>${s1.label || 'Side I'}:</strong> ${s1.forces || '—'}<br><strong>${s2.label || 'Side II'}:</strong> ${s2.forces || '—'}</p>
      <p style="font-size:.85rem;">${battle.outcome || ''}</p>
    `;
  }

  out.innerHTML = `
    <div class="compare-col">${sideHtml(a)}</div>
    <div class="compare-col">${sideHtml(b)}</div>
  `;
}
