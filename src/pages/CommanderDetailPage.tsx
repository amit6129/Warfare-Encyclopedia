import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMMANDERS } from '../data/commanders';
import { BATTLES } from '../data/battles';
import { CAMPAIGNS } from '../data/campaigns';
import { Hero } from '../components/common/Hero';
import { FactPanel } from '../components/common/FactPanel';
import { BattleCard } from '../components/cards/BattleCard';
import { CampaignCard } from '../components/cards/CampaignCard';
import { Shield, Award, BookOpen, Swords, Crosshair, ArrowLeft } from 'lucide-react';
import { getEraTheme } from '../data/eraThemes';

export const CommanderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const commander = useMemo(() => {
    return COMMANDERS.find(c => c.id === id);
  }, [id]);

  if (!commander) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Shield className="w-16 h-16 text-brass/40 mx-auto mb-4" />
        <h1 className="font-display text-3xl font-bold text-parchment">Commander Profile Not Found</h1>
        <p className="text-steel font-sans mt-2">No military dossier matching "{id}" exists in the high command register.</p>
        <div className="mt-8">
          <Link to="/commanders" className="px-6 py-2.5 rounded bg-brass text-charcoal-950 font-serif font-bold text-sm">
            Return to High Command Register
          </Link>
        </div>
      </div>
    );
  }

  const eraTheme = getEraTheme(commander.era);

  // Associated Battles
  const associatedBattles = useMemo(() => {
    const lastName = commander.name.split(' ').pop()?.toLowerCase() || '';
    return BATTLES.filter(b => {
      const cmdStr = JSON.stringify(b.commanders || {}).toLowerCase();
      const rawText = (b.name + ' ' + (b.summary || '') + ' ' + (b.outcome || '')).toLowerCase();
      return cmdStr.includes(lastName) || cmdStr.includes(commander.id) || rawText.includes(commander.id);
    });
  }, [commander]);

  // Associated Campaigns
  const associatedCampaigns = useMemo(() => {
    const lastName = commander.name.split(' ').pop()?.toLowerCase() || '';
    return CAMPAIGNS.filter(cp => {
      const raw = JSON.stringify(cp).toLowerCase();
      return raw.includes(lastName) || raw.includes(commander.id);
    });
  }, [commander]);

  return (
    <div>
      {/* HERO */}
      <Hero
        title={commander.name}
        subtitle={commander.role}
        eyebrow={`${eraTheme.name} • Command Dossier`}
        era={commander.era}
        variant="commander"
        initials={commander.initials}
        commanderColor={commander.color}
        breadcrumbs={[
          { label: 'Commanders', path: '/commanders' },
          { label: commander.name }
        ]}
        metaTags={[
          { label: 'Nation', value: commander.nation },
          { label: 'Era', value: eraTheme.name },
          { label: 'Role', value: commander.role }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: BIOGRAPHY, DOCTRINE & BATTLES */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Biography */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Shield className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Historical Biography &amp; Military Service Record
                </h2>
              </div>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
                {commander.bio}
              </p>
            </section>

            {/* Tactical Doctrine & Command Innovations */}
            <section className="card-archival rounded-lg p-6 sm:p-8 border-l-4 border-l-brass">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-brass/20">
                <Award className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Command Doctrine &amp; Tactical Innovations
                </h2>
              </div>
              <div className="p-4 rounded bg-charcoal-900 border border-brass/30 text-sm sm:text-base font-serif italic text-brass-light leading-relaxed">
                "{commander.doctrine || 'Relentless operational speed, direct tactical oversight, mastery of local terrain, and decisive combined-arms concentration.'}"
              </div>
            </section>

            {/* Documented Engagements */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-brass/20 pb-3">
                <div className="flex items-center gap-2">
                  <Swords className="w-5 h-5 text-brass" />
                  <h2 className="font-display font-bold text-xl text-parchment">
                    Documented Battles &amp; Engagements ({associatedBattles.length})
                  </h2>
                </div>
                <Link to="/battles" className="text-xs font-mono text-brass hover:underline">
                  All Battles &rarr;
                </Link>
              </div>

              {associatedBattles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {associatedBattles.map(battle => (
                    <BattleCard key={battle.id} battle={battle} />
                  ))}
                </div>
              ) : (
                <div className="card-archival p-6 rounded-lg text-center text-steel font-serif text-sm">
                  Strategic engagements indexed within general campaign ledgers. Browse the complete Battles directory.
                </div>
              )}
            </section>

            {/* Associated Campaigns */}
            {associatedCampaigns.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-brass/20 pb-3">
                  <Crosshair className="w-5 h-5 text-brass" />
                  <h2 className="font-display font-bold text-xl text-parchment">
                    Major Strategic Campaigns ({associatedCampaigns.length})
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {associatedCampaigns.map(camp => (
                    <CampaignCard key={camp.id} campaign={camp} />
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT COLUMN: FACT SHEET & CITATION */}
          <aside className="space-y-6">
            <FactPanel
              title="Command Dossier Metrics"
              items={[
                { label: 'Full Name', value: commander.name },
                { label: 'Faction / Nation', value: commander.nation, highlight: true },
                { label: 'Role & Office', value: commander.role },
                { label: 'Era Classification', value: eraTheme.name },
                { label: 'Category', value: commander.category === 'military' ? 'Military Commander' : 'Political Sovereign' },
                ...(commander.birth ? [{ label: 'Born', value: commander.birth }] : []),
                ...(commander.death ? [{ label: 'Died', value: commander.death }] : [])
              ]}
            />

            <div className="card-archival rounded-lg p-5 space-y-3 text-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brass font-bold pb-2 border-b border-brass/20 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Scholarly Historiography
              </h3>
              <p className="text-steel leading-relaxed">
                Biographical dossiers are authenticated using official state records, dispatch logs, contemporary memoirs, and academic peer reviews.
              </p>
            </div>

            <div className="space-y-2">
              <Link
                to="/commanders"
                className="w-full py-2.5 px-4 rounded bg-charcoal-900 hover:bg-charcoal-850 text-parchment border border-brass/40 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brass" />
                <span>Return to Commanders Register</span>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
