/* =========================================================
   Educational Resources page logic
   ========================================================= */

document.addEventListener('chrome:ready', ()=>{
  document.getElementById('glossaryList').innerHTML = GLOSSARY.map((g,i) => `
    <div class="accordion-item" data-i="g${i}">
      <button class="accordion-trigger"><span>${g.term}</span><span class="plus">+</span></button>
      <div class="accordion-panel"><p>${g.def}</p></div>
    </div>
  `).join('');

  document.getElementById('faqList').innerHTML = FAQS.map((f,i) => `
    <div class="accordion-item" data-i="f${i}">
      <button class="accordion-trigger"><span>${f.q}</span><span class="plus">+</span></button>
      <div class="accordion-panel"><p>${f.a}</p></div>
    </div>
  `).join('');

  document.querySelectorAll('.accordion-trigger').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.accordion-item');
      const panel = item.querySelector('.accordion-panel');
      const isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.accordion-item.open').forEach(o=>{
        o.classList.remove('open'); o.querySelector('.accordion-panel').style.maxHeight = null;
      });
      if(!isOpen){ item.classList.add('open'); panel.style.maxHeight = panel.scrollHeight + 'px'; }
    });
  });

  document.getElementById('booksGrid').innerHTML = BOOKS.map(b => `
    <div class="card reveal" style="padding:1.3rem;">
      <h3 style="font-size:.98rem;">${b.title}</h3>
      <p style="font-family:var(--font-mono); font-size:.75rem; color:var(--steel); margin-bottom:.6em;">${b.author}</p>
      <p style="font-size:.85rem; margin:0;">${b.note}</p>
    </div>
  `).join('');

  document.getElementById('docsGrid').innerHTML = DOCUMENTARIES.map(d => `
    <div class="card reveal" style="padding:1.3rem;">
      <h3 style="font-size:.98rem;">${d.title}</h3>
      <p style="font-size:.85rem; margin:0;">${d.note}</p>
    </div>
  `).join('');

  WW2_UI.initReveal();
});
