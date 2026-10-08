import type { AppContext } from '@pithyx/sdk';

/** The name to greet: the display name when the user has one, else the user name. */
export function nameOf(user: Pick<AppContext['user'], 'name' | 'displayName'>): string {
  const display = user.displayName?.trim();
  return display !== undefined && display !== '' ? display : user.name;
}
