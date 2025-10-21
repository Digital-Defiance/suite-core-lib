import { CoreLanguage } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class InvalidUsernameError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguage, statusCode = 422) {
    super(
      SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate,
      undefined,
      language,
      { statusCode },
    );
    this.name = 'InvalidUsernameError';
  }
}