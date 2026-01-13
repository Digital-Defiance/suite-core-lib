/**
 * Interface for objects with an update timestamp.
 */
export interface IHasUpdates<D extends Date | string> {
  updatedAt: D;
}
