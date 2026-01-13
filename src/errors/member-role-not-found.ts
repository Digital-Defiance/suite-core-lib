/**
 * Error thrown when the member role cannot be found in the system.
 */
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class MemberRoleNotFoundError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.MemberRoleNotFound, undefined, language, {
      statusCode: 500,
    });
    this.name = 'MemberRoleNotFoundError';
  }
}
