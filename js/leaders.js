/* =========================================================
   MARCH OF EMPIRE — Leaders & Commanders page logic
   ========================================================= */

document.addEventListener('chrome:ready', () => {
  renderLeaders('all');
  document.querySelectorAll('#leaderFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#leaderFilters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderLeaders(chip.dataset.filter);
    });
  });
});

function renderLeaders(filter) {
  const list = LEADERS.filter(l => {
    if (filter === 'all') return true;
    if (filter === 'political') return l.category === 'political';
    if (filter === 'military') return l.category === 'military';
    if (filter === 'ancient') return l.era === 'ancient';
    if (filter === 'maratha') return l.era === 'maratha';
    if (filter === 'napoleonic') return l.era === 'napoleonic';
    if (filter === 'wwii-allied') return (!l.era || l.era === 'wwii') && l.side === 'allied';
    if (filter === 'wwii-axis') return (!l.era || l.era === 'wwii') && l.side === 'axis';
    return true;
  });

  const el = document.getElementById('leadersGrid');
  if (!el) return;

  if (!list.length) {
    el.innerHTML = `<div class="empty-state"><h3>No commanders matched</h3><p>Try selecting another era or category.</p></div>`;
    return;
  }

  el.innerHTML = list.map(l => {
    let tagColor = "tag-steel";
    if (l.era === 'ancient' || l.era === 'maratha' || l.era === 'napoleonic' || l.side === 'allied') {
      tagColor = "tag-brass";
    } else if (l.side === 'axis') {
      tagColor = "tag-red";
    }

    const eraText = l.era ? (l.era === 'ancient' ? 'Ancient & Classical' : l.era === 'maratha' ? 'Maratha Empire' : 'Napoleonic') : 'World War II';

    return `
    <div class="card leader-card reveal" id="leader-${l.id}">
      <div class="figure-portrait" style="background:linear-gradient(160deg, ${l.color || '#4B5320'}, #14171A);">${l.initials}</div>
      <div style="flex:1;">
        <div style="display:flex; gap:.4rem; flex-wrap:wrap; margin-bottom:.4em;">
          <span class="tag ${tagColor}">${l.nation}</span>
          <span class="tag tag-steel">${eraText}</span>
        </div>
        <h3 style="margin-bottom:.2rem;">${l.name}</h3>
        <span class="role" style="display:block; margin-bottom:.5rem;">${l.role}</span>
        <p style="font-size:.88rem; line-height:1.6; margin-bottom:.9rem;">${l.bio}</p>
        <a href="commander-detail.html?id=${l.id}" class="btn btn-outline-dark btn-sm">Full Dossier &rarr;</a>
      </div>
    </div>
  `;
  }).join('');

  if (typeof WW2_UI !== 'undefined' && WW2_UI.initReveal) {
    WW2_UI.initReveal();
  }
}
