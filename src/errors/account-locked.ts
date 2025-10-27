import { AccountStatus } from '../enumerations/account-status';
import { AccountStatusError } from './account-status';

export class AccountLockedError extends AccountStatusError {
  constructor(language?: string, statusCode = 403) {
    super(AccountStatus.AdminLock, language, statusCode);
    this.name = 'AccountLockedError';
  }
}
