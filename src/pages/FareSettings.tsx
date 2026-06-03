import { useState } from 'react';
import { Info, RotateCcw } from 'lucide-react';
import './FareSettings.css';

// Local fare constants
const initialBajaj = { baseFare: 25, perKm: 8, perMinute: 0.5, minimumFare: 50 };
const initialTaxi = { baseFare: 35, perKm: 12, perMinute: 0.75, minimumFare: 75 };

export function FareSettings() {
  const [bajajFares, setBajajFares] = useState({ ...initialBajaj });
  const [taxiFares, setTaxiFares] = useState({ ...initialTaxi });

  // Example simulation based on shared logic
  const simDistance = 3.5; // km
  const simDuration = 12; // mins

  const handleReset = (type: 'bajaj' | 'taxi') => {
    if (type === 'bajaj') setBajajFares({ ...initialBajaj });
    if (type === 'taxi') setTaxiFares({ ...initialTaxi });
  };

  const handleSave = (type: 'bajaj' | 'taxi') => {
    alert(`Saved new ${type} fare configuration to database!`);
  };

  const bajajLocalSimFare = Math.max(
    bajajFares.baseFare + (simDistance * bajajFares.perKm) + (simDuration * bajajFares.perMinute),
    bajajFares.minimumFare
  );

  const taxiLocalSimFare = Math.max(
    taxiFares.baseFare + (simDistance * taxiFares.perKm) + (simDuration * taxiFares.perMinute),
    taxiFares.minimumFare
  );

  return (
    <div className="fare-settings-page">
      <div className="info-banner">
        <Info size={20} color="var(--warning)" />
        <p>Fare changes apply to all new rides immediately. Active rides use the fare locked at booking time.</p>
      </div>

      <div className="fare-cards-container">
        {/* Bajaj Card */}
        <div className="card fare-card">
          <div className="fare-card-header">
            <h3>Bajaj Fare Configuration</h3>
            <span className="vehicle-badge bajaj">Bajaj</span>
          </div>

          <div className="fare-inputs">
            <div className="input-group">
              <label>Base Fare (ETB)</label>
              <input type="number" value={bajajFares.baseFare} onChange={e => setBajajFares({...bajajFares, baseFare: Number(e.target.value)})} />
            </div>
            <div className="input-group">
              <label>Per Kilometer (ETB)</label>
              <input type="number" value={bajajFares.perKm} onChange={e => setBajajFares({...bajajFares, perKm: Number(e.target.value)})} />
            </div>
            <div className="input-group">
              <label>Per Minute (ETB)</label>
              <input type="number" value={bajajFares.perMinute} onChange={e => setBajajFares({...bajajFares, perMinute: Number(e.target.value)})} />
            </div>
            <div className="input-group">
              <label>Minimum Fare (ETB)</label>
              <input type="number" value={bajajFares.minimumFare} onChange={e => setBajajFares({...bajajFares, minimumFare: Number(e.target.value)})} />
            </div>
          </div>

          <div className="fare-preview">
            <p className="preview-label">Live Preview Simulation</p>
            <p className="preview-calc">Example: 3.5 km, 12 min ride</p>
            <p className="preview-result">{bajajLocalSimFare.toFixed(2)} ETB</p>
          </div>

          <button className="save-btn" onClick={() => handleSave('bajaj')}>Save Changes</button>
          <button className="reset-link" onClick={() => handleReset('bajaj')}><RotateCcw size={14} /> Reset to Default</button>
          <p className="last-updated">Last updated: Today at 08:30 AM</p>
        </div>

        {/* Taxi Card */}
        <div className="card fare-card">
          <div className="fare-card-header">
            <h3>Taxi Fare Configuration</h3>
            <span className="vehicle-badge taxi">Taxi</span>
          </div>

          <div className="fare-inputs">
            <div className="input-group">
              <label>Base Fare (ETB)</label>
              <input type="number" value={taxiFares.baseFare} onChange={e => setTaxiFares({...taxiFares, baseFare: Number(e.target.value)})} />
            </div>
            <div className="input-group">
              <label>Per Kilometer (ETB)</label>
              <input type="number" value={taxiFares.perKm} onChange={e => setTaxiFares({...taxiFares, perKm: Number(e.target.value)})} />
            </div>
            <div className="input-group">
              <label>Per Minute (ETB)</label>
              <input type="number" value={taxiFares.perMinute} onChange={e => setTaxiFares({...taxiFares, perMinute: Number(e.target.value)})} />
            </div>
            <div className="input-group">
              <label>Minimum Fare (ETB)</label>
              <input type="number" value={taxiFares.minimumFare} onChange={e => setTaxiFares({...taxiFares, minimumFare: Number(e.target.value)})} />
            </div>
          </div>

          <div className="fare-preview">
            <p className="preview-label">Live Preview Simulation</p>
            <p className="preview-calc">Example: 3.5 km, 12 min ride</p>
            <p className="preview-result">{taxiLocalSimFare.toFixed(2)} ETB</p>
          </div>

          <button className="save-btn" onClick={() => handleSave('taxi')}>Save Changes</button>
          <button className="reset-link" onClick={() => handleReset('taxi')}><RotateCcw size={14} /> Reset to Default</button>
          <p className="last-updated">Last updated: Yesterday at 15:45 PM</p>
        </div>
      </div>
    </div>
  );
}
