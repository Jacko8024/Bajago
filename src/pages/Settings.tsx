import React from 'react';
import { Save } from 'lucide-react';

export function Settings() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="card" style={{ maxWidth: '600px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '24px', fontWeight: 'bold' }}>Platform Settings</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="input-group">
            <label>Platform Commission (%)</label>
            <input type="number" defaultValue="15" />
          </div>
          
          <div className="input-group">
            <label>Driver Payout Threshold (ETB)</label>
            <input type="number" defaultValue="1000" />
          </div>

          <div className="input-group">
            <label>Admin Support Phone</label>
            <input type="text" defaultValue="+251911000000" />
          </div>

          <button style={{ 
            background: 'var(--brand-primary)', color: 'white', padding: '12px', 
            borderRadius: '6px', fontWeight: 'bold', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', gap: '8px', marginTop: '16px' 
          }}>
            <Save size={18} /> Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
