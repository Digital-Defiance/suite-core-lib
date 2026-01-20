/**
 * Interface for objects with a creation timestamp.
 */
export interface IHasCreation<TDate extends Date | string> {
  /**
   * The date the object was created.
   */
  createdAt: TDate;
}
