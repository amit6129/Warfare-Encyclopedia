import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, ChevronRight } from 'lucide-react';
import { Commander } from '../../types';
import { ERA_THEMES } from '../../data/eraThemes';

interface CommanderCardProps {
  commander: Commander;
}

export const CommanderCard: React.FC<CommanderCardProps> = ({ commander }) => {
  const eraTheme = commander.era && ERA_THEMES[commander.era] ? ERA_THEMES[commander.era] : ERA_THEMES.ancient;

  return (
    <article className="card-archival rounded-lg overflow-hidden flex flex-col group p-5 h-full">
      <div className="flex items-start gap-4 mb-3">
        {/* Figure Initials Avatar */}
        <div 
          className="w-14 h-14 rounded-lg flex items-center justify-center text-xl font-display font-black text-white shadow-lg border border-brass/40 flex-shrink-0 group-hover:scale-105 transition-transform"
          style={{ background: `linear-gradient(135deg, ${commander.color || '#4B5320'}, #0c0f12)` }}
        >
          {commander.initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
            <span 
              className="text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold text-white"
              style={{ backgroundColor: eraTheme.accentColor }}
            >
              {eraTheme.name}
            </span>
            <span className="text-[10px] font-mono text-steel uppercase truncate">
              {commander.nation}
            </span>
          </div>

          <h3 className="font-display font-bold text-base text-parchment group-hover:text-brass transition-colors truncate">
            {commander.name}
          </h3>

          <div className="text-xs font-serif text-brass-dark truncate">
            {commander.role}
          </div>
        </div>
      </div>

      <p className="text-xs font-sans text-parchment-aged/80 line-clamp-3 leading-relaxed mb-4 flex-1">
        {commander.bio}
      </p>

      {commander.doctrine && (
        <div className="p-2.5 rounded bg-charcoal-900 border border-border-color/60 mb-4 text-[11px]">
          <span className="text-brass font-mono uppercase text-[9px] block tracking-wider mb-0.5">Command Doctrine:</span>
          <p className="text-steel-light line-clamp-2 italic font-serif leading-snug">
            "{commander.doctrine}"
          </p>
        </div>
      )}

      <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-xs font-mono text-steel mt-auto">
        <span className="capitalize">{commander.category} Leader</span>
        <Link
          to={`/commander/${commander.id}`}
          className="text-brass hover:text-parchment flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
        >
          <span>Dossier</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </article>
  );
};
