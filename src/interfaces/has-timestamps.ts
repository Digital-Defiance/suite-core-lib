/**
 * Interface for objects with creation and update timestamps.
 */
import { IHasCreation } from './has-creation';

export interface IHasTimestamps<
  D extends Date | string,
> extends IHasCreation<D> {
  createdAt: D;
  updatedAt: D;
}
