import { describe, expect, it } from 'vitest';
import { nameOf } from './greeting';

describe('nameOf', () => {
  it('prefers the display name', () => {
    expect(nameOf({ name: 'rita', displayName: 'Rita Weber' })).toBe('Rita Weber');
  });

  it('falls back to the user name for an empty or missing display name', () => {
    expect(nameOf({ name: 'rita', displayName: '  ' })).toBe('rita');
    expect(nameOf({ name: 'rita', displayName: null })).toBe('rita');
  });
});
