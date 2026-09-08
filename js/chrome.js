/* =========================================================
   MARCH OF EMPIRE — Shared chrome (header/nav/footer/search)
   Evolved from WWII Encyclopedia. Preserves all original
   functionality while expanding to multi-era platform.
   ========================================================= */

(function(){

  const NAV_ITEMS = [
    { label: "Home", href: "index.html" },
    { label: "Explore Eras", href: "eras.html" },
    { label: "Timeline", href: "timeline.html" },
    { label: "Battles", href: "battles.html" },
    { label: "Commanders", href: "leaders.html" },
    { label: "Campaigns", href: "operations.html" },
    { label: "Forts", href: "forts.html" },
    { label: "Maps", href: "maps.html" },
    { label: "Weapons", href: "weapons.html" },
    { label: "Archive", href: "resources.html" }
  ];

  function currentPage(){
    const p = window.location.pathname.split('/').pop();
    return p === '' ? 'index.html' : p;
  }

  function crestSVG(){
    return `<svg viewBox="0 0 100 100" width="38" height="38">
      <rect width="100" height="100" rx="4" fill="#14171A"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#C7A254" stroke-width="4" opacity=".6"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="#C7A254" stroke-width="2" opacity=".3"/>
      <path d="M50 22 L54 36 L68 36 L56 44 L60 58 L50 49 L40 58 L44 44 L32 36 L46 36 Z" fill="#C7A254" opacity=".9"/>
      <circle cx="50" cy="50" r="6" fill="#C7A254"/>
    </svg>`;
  }

  function renderChrome(){
    const topEl = document.getElementById('chrome-top');
    const footEl = document.getElementById('chrome-footer');
    const page = currentPage();

    if(topEl){
      const navHtml = NAV_ITEMS.map(item => `<li><a href="${item.href}" class="${page===item.href?'active':''}">${item.label}</a></li>`).join('');
      topEl.innerHTML = `
        <div class="top-bar">
          <div class="container">
            <span class="top-bar-label"><span class="dot"></span>Historical Dispatch</span>
            <div class="ticker-viewport"><div class="ticker-track" id="tickerTrack">Loading…</div></div>
          </div>
        </div>
        <header class="site-header" style="border-bottom:4px solid var(--brass);">
          <div class="container" style="padding: 1.1rem 0;">
            <div class="header-main" style="align-items:center;">
              <a href="index.html" class="brand-area" style="display:flex; align-items:center; gap:.8rem; max-width:none;">
                ${crestSVG()}
                <div style="display:flex; flex-direction:column;">
                  <span class="display" style="font-size:1.6rem; color:var(--cream-text); letter-spacing:.03em; line-height:1.1;">MARCH OF <span style="color:var(--brass);">EMPIRE</span></span>
                  <span style="font-family:var(--font-mono); font-size:.58rem; color:var(--muted-dark); letter-spacing:.14em; text-transform:uppercase;">Where Empires Rise and History Marches</span>
                </div>
              </a>
              <form class="search-bar" id="headerSearchForm">
                <input type="text" id="headerSearchInput" placeholder="Search the archive… (Ctrl+K)" aria-label="Search" readonly>
                <button type="button" id="headerSearchBtn" aria-label="Search">Search</button>
              </form>
            </div>
          </div>
        </header>
        <nav class="site-nav">
          <div class="container nav-container">
            <ul class="nav-links" id="navLinks">${navHtml}</ul>
            <button class="nav-toggle" id="navToggle" aria-label="Open menu"><span></span><span></span><span></span></button>
          </div>
        </nav>
        <div class="search-overlay" id="searchOverlay">
          <button class="search-overlay-close" id="searchOverlayClose" aria-label="Close search">&times;</button>
          <div class="search-overlay-box">
            <input type="text" id="globalSearchInput" placeholder="Search battles, commanders, forts, empires, weapons…" autocomplete="off">
            <div class="search-overlay-results" id="globalSearchResults"></div>
          </div>
        </div>
        <div class="modal-overlay" id="modalOverlay">
          <div class="modal-box" id="modalBox"></div>
        </div>
      `;
    }

    if(footEl){
      const year = new Date().getFullYear();
      footEl.innerHTML = `
        <footer class="site-footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-col">
                <h4>March of Empire</h4>
                <p style="font-size:.85rem; color:var(--steel);">A comprehensive historical warfare encyclopedia exploring battles, commanders, campaigns, empires, forts and military technology — from the ancient world through the World Wars.</p>
                <p style="font-family:var(--font-mono); font-size:.7rem; color:var(--brass-deep); margin-top:.8rem; letter-spacing:.06em;">WHERE EMPIRES RISE AND HISTORY MARCHES</p>
              </div>
              <div class="footer-col">
                <h4>Explore</h4>
                <ul>
                  <li><a href="eras.html">Explore Eras</a></li>
                  <li><a href="timeline.html">Historical Timeline</a></li>
                  <li><a href="battles.html">Battles Encyclopedia</a></li>
                  <li><a href="leaders.html">Commanders & Leaders</a></li>
                  <li><a href="maps.html">Campaign Maps</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Reference</h4>
                <ul>
                  <li><a href="alexander.html">Alexander the Great</a></li>
                  <li><a href="maratha.html">Maratha Empire</a></li>
                  <li><a href="napoleon.html">Napoleon Bonaparte</a></li>
                  <li><a href="forts.html">Historical Forts</a></li>
                  <li><a href="weapons.html">Weapons & Technology</a></li>
                  <li><a href="resources.html">Glossary & Sources</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>About This Project</h4>
                <p class="footer-disclaimer">This is an independent educational reference project. Casualty and strength figures are widely-cited approximate ranges — historians' estimates vary by source. Ancient battle statistics, especially, should be treated with caution as primary sources frequently exaggerate numbers. Where figures are disputed, this is noted. Not affiliated with any government, military institution or museum.</p>
              </div>
            </div>
            <div class="footer-bottom">
              <span>&copy; ${year} March of Empire — Historical Warfare Encyclopedia. For educational and historical reference purposes.</span>
              <span style="font-family:var(--font-mono); font-size:.75rem;">Armies. Empires. Battles. History.</span>
            </div>
          </div>
        </footer>
        <button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>
      `;
    }
  }

  /* ---------------- Ticker ---------------- */
  function renderTicker(){
    const el = document.getElementById('tickerTrack');
    if(!el || typeof TICKER_ITEMS === 'undefined') return;
    const items = TICKER_ITEMS.map(t => `<span>${t}</span>`).join('');
    el.innerHTML = items + items;
  }

  /* ---------------- Nav behaviors ---------------- */
  function initNav(){
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle?.addEventListener('click', ()=> links.classList.toggle('open'));

    window.addEventListener('scroll', ()=>{
      const btt = document.getElementById('backToTop');
      if(btt) btt.classList.toggle('show', window.scrollY > 600);
    });
    document.getElementById('backToTop')?.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  }

  /* ---------------- Global search (multi-era) ---------------- */
  let SEARCH_INDEX = null;
  function buildSearchIndex(){
    SEARCH_INDEX = [];
    // WWII & multi-era battles
    (typeof BATTLES !== 'undefined' ? BATTLES : []).forEach(b => SEARCH_INDEX.push({ type: 'Battle', title: b.name, target: `battle-detail.html?id=${b.id}`, era: b.era || b.theatre }));
    // Operations / campaigns
    (typeof OPERATIONS !== 'undefined' ? OPERATIONS : []).forEach(o => SEARCH_INDEX.push({ type: 'Campaign', title: o.name, target: `operations.html#opcard-${o.id}`, era: o.era || 'wwii' }));
    // Leaders / commanders
    (typeof LEADERS !== 'undefined' ? LEADERS : []).forEach(l => SEARCH_INDEX.push({ type: 'Commander', title: l.name, target: `commander-detail.html?id=${l.id}`, era: l.era || 'wwii' }));
    // Countries
    (typeof COUNTRIES !== 'undefined' ? COUNTRIES : []).forEach(c => SEARCH_INDEX.push({ type: 'Country', title: c.name, target: `countries.html#${c.id}` }));
    // Weapons
    if(typeof WEAPONS !== 'undefined'){
      Object.values(WEAPONS).forEach(cat => cat.forEach(w => SEARCH_INDEX.push({ type: 'Weapon', title: w.name, target: `weapons.html#weapon-${w.id}` })));
    }
    // Forts
    (typeof FORTS !== 'undefined' ? FORTS : []).forEach(f => SEARCH_INDEX.push({ type: 'Fort', title: f.name, target: `forts.html#${f.id}`, era: f.era }));
    // Maps
    (typeof MAPS_DATA !== 'undefined' ? MAPS_DATA : []).forEach(m => SEARCH_INDEX.push({ type: 'Map', title: m.name, target: `maps.html#${m.id}`, era: m.era }));
  }

  function initSearch(){
    const openBtn = document.getElementById('headerSearchBtn');
    const openInput = document.getElementById('headerSearchInput');
    const overlay = document.getElementById('searchOverlay');
    const closeBtn = document.getElementById('searchOverlayClose');
    const input = document.getElementById('globalSearchInput');
    const results = document.getElementById('globalSearchResults');

    function openSearch(){
      buildSearchIndex();
      overlay.classList.add('open');
      setTimeout(()=> input.focus(), 150);
    }
    openBtn?.addEventListener('click', openSearch);
    openInput?.addEventListener('click', openSearch);
    closeBtn?.addEventListener('click', ()=> overlay.classList.remove('open'));
    overlay?.addEventListener('click', (e)=>{ if(e.target === overlay) overlay.classList.remove('open'); });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') overlay?.classList.remove('open');
      if((e.ctrlKey||e.metaKey) && e.key === 'k'){ e.preventDefault(); openSearch(); }
    });

    input?.addEventListener('input', ()=>{
      const q = input.value.trim().toLowerCase();
      if(!SEARCH_INDEX || q.length < 2){ results.innerHTML = ''; return; }
      const matches = SEARCH_INDEX.filter(i => i.title.toLowerCase().includes(q)).slice(0, 20);
      results.innerHTML = matches.length
        ? matches.map(m => `<a href="${m.target}"><span class="res-type">${m.type}</span>${m.title}</a>`).join('')
        : `<p style="color:var(--steel); padding-top:1rem;">No results for "${input.value}"</p>`;
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal(){
    const items = document.querySelectorAll('.reveal:not(.in-view)');
    if(!('IntersectionObserver' in window)){ items.forEach(i=>i.classList.add('in-view')); return; }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
    }, { threshold:.1 });
    items.forEach(i=> io.observe(i));
  }

  /* ---------------- Tactical mini-map SVG (shared by battles/operations) ---------------- */
  function tacticalMap(color, variant){
    const layouts = {
      1: `<path d="M20,120 L90,70 L170,90 L260,50" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="7 6" opacity=".85"/>
          <circle cx="260" cy="50" r="7" fill="${color}"/>
          <path d="M0,140 L300,110" stroke="${color}" stroke-width="1.5" opacity=".35" stroke-dasharray="2 4"/>
          ${starMarker(200, 95, color)}`,
      2: `<path d="M30,40 L110,95 L190,60 L270,110" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="7 6" opacity=".85"/>
          <circle cx="30" cy="40" r="6" fill="${color}"/>
          <path d="M300,20 L0,60" stroke="${color}" stroke-width="1.5" opacity=".3" stroke-dasharray="2 4"/>
          ${starMarker(190, 60, color)}`,
      3: `<path d="M150,20 L100,80 L150,140" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="7 6" opacity=".85"/>
          <path d="M150,20 L200,80 L150,140" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="7 6" opacity=".55"/>
          <circle cx="150" cy="140" r="7" fill="${color}"/>
          ${starMarker(150, 80, color)}`,
      4: `<path d="M40,130 Q150,10 260,130" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="7 6" opacity=".85"/>
          <circle cx="40" cy="130" r="6" fill="${color}"/>
          <circle cx="260" cy="130" r="6" fill="${color}"/>
          ${starMarker(150, 55, color)}`
    };
    return `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${layouts[variant] || layouts[1]}</svg>`;
  }
  function starMarker(x,y,color){
    return `<g transform="translate(${x},${y})"><circle r="14" fill="${color}" opacity=".18"/><circle r="5.5" fill="${color}"/><circle r="5.5" fill="none" stroke="#fff" stroke-width="1.2" opacity=".6"/></g>`;
  }

  /* ---------------- Detail modal (battle / operation) ---------------- */
  function openModal(html){
    const overlay = document.getElementById('modalOverlay');
    const box = document.getElementById('modalBox');
    if(!overlay || !box) return;
    box.innerHTML = `<button class="modal-close" id="modalCloseBtn" aria-label="Close">&times;</button>` + html;
    overlay.classList.add('open');
    document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    const overlay = document.getElementById('modalOverlay');
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
    history.replaceState(null, '', window.location.pathname);
  }
  document.addEventListener('click', (e)=>{
    if(e.target && e.target.id === 'modalOverlay') closeModal();
  });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

  /* ---------------- Battle / Operation modal renderers (shared across pages) ---------------- */
  function renderBattleModalHTML(b){
    const color = THEATRE_COLORS[b.theatre];

    // Determine side labels based on era
    const isWWII = !b.era || b.era === 'wwii';
    const side1Label = isWWII ? 'Allied Forces' : (b.side1 ? b.side1.label : (b.allied ? b.allied.label : ''));
    const side2Label = isWWII ? 'Axis Forces' : (b.side2 ? b.side2.label : (b.axis ? b.axis.label : ''));
    const side1Forces = isWWII ? (b.allied?.forces || '') : (b.side1?.forces || b.allied?.forces || '');
    const side2Forces = isWWII ? (b.axis?.forces || '') : (b.side2?.forces || b.axis?.forces || '');
    const cmd1 = b.commanders ? (b.commanders.allied || b.commanders.side1 || '') : '';
    const cmd2 = b.commanders ? (b.commanders.axis || b.commanders.side2 || '') : '';
    const theatreLabel = THEATRE_LABELS[b.theatre] || b.era || '';

    const related = (b.related||[]).map(rid => {
      const rb = BATTLES.find(x=>x.id===rid);
      return rb ? `<a href="battles.html#${rb.id}" class="tag tag-brass" onclick="event.preventDefault(); WW2.showBattle('${rb.id}');">${rb.name}</a>` : '';
    }).join('');

    if(b.tier === 'featured'){
      return `
        <div class="modal-map" style="background-color:${color}22;">${tacticalMap(color, b.mapVariant)}
          <span class="theatre-label" style="position:absolute; top:.8rem; left:.9rem;">${theatreLabel}</span>
        </div>
        <div class="modal-body">
          <span class="modal-meta">${b.dates} &middot; ${b.location}</span>
          <h2>${b.name}</h2>
          ${b.conflict ? `<p style="font-family:var(--font-mono); font-size:.72rem; color:var(--brass); text-transform:uppercase; letter-spacing:.06em; margin-bottom:.8em;">${b.conflict}</p>` : ''}
          <p style="font-family:var(--font-mono); font-size:.82rem; color:var(--brass-deep); margin-bottom:1.2em;">${b.significance||''}</p>
          <div class="belligerents">
            <div class="side allied"><b>${isWWII ? 'Allied Forces' : 'Side I'}</b>${side1Label}<br><span style="color:var(--steel); font-size:.78rem;">${side1Forces}</span>${cmd1 ? `<br><span style="font-size:.78rem;">Commander: ${cmd1}</span>`:''}</div>
            <div class="side axis"><b>${isWWII ? 'Axis Forces' : 'Side II'}</b>${side2Label}<br><span style="color:var(--steel); font-size:.78rem;">${side2Forces}</span>${cmd2 ? `<br><span style="font-size:.78rem;">Commander: ${cmd2}</span>`:''}</div>
          </div>
          <div class="casualty-row">${(b.casualties||[]).map(c=>`<div><b>${c.value}</b><span>${c.label}</span></div>`).join('')}</div>
          <p>${b.outcome}</p>
          ${related ? `<div class="modal-related"><span class="eyebrow" style="margin-bottom:.6em; display:block;">Related Battles</span>${related}</div>` : ''}
          <div style="margin-top:1.4rem; padding-top:1rem; border-top:1px solid var(--border); display:flex; justify-content:flex-end;">
            <a href="battle-detail.html?id=${b.id}" class="btn btn-outline-dark btn-sm" style="color:var(--brass); border-color:var(--brass);">Open Full Battle Dossier &rarr;</a>
          </div>
        </div>`;
    }
    return `
      <div class="modal-map" style="background-color:${color}22;">${tacticalMap(color, b.mapVariant||1)}
        <span class="theatre-label" style="position:absolute; top:.8rem; left:.9rem;">${theatreLabel}</span>
      </div>
      <div class="modal-body">
        <span class="modal-meta">${b.dates} &middot; ${b.location}</span>
        <h2>${b.name}</h2>
        ${b.conflict ? `<p style="font-family:var(--font-mono); font-size:.72rem; color:var(--brass); text-transform:uppercase; letter-spacing:.06em; margin-bottom:.8em;">${b.conflict}</p>` : ''}
        <p>${b.summary}</p>
        <div style="margin-top:1.2rem; padding-top:1rem; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
          <span class="form-note" style="font-family:var(--font-mono); font-size:.72rem; color:var(--steel); margin:0;">Encyclopedia archive record</span>
          <a href="battle-detail.html?id=${b.id}" class="btn btn-outline-dark btn-sm" style="color:var(--brass); border-color:var(--brass);">Open Full Battle Dossier &rarr;</a>
        </div>
      </div>`;
  }

  function renderOperationModalHTML(o){
    const related = (o.related||[]).map(rid => {
      const rb = typeof BATTLES!=='undefined' ? BATTLES.find(x=>x.id===rid) : null;
      return rb ? `<a href="battles.html#${rb.id}" class="tag tag-brass" onclick="event.preventDefault(); WW2.showBattle('${rb.id}');">${rb.name}</a>` : '';
    }).join('');
    const color = THEATRE_COLORS[o.theatre] || '#5C6670';
    return `
      <div class="modal-map" style="background-color:${color}22;">${tacticalMap(color, 1)}
        <span class="theatre-label" style="position:absolute; top:.8rem; left:.9rem;">${THEATRE_LABELS[o.theatre]||''}</span>
      </div>
      <div class="modal-body">
        <span class="modal-meta">${o.date} &middot; ${o.nation}</span>
        <h2>${o.name}</h2>
        <h3 style="font-size:.85rem; color:var(--brass-deep); text-transform:uppercase; letter-spacing:.04em;">Objective</h3>
        <p>${o.objective}</p>
        <h3 style="font-size:.85rem; color:var(--brass-deep); text-transform:uppercase; letter-spacing:.04em;">Outcome</h3>
        <p>${o.outcome}</p>
        ${related ? `<div class="modal-related"><span class="eyebrow" style="margin-bottom:.6em; display:block;">Related Battles</span>${related}</div>` : ''}
      </div>`;
  }

  function showBattle(id){
    if(typeof BATTLES === 'undefined') return;
    const b = BATTLES.find(x=>x.id===id);
    if(!b) return;
    openModal(renderBattleModalHTML(b));
    history.replaceState(null, '', `${currentPage()}#${id}`);
  }
  function showOperation(id){
    if(typeof OPERATIONS === 'undefined') return;
    const o = OPERATIONS.find(x=>x.id===id);
    if(!o) return;
    openModal(renderOperationModalHTML(o));
    history.replaceState(null, '', `${currentPage()}#${id}`);
  }

  function handleHashOnLoad(){
    const hash = window.location.hash.replace('#','');
    if(!hash) return;
    if(currentPage() === 'battles.html' && typeof BATTLES !== 'undefined' && BATTLES.some(b=>b.id===hash)) showBattle(hash);
    if(currentPage() === 'operations.html' && typeof OPERATIONS !== 'undefined' && OPERATIONS.some(o=>o.id===hash)) showOperation(hash);
  }

  window.WW2 = {
    tacticalMap, openModal, closeModal, showBattle, showOperation,
    THEATRE_COLORS: typeof THEATRE_COLORS!=='undefined'?THEATRE_COLORS:{},
    THEATRE_LABELS: typeof THEATRE_LABELS!=='undefined'?THEATRE_LABELS:{}
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    renderChrome();
    renderTicker();
    initNav();
    initSearch();
    initReveal();
    document.dispatchEvent(new CustomEvent('chrome:ready'));
    setTimeout(handleHashOnLoad, 150);
  });

  window.WW2_UI = { initReveal };
})();
