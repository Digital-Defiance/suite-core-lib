import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { AccountStatus } from '../../enumerations/account-status';
import { IBackupCode } from '../backup-code';
import { IHasId } from '../has-id';
import { IHasSoftDelete } from '../has-soft-delete';
import { IHasSoftDeleter } from '../has-soft-deleter';
import { IHasTimestampOwners } from '../has-timestamp-owners';
import { IHasTimestamps } from '../has-timestamps';

/**
 * Base interface for user collection documents
 */
export interface IUserBase<
  TID extends PlatformID,
  TDate extends Date | string,
  TLanguage extends string,
  TAccountStatus extends AccountStatus | string,
>
  extends
    IHasId<TID>,
    IHasTimestamps<TDate>,
    IHasTimestampOwners<TID>,
    IHasSoftDelete<TDate>,
    IHasSoftDeleter<TID> {
  /**
   * The username of the user
   */
  username: string;
  /**
   * The email address of the user
   */
  email: string;
  /**
   * The public key for the user
   */
  publicKey: string;
  /**
   * The currency preference of the user
   */
  currency: string;
  /**
   * The timezone of the user
   */
  timezone: string;
  /**
   * The language of the site for the user
   */
  siteLanguage: TLanguage;
  /**
   * Whether the user prefers dark mode
   */
  darkMode: boolean;
  /**
   * The date the user last logged in
   */
  lastLogin?: TDate;
  /**
   * Whether the user has verified their email address
   */
  emailVerified: boolean;
  /**
   * The status of the user's account, eg 'AdminLock'
   */
  accountStatus: TAccountStatus;
  /**
   * Reference to the mnemonic document
   */
  mnemonicId?: TID;
  /**
   * Whether the user has enabled direct challenge
   */
  directChallenge: boolean;
  /**
   * Password-wrapped ECIES private key
   */
  passwordWrappedPrivateKey?: {
    salt: string;
    iv: string;
    authTag: string;
    ciphertext: string;
    iterations: number;
  };
  /**
   * Array of backup codes to recover mnemonic/private key
   */
  backupCodes: Array<IBackupCode>;
  /**
   * Copy of the mnemonic encrypted with the user's public key
   */
  mnemonicRecovery: string;
}
