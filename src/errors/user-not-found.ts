import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class UserNotFoundError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode, statusCode = 404) {
    super(
      SuiteCoreStringKey.Auth_UserNotFound,
      undefined,
      language,
      { statusCode },
    );
    this.name = 'UserNotFoundError';
  }
}