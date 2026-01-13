/**
 * Error thrown when attempting to remove the last admin from the system.
 */
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class LastAdminError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.CannotRemoveLastAdmin, undefined, language, {
      statusCode: 422,
    });
    this.name = 'LastAdminError';
  }
}
