import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';
import { SuiteCoreStringKey } from '../enumerations';
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';

export class LastAdminError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.CannotRemoveLastAdmin, undefined, language, {
      statusCode: 422,
    });
    this.name = 'LastAdminError';
  }
}
