import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class InvalidUsernameError extends TranslatableSuiteHandleableError {
  constructor(language?: string, statusCode = 422) {
    super(
      SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate,
      undefined,
      language,
      { statusCode },
    );
    this.name = 'InvalidUsernameError';
  }
}