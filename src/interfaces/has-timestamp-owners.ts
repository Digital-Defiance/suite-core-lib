/**
 * Interface combining creator and updater tracking.
 */
import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { IHasCreator } from './has-creator';
import { IHasUpdater } from './has-updater';

export interface IHasTimestampOwners<TID extends PlatformID>
  extends IHasCreator<TID>, IHasUpdater<TID> {}
