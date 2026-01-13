/**
 * Error thrown when an email token has expired.
 */
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailTokenExpiredError extends TranslatableSuiteHandleableError {
  constructor(language?: string, statusCode = 422) {
    super(SuiteCoreStringKey.Validation_TokenExpired, undefined, language, {
      statusCode,
    });
    this.name = 'EmailTokenExpiredError';
  }
}
