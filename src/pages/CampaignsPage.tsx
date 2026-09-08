import React, { useState, useMemo } from 'react';
import { CAMPAIGNS } from '../data/campaigns';
import { Hero } from '../components/common/Hero';
import { CampaignCard } from '../components/cards/CampaignCard';
import { Crosshair, Search, Filter } from 'lucide-react';
import { EraId } from '../types';
import { ERA_THEMES } from '../data/eraThemes';

export const CampaignsPage: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCampaigns = useMemo(() => {
    return CAMPAIGNS.filter(cp => {
      const matchesEra = selectedEra === 'all' || cp.era === selectedEra || (selectedEra === 'ww2' && (!cp.era || cp.era === 'ww2'));
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        cp.name.toLowerCase().includes(q) || 
        cp.nation.toLowerCase().includes(q) ||
        (cp.objective && cp.objective.toLowerCase().includes(q));

      return matchesEra && matchesSearch;
    });
  }, [selectedEra, searchQuery]);

  return (
    <div>
      <Hero
        title="Strategic Campaigns &amp; Expeditions"
        subtitle="Explore history's vast strategic offensives, imperial expeditions, and multi-theater campaigns: Alexander's Persian conquest, Hannibal's march through the Alps, Caesar's Gallic Wars, Shivaji Maharaj's Southern expedition, and the massive mechanized offensives of WWII."
        eyebrow="Grand Strategy Ledger"
        breadcrumbs={[{ label: 'Campaigns' }]}
        metaTags={[
          { label: 'Archived Campaigns', value: String(CAMPAIGNS.length) },
          { label: 'Scope', value: 'Continental & Global Operations' }
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
              All Campaigns ({CAMPAIGNS.length})
            </button>

            {Array.from(new Set(CAMPAIGNS.map(c => c.era || 'ww2'))).map(eraKey => {
              const theme = ERA_THEMES[eraKey as EraId] || ERA_THEMES.ancient;
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
              placeholder="Search campaigns by name, objective, or nation..."
              className="w-full bg-charcoal-950 border border-border-color rounded pl-9 pr-3 py-2 text-xs font-sans text-parchment focus:outline-none focus:border-brass"
            />
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCampaigns.map(camp => (
            <CampaignCard key={camp.id} campaign={camp} />
          ))}
        </div>

      </div>
    </div>
  );
};
