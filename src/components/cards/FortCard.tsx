import React from 'react';
import { Link } from 'react-router-dom';
import { Castle, MapPin, Mountain, Shield } from 'lucide-react';
import { Fort } from '../../types';
import { ERA_THEMES } from '../../data/eraThemes';

interface FortCardProps {
  fort: Fort;
}

export const FortCard: React.FC<FortCardProps> = ({ fort }) => {
  const eraTheme = fort.era && ERA_THEMES[fort.era] ? ERA_THEMES[fort.era] : ERA_THEMES.maratha;

  return (
    <article className="card-archival rounded-lg overflow-hidden flex flex-col group h-full">
      <div className="h-44 bg-charcoal-900 relative overflow-hidden">
        {fort.image ? (
          <img 
            src={fort.image} 
            alt={fort.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-deccan-stone">
            <Castle className="w-12 h-12 text-brass/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent"></div>

        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span 
            className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold text-white shadow"
            style={{ backgroundColor: eraTheme.accentColor }}
          >
            {eraTheme.name}
          </span>
          {fort.elevation && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-charcoal-950/80 text-parchment border border-brass/30 flex items-center gap-1">
              <Mountain className="w-3 h-3 text-brass" />
              {fort.elevation}
            </span>
          )}
        </div>

        {fort.marathiName && (
          <div className="absolute bottom-2 left-3 text-xs font-serif text-brass font-bold">
            {fort.marathiName}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-base sm:text-lg text-parchment group-hover:text-brass transition-colors line-clamp-1 mb-1">
            {fort.name}
          </h3>

          <div className="flex items-center gap-1 text-xs text-steel-light mb-3">
            <MapPin className="w-3 h-3 text-steel flex-shrink-0" />
            <span className="truncate">{fort.location}</span>
          </div>

          <p className="text-xs font-sans text-parchment-aged/80 line-clamp-2 leading-relaxed mb-4">
            {fort.strategicPurpose}
          </p>

          <div className="text-[11px] font-mono text-steel space-y-1 bg-charcoal-900/60 p-2.5 rounded border border-border-color/40">
            <div>
              <span className="text-brass">Architecture: </span>
              {typeof fort.architecture === 'string'
                ? fort.architecture.split(',')[0]
                : (fort.architecture?.type || 'Hill Citadel')}
            </div>
            <div>
              <span className="text-brass">Features: </span>
              {typeof fort.architecture === 'string'
                ? (fort.architecture.split(',').slice(1, 3).join(',') || 'Bastions & Gateways')
                : (fort.architecture?.bastions?.slice(0, 2).join(', ') || 'Bastions & Gateways')}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-xs font-mono text-steel mt-4">
          <span>{fort.majorSieges?.length || 0} Major Sieges</span>
          <Link
            to={`/fort/${fort.id}`}
            className="text-brass hover:text-parchment flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
          >
            <span>Architecture & History</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
