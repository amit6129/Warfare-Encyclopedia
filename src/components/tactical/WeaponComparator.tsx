import React, { useState } from 'react';
import { Weapon } from '../../types';
import { WEAPONS } from '../../data/weapons';
import { Swords, Shield, Scale } from 'lucide-react';

export const WeaponComparator: React.FC = () => {
  const categories = Object.keys(WEAPONS);
  const [selectedCat, setSelectedCat] = useState<string>(categories[0] || 'ancient');
  
  const currentCategoryWeapons: Weapon[] = WEAPONS[selectedCat] || [];
  const [itemAId, setItemAId] = useState<string>(currentCategoryWeapons[0]?.id || '');
  const [itemBId, setItemBId] = useState<string>(currentCategoryWeapons[1]?.id || '');

  const itemA = currentCategoryWeapons.find(w => w.id === itemAId) || currentCategoryWeapons[0];
  const itemB = currentCategoryWeapons.find(w => w.id === itemBId) || currentCategoryWeapons[1];

  const handleCategoryChange = (cat: string) => {
    setSelectedCat(cat);
    const weps = WEAPONS[cat] || [];
    setItemAId(weps[0]?.id || '');
    setItemBId(weps[1]?.id || '');
  };

  // Extract all unique specs keys
  const allSpecKeys = Array.from(
    new Set([
      ...Object.keys(itemA?.specs || {}),
      ...Object.keys(itemB?.specs || {})
    ])
  );

  return (
    <div className="card-archival rounded-lg p-6 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-brass/20 gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-parchment flex items-center gap-2">
            <Scale className="w-5 h-5 text-brass" />
            <span>Materiel Specification Comparator</span>
          </h3>
          <p className="text-xs text-steel font-sans mt-0.5">
            Compare tactical armaments, siege weapons, firearms, armor, and combat vehicles side by side.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-2.5 py-1 rounded text-xs font-mono capitalize transition-colors ${
                selectedCat === cat
                  ? 'bg-brass text-charcoal-950 font-bold'
                  : 'bg-charcoal-900 text-steel-light hover:text-parchment border border-border-color'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-3 bg-charcoal-900 rounded border border-brass/30">
          <label className="block text-[10px] font-mono uppercase text-brass mb-1 tracking-wider">Item 1</label>
          <select
            value={itemAId}
            onChange={e => setItemAId(e.target.value)}
            className="w-full bg-charcoal-950 border border-border-color rounded p-2 text-xs font-serif text-parchment focus:outline-none focus:border-brass"
          >
            {currentCategoryWeapons.map(w => (
              <option key={w.id} value={w.id}>{w.name} ({w.nation})</option>
            ))}
          </select>
        </div>

        <div className="p-3 bg-charcoal-900 rounded border border-brass/30">
          <label className="block text-[10px] font-mono uppercase text-brass mb-1 tracking-wider">Item 2</label>
          <select
            value={itemBId}
            onChange={e => setItemBId(e.target.value)}
            className="w-full bg-charcoal-950 border border-border-color rounded p-2 text-xs font-serif text-parchment focus:outline-none focus:border-brass"
          >
            {currentCategoryWeapons.map(w => (
              <option key={w.id} value={w.id}>{w.name} ({w.nation})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Grid */}
      {itemA && itemB ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-charcoal-950/60 p-5 rounded-lg border border-brass/20">
          {/* Column A */}
          <div className="space-y-4">
            <div className="border-b border-brass/20 pb-3">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brass/20 text-brass border border-brass/40 uppercase">
                {itemA.nation}
              </span>
              <h4 className="font-display font-bold text-lg text-parchment mt-2">{itemA.name}</h4>
            </div>

            <div className="space-y-2">
              {allSpecKeys.map(key => (
                <div key={key} className="flex justify-between py-1 border-b border-border-color/30 text-xs font-mono">
                  <span className="text-steel uppercase tracking-wider text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-parchment font-semibold text-right">{itemA.specs[key] || '—'}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-sans text-parchment-aged leading-relaxed pt-2">
              {itemA.notes}
            </p>
          </div>

          {/* Column B */}
          <div className="space-y-4 md:border-l md:border-brass/20 md:pl-6">
            <div className="border-b border-brass/20 pb-3">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brass/20 text-brass border border-brass/40 uppercase">
                {itemB.nation}
              </span>
              <h4 className="font-display font-bold text-lg text-parchment mt-2">{itemB.name}</h4>
            </div>

            <div className="space-y-2">
              {allSpecKeys.map(key => (
                <div key={key} className="flex justify-between py-1 border-b border-border-color/30 text-xs font-mono">
                  <span className="text-steel uppercase tracking-wider text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-parchment font-semibold text-right">{itemB.specs[key] || '—'}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-sans text-parchment-aged leading-relaxed pt-2">
              {itemB.notes}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-6 text-steel text-xs font-mono">
          Select items above to generate technical comparison.
        </div>
      )}
    </div>
  );
};
