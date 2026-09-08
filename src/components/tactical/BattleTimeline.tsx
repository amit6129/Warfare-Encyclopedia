import React from 'react';
import { Battle, BattlePhase } from '../../types';
import { Clock, Shield, Flag, AlertCircle, ArrowDown } from 'lucide-react';

interface BattleTimelineProps {
  battle: Battle;
}

export const BattleTimeline: React.FC<BattleTimelineProps> = ({ battle }) => {
  // If battle doesn't have custom phases, create high-fidelity phases from summary and outcome
  const phases: BattlePhase[] = battle.timelinePhases && battle.timelinePhases.length > 0 
    ? battle.timelinePhases 
    : [
        {
          phase: 'Phase I',
          title: 'Initial Deployment & Strategic Formations',
          description: battle.background || `Opposing commanders arrayed their forces across the terrain at ${battle.location}. Defensive strongpoints and reserves were established.`
        },
        {
          phase: 'Phase II',
          title: 'Opening Clash & Probing Skirmishes',
          description: `Light skirmishers, missile fire, and cavalry probes engaged along the front lines to test defensive cohesion and locate tactical gaps.`
        },
        {
          phase: 'Phase III',
          title: 'Main Assault & Central Line Engagement',
          description: battle.summary || 'Heavy infantry and main battle lines collided with maximum ferocity. Frontal charges and counter-attacks ensued across the primary sector.'
        },
        {
          phase: 'Phase IV',
          title: 'The Decisive Turning Point',
          description: battle.turningPoint || (battle.significance ? `Decisive moment: ${battle.significance}` : 'A tactical rupture or decisive flanking charge broke opposing cohesion.')
        },
        {
          phase: 'Phase V',
          title: 'Rout, Disengagement & Final Aftermath',
          description: battle.outcome || 'Defeated forces retreated from the field. Victory achieved with significant strategic and geopolitical consequences.'
        }
      ];

  return (
    <div className="card-archival rounded-lg p-6 my-6">
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-brass/20">
        <h3 className="font-display font-bold text-lg text-parchment flex items-center gap-2">
          <Clock className="w-5 h-5 text-brass" />
          <span>Chronological Battle Progression</span>
        </h3>
        <span className="text-xs font-mono text-steel uppercase">Tactical Timeline</span>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-brass/30 space-y-8 ml-2">
        {phases.map((phase, idx) => {
          const isTurningPoint = phase.title.toLowerCase().includes('turning point') || idx === 3;
          const isFinal = idx === phases.length - 1;

          return (
            <div key={idx} className="relative group">
              {/* Node Marker */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold shadow-lg transition-transform group-hover:scale-110 ${
                  isTurningPoint 
                    ? 'bg-red-600 border-yellow-400 text-white animate-pulse' 
                    : isFinal
                      ? 'bg-brass border-white text-charcoal-950 font-black'
                      : 'bg-charcoal-900 border-brass text-brass'
                }`}
              >
                {idx + 1}
              </div>

              {/* Phase Card */}
              <div className={`p-4 rounded-lg border transition-all ${
                isTurningPoint 
                  ? 'bg-charcoal-900/90 border-brass shadow-archival-hover' 
                  : 'bg-charcoal-900/60 border-border-color/60 hover:border-brass/50'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                    isTurningPoint ? 'bg-red-950 text-red-300 border border-red-500/40' : 'bg-charcoal-950 text-brass'
                  }`}>
                    {phase.phase} {phase.time ? `• ${phase.time}` : ''}
                  </span>
                  {isTurningPoint && (
                    <span className="text-[10px] font-mono text-yellow-400 font-bold uppercase flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Critical Turning Point
                    </span>
                  )}
                </div>

                <h4 className="font-display font-bold text-sm sm:text-base text-parchment mb-2">
                  {phase.title}
                </h4>

                <p className="text-xs font-sans text-parchment-aged leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
