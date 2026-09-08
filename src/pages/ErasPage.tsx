import React from 'react';
import { Hero } from '../components/common/Hero';
import { EraCard } from '../components/cards/EraCard';
import { ERA_THEMES } from '../data/eraThemes';
import { EraId } from '../types';

export const ErasPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Civilization Eras of Warfare"
        subtitle="Explore the evolution of military civilizations, operational doctrines, logistics, and command structures across three millennia of recorded human conflict."
        eyebrow="Civilization Catalog"
        breadcrumbs={[{ label: 'Eras' }]}
        metaTags={[
          { label: 'Documented Eras', value: '8 Major Epochs' },
          { label: 'Span', value: '3000 BCE – 1945 CE' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Object.keys(ERA_THEMES) as EraId[]).map(eraKey => (
            <EraCard key={eraKey} era={ERA_THEMES[eraKey]} />
          ))}
        </div>
      </div>
    </div>
  );
};
