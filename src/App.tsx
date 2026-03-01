import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPortfolioLayout from './layouts/NewPortfolioLayout';
import LegacyLayout from './layouts/LegacyLayout';
import NewAboutPage from './pages/new/NewAboutPage';
import NewProjectsPage from './pages/new/NewProjectsPage';
import NewContactPage from './pages/new/NewContactPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* New portfolio — dark + vert pomme */}
        <Route path="/" element={<NewPortfolioLayout />}>
          <Route index element={<NewAboutPage />} />
          <Route path="projects" element={<NewProjectsPage />} />
          <Route path="contact" element={<NewContactPage />} />
        </Route>

        {/* Legacy portfolio — Piltover/Zaun dual theme */}
        <Route path="/legacy" element={<LegacyLayout />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
