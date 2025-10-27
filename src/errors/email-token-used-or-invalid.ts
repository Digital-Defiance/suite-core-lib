import { SuiteCoreStringKey } from '../enumerations';

import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailTokenUsedOrInvalidError extends TranslatableSuiteHandleableError {
  constructor(language?: string, statusCode = 422) {
    super(SuiteCoreStringKey.Validation_TokenInvalid, undefined, language, {
      statusCode,
    });
    this.name = 'EmailTokenUsedOrInvalidError';
  }
}
