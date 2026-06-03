import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { LiveMap } from './pages/LiveMap';
import { Drivers } from './pages/Drivers';
import { FareSettings } from './pages/FareSettings';
import { Rides } from './pages/Rides';
import { Payments } from './pages/Payments';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { PlaceholderPage } from './pages/PlaceholderPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="live-map" element={<LiveMap />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="passengers" element={<PlaceholderPage title="Passengers" />} />
          <Route path="rides" element={<Rides />} />
          <Route path="fare-settings" element={<FareSettings />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
