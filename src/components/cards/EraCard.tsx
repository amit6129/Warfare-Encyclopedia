import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Calendar } from 'lucide-react';
import { EraTheme } from '../../types';

interface EraCardProps {
  era: EraTheme;
}

export const EraCard: React.FC<EraCardProps> = ({ era }) => {
  return (
    <Link 
      to={`/era/${era.id}`}
      className="card-archival rounded-lg overflow-hidden flex flex-col group relative h-full text-decoration-none"
    >
      {/* Background image & gradient */}
      <div className="h-48 bg-charcoal-900 relative overflow-hidden">
        <img
          src={era.bannerImage}
          alt={era.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-[0.4] contrast-125 group-hover:brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent"></div>

        {/* Date Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span 
            className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase text-white shadow-md flex items-center gap-1"
            style={{ backgroundColor: era.accentColor }}
          >
            <Calendar className="w-3 h-3" />
            {era.dateRange}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl text-parchment group-hover:text-brass transition-colors mb-1.5">
            {era.name}
          </h3>

          <div className="text-xs font-serif text-brass italic mb-3">
            "{era.motto}"
          </div>

          <p className="text-xs font-sans text-parchment-aged/80 line-clamp-3 leading-relaxed mb-4">
            {era.description}
          </p>
        </div>

        <div className="pt-3 border-t border-border-color/60 flex items-center justify-between text-xs font-mono text-brass group-hover:text-parchment transition-colors mt-auto">
          <span>Enter Era Archive</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
