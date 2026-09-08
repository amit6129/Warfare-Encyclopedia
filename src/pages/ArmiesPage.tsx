import React from 'react';
import { ARMIES } from '../data/armies';
import { Hero } from '../components/common/Hero';
import { ArmyCard } from '../components/cards/ArmyCard';

export const ArmiesPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Armies &amp; Doctrinal Formations"
        subtitle="Examine the organizational hierarchy, combat units, battlefield equipment, and strategic doctrines that forged world empires — from the Macedonian pike syntagma to the mobile tank corps of the Red Army."
        eyebrow="Order of Battle Archive"
        breadcrumbs={[{ label: 'Armies' }]}
        metaTags={[
          { label: 'Documented Armies', value: String(ARMIES.length) },
          { label: 'Doctrines', value: 'Phalanx, Cohortal, Ganimi Kava, Corps d’Armée, Deep Battle' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARMIES.map(army => (
            <ArmyCard key={army.id} army={army} />
          ))}
        </div>
      </div>
    </div>
  );
};
