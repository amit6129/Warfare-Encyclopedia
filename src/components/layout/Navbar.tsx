import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Compass, Shield, ChevronDown } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { ERA_THEMES } from '../../data/eraThemes';
import { EraId } from '../../types';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eraDropdownOpen, setEraDropdownOpen] = useState(false);
  const location = useLocation();
  const { openSearch } = useSearch();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Battles', path: '/battles' },
    { label: 'Commanders', path: '/commanders' },
    { label: 'Armies', path: '/armies' },
    { label: 'Campaigns', path: '/campaigns' },
    { label: 'Forts', path: '/forts' },
    { label: 'Battlefields', path: '/battlefields' },
    { label: 'Atlas', path: '/maps' },
    { label: 'Materiel', path: '/weapons' },
    { label: 'Timeline', path: '/timeline' },
    { label: 'Archive', path: '/archive' }
  ];

  const tickerItems = [
    "GAUGAMELA (331 BCE): Alexander's Companion cavalry breaks the Persian royal center",
    "CANNAE (216 BCE): Hannibal's crescent envelops 86,000 Roman legionaries in Apulia",
    "PRATAPGAD (1659 CE): Chhatrapati Shivaji Maharaj triumphs over Afzal Khan in the Jawali gorge",
    "SINHAGAD (1670 CE): Tanaji Malusare scales Kondhana's precipitous cliff face under midnight darkness",
    "AUSTERLITZ (1805 CE): Napoleon splits the Austro-Russian center upon the misty Pratzen Heights",
    "WATERLOO (1815 CE): Wellington holds Mont-Saint-Jean until Blücher's Prussian corps strikes the French flank",
    "STALINGRAD (1942 CE): Operation Uranus snaps shut the encirclement of the German 6th Army on the Volga",
    "MIDWAY (1942 CE): SBD Dauntless dive-bombers neutralize four Japanese fleet carriers in five minutes"
  ];

  return (
    <>
      {/* Historical Ticker Tape */}
      <div className="bg-charcoal-900 border-b border-brass/20 text-xs font-mono text-steel-light overflow-hidden py-1.5 px-4 flex items-center">
        <div className="flex items-center gap-2 mr-4 flex-shrink-0 text-brass uppercase font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-brass animate-pulse inline-block"></span>
          Historical Dispatch:
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-ticker">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="mx-6 text-parchment-aged hover:text-brass transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-charcoal-950/95 backdrop-blur-md border-b border-brass/30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Imperial Brand */}
            <Link to="/" className="flex items-center gap-3 group text-decoration-none">
              <div className="w-11 h-11 rounded border border-brass/40 bg-charcoal-900 flex items-center justify-center p-1.5 shadow-archival group-hover:border-brass transition-colors">
                <svg viewBox="0 0 100 100" className="w-full h-full text-brass" fill="currentColor">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" strokeOpacity="0.4"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
                  <path d="M50 18 L55 35 L72 35 L58 46 L63 63 L50 52 L37 63 L42 46 L28 35 L45 35 Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-wider text-parchment group-hover:text-brass transition-colors">
                  MARCH OF <span className="text-brass">EMPIRE</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-steel-light uppercase">
                  Where Empires Rise and History Marches
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 text-sm font-medium">
              {/* Eras Dropdown */}
              <div className="relative" onMouseLeave={() => setEraDropdownOpen(false)}>
                <button
                  onClick={() => setEraDropdownOpen(prev => !prev)}
                  onMouseEnter={() => setEraDropdownOpen(true)}
                  className="px-3 py-2 rounded text-parchment-aged hover:text-brass flex items-center gap-1 transition-colors font-serif"
                >
                  <span>Explore Eras</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {eraDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-1 w-64 bg-charcoal-900 border border-brass/40 rounded shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setEraDropdownOpen(true)}
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brass px-3 py-1 border-b border-brass/20 mb-1">
                      Historical Periods
                    </div>
                    {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => {
                      const era = ERA_THEMES[eraKey];
                      return (
                        <Link
                          key={era.id}
                          to={`/era/${era.id}`}
                          onClick={() => setEraDropdownOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded text-xs text-parchment hover:bg-charcoal-800 hover:text-brass transition-colors group"
                        >
                          <div>
                            <div className="font-serif font-semibold">{era.name}</div>
                            <div className="text-[10px] font-mono text-steel">{era.dateRange}</div>
                          </div>
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: era.accentColor }}></span>
                        </Link>
                      );
                    })}
                    <div className="border-t border-brass/20 mt-1 pt-1">
                      <Link
                        to="/eras"
                        onClick={() => setEraDropdownOpen(false)}
                        className="block text-center text-xs font-mono text-brass hover:underline py-1"
                      >
                        View All Civilization Profiles &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map(link => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded transition-colors font-serif ${
                      isActive 
                        ? 'text-brass font-bold bg-charcoal-900 border-b-2 border-brass' 
                        : 'text-parchment-aged hover:text-brass hover:bg-charcoal-900/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Search & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={openSearch}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-charcoal-900 hover:bg-charcoal-850 text-steel-light hover:text-parchment border border-brass/30 hover:border-brass/70 rounded text-xs transition-all shadow-inner"
                title="Search Encyclopedia (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-brass" />
                <span className="hidden sm:inline font-mono">Search Archive…</span>
                <kbd className="hidden sm:inline px-1.5 py-0.5 bg-charcoal-950 border border-steel/30 rounded text-[10px] font-mono text-brass">
                  Ctrl K
                </kbd>
              </button>

              <button
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="xl:hidden p-2 text-parchment hover:text-brass focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-charcoal-950 border-b border-brass/30 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
            <div className="text-xs font-mono text-brass uppercase tracking-wider py-1 border-b border-brass/20">
              Eras of Empire
            </div>
            <div className="grid grid-cols-2 gap-1.5 py-2">
              {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => {
                const era = ERA_THEMES[eraKey];
                return (
                  <Link
                    key={era.id}
                    to={`/era/${era.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 bg-charcoal-900 rounded border border-border-color text-xs text-parchment hover:text-brass"
                  >
                    <div className="font-serif font-bold">{era.name}</div>
                    <div className="text-[10px] text-steel font-mono">{era.dateRange}</div>
                  </Link>
                );
              })}
            </div>

            <div className="text-xs font-mono text-brass uppercase tracking-wider py-1 border-b border-brass/20">
              Navigation Index
            </div>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded text-sm font-serif ${
                    location.pathname === link.path ? 'bg-charcoal-900 text-brass font-bold' : 'text-parchment-aged hover:text-brass'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
