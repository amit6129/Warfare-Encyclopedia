/* =========================================================
   MARCH OF EMPIRE — Weapons & Technology page logic
   Supports multi-era categories and specification comparison
   ========================================================= */

const CATEGORY_LABELS = {
  ancient: "Ancient & Classical",
  maratha: "Maratha & Indian",
  napoleonic: "Napoleonic Era",
  tanks: "WWII Tanks",
  aircraft: "WWII Aircraft",
  naval: "Naval Warfare",
  smallArms: "Small Arms"
};

let activeCategory = 'ancient';

document.addEventListener('chrome:ready', () => {
  // Support category via URL param e.g. ?cat=tanks
  const params = new URLSearchParams(window.location.search);
  const qCat = params.get('cat');
  if (qCat && WEAPONS[qCat]) {
    activeCategory = qCat;
    document.querySelectorAll('.category-tabs .chip').forEach(c => c.classList.toggle('active', c.dataset.category === qCat));
  }

  renderWeapons();
  initWeaponCompare();

  document.querySelectorAll('.category-tabs .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.category-tabs .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      renderWeapons();
      initWeaponCompare();
    });
  });
});

function renderWeapons() {
  const items = WEAPONS[activeCategory] || [];
  const el = document.getElementById('weaponGrid');
  if (!el) return;

  if (!items.length) {
    el.innerHTML = `<div class="empty-state"><h3>No items found</h3><p>Select another category.</p></div>`;
    return;
  }

  el.innerHTML = items.map(w => `
    <div class="card weapon-card reveal" id="weapon-${w.id}">
      <span class="tag tag-brass nation-tag">${w.nation}</span>
      <h3 style="font-size:1.15rem; margin:.4rem 0 .6rem;">${w.name}</h3>
      <div class="spec-list" style="margin-bottom:1rem;">
        ${Object.entries(w.specs).map(([k, v]) => `
          <div><span>${k.replace(/([A-Z])/g, ' $1')}</span><span>${v}</span></div>
        `).join('')}
      </div>
      <p class="notes" style="font-size:.86rem; line-height:1.6; color:var(--sand); margin:0;">${w.notes}</p>
    </div>
  `).join('');

  if (typeof WW2_UI !== 'undefined' && WW2_UI.initReveal) {
    WW2_UI.initReveal();
  }
}

function initWeaponCompare() {
  const selA = document.getElementById('weaponCompareA');
  const selB = document.getElementById('weaponCompareB');
  if (!selA || !selB) return;
  const items = WEAPONS[activeCategory] || [];
  const opts = items.map(w => `<option value="${w.id}">${w.name}</option>`).join('');
  selA.innerHTML = `<option value="">Select first item…</option>${opts}`;
  selB.innerHTML = `<option value="">Select second item…</option>${opts}`;
  
  if (items.length >= 2) {
    selA.value = items[0].id;
    selB.value = items[1].id;
    renderWeaponCompare();
  } else {
    document.getElementById('weaponCompareResult').innerHTML = '';
  }

  selA.onchange = renderWeaponCompare;
  selB.onchange = renderWeaponCompare;
}

function renderWeaponCompare() {
  const items = WEAPONS[activeCategory] || [];
  const a = items.find(w => w.id === document.getElementById('weaponCompareA').value);
  const b = items.find(w => w.id === document.getElementById('weaponCompareB').value);
  const out = document.getElementById('weaponCompareResult');
  if (!a || !b) { out.innerHTML = ''; return; }
  out.innerHTML = `
    <div class="compare-col" style="background:var(--panel); border:1px solid var(--border); padding:1.2rem; border-radius:4px;">
      <h4 style="font-size:1.1rem; margin-bottom:.5rem;">${a.name} <span class="tag tag-brass" style="margin-left:.4em;">${a.nation}</span></h4>
      <div class="spec-list">${Object.entries(a.specs).map(([k, v]) => `<div><span>${k.replace(/([A-Z])/g, ' $1')}</span><span>${v}</span></div>`).join('')}</div>
      <p style="font-size:.84rem; color:var(--steel); margin-top:.8rem; line-height:1.5;">${a.notes}</p>
    </div>
    <div class="compare-col" style="background:var(--panel); border:1px solid var(--border); padding:1.2rem; border-radius:4px;">
      <h4 style="font-size:1.1rem; margin-bottom:.5rem;">${b.name} <span class="tag tag-brass" style="margin-left:.4em;">${b.nation}</span></h4>
      <div class="spec-list">${Object.entries(b.specs).map(([k, v]) => `<div><span>${k.replace(/([A-Z])/g, ' $1')}</span><span>${v}</span></div>`).join('')}</div>
      <p style="font-size:.84rem; color:var(--steel); margin-top:.8rem; line-height:1.5;">${b.notes}</p>
    </div>
  `;
}
