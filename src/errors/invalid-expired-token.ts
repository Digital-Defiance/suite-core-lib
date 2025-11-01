import { HandleableErrorOptions } from '@digitaldefiance/i18n-lib';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';
import { SuiteCoreStringKey } from '../enumerations';
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';

export class InvalidExpiredTokenError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode, options?: HandleableErrorOptions) {
    super(SuiteCoreStringKey.ForgotPassword_InvalidToken, undefined, language, options);
    this.name = 'InvalidExpiredTokenError';
  }
}
