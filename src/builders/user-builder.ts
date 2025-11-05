/**
 * Fluent builder for creating user objects
 */

import { AccountStatus } from '../enumerations/account-status';
import { IUserBase } from '../interfaces/bases/user';

/**
 * Builder for creating user objects with fluent API
 */
export class UserBuilder<I = string, D extends Date | string = Date, S extends string = string> {
  private data: Partial<IUserBase<I, D, S, AccountStatus>> = {
    emailVerified: false,
    accountStatus: AccountStatus.Active,
    directChallenge: false,
    backupCodes: [],
    timezone: 'UTC',
  };

  static create<I = string, D extends Date | string = Date, S extends string = string>(): UserBuilder<I, D, S> {
    return new UserBuilder<I, D, S>();
  }

  withUsername(username: string): this {
    this.data.username = username;
    return this;
  }

  withEmail(email: string): this {
    this.data.email = email;
    return this;
  }

  withPublicKey(publicKey: string): this {
    this.data.publicKey = publicKey;
    return this;
  }

  withTimezone(timezone: string): this {
    this.data.timezone = timezone;
    return this;
  }

  withSiteLanguage(siteLanguage: S): this {
    this.data.siteLanguage = siteLanguage;
    return this;
  }

  withEmailVerified(verified: boolean): this {
    this.data.emailVerified = verified;
    return this;
  }

  withAccountStatus(status: AccountStatus): this {
    this.data.accountStatus = status;
    return this;
  }

  withDirectChallenge(enabled: boolean): this {
    this.data.directChallenge = enabled;
    return this;
  }

  withMnemonicRecovery(recovery: string): this {
    this.data.mnemonicRecovery = recovery;
    return this;
  }

  build(): Partial<IUserBase<I, D, S, AccountStatus>> {
    return { ...this.data };
  }
}
