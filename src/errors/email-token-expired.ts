import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';
import { SuiteCoreStringKey } from '../enumerations';


export class EmailTokenExpiredError extends TranslatableSuiteHandleableError {
  constructor(language?: string, statusCode = 422) {
    super(SuiteCoreStringKey.Validation_TokenExpired, undefined, language), {
      statusCode,
    };
    this.name = 'EmailTokenExpiredError';
  }
}
