import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { EmailTokenType } from '../../enumerations/email-token-type';
import { IHasId } from '../has-id';
import { IHasTimestamps } from '../has-timestamps';

/**
 * Base interface for email token collection documents
 */
export interface IEmailTokenBase<
  TID extends PlatformID,
  TDate extends Date | string,
  TEmailTokenType extends EmailTokenType | string,
>
  extends IHasId<TID>, IHasTimestamps<TDate> {
  /**
   * The user ID associated with the token
   */
  userId: TID;
  /**
   * The type of token
   */
  type: TEmailTokenType;
  /**
   * The token value
   */
  token: string;
  /**
   * The email address the token was sent to
   */
  email: string;
  /**
   * The date the token was last sent
   */
  lastSent?: TDate;
  /**
   * The date the token expires
   */
  expiresAt: TDate;
}
