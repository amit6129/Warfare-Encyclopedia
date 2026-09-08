import React, { useState } from 'react';
import { Shield, Navigation, Eye, Crosshair } from 'lucide-react';
import { Battle } from '../../types';

interface BattlefieldMapProps {
  battle: Battle;
}

export const BattlefieldMap: React.FC<BattlefieldMapProps> = ({ battle }) => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'forces' | 'maneuvers' | 'terrain'>('all');

  const side1 = battle.side1 || { label: 'Combatant A', forces: 'Forces deployed' };
  const side2 = battle.side2 || { label: 'Combatant B', forces: 'Forces deployed' };
  const cmdr1 = battle.commanders?.side1 || battle.commanders?.allied || 'High Command';
  const cmdr2 = battle.commanders?.side2 || battle.commanders?.axis || 'Opposing Command';

  return (
    <div className="card-archival rounded-lg overflow-hidden my-6 border border-brass/40">
      {/* Map Header Toolbar */}
      <div className="p-3 bg-charcoal-950 border-b border-brass/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-brass">
          <Navigation className="w-4 h-4" />
          <span className="font-bold uppercase tracking-wider">Tactical Battlefield Schematic &middot; {battle.name}</span>
        </div>

        {/* Layer Controls */}
        <div className="flex items-center gap-1 bg-charcoal-900 p-1 rounded border border-brass/20">
          <span className="text-[10px] text-steel px-2 uppercase">Layers:</span>
          {(['all', 'forces', 'maneuvers', 'terrain'] as const).map(layer => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-2 py-0.5 rounded capitalize text-[11px] transition-colors ${
                activeLayer === layer 
                  ? 'bg-brass text-charcoal-950 font-bold' 
                  : 'text-steel-light hover:text-parchment'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Tactical Canvas */}
      <div className="relative bg-[#0d1218] h-80 sm:h-96 w-full flex items-center justify-center overflow-hidden select-none">
        {/* Terrain Grids & Contour Lines */}
        <svg viewBox="0 0 800 450" className="w-full h-full">
          <defs>
            <pattern id="tacticalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(199, 162, 84, 0.08)" strokeWidth="0.8"/>
            </pattern>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#b23a2e" />
            </marker>
            <marker id="arrowGold" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c7a254" />
            </marker>
          </defs>

          {/* Grid Background */}
          <rect width="100%" height="100%" fill="url(#tacticalGrid)" />

          {/* Terrain Elements */}
          {(activeLayer === 'all' || activeLayer === 'terrain') && (
            <g className="terrain-layer">
              {/* Hill / Elevation Contours */}
              <ellipse cx="400" cy="225" rx="190" ry="90" fill="none" stroke="rgba(199,162,84,0.18)" strokeWidth="1.5" strokeDasharray="5 3"/>
              <ellipse cx="400" cy="225" rx="120" ry="55" fill="none" stroke="rgba(199,162,84,0.25)" strokeWidth="1.5"/>
              <ellipse cx="400" cy="225" rx="55" ry="25" fill="rgba(199,162,84,0.06)" stroke="rgba(199,162,84,0.35)" strokeWidth="1.5"/>
              <text x="400" y="228" fill="#c7a254" fontSize="10" fontFamily="Cinzel" textAnchor="middle" opacity="0.6">CONTOURED HIGH GROUND</text>

              {/* River / Stream Feature */}
              <path d="M 50,420 Q 200,320 350,380 T 750,290" fill="none" stroke="#2563eb" strokeWidth="3" opacity="0.45" strokeDasharray="8 3"/>
              <text x="620" y="320" fill="#60a5fa" fontSize="9" fontFamily="monospace" opacity="0.7">NATURAL WATER BARRIER / RIVER DEFILE</text>
            </g>
          )}

          {/* Maneuvers & Movement Vectors */}
          {(activeLayer === 'all' || activeLayer === 'maneuvers') && (
            <g className="maneuver-layer">
              {/* Side 1 Attack Arrow (Gold) */}
              <path d="M 220,130 Q 320,170 380,210" fill="none" stroke="#c7a254" strokeWidth="3" markerEnd="url(#arrowGold)" opacity="0.85" strokeDasharray="6 3"/>
              <path d="M 230,290 Q 330,250 370,230" fill="none" stroke="#c7a254" strokeWidth="2.5" markerEnd="url(#arrowGold)" opacity="0.75" strokeDasharray="5 3"/>
              
              {/* Side 2 Counter / Flank (Red) */}
              <path d="M 580,140 Q 480,180 430,215" fill="none" stroke="#b23a2e" strokeWidth="3" markerEnd="url(#arrowRed)" opacity="0.85" strokeDasharray="6 3"/>
              <path d="M 600,280 Q 490,260 440,235" fill="none" stroke="#b23a2e" strokeWidth="2.5" markerEnd="url(#arrowRed)" opacity="0.75" strokeDasharray="5 3"/>

              {/* Turning point clash burst */}
              <circle cx="400" cy="225" r="22" fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse"/>
              <circle cx="400" cy="225" r="7" fill="#ef4444" opacity="0.8"/>
            </g>
          )}

          {/* Forces & Units Deployment */}
          {(activeLayer === 'all' || activeLayer === 'forces') && (
            <g className="forces-layer">
              {/* SIDE 1 BLOCK (Left/West) */}
              <g transform="translate(140, 110)">
                <rect width="110" height="40" rx="3" fill="#14171a" stroke="#c7a254" strokeWidth="1.5"/>
                <text x="55" y="18" fill="#f3ebd4" fontSize="11" fontWeight="bold" fontFamily="Cinzel" textAnchor="middle">
                  {side1.label.slice(0, 14)}
                </text>
                <text x="55" y="32" fill="#c7a254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  {side1.forces.slice(0, 15)}
                </text>
              </g>

              {/* SIDE 2 BLOCK (Right/East) */}
              <g transform="translate(550, 110)">
                <rect width="110" height="40" rx="3" fill="#14171a" stroke="#b23a2e" strokeWidth="1.5"/>
                <text x="55" y="18" fill="#f3ebd4" fontSize="11" fontWeight="bold" fontFamily="Cinzel" textAnchor="middle">
                  {side2.label.slice(0, 14)}
                </text>
                <text x="55" y="32" fill="#b23a2e" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  {side2.forces.slice(0, 15)}
                </text>
              </g>

              {/* Commanders Pins */}
              <g transform="translate(195, 80)">
                <circle cx="0" cy="0" r="5" fill="#c7a254"/>
                <text x="0" y="-8" fill="#f3ebd4" fontSize="9" fontFamily="Cinzel" textAnchor="middle">HQ: {cmdr1.split(' ')[0]}</text>
              </g>

              <g transform="translate(605, 80)">
                <circle cx="0" cy="0" r="5" fill="#b23a2e"/>
                <text x="0" y="-8" fill="#f3ebd4" fontSize="9" fontFamily="Cinzel" textAnchor="middle">HQ: {cmdr2.split(' ')[0]}</text>
              </g>
            </g>
          )}

          {/* Compass Rose */}
          <g transform="translate(730, 60)" opacity="0.6">
            <circle cx="0" cy="0" r="18" fill="none" stroke="#c7a254" strokeWidth="1"/>
            <path d="M 0,-16 L 4,0 L -4,0 Z" fill="#c7a254"/>
            <path d="M 0,16 L 4,0 L -4,0 Z" fill="#6e7781"/>
            <text x="0" y="-20" fill="#c7a254" fontSize="9" fontWeight="bold" textAnchor="middle">N</text>
          </g>
        </svg>

        {/* Legend Overlay in Corner */}
        <div className="absolute bottom-3 left-3 bg-charcoal-950/90 border border-brass/20 p-2.5 rounded text-[10px] font-mono space-y-1 backdrop-blur-sm pointer-events-none">
          <div className="text-brass uppercase font-bold tracking-wider mb-1">Tactical Legend</div>
          <div className="flex items-center gap-2 text-parchment">
            <span className="w-3 h-1 bg-brass inline-block"></span>
            <span>{side1.label} Lines</span>
          </div>
          <div className="flex items-center gap-2 text-parchment">
            <span className="w-3 h-1 bg-[#b23a2e] inline-block"></span>
            <span>{side2.label} Lines</span>
          </div>
          <div className="flex items-center gap-2 text-parchment">
            <span className="w-2 h-2 rounded-full border border-yellow-400 bg-red-500 inline-block"></span>
            <span>Decisive Clash Point</span>
          </div>
        </div>
      </div>

      {/* Map Caption */}
      <div className="p-3 bg-charcoal-950 text-xs font-sans text-steel border-t border-brass/20 flex items-center justify-between">
        <span>Cartographic representation reconstructed from battle dispatches and topographic surveys.</span>
        <span className="font-mono text-brass font-semibold">Coordinates: {battle.location}</span>
      </div>
    </div>
  );
};
