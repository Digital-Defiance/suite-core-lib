import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { AccountStatus } from '../enumerations/account-status';
import { AccountStatusError } from './account-status';

export class AccountLockedError extends AccountStatusError {
  constructor(language?: CoreLanguageCode, statusCode = 403) {
    super(AccountStatus.AdminLock, language, statusCode);
    this.name = 'AccountLockedError';
  }
}
