/**
 * Interface for objects with creation and update timestamps.
 */
import { IHasCreation } from './has-creation';

export interface IHasTimestamps<
  TDate extends Date | number | string,
> extends IHasCreation<TDate> {
  createdAt: TDate;
  updatedAt: TDate;
}
