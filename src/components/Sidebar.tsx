import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Map as MapIcon, 
  Gauge, 
  Users, 
  Car, 
  Settings as SettingsIcon, 
  Banknote, 
  Settings,
  LogOut
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/', icon: Home, label: 'Overview' },
  { path: '/live-map', icon: MapIcon, label: 'Live Map' },
  { path: '/drivers', icon: Gauge, label: 'Drivers' },
  { path: '/passengers', icon: Users, label: 'Passengers' },
  { path: '/rides', icon: Car, label: 'Rides' },
  { path: '/fare-settings', icon: SettingsIcon, label: 'Fare Settings' },
  { path: '/payments', icon: Banknote, label: 'Payments' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-circle">🚕</div>
        <span className="logo-text">Assosa Ride Admin</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="admin-info">
          <div className="admin-avatar">JA</div>
          <div className="admin-name">Jack Admin</div>
        </div>
        <button className="logout-btn">
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
}
