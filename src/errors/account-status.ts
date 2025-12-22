import { HandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { AccountStatus } from '../enumerations/account-status';
import { TranslatableSuiteError } from './translatable-suite';

export class AccountStatusError extends HandleableError {
  public readonly accountStatus: AccountStatus;

  constructor(
    accountStatus: AccountStatus,
    language?: string,
    statusCode = 403,
  ) {
    // Map AccountStatus to SuiteCoreStringKey
    const getErrorKey = (status: AccountStatus): SuiteCoreStringKey => {
      switch (status) {
        case AccountStatus.Active:
          return SuiteCoreStringKey.Error_AccountStatus_Active;
        case AccountStatus.AdminLock:
          return SuiteCoreStringKey.Error_AccountStatus_AdminLock;
        case AccountStatus.PendingEmailVerification:
          return SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification;
        default:
          return SuiteCoreStringKey.Error_AccountStatus_Active;
      }
    };

    const errorKey = getErrorKey(accountStatus);
    super(new TranslatableSuiteError(errorKey, undefined, language), {
      statusCode,
    });
    this.name = 'AccountStatusError';
    this.accountStatus = accountStatus;
  }
}
