import React, { useState, useMemo } from 'react';
import { BATTLES } from '../data/battles';
import { Hero } from '../components/common/Hero';
import { BattleCard } from '../components/cards/BattleCard';
import { Swords, Search, Filter, Calendar } from 'lucide-react';
import { EraId } from '../types';
import { ERA_THEMES } from '../data/eraThemes';

export const BattlesPage: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(18);

  // Extract all unique years
  const availableYears = useMemo(() => {
    return Array.from(new Set(BATTLES.map(b => b.year))).sort((a, b) => a - b);
  }, []);

  const filteredBattles = useMemo(() => {
    return BATTLES.filter(b => {
      // Era filter
      let matchesEra = true;
      if (selectedEra !== 'all') {
        if (selectedEra === 'ww2') {
          matchesEra = !b.era || b.era === 'ww2' || ['western', 'eastern', 'pacific', 'africa', 'atlantic', 'asia'].includes(b.theatre || '');
        } else {
          matchesEra = b.era === selectedEra || b.theatre === selectedEra;
        }
      }

      // Year filter
      const matchesYear = selectedYear === 'all' || String(b.year) === selectedYear;

      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        b.name.toLowerCase().includes(q) || 
        b.location.toLowerCase().includes(q) ||
        (b.conflict && b.conflict.toLowerCase().includes(q));

      return matchesEra && matchesYear && matchesSearch;
    });
  }, [selectedEra, selectedYear, searchQuery]);

  const displayedBattles = filteredBattles.slice(0, visibleCount);

  return (
    <div>
      <Hero
        title="Battles Encyclopedia"
        subtitle="Search, filter, and inspect tactical dossiers for over 120 historic engagements spanning ancient sieges, classical double envelopments, Maratha fort ambuscades, Napoleonic grand batteries, and the World Wars."
        eyebrow="Field Records Ledger"
        breadcrumbs={[{ label: 'Battles' }]}
        metaTags={[
          { label: 'Archived Battles', value: String(BATTLES.length) },
          { label: 'Chronological Scope', value: '334 BCE – 1945 CE' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* FILTERS TOOLBAR */}
        <div className="card-archival p-5 rounded-lg space-y-4">
          
          {/* Era Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-steel mr-2 uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-brass" /> Era:
            </span>
            <button
              onClick={() => { setSelectedEra('all'); setVisibleCount(18); }}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                selectedEra === 'all' 
                  ? 'bg-brass text-charcoal-950 font-bold' 
                  : 'bg-charcoal-900 text-steel-light hover:text-parchment'
              }`}
            >
              All Eras ({BATTLES.length})
            </button>

            {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => {
              const theme = ERA_THEMES[eraKey];
              const count = BATTLES.filter(b => b.era === eraKey || (eraKey === 'ww2' && (!b.era || b.era === 'ww2'))).length;
              if (count === 0) return null;

              return (
                <button
                  key={eraKey}
                  onClick={() => { setSelectedEra(eraKey); setVisibleCount(18); }}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1.5 ${
                    selectedEra === eraKey
                      ? 'bg-brass text-charcoal-950 font-bold'
                      : 'bg-charcoal-900 text-steel-light hover:text-parchment'
                  }`}
                  style={{ borderLeft: `3px solid ${theme.accentColor}` }}
                >
                  <span>{theme.name}</span>
                  <span className="text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search & Year Inputs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border-color/40">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-steel absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setVisibleCount(18); }}
                placeholder="Search battles by name, location, or conflict..."
                className="w-full bg-charcoal-950 border border-border-color rounded pl-9 pr-3 py-2 text-xs font-sans text-parchment focus:outline-none focus:border-brass"
              />
            </div>

            <div className="sm:w-48">
              <select
                value={selectedYear}
                onChange={e => { setSelectedYear(e.target.value); setVisibleCount(18); }}
                className="w-full bg-charcoal-950 border border-border-color rounded px-3 py-2 text-xs font-mono text-parchment focus:outline-none focus:border-brass"
              >
                <option value="all">All Recorded Years</option>
                {availableYears.map(yr => (
                  <option key={yr} value={String(yr)}>
                    {yr < 0 ? `${Math.abs(yr)} BCE` : `${yr} CE`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-[11px] font-mono text-steel flex justify-between items-center pt-1">
            <span>Displaying {displayedBattles.length} of {filteredBattles.length} engagement(s) matched</span>
            {(selectedEra !== 'all' || selectedYear !== 'all' || searchQuery) && (
              <button
                onClick={() => { setSelectedEra('all'); setSelectedYear('all'); setSearchQuery(''); }}
                className="text-brass hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* BATTLES GRID */}
        {displayedBattles.length === 0 ? (
          <div className="card-archival p-16 rounded-lg text-center text-steel font-serif">
            <Swords className="w-12 h-12 text-brass/40 mx-auto mb-3" />
            <p className="text-base text-parchment">No historical engagements match the selected criteria.</p>
            <p className="text-xs text-steel mt-1">Try broadening your era selection or clearing the search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedBattles.map(battle => (
              <BattleCard key={battle.id} battle={battle} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredBattles.length > visibleCount && (
          <div className="text-center pt-6">
            <button
              onClick={() => setVisibleCount(prev => prev + 18)}
              className="px-8 py-3 rounded bg-charcoal-900 hover:bg-charcoal-850 text-parchment border border-brass/40 text-xs font-mono uppercase tracking-wider transition-colors shadow-archival"
            >
              Load Additional Historical Records ({filteredBattles.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
