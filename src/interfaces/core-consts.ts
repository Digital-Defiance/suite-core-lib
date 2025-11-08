import { IBackupCodeConstants } from './backup-code-consts';

export interface ICoreConstants {
  /**
   * Backup code related constants
   */
  BACKUP_CODES: IBackupCodeConstants;
  /**
   * Duration in milliseconds for a login challenge
   */
  LoginChallengeExpiration: number;
  /**
   * Default duration in seconds for which mnemonics are kept in memory
   */
  DefaultExpireMemoryMnemonicSeconds: number;
  /**
   * Default duration in seconds for which wallets are kept in memory
   */
  DefaultExpireMemoryWalletSeconds: number;
  /**
   * The expected length of a direct login challenge in bytes
   */
  DirectLoginChallengeLength: number;
  /**
   * Duration in milliseconds for which an email token is valid.
   */
  EmailTokenExpiration: number;
  /**
   * Length in bytes of the email token generated (is represented as a hex string of twice as many)
   */
  EmailTokenLength: number;
  /**
   * Number of rounds for bcrypt hashing. Higher values increase security but also consume more CPU resources.
   */
  BcryptRounds: number;
  /**
   * The username of the administrator user.
   */
  AdministratorUser: string;
  /**
   * The name of the administrator role.
   */
  AdministratorRole: string;
  /**
   * The name of the member role.
   */
  MemberRole: string;
  /**
   * The username of the test user.
   */
  MemberUser: string;
  /**
   * The name of the system role.
   */
  SystemRole: string;
  /**
   * The username of the system user.
   */
  SystemUser: string;
  /**
   * Minimum username length
   */
  UsernameMinLength: number;
  /**
   * Maximum username length
   */
  UsernameMaxLength: number;
  /**
   * The regular expression for valid usernames.
   */
  UsernameRegex: RegExp;
  /**
   * Minimum password length
   */
  PasswordMinLength: number;
  /**
   * The regular expression for valid passwords.
   */
  PasswordRegex: RegExp;
  /**
   * The regular expression for valid JWT tokens.
   */
  JwtSecretRegex: RegExp;
  /**
   * The regular expression for valid mnemonic phrases.
   * BIP39
   */
  MnemonicRegex: RegExp;
  /**
   * The regular expression for valid HMAC keys.
   */
  MnemonicHmacRegex: RegExp;
  /**
   * The regular expression for valid encryption keys.
   */
  MnemonicEncryptionKeyRegex: RegExp;
  /**
   * The amount of time in milliseconds after which an email token can be resent.
   */
  EmailTokenResendInterval: number;
  /**
   * The interval in minutes after which an email token can be resent.
   */
  EmailTokenResendIntervalMinutes: number;
  /**
   * The name of the site.
   */
  Site: string;
  /**
   * The tagline of the site.
   */
  SiteTagline: string;
  /**
   * The description of the site.
   */
  SiteDescription: string;
}
