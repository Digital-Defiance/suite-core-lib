/**
 * Interface for objects with soft delete capability (deletion timestamp).
 */
export interface IHasSoftDelete<D extends Date | string> {
  /**
   * The date the object was deleted.
   */
  deletedAt?: D;
}
