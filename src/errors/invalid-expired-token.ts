import {
  CoreLanguageCode,
  HandleableErrorOptions,
} from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class InvalidExpiredTokenError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode, options?: HandleableErrorOptions) {
    super(
      SuiteCoreStringKey.ForgotPassword_InvalidToken,
      undefined,
      language,
      options,
    );
    this.name = 'InvalidExpiredTokenError';
  }
}
