import React from 'react';
import { Weapon } from '../../types';
import { Crosshair, Shield } from 'lucide-react';
import { ERA_THEMES } from '../../data/eraThemes';

interface WeaponCardProps {
  weapon: Weapon;
}

export const WeaponCard: React.FC<WeaponCardProps> = ({ weapon }) => {
  const eraTheme = weapon.era && ERA_THEMES[weapon.era] ? ERA_THEMES[weapon.era] : ERA_THEMES.ancient;

  return (
    <article className="card-archival rounded-lg p-5 flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span 
            className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold text-white shadow"
            style={{ backgroundColor: eraTheme.accentColor }}
          >
            {weapon.nation}
          </span>
          <span className="text-[10px] font-mono text-steel uppercase">
            {weapon.category}
          </span>
        </div>

        <h3 className="font-display font-bold text-base sm:text-lg text-parchment group-hover:text-brass transition-colors mb-3">
          {weapon.name}
        </h3>

        {/* Technical Specs List */}
        <div className="space-y-1.5 p-3 rounded bg-charcoal-900 border border-border-color/50 text-xs font-mono mb-4">
          {Object.entries(weapon.specs || {}).map(([key, val]) => (
            <div key={key} className="flex justify-between items-center py-0.5 border-b border-border-color/30 last:border-b-0">
              <span className="text-steel uppercase tracking-wider text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
              <span className="text-parchment font-semibold">{val}</span>
            </div>
          ))}
        </div>

        <p className="text-xs font-sans text-parchment-aged/80 line-clamp-3 leading-relaxed mb-3">
          {weapon.notes}
        </p>
      </div>

      <div className="pt-3 border-t border-border-color/60 text-[11px] font-mono text-brass-dark flex items-center gap-1">
        <Shield className="w-3 h-3 text-brass" />
        <span>Technical Archive Record</span>
      </div>
    </article>
  );
};
