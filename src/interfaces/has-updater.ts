/**
 * Interface for objects that track who updated them.
 */
export interface IHasUpdater<I> {
  /**
   * The unique identifier for the user who updated the object.
   */
  updatedBy: I;
}
