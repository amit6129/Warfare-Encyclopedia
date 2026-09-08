/* =========================================================
   Countries of WWII page logic
   ========================================================= */

document.addEventListener('chrome:ready', ()=>{
  renderCountries('all');
  document.querySelectorAll('#countryFilters .chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      document.querySelectorAll('#countryFilters .chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      renderCountries(chip.dataset.side);
    });
  });
});

function renderCountries(side){
  const list = side === 'all' ? COUNTRIES : COUNTRIES.filter(c=>c.side===side);
  const sideTag = { allied: 'tag-brass', axis: 'tag-red', neutral: 'tag' };

  document.getElementById('countriesGrid').innerHTML = list.map(c => `
    <div class="card country-card reveal" id="country-${c.id}">
      <span class="tag ${sideTag[c.side]}">${c.side==='allied'?'Allied Power':c.side==='axis'?'Axis Power':'Neutral Nation'}</span>
      <h3 style="margin-top:.6em;">${c.name}</h3>
      <div class="figures-row"><span>Leader</span><b style="color:var(--ink-text); font-weight:600;">${c.leader}</b></div>
      <div class="figures-row"><span>Mobilised</span><b>${c.mobilised}</b></div>
      <p style="font-size:.88rem;">${c.role}</p>
    </div>
  `).join('');
  WW2_UI.initReveal();
}
