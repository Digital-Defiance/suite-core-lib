import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class UsernameInUseError extends TranslatableSuiteHandleableError {
  constructor(language?: string, statusCode = 422) {
    super(
      SuiteCoreStringKey.Validation_UsernameInUse,
      undefined,
      language,
      { statusCode },
    );
    this.name = 'UsernameInUseError';
  }
}