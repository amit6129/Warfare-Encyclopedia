import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Swords, Users, Castle, Mountain, Crosshair, Calendar, BookOpen, ArrowRight, Compass, Scale } from 'lucide-react';
import { BATTLES } from '../data/battles';
import { COMMANDERS } from '../data/commanders';
import { FORTS } from '../data/forts';
import { CAMPAIGNS } from '../data/campaigns';
import { ERA_THEMES } from '../data/eraThemes';
import { BattleCard } from '../components/cards/BattleCard';
import { CommanderCard } from '../components/cards/CommanderCard';
import { FortCard } from '../components/cards/FortCard';
import { EraCard } from '../components/cards/EraCard';
import { EraId } from '../types';

export const HomePage: React.FC = () => {
  const featuredBattles = BATTLES.filter(b => b.tier === 'featured').slice(0, 6);
  const featuredCommanders = COMMANDERS.slice(0, 6);
  const featuredForts = FORTS.slice(0, 3);

  const stats = [
    { label: 'Archived Engagements', count: BATTLES.length || 123, icon: Swords },
    { label: 'Legendary Commanders', count: COMMANDERS.length || 27, icon: Users },
    { label: 'Strategic Campaigns', count: CAMPAIGNS.length || 27, icon: Crosshair },
    { label: 'Mountain & Sea Forts', count: FORTS.length || 9, icon: Castle },
    { label: 'Years of Human History', count: '3,000+', icon: Calendar },
    { label: 'Civilization Eras', count: Object.keys(ERA_THEMES).length, icon: Shield }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-brass/40">
        {/* Background Image & Texture */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85"
            alt="Historical Warfare"
            className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40"></div>
          <div className="absolute inset-0 vignette-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brass/40 bg-charcoal-900/80 text-brass text-xs font-mono uppercase tracking-widest mb-6 shadow-archival">
            <span className="w-2 h-2 rounded-full bg-brass animate-pulse"></span>
            Scholarly Historical Warfare Encyclopedia & Atlas
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-wider text-parchment leading-tight">
            MARCH OF <span className="text-brass">EMPIRE</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-heading italic text-brass-light tracking-wide">
            Where Empires Rise and History Marches.
          </p>

          <p className="mt-6 text-sm sm:text-base font-sans text-parchment-aged max-w-2xl mx-auto leading-relaxed">
            Enter a digital museum and battlefield atlas exploring three millennia of human conflict: the phalanxes of Alexander, the legions of Caesar, the guerrilla hill fort defense of Chhatrapati Shivaji Maharaj, the grand batteries of Napoleon, and the global clash of World War II.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/eras"
              className="px-8 py-3.5 rounded bg-brass hover:bg-brass-light text-charcoal-950 font-serif font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-brass/20 flex items-center gap-2"
            >
              <span>Explore Eras</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/battles"
              className="px-8 py-3.5 rounded bg-charcoal-900/90 hover:bg-charcoal-850 text-parchment border border-brass/50 hover:border-brass font-serif font-semibold text-sm tracking-wider uppercase transition-all"
            >
              Battles Encyclopedia
            </Link>

            <Link
              to="/maps"
              className="px-8 py-3.5 rounded bg-charcoal-900/90 hover:bg-charcoal-850 text-steel-light hover:text-parchment border border-border-color font-mono text-sm tracking-wider transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-brass" />
              <span>Battle Atlas</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. IMPERIAL COUNTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="card-archival p-4 rounded-lg text-center border-t-2 border-t-brass/80 flex flex-col items-center justify-center"
              >
                <Icon className="w-5 h-5 text-brass mb-2" />
                <div className="font-display font-black text-2xl sm:text-3xl text-parchment">
                  {stat.count}
                </div>
                <div className="text-[10px] font-mono text-steel uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WARS THAT SHAPED HISTORY (8 ERAS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-brass/20 pb-4">
          <div>
            <span className="text-xs font-mono text-brass uppercase tracking-widest block mb-1">
              Chronological Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-parchment">
              Wars That Shaped History
            </h2>
          </div>
          <Link to="/eras" className="text-xs font-mono text-brass hover:text-parchment flex items-center gap-1 mt-2 md:mt-0">
            <span>Explore All 8 Civilization Profiles</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => (
            <EraCard key={eraKey} era={ERA_THEMES[eraKey]} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED BATTLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-brass/20 pb-4">
          <div>
            <span className="text-xs font-mono text-brass uppercase tracking-widest block mb-1">
              Field Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-parchment">
              Landmark Engagements
            </h2>
          </div>
          <Link to="/battles" className="text-xs font-mono text-brass hover:text-parchment flex items-center gap-1 mt-2 md:mt-0">
            <span>View All 120+ Battles</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBattles.map(battle => (
            <BattleCard key={battle.id} battle={battle} />
          ))}
        </div>
      </section>

      {/* 5. LEGENDARY COMMANDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-brass/20 pb-4">
          <div>
            <span className="text-xs font-mono text-brass uppercase tracking-widest block mb-1">
              High Command Ledger
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-parchment">
              Commanders &amp; Strategists
            </h2>
          </div>
          <Link to="/commanders" className="text-xs font-mono text-brass hover:text-parchment flex items-center gap-1 mt-2 md:mt-0">
            <span>Browse Complete Command Ledger</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCommanders.map(cmdr => (
            <CommanderCard key={cmdr.id} commander={cmdr} />
          ))}
        </div>
      </section>

      {/* 6. FORTRESSES OF HISTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-brass/20 pb-4">
          <div>
            <span className="text-xs font-mono text-brass uppercase tracking-widest block mb-1">
              Architecture of Defense
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-parchment">
              Fortresses of History
            </h2>
          </div>
          <Link to="/forts" className="text-xs font-mono text-brass hover:text-parchment flex items-center gap-1 mt-2 md:mt-0">
            <span>View All Fortresses &amp; Blueprints</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredForts.map(fort => (
            <FortCard key={fort.id} fort={fort} />
          ))}
        </div>
      </section>

      {/* 7. DIGITAL MUSEUM & RESEARCH WINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="card-archival rounded-xl p-8 lg:p-12 border-2 border-brass/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brass/5 rounded-full filter blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono text-brass uppercase tracking-widest block mb-2">
              Digital Historical Archive
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-parchment leading-tight">
              An Interconnected Knowledge Network of Warfare
            </h2>
            <p className="mt-4 text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
              Every battle links to its commander; every commander links to their army and doctrines; every campaign connects to its fortified strongholds and battlefield geography. Trace the cause and consequence of history with interactive primary sources.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link to="/timeline" className="p-3 bg-charcoal-900/80 rounded border border-brass/20 hover:border-brass text-center group">
                <Calendar className="w-5 h-5 text-brass mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-serif text-parchment group-hover:text-brass">Chronology</span>
              </Link>

              <Link to="/weapons" className="p-3 bg-charcoal-900/80 rounded border border-brass/20 hover:border-brass text-center group">
                <Scale className="w-5 h-5 text-brass mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-serif text-parchment group-hover:text-brass">Materiel Specs</span>
              </Link>

              <Link to="/battlefields" className="p-3 bg-charcoal-900/80 rounded border border-brass/20 hover:border-brass text-center group">
                <Mountain className="w-5 h-5 text-brass mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-serif text-parchment group-hover:text-brass">Battlefields</span>
              </Link>

              <Link to="/archive" className="p-3 bg-charcoal-900/80 rounded border border-brass/20 hover:border-brass text-center group">
                <BookOpen className="w-5 h-5 text-brass mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-serif text-parchment group-hover:text-brass">Glossary &amp; FAQ</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
