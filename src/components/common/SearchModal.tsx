import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Shield, Swords, User, Castle, Mountain, Crosshair, Calendar, BookOpen } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { BATTLES } from '../../data/battles';
import { COMMANDERS } from '../../data/commanders';
import { ARMIES } from '../../data/armies';
import { CAMPAIGNS } from '../../data/campaigns';
import { FORTS } from '../../data/forts';
import { BATTLEFIELDS } from '../../data/battlefields';
import { WEAPONS } from '../../data/weapons';
import { ERA_THEMES } from '../../data/eraThemes';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Build unified search index
  const searchIndex = useMemo(() => {
    const items: Array<{
      id: string;
      title: string;
      subtitle: string;
      category: string;
      era: string;
      link: string;
      icon: any;
    }> = [];

    // Battles
    BATTLES.forEach(b => {
      items.push({
        id: `battle-${b.id}`,
        title: b.name,
        subtitle: `${b.dates} • ${b.location}`,
        category: 'Battles',
        era: b.era || 'ww2',
        link: `/battle/${b.id}`,
        icon: Swords
      });
    });

    // Commanders
    COMMANDERS.forEach(c => {
      items.push({
        id: `cmdr-${c.id}`,
        title: c.name,
        subtitle: `${c.nation} • ${c.role}`,
        category: 'Commanders',
        era: c.era || 'ww2',
        link: `/commander/${c.id}`,
        icon: User
      });
    });

    // Armies
    ARMIES.forEach(a => {
      items.push({
        id: `army-${a.id}`,
        title: a.name,
        subtitle: `${a.nation} • ${a.period}`,
        category: 'Armies',
        era: a.era,
        link: `/army/${a.id}`,
        icon: Shield
      });
    });

    // Campaigns
    CAMPAIGNS.forEach(cp => {
      items.push({
        id: `camp-${cp.id}`,
        title: cp.name,
        subtitle: `${cp.date} • ${cp.nation}`,
        category: 'Campaigns',
        era: cp.era || 'ww2',
        link: `/campaign/${cp.id}`,
        icon: Crosshair
      });
    });

    // Forts
    FORTS.forEach(f => {
      items.push({
        id: `fort-${f.id}`,
        title: f.name,
        subtitle: `${f.location} • ${f.era}`,
        category: 'Forts',
        era: f.era,
        link: `/fort/${f.id}`,
        icon: Castle
      });
    });

    // Battlefields
    BATTLEFIELDS.forEach(bf => {
      items.push({
        id: `bf-${bf.id}`,
        title: bf.name,
        subtitle: `${bf.location} • ${bf.battleName}`,
        category: 'Battlefields',
        era: bf.era,
        link: `/battlefield/${bf.id}`,
        icon: Mountain
      });
    });

    return items;
  }, []);

  const results = useMemo(() => {
    if (!query.trim() && selectedCategory === 'all' && selectedEra === 'all') {
      return searchIndex.slice(0, 10);
    }

    const q = query.toLowerCase().trim();
    return searchIndex.filter(item => {
      const matchesQuery = !q || item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q);
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesEra = selectedEra === 'all' || item.era === selectedEra;
      return matchesQuery && matchesCat && matchesEra;
    }).slice(0, 25);
  }, [query, selectedCategory, selectedEra, searchIndex]);

  const handleSelect = (link: string) => {
    navigate(link);
    closeSearch();
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/85 backdrop-blur-md flex items-start justify-center pt-16 px-4 pb-6">
      <div className="bg-charcoal-900 border border-brass/40 w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150">
        
        {/* Search Header */}
        <div className="p-4 border-b border-brass/20 bg-charcoal-950 flex items-center gap-3">
          <Search className="w-5 h-5 text-brass flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search battles, commanders, armies, campaigns, forts, battlefields..."
            className="w-full bg-transparent text-parchment placeholder-steel focus:outline-none font-serif text-base"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-steel hover:text-parchment p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={closeSearch}
            className="px-2 py-1 text-xs font-mono bg-charcoal-800 text-brass border border-brass/30 rounded hover:bg-charcoal-700"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 bg-charcoal-950/50 border-b border-brass/10 flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-steel mr-1">Category:</span>
          {['all', 'Battles', 'Commanders', 'Armies', 'Campaigns', 'Forts', 'Battlefields'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded capitalize transition-colors ${
                selectedCategory === cat
                  ? 'bg-brass text-charcoal-950 font-bold'
                  : 'bg-charcoal-800 text-steel-light hover:text-parchment'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 divide-y divide-border-color space-y-1">
          {results.length === 0 ? (
            <div className="text-center py-12 text-steel font-serif">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-brass/40" />
              <p className="text-base text-parchment">No historical records matched "{query}"</p>
              <p className="text-xs text-steel mt-1">Try searching by commander name, battle location, or historical era.</p>
            </div>
          ) : (
            results.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.link)}
                  className="p-3 rounded hover:bg-charcoal-800/80 cursor-pointer flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-charcoal-950 border border-brass/30 flex items-center justify-center text-brass group-hover:border-brass flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-sm text-parchment group-hover:text-brass transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-steel font-sans line-clamp-1">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-950 text-brass border border-brass/20 uppercase">
                      {item.category}
                    </span>
                    <span className="text-steel text-xs group-hover:text-brass">&rarr;</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-charcoal-950 border-t border-brass/20 text-xs font-mono text-steel flex justify-between items-center">
          <span>{results.length} record(s) found</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
};
