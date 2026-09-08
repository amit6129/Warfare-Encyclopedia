import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BATTLES } from '../data/battles';
import { COMMANDERS } from '../data/commanders';
import { FORTS } from '../data/forts';
import { BATTLEFIELDS } from '../data/battlefields';
import { Hero } from '../components/common/Hero';
import { FactPanel } from '../components/common/FactPanel';
import { BattlefieldMap } from '../components/tactical/BattlefieldMap';
import { BattleTimeline } from '../components/tactical/BattleTimeline';
import { BattleCard } from '../components/cards/BattleCard';
import { Swords, Shield, MapPin, Calendar, Users, AlertTriangle, BookOpen, ArrowLeft, ExternalLink } from 'lucide-react';
import { getEraTheme } from '../data/eraThemes';

export const BattleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const battle = useMemo(() => {
    return BATTLES.find(b => b.id === id);
  }, [id]);

  if (!battle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Swords className="w-16 h-16 text-brass/40 mx-auto mb-4" />
        <h1 className="font-display text-3xl font-bold text-parchment">Engagement Not Found</h1>
        <p className="text-steel font-sans mt-2">The battle record with identification "{id}" was not located in the archives.</p>
        <div className="mt-8">
          <Link to="/battles" className="px-6 py-2.5 rounded bg-brass text-charcoal-950 font-serif font-bold text-sm">
            Return to Battles Encyclopedia
          </Link>
        </div>
      </div>
    );
  }

  const eraTheme = getEraTheme(battle.era);

  // Link opposing commanders to Commander dossiers if available
  const cmdr1Str = battle.commanders?.side1 || battle.commanders?.allied || '';
  const cmdr2Str = battle.commanders?.side2 || battle.commanders?.axis || '';

  const matchedCmdr1 = COMMANDERS.find(c => 
    cmdr1Str.toLowerCase().includes(c.name.toLowerCase()) || 
    cmdr1Str.toLowerCase().includes(c.id) ||
    c.name.toLowerCase().includes(cmdr1Str.split(' ')[0]?.toLowerCase())
  );

  const matchedCmdr2 = COMMANDERS.find(c => 
    cmdr2Str.toLowerCase().includes(c.name.toLowerCase()) || 
    cmdr2Str.toLowerCase().includes(c.id) ||
    c.name.toLowerCase().includes(cmdr2Str.split(' ')[0]?.toLowerCase())
  );

  // Related battles
  const relatedBattles = (battle.related || [])
    .map(rid => BATTLES.find(b => b.id === rid))
    .filter(Boolean) as typeof BATTLES;

  const side1 = battle.side1 || { label: 'Combatant A', forces: 'Forces on record' };
  const side2 = battle.side2 || { label: 'Combatant B', forces: 'Forces on record' };

  return (
    <div>
      {/* 1. HERO HEADER */}
      <Hero
        title={battle.name}
        subtitle={battle.significance || battle.summary}
        eyebrow={`${eraTheme.name} • Field Dossier`}
        era={battle.era}
        breadcrumbs={[
          { label: 'Battles', path: '/battles' },
          { label: battle.name }
        ]}
        metaTags={[
          { label: 'Date', value: battle.dates },
          { label: 'Year', value: battle.year < 0 ? `${Math.abs(battle.year)} BCE` : `${battle.year} CE` },
          { label: 'Outcome', value: battle.outcome.slice(0, 35) + '…' }
        ]}
      />

      {/* 2. MAIN DOSSIER LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: HISTORICAL NARRATIVE & MAPS */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Background & Strategic Context */}
            <section className="card-archival rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-brass/20">
                <Shield className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Strategic Context &amp; Geopolitical Background
                </h2>
              </div>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed mb-4">
                {battle.background || battle.outcome || 'Historical records establish this engagement as a decisive clash between rival sovereign powers attempting to impose or defend territorial dominion.'}
              </p>
              {battle.summary && (
                <div className="p-4 rounded bg-charcoal-900 border-l-4 border-l-brass text-xs sm:text-sm font-serif italic text-brass-light leading-relaxed">
                  "{battle.summary}"
                </div>
              )}
            </section>

            {/* Orders of Battle / Opposing Forces */}
            <section className="card-archival rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-brass/20">
                <Swords className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Orders of Battle &amp; Opposing Forces
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Side 1 */}
                <div className="p-5 rounded-lg bg-charcoal-900/90 border border-brass/40 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-brass/20 text-brass border border-brass/40 uppercase font-bold inline-block mb-2">
                      Side I &middot; Offensive / Initiative
                    </div>
                    <h3 className="font-display font-bold text-lg text-parchment mb-2">{side1.label}</h3>
                    <div className="text-xs font-mono text-steel mb-3">
                      Strength: <strong className="text-parchment">{side1.forces}</strong>
                    </div>
                    <div className="text-xs font-sans text-parchment-aged">
                      <strong>Commander:</strong> {cmdr1Str}
                    </div>
                  </div>

                  {matchedCmdr1 && (
                    <div className="mt-4 pt-3 border-t border-border-color">
                      <Link 
                        to={`/commander/${matchedCmdr1.id}`}
                        className="text-xs font-mono text-brass hover:underline flex items-center gap-1"
                      >
                        <span>Inspect Commander Dossier ({matchedCmdr1.name})</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Side 2 */}
                <div className="p-5 rounded-lg bg-charcoal-900/90 border border-border-color flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-steel/20 text-steel-light border border-steel/40 uppercase font-bold inline-block mb-2">
                      Side II &middot; Defensive / Opposing
                    </div>
                    <h3 className="font-display font-bold text-lg text-parchment mb-2">{side2.label}</h3>
                    <div className="text-xs font-mono text-steel mb-3">
                      Strength: <strong className="text-parchment">{side2.forces}</strong>
                    </div>
                    <div className="text-xs font-sans text-parchment-aged">
                      <strong>Commander:</strong> {cmdr2Str}
                    </div>
                  </div>

                  {matchedCmdr2 && (
                    <div className="mt-4 pt-3 border-t border-border-color">
                      <Link 
                        to={`/commander/${matchedCmdr2.id}`}
                        className="text-xs font-mono text-brass hover:underline flex items-center gap-1"
                      >
                        <span>Inspect Commander Dossier ({matchedCmdr2.name})</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Casualties and Human Cost */}
              <div className="mt-8 pt-6 border-t border-brass/20">
                <h4 className="font-mono text-xs uppercase tracking-widest text-brass font-bold mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  Documented Casualties &amp; Attrition
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {(battle.casualties || []).map((cas, idx) => (
                    <div key={idx} className="p-3 bg-charcoal-950 rounded border-l-2 border-l-red-500 border border-border-color/40">
                      <div className="font-mono text-lg font-bold text-parchment">{cas.value}</div>
                      <div className="text-[11px] text-steel font-sans mt-0.5">{cas.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Interactive Tactical Battlefield Schematic */}
            <section>
              <h2 className="font-display font-bold text-xl text-parchment mb-2">
                Battlefield Cartography &amp; Maneuvers
              </h2>
              <BattlefieldMap battle={battle} />
            </section>

            {/* Tactical Timeline Progression */}
            <section>
              <BattleTimeline battle={battle} />
            </section>

            {/* Geopolitical Outcome & Historical Significance */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <h2 className="font-display font-bold text-xl text-parchment border-b border-brass/20 pb-3">
                Decisive Outcome &amp; Historical Legacy
              </h2>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
                {battle.outcome}
              </p>
              <div className="p-4 rounded bg-charcoal-900 border border-brass/30 text-xs sm:text-sm font-serif text-parchment">
                <strong className="text-brass font-mono uppercase text-xs block mb-1">Geopolitical Consequence:</strong>
                {battle.significance}
              </div>
            </section>

            {/* Related Historical Battles */}
            {relatedBattles.length > 0 && (
              <section className="space-y-4 pt-4">
                <h3 className="font-display font-bold text-lg text-parchment border-b border-brass/20 pb-2">
                  Related Historical Engagements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedBattles.map(rb => (
                    <BattleCard key={rb.id} battle={rb} />
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT COLUMN: ARCHIVAL FACT SHEET & QUICK ACTIONS */}
          <aside className="space-y-6">
            
            {/* Fact Sheet */}
            <FactPanel
              title="Engagement Metrics"
              items={[
                { label: 'Date', value: battle.dates },
                { label: 'Historical Year', value: battle.year < 0 ? `${Math.abs(battle.year)} BCE` : `${battle.year} CE`, highlight: true },
                { label: 'Location', value: battle.location },
                { label: 'Era Classification', value: eraTheme.name },
                { label: 'War / Conflict', value: battle.conflict || 'General Campaign' },
                { label: 'Record Tier', value: battle.tier === 'featured' ? 'High-Priority Dossier' : 'Standard Archive' }
              ]}
            />

            {/* Opposing Commanders Box */}
            <div className="card-archival rounded-lg p-5 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brass font-bold pb-2 border-b border-brass/20">
                Opposing Field Commanders
              </h3>
              
              <div className="p-3 bg-charcoal-900 rounded border border-brass/20 space-y-1">
                <span className="text-[10px] font-mono text-brass uppercase block">Allied / Offensive HQ</span>
                <span className="font-serif font-bold text-sm text-parchment block">{cmdr1Str}</span>
              </div>

              <div className="p-3 bg-charcoal-900 rounded border border-border-color space-y-1">
                <span className="text-[10px] font-mono text-steel uppercase block">Axis / Defensive HQ</span>
                <span className="font-serif font-bold text-sm text-parchment block">{cmdr2Str}</span>
              </div>
            </div>

            {/* Scholarly Sources Box */}
            <div className="card-archival rounded-lg p-5 space-y-3 text-xs">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brass font-bold pb-2 border-b border-brass/20 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Archival Citations
              </h3>
              <p className="text-steel leading-relaxed">
                Reconstructed from contemporary battle dispatches, eyewitness accounts, military cartography, and peer-reviewed historical scholarship. Disputed casualty and force numbers reflect consensus ranges.
              </p>
            </div>

            {/* Navigation Actions */}
            <div className="space-y-2">
              <Link
                to="/battles"
                className="w-full py-2.5 px-4 rounded bg-charcoal-900 hover:bg-charcoal-850 text-parchment border border-brass/40 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brass" />
                <span>Return to Battles Directory</span>
              </Link>
              <Link
                to="/maps"
                className="w-full py-2.5 px-4 rounded bg-brass hover:bg-brass-light text-charcoal-950 text-xs font-serif font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Examine on Battlefield Atlas &rarr;</span>
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};
