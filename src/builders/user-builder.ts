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

  static create<
    TID extends PlatformID = PlatformID,
    TDate extends Date | string = Date,
    TLanguage extends string = string,
  >(): UserBuilder<TID, TDate, TLanguage> {
    return new UserBuilder<TID, TDate, TLanguage>();
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

  withSiteLanguage(siteLanguage: TLanguage): this {
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

  build(): Partial<IUserBase<TID, TDate, TLanguage, AccountStatus>> {
    return { ...this.data };
  }
}
