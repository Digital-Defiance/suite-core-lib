import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { AccountStatus } from '../enumerations/account-status';
import { AccountStatusError } from './account-status';

export class PendingEmailVerificationError extends AccountStatusError {
  constructor(language?: CoreLanguageCode, statusCode = 403) {
    super(AccountStatus.PendingEmailVerification, language, statusCode);
  }
}
