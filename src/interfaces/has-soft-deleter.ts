import type { PlatformID } from '@digitaldefiance/ecies-lib';

/**
 * Interface for objects that track who deleted them (soft delete).
 */
export interface IHasSoftDeleter<TID extends PlatformID> {
  /**
   * The unique identifier for the user who deleted the object.
   */
  deletedBy?: TID;
}
