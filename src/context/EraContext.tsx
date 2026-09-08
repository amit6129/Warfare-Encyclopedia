import React, { createContext, useContext, useState } from 'react';
import { EraId, EraTheme } from '../types';
import { ERA_THEMES, getEraTheme } from '../data/eraThemes';

interface EraContextType {
  activeEra: EraId | 'all';
  setActiveEra: (era: EraId | 'all') => void;
  currentTheme: EraTheme;
}

const EraContext = createContext<EraContextType | undefined>(undefined);

export const EraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeEra, setActiveEra] = useState<EraId | 'all'>('all');

  const currentTheme = activeEra === 'all' ? ERA_THEMES.ancient : getEraTheme(activeEra);

  return (
    <EraContext.Provider value={{ activeEra, setActiveEra, currentTheme }}>
      {children}
    </EraContext.Provider>
  );
};

export const useEra = (): EraContextType => {
  const context = useContext(EraContext);
  if (!context) {
    throw new Error('useEra must be used within an EraProvider');
  }
  return context;
};
