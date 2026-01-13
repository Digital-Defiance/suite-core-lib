/**
 * Error thrown when the system role cannot be found in the system.
 */
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class SystemRoleNotFoundError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.SystemRoleNotFound, undefined, language, {
      statusCode: 500,
    });
    this.name = 'SystemRoleNotFoundError';
  }
}
