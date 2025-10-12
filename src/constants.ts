import { Role } from './enumerations/role';
import { IBackupCodeConstants } from './interfaces';
import { IConstants } from './interfaces/constants';

export const BACKUP_CODES: IBackupCodeConstants = Object.freeze({
  /**
   * How many backup codes to generate for users
   */
  Count: 10 as const,
  NormalizedHexRegex: /^[a-z0-9]{32}$/, // exactly 32 lowercase alphanumeric chars
  DisplayRegex: /^([a-z0-9]{4}-){7}[a-z0-9]{4}$/, // xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx
} as const);

export const createConstants: (
  siteDomain: string,
  overrides?: Partial<IConstants>,
) => IConstants = (siteDomain: string, overrides?: Partial<IConstants>) => {
  const result = {
    /**
     * Default duration in seconds for which a mnemonic is kept in memory
     */
    DefaultExpireMemoryMnemonicSeconds: 300 as const, // 5 minutes
    /**
     * Default duration in seconds for which a wallet is kept in memory
     */
    DefaultExpireMemoryWalletSeconds: 300 as const, // 5 minutes

    /**
     * Duration in milliseconds for which a login challenge is valid.
     */
    LoginChallengeExpiration: 60000 as const, // 60 seconds

    /**
     * The expected length of a direct login challenge in bytes
     */
    DirectLoginChallengeLength: 104 as const,

    /**
     * Backup code system configuration
     */
    BACKUP_CODES: BACKUP_CODES,

    /**
     * Duration in milliseconds for which an email token is valid.
     */
    EmailTokenExpiration: 86400000 as const, // 24 * 60 * 60 * 1000
    /**
     * Length in bytes of the email token generated (is represented as a hex string of twice as many)
     */
    EmailTokenLength: 32 as const,
    /**
     * Number of rounds for bcrypt hashing. Higher values increase security but also consume more CPU resources.
     */
    BcryptRounds: 10 as const,
    /**
     * The username of the administrator user.
     */
    AdministratorUser: 'admin' as const,
    /**
     * The name of the administrator role.
     */
    AdministratorRole: Role.Admin as const,
    /**
     * The email of the administrator user/admin contact
     */
    AdministratorEmail: `admin@${siteDomain}` as const,
    /**
     * The name of the member role.
     */
    MemberRole: Role.Member as const,
    /**
     * The email of the test user.
     */
    MemberEmail: `test@${siteDomain}` as const,
    /**
     * The username of the test user.
     */
    MemberUser: 'test' as const,
    /**
     * The name of the system role.
     */
    SystemRole: Role.System as const,
    /**
     * The username of the system user.
     */
    SystemUser: 'system' as const,
    /**
     * The email of the system user.
     */
    SystemEmail: `system@${siteDomain}` as const,
    /**
     * Minimum username length
     */
    UsernameMinLength: 3 as const,
    /**
     * Maximum username length
     */
    UsernameMaxLength: 30 as const,
    /**
     * The regular expression for valid usernames.
     */
    UsernameRegex: /^[A-Za-z0-9]{3,30}$/,
    /**
     * Minimum password length
     */
    PasswordMinLength: 8 as const,
    /**
     * The regular expression for valid passwords.
     */
    PasswordRegex:
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
    /**
     * The regular expression for valid mnemonic phrases.
     * BIP39 - supports 12, 15, 18, 21, or 24 word mnemonics
     */
    MnemonicRegex:
      /^(?:\w+\s){11}\w+$|^(?:\w+\s){14}\w+$|^(?:\w+\s){17}\w+$|^(?:\w+\s){20}\w+$|^(?:\w+\s){23}\w+$/i,
    /**
     * Matches a 64-character hexadecimal string (SHA-256).
     */
    HmacRegex: /^[a-f0-9]{64}$/,
    /**
     * The amount of time in milliseconds after which an email token can be resent.
     */
    EmailTokenResendInterval: 300000 as const, // 5 * 60 * 1000 = 5 minutes
    /**
     * The interval in minutes after which an email token can be resent.
     */
    EmailTokenResendIntervalMinutes: 5 as const,
    ...(overrides ?? {}),
  } as const;

  return Object.freeze(result);
};

export const Constants = createConstants('localhost');
