import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import './Overview.css';

const ridesData = [
  { hour: '06:00', rides: 12 },
  { hour: '08:00', rides: 45 },
  { hour: '10:00', rides: 30 },
  { hour: '12:00', rides: 55 },
  { hour: '14:00', rides: 40 },
  { hour: '16:00', rides: 65 },
  { hour: '18:00', rides: 80 },
  { hour: '20:00', rides: 35 },
];

const paymentData = [
  { name: 'Cash', value: 4500 },
  { name: 'Telebirr', value: 8500 },
];
const COLORS = ['#F5A623', '#1565C0'];

const recentRides = [
  { id: 'R-1042', time: '10:45 AM', passenger: 'Dawit M.', driver: 'Abebe B.', route: 'Piassa → Hospital', fare: 150, type: 'Bajaj', payment: 'Cash', status: 'Active' },
  { id: 'R-1041', time: '10:30 AM', passenger: 'Sara Y.', driver: 'Kaleb S.', route: 'Bus Station → Kebele 04', fare: 200, type: 'Taxi', payment: 'Telebirr', status: 'Completed' },
  { id: 'R-1040', time: '10:15 AM', passenger: 'Ermias T.', driver: 'Solomon K.', route: 'University → Market', fare: 120, type: 'Bajaj', payment: 'Telebirr', status: 'Completed' },
];

export function Overview() {
  return (
    <div className="overview-page">
      {/* Metrics Row */}
      <div className="metrics-row">
        <div className="metric-card" style={{ borderLeftColor: 'var(--brand-primary)' }}>
          <div className="metric-value">342</div>
          <div className="metric-label">Rides Today</div>
        </div>
        <div className="metric-card" style={{ borderLeftColor: 'var(--brand-secondary)' }}>
          <div className="metric-value">48</div>
          <div className="metric-label">Active Drivers</div>
        </div>
        <div className="metric-card" style={{ borderLeftColor: 'var(--info)' }}>
          <div className="metric-value">13,000 <span style={{ fontSize: '16px' }}>ETB</span></div>
          <div className="metric-label">Revenue Today</div>
        </div>
        <div className="metric-card" style={{ borderLeftColor: 'var(--error)' }}>
          <div className="metric-value">2</div>
          <div className="metric-label">Open Issues</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        <div className="card chart-card flex-2">
          <h3 className="card-title">Rides Today by Hour</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ridesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEDEA" />
                <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--text-muted)' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Line type="monotone" dataKey="rides" stroke="var(--brand-primary)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card chart-card flex-1">
          <h3 className="card-title">Payment Methods Today</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {paymentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} ETB`} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Rides Table */}
      <div className="card table-card">
        <div className="table-header">
          <h3 className="card-title">Recent Rides</h3>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Ride ID</th>
                <th>Time</th>
                <th>Passenger</th>
                <th>Driver</th>
                <th>Route</th>
                <th>Vehicle</th>
                <th>Fare</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRides.map((ride) => (
                <tr key={ride.id}>
                  <td className="id-cell">{ride.id}</td>
                  <td>{ride.time}</td>
                  <td>{ride.passenger}</td>
                  <td>{ride.driver}</td>
                  <td>{ride.route}</td>
                  <td>
                    <span className={`vehicle-badge ${ride.type.toLowerCase()}`}>{ride.type}</span>
                  </td>
                  <td className="font-medium">{ride.fare} ETB</td>
                  <td>{ride.payment}</td>
                  <td>
                    <span className={`status-badge ${ride.status.toLowerCase()}`}>{ride.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
