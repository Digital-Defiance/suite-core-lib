/**
 * Interface for objects with an update timestamp.
 */
export interface IHasUpdates<TDate extends Date | number | string> {
  updatedAt: TDate;
}
