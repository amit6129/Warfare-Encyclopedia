import React, { useState, useMemo } from 'react';
import { FORTS } from '../data/forts';
import { Hero } from '../components/common/Hero';
import { FortCard } from '../components/cards/FortCard';
import { Castle, Search, Filter } from 'lucide-react';
import { EraId } from '../types';
import { ERA_THEMES } from '../data/eraThemes';

export const FortsPage: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredForts = useMemo(() => {
    return FORTS.filter(f => {
      const matchesEra = selectedEra === 'all' || f.era === selectedEra;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        f.name.toLowerCase().includes(q) || 
        f.location.toLowerCase().includes(q) ||
        (f.marathiName && f.marathiName.toLowerCase().includes(q));

      return matchesEra && matchesSearch;
    });
  }, [selectedEra, searchQuery]);

  return (
    <div>
      <Hero
        title="Fortresses of History"
        subtitle="Explore the architectural masterpieces of military defense: the basalt hill citadels and ocean fortresses of the Maratha Empire (Raigad, Rajgad, Pratapgad, Sinhagad, Sindhudurg), Roman circumvallation at Alesia, and European bastion fortresses."
        eyebrow="Architecture of Defense"
        breadcrumbs={[{ label: 'Forts' }]}
        metaTags={[
          { label: 'Archived Strongholds', value: String(FORTS.length) },
          { label: 'Primary Focus', value: 'Sahyadri Hill & Coastal Forts' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Filter Bar */}
        <div className="card-archival p-5 rounded-lg space-y-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-steel mr-2 uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-brass" /> Era:
            </span>
            <button
              onClick={() => setSelectedEra('all')}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                selectedEra === 'all' 
                  ? 'bg-brass text-charcoal-950 font-bold' 
                  : 'bg-charcoal-900 text-steel-light hover:text-parchment'
              }`}
            >
              All Fortresses ({FORTS.length})
            </button>

            {Array.from(new Set(FORTS.map(f => f.era))).map(eraKey => {
              const theme = ERA_THEMES[eraKey as EraId] || ERA_THEMES.maratha;
              return (
                <button
                  key={eraKey}
                  onClick={() => setSelectedEra(eraKey)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    selectedEra === eraKey
                      ? 'bg-brass text-charcoal-950 font-bold'
                      : 'bg-charcoal-900 text-steel-light hover:text-parchment'
                  }`}
                  style={{ borderLeft: `3px solid ${theme.accentColor}` }}
                >
                  {theme.name}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-border-color/40 relative">
            <Search className="w-4 h-4 text-steel absolute left-3 top-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search forts by name, location, or district..."
              className="w-full bg-charcoal-950 border border-border-color rounded pl-9 pr-3 py-2 text-xs font-sans text-parchment focus:outline-none focus:border-brass"
            />
          </div>
        </div>

        {/* Forts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredForts.map(fort => (
            <FortCard key={fort.id} fort={fort} />
          ))}
        </div>

      </div>
    </div>
  );
};
