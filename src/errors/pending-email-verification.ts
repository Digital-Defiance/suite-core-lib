import { AccountStatus } from '../enumerations/account-status';
import { AccountStatusError } from './account-status';

export class PendingEmailVerificationError extends AccountStatusError {
  constructor(language?: string, statusCode = 403) {
    super(AccountStatus.PendingEmailVerification, language, statusCode);
  }
}
