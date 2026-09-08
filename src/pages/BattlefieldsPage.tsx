import React from 'react';
import { BATTLEFIELDS } from '../data/battlefields';
import { Hero } from '../components/common/Hero';
import { BattlefieldCard } from '../components/cards/BattlefieldCard';

export const BattlefieldsPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Battlefields of History"
        subtitle="Explore the physical terrain, contours, rivers, and geographical features where the fate of empires was decided: the Jawali mountain jungle at Pratapgad, the Pratzen Heights at Austerlitz, the Aufidus plain at Cannae, and the Volga banks at Stalingrad."
        eyebrow="Terrain &amp; Geography"
        breadcrumbs={[{ label: 'Battlefields' }]}
        metaTags={[
          { label: 'Documented Battlefields', value: String(BATTLEFIELDS.length) },
          { label: 'Terrain Types', value: 'Mountain Forests, River Plains, Heights, Urban Ridges' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BATTLEFIELDS.map(bf => (
            <BattlefieldCard key={bf.id} battlefield={bf} />
          ))}
        </div>
      </div>
    </div>
  );
};
