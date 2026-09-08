import React, { useState } from 'react';
import { WEAPONS } from '../data/weapons';
import { Hero } from '../components/common/Hero';
import { WeaponCard } from '../components/cards/WeaponCard';
import { WeaponComparator } from '../components/tactical/WeaponComparator';
import { Scale, Filter, Shield } from 'lucide-react';
import { Weapon } from '../types';

export const WeaponsPage: React.FC = () => {
  const categories = Object.keys(WEAPONS);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || 'ancient');

  const categoryLabels: Record<string, string> = {
    ancient: 'Ancient & Classical Arms',
    maratha: 'Maratha & Indian Materiel',
    napoleonic: 'Napoleonic Warfare',
    tanks: 'WWII Armored Fighting Vehicles',
    aircraft: 'WWII Military Aviation',
    naval: 'Naval Vessels & Warships',
    smallArms: 'Infantry Firearms'
  };

  const currentWeapons: Weapon[] = WEAPONS[activeCategory] || [];

  return (
    <div>
      <Hero
        title="Weapons &amp; Military Technology"
        subtitle="From Macedonian 18-foot pikes and Maratha flexible gauntlet swords to Napoleonic grand batteries, Tiger heavy tanks, and carrier aviation: inspect technical specifications and compare operational performance."
        eyebrow="Materiel &amp; Evolution"
        breadcrumbs={[{ label: 'Materiel' }]}
        metaTags={[
          { label: 'Weapon Categories', value: String(categories.length) },
          { label: 'Analysis Tool', value: 'Side-by-Side Specification Comparator' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Specification Comparison Tool */}
        <section>
          <WeaponComparator />
        </section>

        {/* Category Tabs */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-brass/20 pb-3 flex-wrap gap-3">
            <h2 className="font-display font-bold text-xl text-parchment">
              Armament Catalogs
            </h2>
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-mono capitalize transition-all border ${
                    activeCategory === cat
                      ? 'bg-brass text-charcoal-950 font-bold border-brass shadow-md'
                      : 'bg-charcoal-900 text-steel-light border-border-color hover:text-parchment hover:border-brass/40'
                  }`}
                >
                  {categoryLabels[cat] || cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentWeapons.map(w => (
              <WeaponCard key={w.id} weapon={w} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
