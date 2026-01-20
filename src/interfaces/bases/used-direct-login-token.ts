/**
 * Used direct login token base interface.
 * Tracks tokens that have been used for direct login to prevent replay attacks.
 */
import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { IHasId } from '../has-id';

export interface IUsedDirectLoginTokenBase<TID extends PlatformID> extends IHasId<TID> {
  /**
   * The user ID associated with the token
   */
  userId: TID;
  /**
   * The token value that was used
   */
  token: string;
}
