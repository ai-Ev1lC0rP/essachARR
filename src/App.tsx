import React from 'react';
import { createHashRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Recruiting from './components/solutions/Recruiting';
import Lexi from './components/solutions/Lexi';
import Arlo from './components/solutions/Arlo';
import Nova from './components/solutions/Nova';
import Dizzy from './components/solutions/Dizzy';
import Chime from './components/solutions/Chime';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/recruiting" element={<Recruiting />} />
      <Route path="/solutions/lexi" element={<Lexi />} />
      <Route path="/solutions/arlo" element={<Arlo />} />
      <Route path="/solutions/nova" element={<Nova />} />
      <Route path="/solutions/dizzy" element={<Dizzy />} />
      <Route path="/solutions/chime" element={<Chime />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </>
  ),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true
    }
  }
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
