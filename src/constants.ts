import { Role } from './enumerations/role';
import { IBackupCodeConstants, ICoreConstants } from './interfaces';
import { IConstants } from './interfaces/constants';

export const BACKUP_CODES: IBackupCodeConstants = Object.freeze({
  /**
   * How many backup codes to generate for users
   */
  Count: 10 as const,
  NormalizedHexRegex: /^[a-z0-9]{32}$/, // exactly 32 lowercase alphanumeric chars
  DisplayRegex: /^([a-z0-9]{4}-){7}[a-z0-9]{4}$/, // xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx
} as const);

export const CORE: ICoreConstants = Object.freeze({
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
   * The name of the member role.
   */
  MemberRole: Role.Member as const,
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
   * The regular expression for valid JWT tokens.
   */
  JwtSecretRegex: /^[0-9a-f]{64}$/i,
  /**
   * The regular expression for valid mnemonic phrases.
   * BIP39 - supports 12, 15, 18, 21, or 24 word mnemonics
   */
  MnemonicRegex:
    /^(?:\w+\s){11}\w+$|^(?:\w+\s){14}\w+$|^(?:\w+\s){17}\w+$|^(?:\w+\s){20}\w+$|^(?:\w+\s){23}\w+$/i,
  /**
   * Matches a 64-character hexadecimal string (SHA-256).
   */
  MnemonicHmacRegex: /^[a-f0-9]{64}$/,
  /**
   * The regular expression for valid encryption keys.
   */
  MnemonicEncryptionKeyRegex: /^[a-f0-9]{64}$/,
  /**
   * The amount of time in milliseconds after which an email token can be resent.
   */
  EmailTokenResendInterval: 300000 as const, // 5 * 60 * 1000 = 5 minutes
  /**
   * The interval in minutes after which an email token can be resent.
   */
  EmailTokenResendIntervalMinutes: 5 as const,
  /**
   * The site name. Overridden by specific site constants.
   */
  Site: 'New Site' as const,
  /**
   * The site tagline. Overridden by specific site constants.
   */
  SiteTagline: 'New Site Tagline' as const,
  /**
   * The site description. Overridden by specific site constants.
   */
  SiteDescription: 'Description of the new site' as const,
  /**
   * Email domain of usernames on the site. Overridden by specific site constants.
   */
  SiteEmailDomain: 'localhost' as const,
  /**
   * The hostname of the site. Overridden by specific site constants.
   */
  SiteHostname: 'localhost' as const,
} as const);

export const createConstants: (
  siteDomain: string,
  siteHostname: string,
  overrides?: Partial<IConstants>,
) => IConstants = (siteDomain: string, siteHostname: string, overrides?: Partial<IConstants>) => {
  return Object.freeze({
    ...CORE,
    /**
     * The email of the administrator user/admin contact
     */
    AdministratorEmail: `admin@${siteDomain}` as const,
    /**
     * The email of the test user.
     */
    MemberEmail: `test@${siteDomain}` as const,
    /**
     * The email of the system user.
     */
    SystemEmail: `system@${siteDomain}` as const,
    /**
     * The email domain of usernames on the site.
     */
    SiteEmailDomain: siteDomain,
    /**
     * The hostname of the site.
     */
    SiteHostname: siteHostname,
    /**
     * The color used to indicate success states.
     */
    success_color: '#4CAF50',
    /**
     * The color used to indicate failure states.
     */
    failure_color: '#F44336',
    /**
     * The light variant of the primary text color.
     */
    primary_text_light: '#ffffff',
    /**
     * The dark variant of the primary text color.
     */
    primary_text_dark: '#000000',
    /**
     * The light variant of the secondary text color.
     */
    secondary_text_light: '#ffffff',
    /**
     * The dark variant of the secondary text color.
     */
    secondary_text_dark: '#000000',
    ...(overrides ?? {}),
  } as const);
};

export const Constants = createConstants('localhost', 'localhost');
