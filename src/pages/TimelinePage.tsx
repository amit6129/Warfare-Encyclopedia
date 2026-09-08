import React, { useState, useMemo } from 'react';
import { TIMELINE } from '../data/timeline';
import { Hero } from '../components/common/Hero';
import { Calendar, Clock, Filter, Swords, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EraId } from '../types';
import { ERA_THEMES } from '../data/eraThemes';

export const TimelinePage: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('all');

  const filteredTimeline = useMemo(() => {
    return TIMELINE.filter(yearBlock => {
      if (selectedEra === 'all') return true;
      const era = yearBlock.era || 'ww2';
      return era === selectedEra;
    });
  }, [selectedEra]);

  return (
    <div>
      <Hero
        title="Chronological Timeline of Warfare"
        subtitle="From Alexander's crossing of the Hellespont in 334 BCE to the surrender of Axis forces in 1945 CE: trace the rise and collapse of empires, decisive battles, and turning points across three millennia."
        eyebrow="Master Chronology"
        breadcrumbs={[{ label: 'Timeline' }]}
        metaTags={[
          { label: 'Span', value: '334 BCE – 1945 CE' },
          { label: 'Connected Milestones', value: 'Battles, Forts, Empires' }
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Era Filter Chips */}
        <div className="card-archival p-4 rounded-lg flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-mono text-steel mr-2 uppercase tracking-wider flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-brass" /> Filter Era:
          </span>
          <button
            onClick={() => setSelectedEra('all')}
            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
              selectedEra === 'all' 
                ? 'bg-brass text-charcoal-950 font-bold' 
                : 'bg-charcoal-900 text-steel-light hover:text-parchment'
            }`}
          >
            Complete Timeline
          </button>

          {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => {
            const theme = ERA_THEMES[eraKey];
            const hasEvents = TIMELINE.some(t => t.era === eraKey || (eraKey === 'ww2' && (!t.era || t.era === 'ww2')));
            if (!hasEvents) return null;

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

        {/* Timeline Stream */}
        <div className="space-y-12">
          {filteredTimeline.map((block, bIdx) => {
            const era = block.era || 'ww2';
            const theme = ERA_THEMES[era as EraId] || ERA_THEMES.ancient;

            return (
              <div key={bIdx} className="relative">
                {/* Year Header Marker */}
                <div className="sticky top-20 z-20 py-2 bg-charcoal-950/95 backdrop-blur-sm border-b border-brass/30 flex items-baseline justify-between mb-6">
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-brass">
                    {block.year}
                  </h2>
                  <span 
                    className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold text-white shadow"
                    style={{ backgroundColor: theme.accentColor }}
                  >
                    {theme.name}
                  </span>
                </div>

                {/* Events in this year */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-brass/30 space-y-6 ml-2 sm:ml-4">
                  {(block.events || []).map((ev: any, eIdx: number) => (
                    <div key={eIdx} className="relative group">
                      {/* Bullet */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-charcoal-950 border-2 border-brass group-hover:bg-brass transition-colors shadow"></div>

                      <div className="card-archival p-4 sm:p-5 rounded-lg border border-border-color/60 group-hover:border-brass/50 transition-all">
                        <div className="flex items-center gap-2 text-xs font-mono text-brass mb-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{ev.date} {block.year}</span>
                        </div>

                        <h3 className="font-display font-bold text-base sm:text-lg text-parchment mb-2">
                          {ev.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-sans text-parchment-aged leading-relaxed">
                          {ev.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
