/* =========================================================
   MARCH OF EMPIRE — Operations & Campaigns Database page logic
   ========================================================= */

document.addEventListener('chrome:ready', () => {
  document.getElementById('opCountTotal').textContent = OPERATIONS.length;
  renderOperations('all');

  document.querySelectorAll('#opTheatreFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#opTheatreFilters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderOperations(chip.dataset.theatre);
    });
  });

  document.getElementById('opSearch')?.addEventListener('input', () => {
    const active = document.querySelector('#opTheatreFilters .chip.active')?.dataset.theatre || 'all';
    renderOperations(active);
  });
});

function renderOperations(theatre) {
  const search = (document.getElementById('opSearch')?.value || '').trim().toLowerCase();
  const list = OPERATIONS.filter(o => {
    const matchTheatre = theatre === 'all' || o.theatre === theatre || o.era === theatre;
    const matchSearch = !search || o.name.toLowerCase().includes(search) || (o.objective && o.objective.toLowerCase().includes(search));
    return matchTheatre && matchSearch;
  });

  document.getElementById('opCount').textContent = `${list.length} campaign${list.length !== 1 ? 's' : ''} on record`;

  const el = document.getElementById('opGrid');
  if (!el) return;

  if (!list.length) {
    el.innerHTML = `<div class="empty-state"><h3>No campaigns found</h3><p>Try a different theatre, era or search term.</p></div>`;
    return;
  }

  el.innerHTML = list.map(o => {
    const color = THEATRE_COLORS[o.theatre] || '#5C6670';
    const label = THEATRE_LABELS[o.theatre] || o.theatre;

    // Check if any related battle links can be rendered
    let relatedHtml = "";
    if (o.related && o.related.length) {
      relatedHtml = `<div style="display:flex; gap:.4rem; flex-wrap:wrap; margin-top:.7rem;">` +
        o.related.map(rid => `<a href="battle-detail.html?id=${rid}" class="tag tag-brass" style="text-decoration:none; font-size:.7rem;">${rid}</a>`).join('') +
        `</div>`;
    }

    return `
    <article class="card battle-card reveal" id="opcard-${o.id}">
      <div class="battle-map" style="background-color:${color}22; height:120px;">
        ${WW2.tacticalMap(color, 2)}
        <span class="theatre-label">${label}</span>
      </div>
      <div class="battle-body">
        <span class="b-dates">${o.date}</span>
        <h3 style="font-size:1.08rem; margin-bottom:.3rem;">${o.name}</h3>
        <p class="b-location" style="color:var(--brass); font-weight:600;">${o.nation}</p>
        <p style="font-size:.86rem; margin-bottom:.8rem; line-height:1.6;">${o.objective}</p>
        ${o.outcome ? `<p style="font-size:.82rem; color:var(--steel); margin-bottom:.8rem; line-height:1.5;"><strong>Outcome:</strong> ${o.outcome}</p>` : ''}
        ${relatedHtml}
      </div>
    </article>`;
  }).join('');

  if (typeof WW2_UI !== 'undefined' && WW2_UI.initReveal) {
    WW2_UI.initReveal();
  }
}
