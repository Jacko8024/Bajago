import React, { useState } from 'react';
import { Search, Filter, Plus, UserX, UserCheck, Eye } from 'lucide-react';
import './Drivers.css';

const MOCK_DRIVERS = [
  { id: 'D-101', name: 'Abebe Balcha', phone: '+251911234567', vehicle: 'Bajaj', plate: 'AA 12345', status: 'Active', trips: 342, rating: 4.8 },
  { id: 'D-102', name: 'Kaleb Solomon', phone: '+251922345678', vehicle: 'Taxi', plate: 'AA 98765', status: 'Pending', trips: 0, rating: 0 },
  { id: 'D-103', name: 'Dawit Mengistu', phone: '+251933456789', vehicle: 'Bajaj', plate: 'AA 45678', status: 'Suspended', trips: 120, rating: 4.1 },
];

export function Drivers() {
  const [selectedDriver, setSelectedDriver] = useState<any>(null);

  return (
    <div className="drivers-page">
      <div className="filters-bar card">
        <div className="search-box">
          <Search size={16} color="var(--text-muted)" />
          <input type="text" placeholder="Search drivers by name or phone..." />
        </div>
        
        <div className="filter-dropdowns">
          <button className="filter-btn">
            <Filter size={16} /> Status: All
          </button>
          <button className="filter-btn">
            <Filter size={16} /> Vehicle: All
          </button>
        </div>

        <button className="primary-btn">
          <Plus size={16} /> Add Driver
        </button>
      </div>

      <div className="content-layout">
        <div className="card table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Driver</th>
                <th>Vehicle</th>
                <th>Plate</th>
                <th>Status</th>
                <th>Trips</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DRIVERS.map(driver => (
                <tr key={driver.id} onClick={() => setSelectedDriver(driver)} className={selectedDriver?.id === driver.id ? 'selected-row' : ''}>
                  <td>
                    <div className="driver-cell">
                      <div className="avatar-sm">{driver.name.charAt(0)}</div>
                      <div>
                        <div className="driver-name">{driver.name}</div>
                        <div className="driver-phone">{driver.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className={`vehicle-badge ${driver.vehicle.toLowerCase()}`}>{driver.vehicle}</span></td>
                  <td>{driver.plate}</td>
                  <td><span className={`status-badge ${driver.status.toLowerCase()}`}>{driver.status}</span></td>
                  <td>{driver.trips}</td>
                  <td>{driver.rating > 0 ? `⭐ ${driver.rating}` : '-'}</td>
                  <td>
                    <div className="actions-cell">
                      <button className="action-icon"><Eye size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedDriver && (
          <div className="side-panel card">
            <div className="panel-header">
              <h3>Driver Details</h3>
              <button className="close-btn" onClick={() => setSelectedDriver(null)}>×</button>
            </div>
            
            <div className="panel-profile">
              <div className="avatar-lg">{selectedDriver.name.charAt(0)}</div>
              <h2>{selectedDriver.name}</h2>
              <p>{selectedDriver.phone}</p>
              <span className={`status-badge ${selectedDriver.status.toLowerCase()}`}>{selectedDriver.status}</span>
            </div>

            <div className="panel-section">
              <h4>Vehicle Info</h4>
              <p><strong>Type:</strong> {selectedDriver.vehicle}</p>
              <p><strong>Plate:</strong> {selectedDriver.plate}</p>
            </div>

            <div className="panel-section">
              <h4>Performance</h4>
              <p><strong>Total Trips:</strong> {selectedDriver.trips}</p>
              <p><strong>Rating:</strong> {selectedDriver.rating}</p>
            </div>

            <div className="panel-actions">
              {selectedDriver.status === 'Active' ? (
                <button className="suspend-btn"><UserX size={16}/> Suspend Driver</button>
              ) : (
                <button className="activate-btn"><UserCheck size={16}/> Activate Driver</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
