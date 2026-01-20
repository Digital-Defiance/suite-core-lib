import type { PlatformID } from '@digitaldefiance/ecies-lib';

/**
 * Interface for objects with a unique identifier.
 */
export interface IHasId<TID extends PlatformID> {
  _id: TID;
}
