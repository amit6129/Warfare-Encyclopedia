import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Swords, Shield } from 'lucide-react';
import { Battle } from '../../types';
import { ERA_THEMES } from '../../data/eraThemes';

interface BattleCardProps {
  battle: Battle;
}

export const BattleCard: React.FC<BattleCardProps> = ({ battle }) => {
  const eraTheme = battle.era && ERA_THEMES[battle.era] ? ERA_THEMES[battle.era] : ERA_THEMES.ancient;

  return (
    <article className="card-archival rounded-lg overflow-hidden flex flex-col group h-full">
      {/* Tactical Map / Header Graphic */}
      <div className="h-32 bg-charcoal-900 relative overflow-hidden flex items-center justify-center border-b border-border-color/60">
        {/* Subtle SVG Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

        {/* Tactical Line Simulation */}
        <svg viewBox="0 0 300 130" className="w-full h-full opacity-60 group-hover:opacity-80 transition-opacity">
          <path d="M20,100 L90,60 L180,80 L270,35" fill="none" stroke={eraTheme.accentColor} strokeWidth="2" strokeDasharray="6 4"/>
          <circle cx="270" cy="35" r="5" fill={eraTheme.accentColor}/>
          <circle cx="90" cy="60" r="4" fill={eraTheme.secondaryColor}/>
          <circle cx="180" cy="80" r="4" fill={eraTheme.secondaryColor}/>
          <path d="M0,115 L300,90" stroke="#6e7781" strokeWidth="1" strokeDasharray="2 4" opacity="0.3"/>
        </svg>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span 
            className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold text-white shadow"
            style={{ backgroundColor: eraTheme.accentColor }}
          >
            {eraTheme.name}
          </span>
          {battle.tier === 'featured' && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brass/20 text-brass border border-brass/40 uppercase">
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-steel bg-charcoal-950/80 px-2 py-0.5 rounded border border-steel/20">
          {battle.theatre ? `${battle.theatre}` : eraTheme.name}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-brass mb-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{battle.dates}</span>
          </div>

          <h3 className="text-base sm:text-lg font-display font-bold text-parchment group-hover:text-brass transition-colors line-clamp-1 mb-1">
            {battle.name}
          </h3>

          <div className="flex items-center gap-1 text-xs text-steel-light mb-3">
            <MapPin className="w-3 h-3 text-steel flex-shrink-0" />
            <span className="truncate">{battle.location}</span>
          </div>

          {battle.conflict && (
            <div className="text-[11px] font-mono text-brass-dark uppercase tracking-wider mb-2">
              {battle.conflict}
            </div>
          )}

          <p className="text-xs font-sans text-parchment-aged/80 line-clamp-2 leading-relaxed mb-4">
            {battle.significance || battle.summary || 'Strategic historical engagement.'}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-border-color/60 flex items-center justify-between mt-auto">
          <span className="text-[11px] font-mono text-steel">
            Year: <strong className="text-parchment">{battle.year < 0 ? `${Math.abs(battle.year)} BCE` : `${battle.year} CE`}</strong>
          </span>
          <Link
            to={`/battle/${battle.id}`}
            className="text-xs font-mono text-brass hover:text-parchment flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
          >
            <span>Full Dossier</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
