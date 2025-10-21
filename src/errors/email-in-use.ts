import { CoreLanguage } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailInUseError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguage, statusCode = 422) {
    super(SuiteCoreStringKey.Validation_EmailInUse, undefined, language, {
      statusCode,
    });
    this.name = 'EmailInUseError';
  }
}
