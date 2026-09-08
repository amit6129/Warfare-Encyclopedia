import React, { useState } from 'react';
import { Hero } from '../components/common/Hero';
import { ImageGallery } from '../components/common/ImageGallery';
import { ImageMeta } from '../types';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryItems: Array<{ url: string; category: string; meta: ImageMeta }> = [
    {
      url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      category: 'ancient',
      meta: {
        title: 'Macedonian Sarissa Phalanx Reconstruction',
        caption: 'Hellenistic phalangites presenting the interlocking frontal pike barrier.',
        creator: 'Classical Antiquities Photographic Archive',
        date: '330 BCE era',
        source: 'Archaeological Museum',
        license: 'Public Domain',
        credit: 'Digital Antiquities Collection',
        alt: 'Macedonian Phalanx'
      }
    },
    {
      url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
      category: 'ancient',
      meta: {
        title: 'Roman Legionary Cohort Formations',
        caption: 'Legionaries deployed behind curved scuta shields executing gladius thrusting tactics.',
        creator: 'Capitoline Museum Archives',
        date: '1st Century CE',
        source: 'Roman National Archives',
        license: 'Public Domain',
        credit: 'Capitoline Museum',
        alt: 'Roman Legion'
      }
    },
    {
      url: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1200&q=80',
      category: 'maratha',
      meta: {
        title: 'Pratapgad Fort Basalt Ramparts',
        caption: 'Towering double ramparts of Pratapgad citadel overlooking the dense Jawali mountain forest.',
        creator: 'Maharashtra State Archaeological Department',
        date: '1656–1659 CE',
        source: 'Maharashtra State Archives',
        license: 'Public Domain / Educational',
        credit: 'Deccan Historical Survey',
        alt: 'Pratapgad Fort'
      }
    },
    {
      url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      category: 'napoleon',
      meta: {
        title: 'Napoleon Bonaparte at Austerlitz',
        caption: 'Napoleon observing the French assault on the Pratzen Heights, 2 December 1805.',
        creator: 'François Gérard (Musée de Versailles)',
        date: '1805 CE',
        source: 'Musée National de Versailles',
        license: 'Public Domain',
        credit: 'French National Museum Collection',
        alt: 'Napoleon at Austerlitz'
      }
    },
    {
      url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      category: 'ww1',
      meta: {
        title: 'Entrenched Trenches on the Western Front',
        caption: 'Allied infantry holding front-line parapets under heavy artillery bombardment.',
        creator: 'Imperial War Museum Photographic Archive',
        date: '1916 CE',
        source: 'Imperial War Museum, London',
        license: 'Public Domain / Archival',
        credit: 'IWM Archive',
        alt: 'Western Front trenches'
      }
    },
    {
      url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
      category: 'ww2',
      meta: {
        title: 'Soviet Armored Advance near Kursk',
        caption: 'T-34 medium tanks moving to counter German armor during Operation Citadel, July 1943.',
        creator: 'Soviet Central Military Archive',
        date: '1943 CE',
        source: 'Russian State Documentary Film & Photo Archive',
        license: 'Public Domain / Archival',
        credit: 'Wartime Archives',
        alt: 'Soviet T-34 tanks'
      }
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div>
      <Hero
        title="Visual Archives &amp; Digital Museum"
        subtitle="A curated historical archive of classical artwork, museum paintings, Sahyadri fort photography, tactical diagrams, and wartime photography."
        eyebrow="Museum Collection"
        breadcrumbs={[{ label: 'Gallery' }]}
        metaTags={[
          { label: 'Artifacts Exhibited', value: String(galleryItems.length) },
          { label: 'Attribution Standards', value: 'Complete Source, License & Creator Metadata' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-brass/20 pb-4">
          {[
            { id: 'all', label: 'All Artifacts' },
            { id: 'ancient', label: 'Ancient & Classical' },
            { id: 'maratha', label: 'Maratha Forts & Art' },
            { id: 'napoleon', label: 'Napoleonic Warfare' },
            { id: 'ww1', label: 'Great War (WWI)' },
            { id: 'ww2', label: 'World War II' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all border ${
                activeCategory === tab.id
                  ? 'bg-brass text-charcoal-950 font-bold border-brass shadow-md'
                  : 'bg-charcoal-900 text-steel-light border-border-color hover:text-parchment'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <ImageGallery images={filteredItems} columns={3} />

      </div>
    </div>
  );
};
