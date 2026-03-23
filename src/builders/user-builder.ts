/**
 * Fluent builder for creating user objects
 */

import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { AccountStatus } from '../enumerations/account-status';
import { IUserBase } from '../interfaces/bases/user';

/**
 * Builder for creating user objects with fluent API
 */
export class UserBuilder<
  TID extends PlatformID = PlatformID,
  TDate extends Date | string = Date,
  TLanguage extends string = string,
> {
  private data: Partial<IUserBase<TID, TDate, TLanguage, AccountStatus>> = {
    emailVerified: false,
    accountStatus: AccountStatus.Active,
    directChallenge: false,
    backupCodes: [],
    timezone: 'UTC',
  };

  /**
   * Creates a new user builder instance
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  static create<
    TID extends PlatformID = PlatformID,
    TDate extends Date | string = Date,
    TLanguage extends string = string,
  >(): UserBuilder<TID, TDate, TLanguage> {
    return new UserBuilder<TID, TDate, TLanguage>();
  }

  /**
   * Sets the username for the user
   * @param username
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withUsername(username: string): this {
    this.data.username = username;
    return this;
  }

  /**
   * Sets the email for the user
   * @param email
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withEmail(email: string): this {
    this.data.email = email;
    return this;
  }

  /**
   * Sets the display name for the user
   * @param displayName
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withDisplayName(displayName: string): this {
    this.data.displayName = displayName;
    return this;
  }

  /**
   * Sets the public key for the user
   * @param publicKey
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withPublicKey(publicKey: string): this {
    this.data.publicKey = publicKey;
    return this;
  }

  /**
   * Sets the timezone for the user
   * @param timezone
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withTimezone(timezone: string): this {
    this.data.timezone = timezone;
    return this;
  }

  /**
   * Sets the site language for the user
   * @param siteLanguage
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withSiteLanguage(siteLanguage: TLanguage): this {
    this.data.siteLanguage = siteLanguage;
    return this;
  }

  /**
   * Sets whether the user's email is verified
   * @param verified
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withEmailVerified(verified: boolean): this {
    this.data.emailVerified = verified;
    return this;
  }

  /**
   * Sets the account status for the user
   * @param status
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withAccountStatus(status: AccountStatus): this {
    this.data.accountStatus = status;
    return this;
  }

  /**
   * Sets whether direct challenge is enabled for the user
   * @param enabled
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withDirectChallenge(enabled: boolean): this {
    this.data.directChallenge = enabled;
    return this;
  }

  /**
   * Sets the mnemonic recovery for the user
   * @param recovery
   * @returns UserBuilder<TID, TDate, TLanguage>
   */
  withMnemonicRecovery(recovery: string): this {
    this.data.mnemonicRecovery = recovery;
    return this;
  }

  /**
   * Builds the user object
   * @returns IUserBase<TID, TDate, TLanguage, AccountStatus>
   */
  build(): Partial<IUserBase<TID, TDate, TLanguage, AccountStatus>> {
    return { ...this.data };
  }
}
