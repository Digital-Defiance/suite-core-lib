/**
 * Interface for objects with soft delete capability (deletion timestamp).
 */
export interface IHasSoftDelete<TDate extends Date | string> {
  /**
   * The date the object was deleted.
   */
  deletedAt?: TDate;
}
