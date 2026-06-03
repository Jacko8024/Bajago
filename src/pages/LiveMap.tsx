import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './LiveMap.css';

// Fix Leaflet's default icon path issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom dot icons for drivers
const createDotIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-dot-icon',
    html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

const iconAvailable = createDotIcon('#1B6B3A'); // Green
const iconOnRide = createDotIcon('#F5A623'); // Amber
const iconOffline = createDotIcon('#9E9E9B'); // Gray

const ASSOSA_CENTER = [10.0667, 34.5333] as [number, number];

const mockDrivers = [
  { id: 1, name: 'Abebe B.', status: 'available', location: [10.0660, 34.5310] as [number, number], vehicle: 'Bajaj' },
  { id: 2, name: 'Dawit M.', status: 'on_ride', location: [10.0680, 34.5350] as [number, number], vehicle: 'Taxi' },
  { id: 3, name: 'Kaleb S.', status: 'offline', location: [10.0640, 34.5380] as [number, number], vehicle: 'Bajaj' },
];

const mockRoute = [
  [10.0680, 34.5350],
  [10.0690, 34.5370],
  [10.0710, 34.5400],
] as [number, number][];

export function LiveMap() {
  return (
    <div className="live-map-container">
      <div className="map-legend">
        <h4>Live Status</h4>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: '#1B6B3A' }}></div>
          <span>Available (1)</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: '#F5A623' }}></div>
          <span>On Ride (1)</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: '#9E9E9B' }}></div>
          <span>Offline (1)</span>
        </div>
      </div>

      <MapContainer center={ASSOSA_CENTER} zoom={14} style={{ height: '100%', width: '100%', zIndex: 1 }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mockDrivers.map((driver) => {
          let icon = iconOffline;
          if (driver.status === 'available') icon = iconAvailable;
          if (driver.status === 'on_ride') icon = iconOnRide;

          return (
            <Marker key={driver.id} position={driver.location} icon={icon}>
              <Popup className="driver-popup">
                <strong>{driver.name}</strong><br/>
                <span style={{ color: 'var(--text-muted)' }}>{driver.vehicle} • {driver.status.replace('_', ' ')}</span>
              </Popup>
            </Marker>
          );
        })}

        <Polyline positions={mockRoute} color="var(--brand-primary)" dashArray="5, 10" weight={4} />
      </MapContainer>
    </div>
  );
}
