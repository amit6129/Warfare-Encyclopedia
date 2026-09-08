import React, { useState } from 'react';
import { Hero } from '../components/common/Hero';
import { MAPS_DATA } from '../data/mapsData';
import { Compass, MapPin, Navigation, Eye, Calendar, Shield, Swords, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MapsPage: React.FC = () => {
  const [selectedMapId, setSelectedMapId] = useState<string>(MAPS_DATA[0]?.id || 'alexander-route');
  const activeMap = MAPS_DATA.find(m => m.id === selectedMapId) || MAPS_DATA[0];

  return (
    <div>
      <Hero
        title="Interactive Battlefield &amp; Campaign Atlas"
        subtitle="Explore geo-spatial historical cartography: follow Alexander's march into Central Asia and India, Napoleon's Austerlitz and Russian campaigns, Shivaji Maharaj's Sahyadri hill fort network, and the global battle theatres of World War II."
        eyebrow="Tactical Cartography"
        breadcrumbs={[{ label: 'Atlas' }]}
        metaTags={[
          { label: 'Cartographic Maps', value: String(MAPS_DATA.length) },
          { label: 'Projections', value: 'Terrain & March Waypoints' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Map Selection Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {MAPS_DATA.map(m => (
            <button
              key={m.id}
              onClick={() => setSelectedMapId(m.id)}
              className={`px-4 py-2 rounded text-xs font-mono whitespace-nowrap transition-all border flex items-center gap-2 ${
                selectedMapId === m.id
                  ? 'bg-brass text-charcoal-950 border-brass font-bold shadow-lg'
                  : 'bg-charcoal-900 text-steel-light border-border-color hover:text-parchment hover:border-brass/40'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{m.name}</span>
            </button>
          ))}
        </div>

        {/* Map Viewer Canvas Panel */}
        {activeMap && (
          <div className="card-archival rounded-xl overflow-hidden border-2 border-brass/40">
            {/* Header Toolbar */}
            <div className="p-4 bg-charcoal-950 border-b border-brass/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-brass uppercase tracking-widest block">
                  Active Cartographic Layer
                </span>
                <h2 className="font-display font-bold text-xl text-parchment">
                  {activeMap.name}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-charcoal-900 text-brass border border-brass/30 uppercase">
                  Era: {activeMap.era}
                </span>
              </div>
            </div>

            {/* Interactive SVG Canvas */}
            <div className="relative bg-[#0b0f14] h-96 sm:h-[480px] w-full flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 900 500" className="w-full h-full">
                <defs>
                  <pattern id="atlasGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(199, 162, 84, 0.07)" strokeWidth="0.8"/>
                  </pattern>
                  <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c7a254" />
                    <stop offset="100%" stopColor="#cd7f32" />
                  </linearGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#atlasGrid)" />

                {/* Continental / Regional Base Shapes */}
                <path d="M 80,180 Q 250,90 450,140 T 820,110 L 850,420 Q 600,460 300,410 Z" fill="rgba(199,162,84,0.03)" stroke="rgba(199,162,84,0.15)" strokeWidth="1.5" strokeDasharray="6 3"/>

                {/* Simulated Campaign March Route */}
                <path
                  d="M 120,240 Q 280,180 420,260 T 780,210"
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="8 4"
                  className="animate-pulse"
                />

                {/* Waypoints from active map */}
                {(activeMap.waypoints || [
                  { name: 'Assembly & Base', x: 120, y: 240, desc: 'Initial staging depot' },
                  { name: 'Advance Defile', x: 280, y: 200, desc: 'Strategic mountain crossing' },
                  { name: 'Major Engagement', x: 420, y: 260, desc: 'Decisive battlefield clash' },
                  { name: 'Capital Siege', x: 620, y: 230, desc: 'Surrender of imperial citadel' },
                  { name: 'Outer Frontier', x: 780, y: 210, desc: 'Furthest eastward advance' }
                ]).map((wp: any, idx: number) => {
                  const x = wp.x || (140 + idx * 150);
                  const y = wp.y || (220 + (idx % 2 === 0 ? -30 : 40));
                  return (
                    <g key={idx} className="cursor-pointer group">
                      <circle cx={x} cy={y} r="16" fill="rgba(199,162,84,0.15)" className="group-hover:scale-125 transition-transform" />
                      <circle cx={x} cy={y} r="6" fill="#c7a254" stroke="#fff" strokeWidth="1.5" />
                      <rect x={x - 45} y={y + 12} width="90" height="20" rx="3" fill="#14171a" stroke="#c7a254" strokeWidth="0.8" opacity="0.9"/>
                      <text x={x} y={y + 26} fill="#f3ebd4" fontSize="9" fontFamily="Cinzel" textAnchor="middle" fontWeight="bold">
                        {wp.name || `Point ${idx + 1}`}
                      </text>
                    </g>
                  );
                })}

                {/* Compass */}
                <g transform="translate(820, 80)" opacity="0.7">
                  <circle cx="0" cy="0" r="22" fill="none" stroke="#c7a254" strokeWidth="1.2"/>
                  <path d="M 0,-20 L 5,0 L -5,0 Z" fill="#c7a254"/>
                  <path d="M 0,20 L 5,0 L -5,0 Z" fill="#6e7781"/>
                  <text x="0" y="-24" fill="#c7a254" fontSize="10" fontWeight="bold" textAnchor="middle">N</text>
                </g>
              </svg>

              {/* Bottom Canvas Controls Note */}
              <div className="absolute bottom-3 left-3 bg-charcoal-950/90 border border-brass/20 p-3 rounded text-xs font-mono text-parchment-aged backdrop-blur-sm pointer-events-none max-w-sm">
                <span className="text-brass uppercase font-bold text-[10px] block mb-0.5">Campaign Navigation</span>
                <span>Trace operational march routes and key tactical waypoints across this historical theater.</span>
              </div>
            </div>

            {/* Narrative Context of Active Map */}
            <div className="p-6 bg-charcoal-950 border-t border-brass/20 space-y-4">
              <h3 className="font-display font-bold text-lg text-parchment">
                Strategic Campaign Context &amp; Waypoint Intelligence
              </h3>
              <p className="text-sm font-sans text-parchment-aged leading-relaxed">
                {activeMap.description || 'This cartographic survey documents the logistical lines of communication, natural terrain defiles, river crossings, and fortified objectives encountered during this historical military campaign.'}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
