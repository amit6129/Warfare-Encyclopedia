import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FORTS } from '../data/forts';
import { Hero } from '../components/common/Hero';
import { FactPanel } from '../components/common/FactPanel';
import { Castle, Mountain, Shield, BookOpen, ArrowLeft, Droplets, DoorOpen } from 'lucide-react';
import { getEraTheme } from '../data/eraThemes';

export const FortDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const fort = useMemo(() => {
    return FORTS.find(f => f.id === id);
  }, [id]);

  if (!fort) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Castle className="w-16 h-16 text-brass/40 mx-auto mb-4" />
        <h1 className="font-display text-3xl font-bold text-parchment">Fortress Record Not Found</h1>
        <p className="text-steel font-sans mt-2">No historical fort matching "{id}" exists in the architecture register.</p>
        <div className="mt-8">
          <Link to="/forts" className="px-6 py-2.5 rounded bg-brass text-charcoal-950 font-serif font-bold text-sm">
            Return to Fortresses Directory
          </Link>
        </div>
      </div>
    );
  }

  const eraTheme = getEraTheme(fort.era);
  const purpose = fort.strategicPurpose || fort.militaryPurpose || fort.significance;

  // Extract architectural features cleanly whether stored as a descriptive string or as an object
  const isArchObject = typeof fort.architecture === 'object' && fort.architecture !== null;
  const archObj = isArchObject ? fort.architecture : null;
  const archString = typeof fort.architecture === 'string' ? fort.architecture : '';
  const archFeatures = archString ? archString.split(',').map(s => s.trim()).filter(Boolean) : [];

  return (
    <div>
      <Hero
        title={fort.name}
        subtitle={fort.marathiName ? `${fort.marathiName} — ${purpose}` : purpose}
        eyebrow={`${eraTheme.name} • Fortress Architecture`}
        era={fort.era}
        backgroundImage={fort.image}
        breadcrumbs={[
          { label: 'Fortresses', path: '/forts' },
          { label: fort.name }
        ]}
        metaTags={[
          { label: 'Location', value: fort.location },
          ...(fort.elevation ? [{ label: 'Elevation', value: fort.elevation }] : []),
          ...(fort.builder || fort.built ? [{ label: 'Builder / Construction', value: fort.builder || fort.built }] : [])
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: ARCHITECTURE, SIEGES & HISTORY */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Strategic Importance */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Mountain className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Geographic Position &amp; Strategic Value
                </h2>
              </div>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
                {purpose}
              </p>
              {fort.significance && (
                <div className="p-4 rounded bg-charcoal-900 border border-brass/30 text-xs sm:text-sm font-serif italic text-brass-light leading-relaxed">
                  "{fort.significance}"
                </div>
              )}
            </section>

            {/* Historical Narrative */}
            {fort.history && (
              <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                  <BookOpen className="w-5 h-5 text-brass" />
                  <h2 className="font-display font-bold text-xl text-parchment">
                    Historical Chronicle &amp; Imperial Record
                  </h2>
                </div>
                <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed whitespace-pre-line">
                  {fort.history}
                </p>
              </section>
            )}

            {/* Architectural Blueprints & Engineering */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Castle className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Architectural Engineering &amp; Defensive Systems
                </h2>
              </div>

              {archObj ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    <div className="p-4 bg-charcoal-900 rounded border border-border-color space-y-1">
                      <span className="font-mono text-brass uppercase text-[10px] block font-bold">Fortification Type</span>
                      <p className="text-parchment font-serif text-sm">{archObj.type || 'Hill Fortress'}</p>
                    </div>

                    <div className="p-4 bg-charcoal-900 rounded border border-border-color space-y-1">
                      <span className="font-mono text-brass uppercase text-[10px] block font-bold">Ramparts &amp; Walls</span>
                      <p className="text-parchment-aged">{archObj.walls || 'Double-coursed stone ramparts engineered along natural contours.'}</p>
                    </div>
                  </div>

                  {/* Gates & Bastions */}
                  {(archObj.gates?.length || archObj.bastions?.length) ? (
                    <div className="space-y-3">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-brass font-bold flex items-center gap-1.5">
                        <DoorOpen className="w-4 h-4" />
                        Key Gates (Darwajas) &amp; Bastions (Burjs)
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {archObj.gates?.map((g, idx) => (
                          <span key={`g-${idx}`} className="px-3 py-1 rounded bg-charcoal-950 border border-brass/30 text-xs font-serif text-parchment">
                            {g}
                          </span>
                        ))}
                        {archObj.bastions?.map((b, idx) => (
                          <span key={`b-${idx}`} className="px-3 py-1 rounded bg-charcoal-950 border border-border-color text-xs font-mono text-steel-light">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Water Systems */}
                  {archObj.waterSystems && (
                    <div className="p-4 rounded bg-charcoal-900 border border-border-color space-y-1.5">
                      <span className="font-mono text-brass uppercase text-[10px] flex items-center gap-1 font-bold">
                        <Droplets className="w-3.5 h-3.5" />
                        Water Systems &amp; Self-Sustaining Reservoirs
                      </span>
                      <p className="text-xs text-parchment-aged leading-relaxed">
                        {archObj.waterSystems}
                      </p>
                    </div>
                  )}

                  {/* Special Architectural Features */}
                  {archObj.specialFeatures && (
                    <div className="p-4 rounded bg-charcoal-900/60 border border-brass/20 space-y-1">
                      <span className="font-mono text-brass uppercase text-[10px] block font-bold">Special Engineering Highlights</span>
                      <p className="text-xs text-parchment-aged leading-relaxed">{archObj.specialFeatures}</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="space-y-5">
                  <p className="text-sm font-sans text-parchment-aged leading-relaxed">
                    {archString}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-brass font-bold flex items-center gap-1.5">
                      <DoorOpen className="w-4 h-4" />
                      Identified Fort Structures &amp; Engineering Elements
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {archFeatures.map((feat, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded bg-charcoal-900 border border-brass/30 text-xs font-serif text-parchment flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brass"></span>
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Major Sieges & Battles */}
            {fort.majorSieges && fort.majorSieges.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-brass/20 pb-3">
                  <Shield className="w-5 h-5 text-brass" />
                  <h2 className="font-display font-bold text-xl text-parchment">
                    Documented Sieges &amp; Assaults ({fort.majorSieges.length})
                  </h2>
                </div>

                <div className="space-y-3">
                  {fort.majorSieges.map((siege, idx) => (
                    <div key={idx} className="card-archival p-5 rounded-lg border-l-4 border-l-brass space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-brass uppercase">{siege.date}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-950 border border-brass/30 text-parchment">
                          {siege.result}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-steel">
                        Attacker: <strong className="text-parchment">{siege.attacker}</strong> &middot; Defender: <strong className="text-parchment">{siege.defender}</strong>
                      </div>
                      <p className="text-xs font-sans text-parchment-aged leading-relaxed">
                        {siege.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Present Condition */}
            <section className="card-archival rounded-lg p-6 space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brass font-bold">
                Modern Condition &amp; Heritage Preservation
              </h3>
              <p className="text-xs sm:text-sm font-sans text-parchment-aged leading-relaxed">
                {fort.condition || 'Recognized as a protected historical and archaeological monument of sovereign military heritage.'}
              </p>
            </section>

          </div>

          {/* RIGHT COLUMN: FACT SHEET */}
          <aside className="space-y-6">
            <FactPanel
              title="Citadel Metrics"
              items={[
                { label: 'Fortress Name', value: fort.name },
                ...(fort.marathiName ? [{ label: 'Regional Name', value: fort.marathiName }] : []),
                { label: 'Location', value: fort.location, highlight: true },
                ...(fort.elevation ? [{ label: 'Elevation', value: fort.elevation }] : []),
                { label: 'Historical Era', value: eraTheme.name },
                ...(fort.builder ? [{ label: 'Builder / Sovereign', value: fort.builder }] : []),
                ...(fort.built ? [{ label: 'Construction Period', value: fort.built }] : []),
                ...(fort.ownership ? [{ label: 'Historical Ownership', value: fort.ownership.join(', ') }] : [])
              ]}
            />

            <div className="space-y-2">
              <Link
                to="/forts"
                className="w-full py-2.5 px-4 rounded bg-charcoal-900 hover:bg-charcoal-850 text-parchment border border-brass/40 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brass" />
                <span>Return to Fortresses Directory</span>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
