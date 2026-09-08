import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BATTLEFIELDS } from '../data/battlefields';
import { Hero } from '../components/common/Hero';
import { FactPanel } from '../components/common/FactPanel';
import { Mountain, MapPin, Swords, Shield, Landmark, ArrowLeft } from 'lucide-react';
import { getEraTheme } from '../data/eraThemes';

export const BattlefieldDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const bf = useMemo(() => {
    return BATTLEFIELDS.find(b => b.id === id);
  }, [id]);

  if (!bf) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Mountain className="w-16 h-16 text-brass/40 mx-auto mb-4" />
        <h1 className="font-display text-3xl font-bold text-parchment">Battlefield Record Not Found</h1>
        <p className="text-steel font-sans mt-2">No terrain record matching "{id}" exists in the geographic archive.</p>
        <div className="mt-8">
          <Link to="/battlefields" className="px-6 py-2.5 rounded bg-brass text-charcoal-950 font-serif font-bold text-sm">
            Return to Battlefields Directory
          </Link>
        </div>
      </div>
    );
  }

  const eraTheme = getEraTheme(bf.era);

  return (
    <div>
      <Hero
        title={bf.name}
        subtitle={`${bf.battleName} — ${bf.region}`}
        eyebrow={`${eraTheme.name} • Physical Geography`}
        era={bf.era}
        backgroundImage={bf.image}
        breadcrumbs={[
          { label: 'Battlefields', path: '/battlefields' },
          { label: bf.name }
        ]}
        metaTags={[
          { label: 'Location', value: bf.location },
          ...(bf.coordinates ? [{ label: 'Coordinates', value: bf.coordinates }] : []),
          { label: 'Historic Battle', value: bf.battleName }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-10">
            {/* Topography & Terrain Impact */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Mountain className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Terrain Characteristics &amp; Tactical Topography
                </h2>
              </div>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
                {bf.terrain}
              </p>
              <div className="p-4 rounded bg-charcoal-900 border-l-4 border-l-brass text-sm font-serif italic text-brass-light leading-relaxed">
                <strong className="text-brass font-mono uppercase text-xs block mb-1">Tactical Impact on Combat:</strong>
                "{bf.tacticalImpact}"
              </div>
            </section>

            {/* Strategic Geography */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <MapPin className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Strategic Geography &amp; Supply Corridors
                </h2>
              </div>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
                {bf.strategicGeography}
              </p>
            </section>

            {/* Modern State & Memorials */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Landmark className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Modern Preservation &amp; Historical Memorials
                </h2>
              </div>
              <p className="text-sm font-sans text-parchment-aged leading-relaxed">
                <strong>Current Preservation State:</strong> {bf.modernCondition}
              </p>
              {bf.memorials && (
                <div className="p-4 bg-charcoal-900 rounded border border-border-color text-xs sm:text-sm text-parchment space-y-1">
                  <span className="font-mono text-brass uppercase text-xs block font-bold">Monuments &amp; Commemoration:</span>
                  <p>{bf.memorials}</p>
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <FactPanel
              title="Battlefield Parameters"
              items={[
                { label: 'Site Name', value: bf.name },
                { label: 'Location', value: bf.location, highlight: true },
                { label: 'Region', value: bf.region },
                ...(bf.coordinates ? [{ label: 'Coordinates', value: bf.coordinates }] : []),
                { label: 'Era Classification', value: eraTheme.name },
                { label: 'Commanders Present', value: bf.commanders.join(', ') }
              ]}
            />

            <div className="space-y-2">
              <Link
                to="/battlefields"
                className="w-full py-2.5 px-4 rounded bg-charcoal-900 hover:bg-charcoal-850 text-parchment border border-brass/40 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brass" />
                <span>Return to Battlefields Directory</span>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
