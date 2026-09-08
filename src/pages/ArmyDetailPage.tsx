import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARMIES } from '../data/armies';
import { Hero } from '../components/common/Hero';
import { FactPanel } from '../components/common/FactPanel';
import { Shield, Users, Swords, Award, AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getEraTheme } from '../data/eraThemes';

export const ArmyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const army = useMemo(() => {
    return ARMIES.find(a => a.id === id);
  }, [id]);

  if (!army) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Users className="w-16 h-16 text-brass/40 mx-auto mb-4" />
        <h1 className="font-display text-3xl font-bold text-parchment">Army Record Not Found</h1>
        <p className="text-steel font-sans mt-2">No military organization matching "{id}" exists in the order of battle archive.</p>
        <div className="mt-8">
          <Link to="/armies" className="px-6 py-2.5 rounded bg-brass text-charcoal-950 font-serif font-bold text-sm">
            Return to Armies Directory
          </Link>
        </div>
      </div>
    );
  }

  const eraTheme = getEraTheme(army.era);

  return (
    <div>
      <Hero
        title={army.name}
        subtitle={army.summary}
        eyebrow={`${eraTheme.name} • Army Organization`}
        era={army.era}
        backgroundImage={army.image}
        breadcrumbs={[
          { label: 'Armies', path: '/armies' },
          { label: army.name }
        ]}
        metaTags={[
          { label: 'Nation', value: army.nation },
          { label: 'Era', value: eraTheme.name },
          { label: 'Operational Period', value: army.period }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: UNITS, TACTICS, EQUIPMENT */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Command Structure */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Shield className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Command Hierarchy &amp; Organizational Architecture
                </h2>
              </div>
              <p className="text-sm sm:text-base font-sans text-parchment-aged leading-relaxed">
                {army.commandStructure}
              </p>
            </section>

            {/* Tactical Combat Units */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-brass/20 pb-3">
                <Users className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Core Combat Units &amp; Formations ({army.units.length})
                </h2>
              </div>

              <div className="space-y-4">
                {army.units.map((unit, idx) => (
                  <div key={idx} className="card-archival p-5 rounded-lg border-l-4 border-l-brass space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-base text-parchment">{unit.name}</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brass/20 text-brass border border-brass/40 uppercase">
                        {unit.role}
                      </span>
                    </div>
                    {unit.strength && (
                      <div className="text-xs font-mono text-steel">
                        Strength: <strong className="text-parchment">{unit.strength}</strong>
                      </div>
                    )}
                    <p className="text-xs sm:text-sm font-sans text-parchment-aged leading-relaxed">
                      {unit.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tactical Doctrine & Formations */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Award className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Battlefield Doctrine &amp; Tactical Formations
                </h2>
              </div>

              <div className="p-4 rounded bg-charcoal-900 border-l-4 border-l-brass text-sm font-serif italic text-brass-light leading-relaxed">
                "{army.tactics.doctrine}"
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-brass font-bold mb-3">
                  Signature Tactical Formations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {army.tactics.formations.map((f, idx) => (
                    <div key={idx} className="p-3 bg-charcoal-950 rounded border border-border-color text-xs font-serif text-parchment flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass flex-shrink-0"></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brass/20">
                <div className="space-y-2">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-green-400 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" /> Doctrinal Strengths
                  </h5>
                  <ul className="space-y-1 text-xs text-parchment-aged">
                    {army.tactics.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-green-500 font-bold">&bull;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-red-400 flex items-center gap-1.5 font-bold">
                    <AlertTriangle className="w-4 h-4" /> Tactical Vulnerabilities
                  </h5>
                  <ul className="space-y-1 text-xs text-parchment-aged">
                    {army.tactics.weaknesses.map((w, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-red-500 font-bold">&bull;</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Equipment & Weaponry */}
            <section className="card-archival rounded-lg p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-brass/20">
                <Swords className="w-5 h-5 text-brass" />
                <h2 className="font-display font-bold text-xl text-parchment">
                  Weapons, Armor &amp; Field Equipment
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-charcoal-900 rounded border border-border-color space-y-1.5">
                  <span className="font-mono text-brass uppercase text-[10px] block font-bold">Primary Armaments</span>
                  <ul className="space-y-1 text-parchment">
                    {army.equipment.weapons.map((w, idx) => (
                      <li key={idx}>&bull; {w}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-charcoal-900 rounded border border-border-color space-y-1.5">
                  <span className="font-mono text-brass uppercase text-[10px] block font-bold">Defensive Armor &amp; Shields</span>
                  <ul className="space-y-1 text-parchment">
                    {army.equipment.armor.map((a, idx) => (
                      <li key={idx}>&bull; {a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: FACT SHEET */}
          <aside className="space-y-6">
            <FactPanel
              title="Army Profile Metrics"
              items={[
                { label: 'Army Title', value: army.name },
                { label: 'Nation / State', value: army.nation, highlight: true },
                { label: 'Historical Period', value: army.period },
                { label: 'Era Classification', value: eraTheme.name },
                { label: 'Core Doctrine', value: army.tactics.doctrine.slice(0, 45) + '…' }
              ]}
            />

            <div className="space-y-2">
              <Link
                to="/armies"
                className="w-full py-2.5 px-4 rounded bg-charcoal-900 hover:bg-charcoal-850 text-parchment border border-brass/40 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brass" />
                <span>Return to Armies Directory</span>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
