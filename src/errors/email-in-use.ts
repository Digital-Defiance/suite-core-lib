import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailInUseError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode, statusCode = 422) {
    super(SuiteCoreStringKey.Validation_EmailInUse, undefined, language, {
      statusCode,
    });
    this.name = 'EmailInUseError';
  }
}
