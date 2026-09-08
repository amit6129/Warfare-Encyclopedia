import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight, MapPin, Calendar, Award, Swords } from 'lucide-react';
import { EraId } from '../../types';
import { ERA_THEMES } from '../../data/eraThemes';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  era?: EraId | string;
  backgroundImage?: string;
  metaTags?: Array<{ label: string; value: string; color?: string }>;
  children?: React.ReactNode;
  variant?: 'standard' | 'battle' | 'commander' | 'fort' | 'era';
  initials?: string;
  commanderColor?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  eyebrow,
  breadcrumbs = [],
  era,
  backgroundImage,
  metaTags = [],
  children,
  variant = 'standard',
  initials,
  commanderColor = '#8B6914'
}) => {
  const eraTheme = era && ERA_THEMES[era as EraId] ? ERA_THEMES[era as EraId] : null;

  return (
    <section className="relative overflow-hidden border-b border-brass/30 bg-charcoal-950 py-12 md:py-16">
      {/* Background Graphic & Texture */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt={title} 
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40"></div>
          <div className="absolute inset-0 vignette-overlay"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-parchment-pattern opacity-60"></div>
      )}

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Bar */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs font-mono text-steel mb-4 flex-wrap">
            <Link to="/" className="hover:text-brass transition-colors">Home</Link>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-brass/40 flex-shrink-0" />
                {bc.path ? (
                  <Link to={bc.path} className="hover:text-brass transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-parchment-aged truncate max-w-xs">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {eyebrow && (
            <span className="text-xs font-mono font-bold tracking-widest text-brass uppercase flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brass" />
              {eyebrow}
            </span>
          )}

          {eraTheme && (
            <Link
              to={`/era/${eraTheme.id}`}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-brass/40 bg-charcoal-900/80 text-brass hover:bg-brass hover:text-charcoal-950 transition-colors uppercase"
            >
              {eraTheme.name}
            </Link>
          )}

          {metaTags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-charcoal-900/80 border border-steel/30 text-steel-light"
            >
              <span className="text-steel">{tag.label}:</span> <strong className="text-parchment">{tag.value}</strong>
            </span>
          ))}
        </div>

        {/* Main Content Layout based on Variant */}
        {variant === 'commander' ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-2">
            {/* Commander Crest Portrait */}
            <div 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg border-2 border-brass/50 shadow-2xl flex items-center justify-center text-3xl sm:text-4xl font-display font-black text-white flex-shrink-0 shadow-archival"
              style={{ background: `linear-gradient(135deg, ${commanderColor}, #0c0f12)` }}
            >
              {initials || title.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-parchment tracking-wide leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-base sm:text-lg font-serif text-brass-light max-w-3xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-parchment tracking-wide leading-tight max-w-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg font-serif text-parchment-aged max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Custom Extra Slots */}
        {children && <div className="mt-6">{children}</div>}

      </div>
    </section>
  );
};
