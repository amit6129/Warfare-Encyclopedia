import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Crosshair, ChevronRight } from 'lucide-react';
import { Army } from '../../types';
import { ERA_THEMES } from '../../data/eraThemes';

interface ArmyCardProps {
  army: Army;
}

export const ArmyCard: React.FC<ArmyCardProps> = ({ army }) => {
  const eraTheme = army.era && ERA_THEMES[army.era] ? ERA_THEMES[army.era] : ERA_THEMES.ancient;

  return (
    <article className="card-archival rounded-lg overflow-hidden flex flex-col group h-full">
      <div className="h-44 bg-charcoal-900 relative overflow-hidden">
        {army.image ? (
          <img 
            src={army.image} 
            alt={army.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal-950">
            <Users className="w-12 h-12 text-brass/40" />
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

        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs font-mono text-parchment">
          <span className="text-brass font-bold">{army.nation}</span>
          <span className="text-steel">{army.period}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-base sm:text-lg text-parchment group-hover:text-brass transition-colors line-clamp-1 mb-2">
            {army.name}
          </h3>

          <p className="text-xs font-sans text-parchment-aged/80 line-clamp-2 leading-relaxed mb-4">
            {army.summary}
          </p>

          <div className="space-y-1.5 text-xs font-mono bg-charcoal-900/80 p-3 rounded border border-border-color/50 mb-3">
            <div className="text-[11px] text-brass uppercase tracking-wider font-bold">Key Tactical Units:</div>
            <div className="text-steel-light line-clamp-2">
              {army.units.map(u => u.name).join(' • ')}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-xs font-mono text-steel mt-auto">
          <span>{army.units.length} Core Formations</span>
          <Link
            to={`/army/${army.id}`}
            className="text-brass hover:text-parchment flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
          >
            <span>Doctrine & Units</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
