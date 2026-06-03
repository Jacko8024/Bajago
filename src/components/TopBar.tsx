import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './TopBar.css';

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/live-map': 'Live Map',
  '/drivers': 'Drivers',
  '/passengers': 'Passengers',
  '/rides': 'Rides',
  '/fare-settings': 'Fare Settings',
  '/payments': 'Payments',
  '/settings': 'Settings',
};

export function TopBar() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Dashboard';

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="page-title">{title}</h1>
      </div>
      
      <div className="topbar-right">
        <div className="search-box">
          <Search size={16} color="var(--text-muted)" />
          <input type="text" placeholder="Search..." />
        </div>
        
        <button className="icon-btn notification-btn">
          <Bell size={20} />
          <span className="badge">3</span>
        </button>
      </div>
    </header>
  );
}
