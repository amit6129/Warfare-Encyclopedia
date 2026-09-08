import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Scroll, Compass, Award } from 'lucide-react';
import { ERA_THEMES } from '../../data/eraThemes';
import { EraId } from '../../types';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t-4 border-brass/60 text-steel-light mt-20">
      {/* Top Banner / Academic Quote */}
      <div className="border-b border-brass/20 bg-charcoal-900/60 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brass/10 border border-brass/40 flex items-center justify-center text-brass flex-shrink-0">
              <Scroll className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-brass">Historical Warfare Repository</div>
              <div className="text-sm font-serif italic text-parchment-aged">
                "Those who cannot remember the past are condemned to repeat it." — George Santayana
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-steel">
            SCHOLARLY HISTORICAL ARCHIVE &middot; PEER-DOCUMENTED MILITARY RECORDS
          </div>
        </div>
      </div>

      {/* Main Grid Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-brass/40 bg-charcoal-900 flex items-center justify-center text-brass">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-parchment tracking-wider">
                MARCH OF <span className="text-brass">EMPIRE</span>
              </span>
            </div>
            <p className="text-xs font-sans text-steel-light leading-relaxed max-w-sm">
              An authoritative digital museum, military archive, and battlefield atlas dedicated to preserving the documented history of human warfare, tactical doctrines, fortified strongholds, and commander decisions across three millennia.
            </p>
            <div className="text-[11px] font-mono text-brass-light tracking-widest uppercase">
              Where Empires Rise and History Marches
            </div>
          </div>

          {/* Col 2: Eras */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brass font-bold border-b border-brass/20 pb-1">
              Historical Eras
            </h4>
            <ul className="space-y-1.5 text-xs font-serif">
              {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => (
                <li key={eraKey}>
                  <Link to={`/era/${eraKey}`} className="hover:text-brass transition-colors flex items-center justify-between">
                    <span>{ERA_THEMES[eraKey].name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Research Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brass font-bold border-b border-brass/20 pb-1">
              Encyclopedia Wings
            </h4>
            <ul className="space-y-1.5 text-xs font-serif">
              <li><Link to="/battles" className="hover:text-brass transition-colors">Battles Encyclopedia</Link></li>
              <li><Link to="/commanders" className="hover:text-brass transition-colors">Commanders & Marshals</Link></li>
              <li><Link to="/armies" className="hover:text-brass transition-colors">Armies & Doctrinal Formations</Link></li>
              <li><Link to="/campaigns" className="hover:text-brass transition-colors">Strategic Campaigns</Link></li>
              <li><Link to="/forts" className="hover:text-brass transition-colors">Fortresses & Architecture</Link></li>
              <li><Link to="/battlefields" className="hover:text-brass transition-colors">Battlefields & Geography</Link></li>
              <li><Link to="/weapons" className="hover:text-brass transition-colors">Materiel & Technology</Link></li>
              <li><Link to="/timeline" className="hover:text-brass transition-colors">Interactive Chronology</Link></li>
            </ul>
          </div>

          {/* Col 4: Reference & Methodology */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brass font-bold border-b border-brass/20 pb-1">
              Scholarly Reference
            </h4>
            <ul className="space-y-1.5 text-xs font-serif">
              <li><Link to="/archive" className="hover:text-brass transition-colors">Military Glossary</Link></li>
              <li><Link to="/archive#faq" className="hover:text-brass transition-colors">Historical FAQ</Link></li>
              <li><Link to="/archive#bibliography" className="hover:text-brass transition-colors">Academic Bibliography</Link></li>
              <li><Link to="/gallery" className="hover:text-brass transition-colors">Visual Archives & Artwork</Link></li>
              <li><Link to="/maps" className="hover:text-brass transition-colors">Tactical Cartography</Link></li>
            </ul>
            <div className="pt-2 text-[11px] text-steel">
              <span className="font-mono text-brass font-semibold block mb-0.5">Citation Guide:</span>
              Articles cite academic publications, verified state archives, and archaeological field surveys.
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-border-color text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-sans text-steel">
          <p className="max-w-2xl">
            This digital encyclopedia is an independent educational and historical reference platform. Casualty numbers and force deployments reflect contemporary scholarly consensus and archival evidence; disputed figures are explicitly labeled as estimated or contested.
          </p>
          <div className="font-mono text-xs text-brass-dark">
            &copy; {currentYear} March of Empire Archive. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
