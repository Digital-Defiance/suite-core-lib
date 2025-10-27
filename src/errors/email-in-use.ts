import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailInUseError extends TranslatableSuiteHandleableError {
  constructor(language?: string, statusCode = 422) {
    super(SuiteCoreStringKey.Validation_EmailInUse, undefined, language, {
      statusCode,
    });
    this.name = 'EmailInUseError';
  }
}
