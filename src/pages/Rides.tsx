import React from 'react';
import { Search, Filter, Download } from 'lucide-react';
import './Rides.css';

const MOCK_RIDES = [
  { id: 'R-1042', date: '2023-10-25 10:45 AM', passenger: 'Dawit M.', driver: 'Abebe B.', route: 'Piassa → Hospital', distance: '3.2', duration: '14', fare: 150, type: 'Bajaj', payment: 'Cash', status: 'Active' },
  { id: 'R-1041', date: '2023-10-25 10:30 AM', passenger: 'Sara Y.', driver: 'Kaleb S.', route: 'Bus Station → Kebele 04', distance: '4.5', duration: '22', fare: 200, type: 'Taxi', payment: 'Telebirr', status: 'Completed' },
  { id: 'R-1040', date: '2023-10-25 10:15 AM', passenger: 'Ermias T.', driver: 'Solomon K.', route: 'University → Market', distance: '2.1', duration: '8', fare: 120, type: 'Bajaj', payment: 'Telebirr', status: 'Completed' },
  { id: 'R-1039', date: '2023-10-25 09:50 AM', passenger: 'Hanna A.', driver: 'Tigist Z.', route: 'Airport → Hotel', distance: '5.8', duration: '28', fare: 250, type: 'Taxi', payment: 'Cash', status: 'Cancelled' },
  { id: 'R-1038', date: '2023-10-25 09:30 AM', passenger: 'Yonas G.', driver: 'Abebe B.', route: 'Kebele 01 → Stadium', distance: '2.8', duration: '12', fare: 130, type: 'Bajaj', payment: 'Cash', status: 'Completed' },
];

export function Rides() {
  return (
    <div className="rides-page">
      <div className="filters-bar card">
        <div className="search-box">
          <Search size={16} color="var(--text-muted)" />
          <input type="text" placeholder="Search by passenger or driver..." style={{ width: '250px' }} />
        </div>
        
        <div className="filter-dropdowns">
          <button className="filter-btn">
            <Filter size={16} /> Date: Today
          </button>
          <button className="filter-btn">
            <Filter size={16} /> Vehicle: All
          </button>
          <button className="filter-btn">
            <Filter size={16} /> Status: All
          </button>
        </div>

        <button className="export-btn">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="card table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Ride ID</th>
              <th>Date & Time</th>
              <th>Passenger</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Dist / Dur</th>
              <th>Fare</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_RIDES.map(ride => (
              <tr key={ride.id}>
                <td className="id-cell">{ride.id}</td>
                <td className="date-cell">{ride.date}</td>
                <td>{ride.passenger}</td>
                <td>{ride.driver}</td>
                <td><span className="route-text" title={ride.route}>{ride.route}</span></td>
                <td className="metrics-cell">{ride.distance} km<br/><span className="duration-text">{ride.duration} min</span></td>
                <td className="font-medium">{ride.fare} ETB</td>
                <td>{ride.payment}</td>
                <td><span className={`status-badge ${ride.status.toLowerCase()}`}>{ride.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
