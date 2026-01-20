import type { PlatformID } from "@digitaldefiance/ecies-lib";

/**
 * Interface for objects that track who updated them.
 */
export interface IHasUpdater<TID extends PlatformID> {
  /**
   * The unique identifier for the user who updated the object.
   */
  updatedBy: TID;
}
