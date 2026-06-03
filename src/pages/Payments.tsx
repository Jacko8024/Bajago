import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Payments.css';

const revenueData = [
  { day: 'Mon', Cash: 4000, Telebirr: 2400 },
  { day: 'Tue', Cash: 3000, Telebirr: 1398 },
  { day: 'Wed', Cash: 2000, Telebirr: 9800 },
  { day: 'Thu', Cash: 2780, Telebirr: 3908 },
  { day: 'Fri', Cash: 1890, Telebirr: 4800 },
  { day: 'Sat', Cash: 2390, Telebirr: 3800 },
  { day: 'Sun', Cash: 3490, Telebirr: 4300 },
];

const mockTransactions = [
  { id: 'TXN-001', date: '2023-10-25 10:45 AM', rideId: 'R-1042', driver: 'Abebe B.', amount: 150, method: 'Cash', status: 'Completed' },
  { id: 'TXN-002', date: '2023-10-25 10:30 AM', rideId: 'R-1041', driver: 'Kaleb S.', amount: 200, method: 'Telebirr', status: 'Completed' },
  { id: 'TXN-003', date: '2023-10-25 10:15 AM', rideId: 'R-1040', driver: 'Solomon K.', amount: 120, method: 'Telebirr', status: 'Completed' },
  { id: 'TXN-004', date: '2023-10-25 09:30 AM', rideId: 'R-1038', driver: 'Abebe B.', amount: 130, method: 'Cash', status: 'Completed' },
];

export function Payments() {
  return (
    <div className="payments-page">
      {/* Summary Cards */}
      <div className="summary-row">
        <div className="card summary-card">
          <p className="summary-label">Total Revenue (This Month)</p>
          <p className="summary-value" style={{ color: 'var(--brand-primary)' }}>124,500 <span className="currency">ETB</span></p>
        </div>
        <div className="card summary-card">
          <p className="summary-label">Cash Collected</p>
          <p className="summary-value" style={{ color: 'var(--brand-secondary)' }}>45,200 <span className="currency">ETB</span></p>
        </div>
        <div className="card summary-card">
          <p className="summary-label">Telebirr Received</p>
          <p className="summary-value" style={{ color: 'var(--info)' }}>79,300 <span className="currency">ETB</span></p>
        </div>
      </div>

      {/* Chart */}
      <div className="card chart-card">
        <h3 className="card-title">Revenue Last 7 Days</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDEDEA" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              <Bar dataKey="Cash" fill="var(--brand-secondary)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Telebirr" fill="var(--info)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="card table-card">
        <div className="table-header">
          <h3 className="card-title">Recent Transactions</h3>
        </div>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Ride ID</th>
                <th>Driver</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map(txn => (
                <tr key={txn.id}>
                  <td className="date-cell">{txn.date}</td>
                  <td className="id-cell">{txn.rideId}</td>
                  <td>{txn.driver}</td>
                  <td className="font-medium">{txn.amount} ETB</td>
                  <td>
                    <span className={`method-badge ${txn.method.toLowerCase()}`}>{txn.method}</span>
                  </td>
                  <td><span className={`status-badge completed`}>{txn.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
