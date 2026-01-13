/**
 * Interface for objects with a creation timestamp.
 */
export interface IHasCreation<D extends Date | string> {
  /**
   * The date the object was created.
   */
  createdAt: D;
}
