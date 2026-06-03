import React from 'react';

export const PlaceholderPage = ({ title }: { title: string }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column', gap: '16px' }}>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{title} Page</h2>
    <p style={{ color: 'var(--text-muted)' }}>This page is currently under construction for Sprint 4.</p>
  </div>
);
