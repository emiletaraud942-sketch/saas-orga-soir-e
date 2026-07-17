import type { CSSProperties } from 'react';

export function chipStyle(active: boolean): CSSProperties {
  return active
    ? {
        flex: 1,
        padding: '11px 8px',
        borderRadius: 12,
        border: '1px solid rgba(140,120,255,.6)',
        background: 'linear-gradient(135deg,#6c5ce7,#4b3fb0)',
        color: '#f5f3ff',
        fontSize: 13,
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
      }
    : {
        flex: 1,
        padding: '11px 8px',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,.1)',
        background: '#14121f',
        color: '#a79fc2',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
      };
}
