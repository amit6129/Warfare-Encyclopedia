import React from 'react';
import { Link } from 'react-router-dom';
import { Crosshair, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Campaign } from '../../types';
import { ERA_THEMES } from '../../data/eraThemes';

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const eraTheme = campaign.era && ERA_THEMES[campaign.era] ? ERA_THEMES[campaign.era] : ERA_THEMES.ancient;

  return (
    <article className="card-archival rounded-lg overflow-hidden flex flex-col group p-5 h-full">
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span 
          className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold text-white shadow"
          style={{ backgroundColor: eraTheme.accentColor }}
        >
          {eraTheme.name}
        </span>
        <div className="flex items-center gap-1 text-xs font-mono text-brass">
          <Calendar className="w-3.5 h-3.5" />
          <span>{campaign.date}</span>
        </div>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-parchment group-hover:text-brass transition-colors line-clamp-1 mb-1">
        {campaign.name}
      </h3>

      <div className="text-xs font-mono text-steel mb-3">
        Nation: <span className="text-parchment font-semibold">{campaign.nation}</span> &middot; Theatre: <span className="text-brass">{campaign.theatre}</span>
      </div>

      <p className="text-xs font-sans text-parchment-aged/80 line-clamp-2 leading-relaxed mb-3 flex-1">
        {campaign.objective}
      </p>

      {campaign.outcome && (
        <div className="p-2.5 rounded bg-charcoal-900 border border-border-color/50 mb-4 text-[11px]">
          <span className="text-brass font-mono uppercase text-[9px] block tracking-wider mb-0.5">Campaign Outcome:</span>
          <p className="text-steel-light line-clamp-2 font-serif">
            {campaign.outcome}
          </p>
        </div>
      )}

      <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-xs font-mono text-steel mt-auto">
        <span>{campaign.related?.length || 0} Engagements</span>
        <Link
          to={`/campaign/${campaign.id}`}
          className="text-brass hover:text-parchment flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
        >
          <span>March Routes & Atlas</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </article>
  );
};
