import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ERA_THEMES, getEraTheme } from '../data/eraThemes';
import { BATTLES } from '../data/battles';
import { COMMANDERS } from '../data/commanders';
import { FORTS } from '../data/forts';
import { ARMIES } from '../data/armies';
import { CAMPAIGNS } from '../data/campaigns';
import { Hero } from '../components/common/Hero';
import { BattleCard } from '../components/cards/BattleCard';
import { CommanderCard } from '../components/cards/CommanderCard';
import { FortCard } from '../components/cards/FortCard';
import { ArmyCard } from '../components/cards/ArmyCard';
import { CampaignCard } from '../components/cards/CampaignCard';
import { Shield, Swords, Users, Castle, Crosshair, Calendar, BookOpen } from 'lucide-react';
import { EraId } from '../types';

export const EraDetailPage: React.FC = () => {
  const { eraId } = useParams<{ eraId: string }>();

  const era = useMemo(() => {
    return ERA_THEMES[eraId as EraId] || ERA_THEMES.ancient;
  }, [eraId]);

  // Filter items belonging to this era
  const eraBattles = useMemo(() => {
    return BATTLES.filter(b => b.era === era.id || (era.id === 'ww2' && (!b.era || b.era === 'ww2')));
  }, [era.id]);

  const eraCommanders = useMemo(() => {
    return COMMANDERS.filter(c => c.era === era.id || (era.id === 'ww2' && (!c.era || c.era === 'ww2')));
  }, [era.id]);

  const eraForts = useMemo(() => {
    return FORTS.filter(f => f.era === era.id);
  }, [era.id]);

  const eraArmies = useMemo(() => {
    return ARMIES.filter(a => a.era === era.id);
  }, [era.id]);

  const eraCampaigns = useMemo(() => {
    return CAMPAIGNS.filter(cp => cp.era === era.id || (era.id === 'ww2' && (!cp.era || cp.era === 'ww2')));
  }, [era.id]);

  return (
    <div>
      <Hero
        title={era.name}
        subtitle={era.tagline}
        eyebrow="Civilization Monograph"
        era={era.id}
        backgroundImage={era.bannerImage}
        breadcrumbs={[
          { label: 'Eras', path: '/eras' },
          { label: era.name }
        ]}
        metaTags={[
          { label: 'Chronology', value: era.dateRange },
          { label: 'Documented Battles', value: String(eraBattles.length) },
          { label: 'Commanders', value: String(eraCommanders.length) }
        ]}
      >
        <div className="p-4 rounded-lg bg-charcoal-900/80 border border-brass/40 text-sm font-serif italic text-brass-light max-w-2xl mt-4">
          "{era.motto}"
        </div>
      </Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Doctrinal Overview */}
        <section className="card-archival rounded-xl p-8 lg:p-10 border-l-4" style={{ borderLeftColor: era.accentColor }}>
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-brass/20">
            <BookOpen className="w-5 h-5 text-brass" />
            <h2 className="font-display font-bold text-2xl text-parchment">
              Military Evolution &amp; Operational Doctrine
            </h2>
          </div>
          <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed mb-6">
            {era.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border-color/40 text-center">
            <div className="p-3 bg-charcoal-950/80 rounded border border-border-color">
              <div className="font-display font-bold text-xl text-brass">{eraBattles.length}</div>
              <div className="text-[10px] font-mono text-steel uppercase">Archived Battles</div>
            </div>
            <div className="p-3 bg-charcoal-950/80 rounded border border-border-color">
              <div className="font-display font-bold text-xl text-brass">{eraCommanders.length}</div>
              <div className="text-[10px] font-mono text-steel uppercase">Commanders</div>
            </div>
            <div className="p-3 bg-charcoal-950/80 rounded border border-border-color">
              <div className="font-display font-bold text-xl text-brass">{eraArmies.length}</div>
              <div className="text-[10px] font-mono text-steel uppercase">Armies &amp; Doctrines</div>
            </div>
            <div className="p-3 bg-charcoal-950/80 rounded border border-border-color">
              <div className="font-display font-bold text-xl text-brass">{eraForts.length}</div>
              <div className="text-[10px] font-mono text-steel uppercase">Fortresses</div>
            </div>
          </div>
        </section>

        {/* Battles in this Era */}
        {eraBattles.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-brass/20 pb-3">
              <div className="flex items-center gap-2">
                <Swords className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Major Battles &amp; Engagements ({eraBattles.length})
                </h2>
              </div>
              <Link to="/battles" className="text-xs font-mono text-brass hover:underline">
                View in Battles Directory &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eraBattles.map(battle => (
                <BattleCard key={battle.id} battle={battle} />
              ))}
            </div>
          </section>
        )}

        {/* Commanders in this Era */}
        {eraCommanders.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-brass/20 pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  High Command &amp; Sovereigns ({eraCommanders.length})
                </h2>
              </div>
              <Link to="/commanders" className="text-xs font-mono text-brass hover:underline">
                View All Commanders &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eraCommanders.map(cmdr => (
                <CommanderCard key={cmdr.id} commander={cmdr} />
              ))}
            </div>
          </section>
        )}

        {/* Armies & Formations in this Era */}
        {eraArmies.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-brass/20 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Military Formations &amp; Armies
                </h2>
              </div>
              <Link to="/armies" className="text-xs font-mono text-brass hover:underline">
                View All Armies &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eraArmies.map(army => (
                <ArmyCard key={army.id} army={army} />
              ))}
            </div>
          </section>
        )}

        {/* Campaigns in this Era */}
        {eraCampaigns.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-brass/20 pb-3">
              <div className="flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Strategic Campaigns &amp; Expeditions
                </h2>
              </div>
              <Link to="/campaigns" className="text-xs font-mono text-brass hover:underline">
                View All Campaigns &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eraCampaigns.map(camp => (
                <CampaignCard key={camp.id} campaign={camp} />
              ))}
            </div>
          </section>
        )}

        {/* Forts in this Era */}
        {eraForts.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-brass/20 pb-3">
              <div className="flex items-center gap-2">
                <Castle className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Fortresses &amp; Strongholds
                </h2>
              </div>
              <Link to="/forts" className="text-xs font-mono text-brass hover:underline">
                View All Forts &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eraForts.map(fort => (
                <FortCard key={fort.id} fort={fort} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
