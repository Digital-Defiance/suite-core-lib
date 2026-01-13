/**
 * Used direct login token base interface.
 * Tracks tokens that have been used for direct login to prevent replay attacks.
 */
import { IHasId } from '../has-id';

export interface IUsedDirectLoginTokenBase<I> extends IHasId<I> {
  /**
   * The user ID associated with the token
   */
  userId: I;
  /**
   * The token value that was used
   */
  token: string;
}
