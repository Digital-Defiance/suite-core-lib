import type { PlatformID } from "@digitaldefiance/ecies-lib";

/**
 * Interface for objects that track who created them.
 */
export interface IHasCreator<TID extends PlatformID> {
  /**
   * The unique identifier for the user who created the object.
   */
  createdBy: TID;
}
