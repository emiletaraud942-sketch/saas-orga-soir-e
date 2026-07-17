import type { CSSProperties } from 'react';

export function chipStyle(active: boolean): CSSProperties {
  return active
    ? {
        flex: 1,
        padding: '11px 8px',
        borderRadius: 999,
        border: 'none',
        background: '#c67139',
        color: '#f5ead8',
        fontSize: 13,
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'Figtree, sans-serif',
      }
    : {
        flex: 1,
        padding: '11px 8px',
        borderRadius: 999,
        border: '1px solid color-mix(in srgb,#201e1d 16%,transparent)',
        background: '#f9f4ed',
        color: '#474238',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'Figtree, sans-serif',
      };
}
