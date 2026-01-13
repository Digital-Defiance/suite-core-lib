/**
 * Error thrown when the admin role cannot be found in the system.
 */
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class AdminRoleNotFoundError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.AdminRoleNotFound, undefined, language, {
      statusCode: 500,
    });
    this.name = 'AdminRoleNotFoundError';
  }
}
