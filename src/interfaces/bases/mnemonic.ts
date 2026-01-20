import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { IHasId } from '../has-id';

/**
 * Represents a mnemonic hash being stored to check for uniqueness
 */
export interface IMnemonicBase<TID extends PlatformID> extends IHasId<TID> {
  /**
   * A non-reversible HMAC of the mnemonic, used for uniqueness checks.
   */
  hmac: string;
}
