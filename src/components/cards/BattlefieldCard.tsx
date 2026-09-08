import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, MapPin, Landmark, Swords } from 'lucide-react';
import { Battlefield } from '../../types';
import { ERA_THEMES } from '../../data/eraThemes';

interface BattlefieldCardProps {
  battlefield: Battlefield;
}

export const BattlefieldCard: React.FC<BattlefieldCardProps> = ({ battlefield }) => {
  const eraTheme = battlefield.era && ERA_THEMES[battlefield.era] ? ERA_THEMES[battlefield.era] : ERA_THEMES.ancient;

  return (
    <article className="card-archival rounded-lg overflow-hidden flex flex-col group h-full">
      <div className="h-44 bg-charcoal-900 relative overflow-hidden">
        {battlefield.image ? (
          <img 
            src={battlefield.image} 
            alt={battlefield.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal-950">
            <Mountain className="w-12 h-12 text-brass/40" />
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
        </div>

        <div className="absolute bottom-2 left-3 right-3 text-xs font-serif text-brass font-bold flex items-center gap-1.5">
          <Swords className="w-3.5 h-3.5 text-brass" />
          <span>{battlefield.battleName}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-base sm:text-lg text-parchment group-hover:text-brass transition-colors line-clamp-1 mb-1">
            {battlefield.name}
          </h3>

          <div className="flex items-center gap-1 text-xs text-steel-light mb-3">
            <MapPin className="w-3 h-3 text-steel flex-shrink-0" />
            <span className="truncate">{battlefield.location}</span>
          </div>

          <p className="text-xs font-sans text-parchment-aged/80 line-clamp-2 leading-relaxed mb-3">
            {battlefield.strategicGeography}
          </p>

          <div className="p-2.5 bg-charcoal-900/80 rounded border border-border-color/40 text-[11px] font-mono text-steel space-y-1">
            <div><span className="text-brass">Terrain:</span> {battlefield.terrain.slice(0, 75)}…</div>
          </div>
        </div>

        <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-xs font-mono text-steel mt-4">
          <span>{battlefield.region}</span>
          <Link
            to={`/battlefield/${battlefield.id}`}
            className="text-brass hover:text-parchment flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
          >
            <span>Topography & Memorials</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
