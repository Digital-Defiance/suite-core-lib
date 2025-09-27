import { HandleableError } from '@digitaldefiance/ecies-lib';
import { CoreLanguage } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { AccountStatus } from '../enumerations/account-status';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class AccountStatusError extends HandleableError {
  public readonly accountStatus: AccountStatus;

  constructor(
    accountStatus: AccountStatus,
    language?: CoreLanguage,
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
    const message = getSuiteCoreTranslation(errorKey, undefined, language);

    super(message, { statusCode });
    this.name = 'AccountStatusError';
    this.accountStatus = accountStatus;
  }
}
