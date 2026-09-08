import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/common/SearchModal';
import { HomePage } from './pages/HomePage';
import { ErasPage } from './pages/ErasPage';
import { EraDetailPage } from './pages/EraDetailPage';
import { BattlesPage } from './pages/BattlesPage';
import { BattleDetailPage } from './pages/BattleDetailPage';
import { CommandersPage } from './pages/CommandersPage';
import { CommanderDetailPage } from './pages/CommanderDetailPage';
import { ArmiesPage } from './pages/ArmiesPage';
import { ArmyDetailPage } from './pages/ArmyDetailPage';
import { CampaignsPage } from './pages/CampaignsPage';
import { CampaignDetailPage } from './pages/CampaignDetailPage';
import { FortsPage } from './pages/FortsPage';
import { FortDetailPage } from './pages/FortDetailPage';
import { BattlefieldsPage } from './pages/BattlefieldsPage';
import { BattlefieldDetailPage } from './pages/BattlefieldDetailPage';
import { MapsPage } from './pages/MapsPage';
import { WeaponsPage } from './pages/WeaponsPage';
import { TimelinePage } from './pages/TimelinePage';
import { ArchivePage } from './pages/ArchivePage';
import { GalleryPage } from './pages/GalleryPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-charcoal-950 text-parchment font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eras" element={<ErasPage />} />
            <Route path="/era/:eraId" element={<EraDetailPage />} />
            <Route path="/battles" element={<BattlesPage />} />
            <Route path="/battle/:id" element={<BattleDetailPage />} />
            <Route path="/commanders" element={<CommandersPage />} />
            <Route path="/commander/:id" element={<CommanderDetailPage />} />
            <Route path="/armies" element={<ArmiesPage />} />
            <Route path="/army/:id" element={<ArmyDetailPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/campaign/:id" element={<CampaignDetailPage />} />
            <Route path="/forts" element={<FortsPage />} />
            <Route path="/fort/:id" element={<FortDetailPage />} />
            <Route path="/battlefields" element={<BattlefieldsPage />} />
            <Route path="/battlefield/:id" element={<BattlefieldDetailPage />} />
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/weapons" element={<WeaponsPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <SearchModal />
      </div>
    </BrowserRouter>
  );
};

export default App;
