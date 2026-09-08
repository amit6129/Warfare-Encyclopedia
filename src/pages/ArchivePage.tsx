import React, { useState } from 'react';
import { Hero } from '../components/common/Hero';
import { GLOSSARY, FAQS, BOOKS, DOCUMENTARIES } from '../data/resources';
import { BookOpen, HelpCircle, Film, Book, Search } from 'lucide-react';

export const ArchivePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'glossary' | 'faq' | 'books' | 'docs'>('glossary');

  const filteredGlossary = GLOSSARY.filter(item => 
    !searchTerm || 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Hero
        title="Scholarly Reference &amp; Educational Archive"
        subtitle="Authoritative military doctrine definitions, historical terminology (Ganimi Kava, Phalanx, Corps d'Armée, Double Envelopment), frequently asked questions, and essential peer-reviewed bibliography."
        eyebrow="Scholarly Resources"
        breadcrumbs={[{ label: 'Archive' }]}
        metaTags={[
          { label: 'Glossary Terms', value: String(GLOSSARY.length) },
          { label: 'Documented FAQs', value: String(FAQS.length) }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brass/20 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-4 py-2 rounded text-xs font-mono transition-all border flex items-center gap-2 ${
                activeTab === 'glossary'
                  ? 'bg-brass text-charcoal-950 font-bold border-brass'
                  : 'bg-charcoal-900 text-steel-light border-border-color hover:text-parchment'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Glossary ({GLOSSARY.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`px-4 py-2 rounded text-xs font-mono transition-all border flex items-center gap-2 ${
                activeTab === 'faq'
                  ? 'bg-brass text-charcoal-950 font-bold border-brass'
                  : 'bg-charcoal-900 text-steel-light border-border-color hover:text-parchment'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Historical FAQ ({FAQS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('books')}
              className={`px-4 py-2 rounded text-xs font-mono transition-all border flex items-center gap-2 ${
                activeTab === 'books'
                  ? 'bg-brass text-charcoal-950 font-bold border-brass'
                  : 'bg-charcoal-900 text-steel-light border-border-color hover:text-parchment'
              }`}
            >
              <Book className="w-4 h-4" />
              <span>Bibliography ({BOOKS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('docs')}
              className={`px-4 py-2 rounded text-xs font-mono transition-all border flex items-center gap-2 ${
                activeTab === 'docs'
                  ? 'bg-brass text-charcoal-950 font-bold border-brass'
                  : 'bg-charcoal-900 text-steel-light border-border-color hover:text-parchment'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Documentaries ({DOCUMENTARIES.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Glossary */}
        {activeTab === 'glossary' && (
          <div className="space-y-6">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-steel absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search glossary terms (e.g. Ganimi Kava, Phalanx)..."
                className="w-full bg-charcoal-950 border border-border-color rounded pl-9 pr-3 py-2 text-xs font-sans text-parchment focus:outline-none focus:border-brass"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="card-archival p-5 rounded-lg border-l-4 border-l-brass space-y-2">
                  <h3 className="font-display font-bold text-base text-brass">
                    {item.term}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-parchment-aged leading-relaxed">
                    {item.def}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: FAQs */}
        {activeTab === 'faq' && (
          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="card-archival p-6 rounded-lg space-y-2">
                <h3 className="font-display font-bold text-base text-parchment flex items-start gap-2">
                  <span className="text-brass font-mono font-black">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm font-sans text-parchment-aged leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Books */}
        {activeTab === 'books' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOKS.map((b, idx) => (
              <div key={idx} className="card-archival p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-brass uppercase tracking-wider block mb-1">Author / Historian</span>
                  <div className="text-xs font-mono text-parchment font-bold mb-2">{b.author}</div>
                  <h4 className="font-display font-bold text-base text-parchment mb-2">{b.title}</h4>
                  <p className="text-xs font-sans text-steel-light leading-relaxed mb-4">{b.note}</p>
                </div>
                <div className="pt-3 border-t border-border-color text-[11px] font-mono text-steel">
                  Recommended Academic Reading
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Documentaries */}
        {activeTab === 'docs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOCUMENTARIES.map((doc, idx) => (
              <div key={idx} className="card-archival p-6 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-brass text-xs font-mono uppercase">
                  <Film className="w-4 h-4" />
                  <span>Archival Film Record</span>
                </div>
                <h4 className="font-display font-bold text-lg text-parchment">{doc.title}</h4>
                <p className="text-xs sm:text-sm font-sans text-parchment-aged leading-relaxed">{doc.note}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
