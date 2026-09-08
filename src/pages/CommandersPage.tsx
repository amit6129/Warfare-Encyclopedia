import React, { useState, useMemo } from 'react';
import { COMMANDERS } from '../data/commanders';
import { Hero } from '../components/common/Hero';
import { CommanderCard } from '../components/cards/CommanderCard';
import { Users, Search, Filter } from 'lucide-react';
import { EraId } from '../types';
import { ERA_THEMES } from '../data/eraThemes';

export const CommandersPage: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCommanders = useMemo(() => {
    return COMMANDERS.filter(c => {
      const matchesEra = selectedEra === 'all' || c.era === selectedEra;
      const matchesRole = selectedRole === 'all' || c.category === selectedRole;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        c.name.toLowerCase().includes(q) || 
        c.nation.toLowerCase().includes(q) || 
        c.role.toLowerCase().includes(q);

      return matchesEra && matchesRole && matchesSearch;
    });
  }, [selectedEra, selectedRole, searchQuery]);

  return (
    <div>
      <Hero
        title="High Command &amp; Sovereigns"
        subtitle="Biographical dossiers, command doctrines, and tactical records of the monarchs, marshals, and generals who directed history's most consequential campaigns across three millennia."
        eyebrow="Leadership Archive"
        breadcrumbs={[{ label: 'Commanders' }]}
        metaTags={[
          { label: 'Archived Figures', value: String(COMMANDERS.length) },
          { label: 'Doctrines Documented', value: 'Asymmetric, Combined Arms, Deep Battle' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Filter Toolbar */}
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
              All Commanders ({COMMANDERS.length})
            </button>

            {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => {
              const theme = ERA_THEMES[eraKey];
              const count = COMMANDERS.filter(c => c.era === eraKey || (eraKey === 'ww2' && (!c.era || c.era === 'ww2'))).length;
              if (count === 0) return null;

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
                  {theme.name} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border-color/40">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-steel absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by commander name, faction, or role..."
                className="w-full bg-charcoal-950 border border-border-color rounded pl-9 pr-3 py-2 text-xs font-sans text-parchment focus:outline-none focus:border-brass"
              />
            </div>

            <div className="sm:w-48">
              <select
                value={selectedRole}
                onChange={e => setSelectedRole(e.target.value)}
                className="w-full bg-charcoal-950 border border-border-color rounded px-3 py-2 text-xs font-mono text-parchment focus:outline-none focus:border-brass"
              >
                <option value="all">All Roles</option>
                <option value="military">Military Strategists</option>
                <option value="political">Political Sovereigns</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommanders.map(cmdr => (
            <CommanderCard key={cmdr.id} commander={cmdr} />
          ))}
        </div>

      </div>
    </div>
  );
};
