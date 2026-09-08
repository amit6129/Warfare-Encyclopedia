/* =========================================================
   MARCH OF EMPIRE — Timeline page logic
   Supports multi-era filtering and jump links
   ========================================================= */

let activeEra = 'all';

document.addEventListener('chrome:ready', () => {
  renderTimeline();

  // Era filter buttons
  document.querySelectorAll('#timelineEraFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#timelineEraFilters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeEra = chip.dataset.era;
      renderTimeline();
    });
  });

  // Year quick jumps
  document.querySelectorAll('.year-jump').forEach(btn => {
    btn.addEventListener('click', () => {
      const yr = btn.dataset.year;
      // If filtering prevents seeing this year, reset filter
      const targetEl = document.getElementById(`year-${slugify(yr)}`);
      if (!targetEl) {
        activeEra = 'all';
        document.querySelectorAll('#timelineEraFilters .chip').forEach(c => c.classList.toggle('active', c.dataset.era === 'all'));
        renderTimeline();
      }
      setTimeout(() => {
        document.getElementById(`year-${slugify(yr)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    });
  });
});

function slugify(str) {
  return String(str).replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
}

function renderTimeline() {
  const el = document.getElementById('fullTimeline');
  if (!el || typeof TIMELINE === 'undefined') return;

  const filtered = TIMELINE.filter(yearBlock => {
    if (activeEra === 'all') return true;
    const era = yearBlock.era || 'wwii';
    return era === activeEra;
  });

  if (!filtered.length) {
    el.innerHTML = `<div class="empty-state"><h3>No events matched</h3><p>Select another era to view chronological records.</p></div>`;
    return;
  }

  const eraColors = {
    ancient: '#8B6914',
    maratha: '#CD7F32',
    napoleonic: '#4A6741',
    wwii: 'var(--signal-red)'
  };

  el.innerHTML = filtered.map(yearBlock => {
    const era = yearBlock.era || 'wwii';
    const eraColor = eraColors[era] || 'var(--brass)';
    const eraLabel = era === 'ancient' ? 'Ancient & Classical' : era === 'maratha' ? 'Maratha Empire' : era === 'napoleonic' ? 'Napoleonic' : 'World War II';

    return `
      <div class="reveal" style="margin-bottom:3rem;" id="year-${slugify(yearBlock.year)}">
        <div style="display:flex; justify-content:space-between; align-items:baseline; border-bottom:2px solid ${eraColor}44; padding-bottom:.5rem; margin-bottom:1.5rem;">
          <h2 class="display" style="color:${eraColor}; font-size:2.2rem; margin:0;">${yearBlock.year}</h2>
          <span class="tag" style="background:${eraColor}22; color:${eraColor}; font-size:.72rem; font-family:var(--font-mono);">${eraLabel}</span>
        </div>
        <div class="timeline">
          ${yearBlock.events.map(e => {
            // Check if title or detail references a battle in BATTLES
            let battleLink = "";
            if (typeof BATTLES !== 'undefined') {
              const matchedBattle = BATTLES.find(b => 
                e.title.toLowerCase().includes(b.name.toLowerCase()) || 
                b.name.toLowerCase().includes(e.title.toLowerCase().replace('battle of the ', '').replace('battle of ', ''))
              );
              if (matchedBattle) {
                battleLink = `<a href="battle-detail.html?id=${matchedBattle.id}" class="btn btn-outline-dark btn-sm" style="margin-top:.6rem; display:inline-block;">View Battle Dossier &rarr;</a>`;
              }
            }

            return `
              <div class="timeline-item">
                <span class="timeline-year" style="font-size:.85rem; color:${eraColor};">${e.date} ${yearBlock.year}</span>
                <h3 style="font-size:1.15rem; margin-bottom:.4rem;">${e.title}</h3>
                <p style="margin:0; font-size:.9rem; line-height:1.6; color:var(--sand);">${e.detail}</p>
                ${battleLink}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  if (typeof WW2_UI !== 'undefined' && WW2_UI.initReveal) {
    WW2_UI.initReveal();
  }
}
