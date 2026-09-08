import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CAMPAIGNS } from '../data/campaigns';
import { BATTLES } from '../data/battles';
import { Hero } from '../components/common/Hero';
import { FactPanel } from '../components/common/FactPanel';
import { BattleCard } from '../components/cards/BattleCard';
import { Crosshair, Calendar, MapPin, Shield, Swords, ArrowLeft, Clock } from 'lucide-react';
import { getEraTheme } from '../data/eraThemes';

export const CampaignDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const campaign = useMemo(() => {
    return CAMPAIGNS.find(c => c.id === id);
  }, [id]);

  if (!campaign) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Crosshair className="w-16 h-16 text-brass/40 mx-auto mb-4" />
        <h1 className="font-display text-3xl font-bold text-parchment">Campaign Not Found</h1>
        <p className="text-steel font-sans mt-2">No strategic campaign matching "{id}" exists in the grand strategy register.</p>
        <div className="mt-8">
          <Link to="/campaigns" className="px-6 py-2.5 rounded bg-brass text-charcoal-950 font-serif font-bold text-sm">
            Return to Campaigns Directory
          </Link>
        </div>
      </div>
    );
  }

  const eraTheme = getEraTheme(campaign.era);

  // Associated battles
  const campaignBattles = useMemo(() => {
    return (campaign.related || []).map(rid => BATTLES.find(b => b.id === rid)).filter(Boolean) as typeof BATTLES;
  }, [campaign]);

  return (
    <div>
      <Hero
        title={campaign.name}
        subtitle={campaign.objective}
        eyebrow={`${eraTheme.name} • Strategic Operation`}
        era={campaign.era}
        breadcrumbs={[
          { label: 'Campaigns', path: '/campaigns' },
          { label: campaign.name }
        ]}
        metaTags={[
          { label: 'Timeframe', value: campaign.date },
          { label: 'Nation / Coalition', value: campaign.nation },
          { label: 'Theatre', value: campaign.theatre }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: OBJECTIVES, OUTCOMES, ENGAGEMENTS */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Strategic Objectives */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Crosshair className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Operational Objectives &amp; Grand Strategy
                </h2>
              </div>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
                {campaign.objective}
              </p>
            </section>

            {/* Campaign Outcome & Consequences */}
            {campaign.outcome && (
              <section className="card-archival rounded-lg p-6 sm:p-8 border-l-4 border-l-brass space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-widest text-brass font-bold">
                  Documented Campaign Outcome
                </h3>
                <p className="text-sm sm:text-base font-serif text-parchment leading-relaxed">
                  {campaign.outcome}
                </p>
              </section>
            )}

            {/* Major Engagements in this Campaign */}
            {campaignBattles.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-brass/20 pb-3">
                  <div className="flex items-center gap-2">
                    <Swords className="w-5 h-5 text-brass" />
                    <h2 className="font-display font-bold text-xl text-parchment">
                      Documented Battles of this Campaign ({campaignBattles.length})
                    </h2>
                  </div>
                  <Link to="/battles" className="text-xs font-mono text-brass hover:underline">
                    View in Battles Directory &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {campaignBattles.map(b => (
                    <BattleCard key={b.id} battle={b} />
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* RIGHT COLUMN: FACT SHEET */}
          <aside className="space-y-6">
            <FactPanel
              title="Operation Parameters"
              items={[
                { label: 'Campaign Title', value: campaign.name },
                { label: 'Belligerent Nation', value: campaign.nation, highlight: true },
                { label: 'Dates / Duration', value: campaign.date },
                { label: 'Historical Era', value: eraTheme.name },
                { label: 'Strategic Theatre', value: campaign.theatre }
              ]}
            />

            <div className="space-y-2">
              <Link
                to="/campaigns"
                className="w-full py-2.5 px-4 rounded bg-charcoal-900 hover:bg-charcoal-850 text-parchment border border-brass/40 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brass" />
                <span>Return to Campaigns Register</span>
              </Link>
              <Link
                to="/maps"
                className="w-full py-2.5 px-4 rounded bg-brass hover:bg-brass-light text-charcoal-950 text-xs font-serif font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Follow Campaign on Atlas &rarr;</span>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
