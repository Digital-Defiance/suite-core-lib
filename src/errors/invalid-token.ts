import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteError } from './translatable-suite';
import { HandleableError } from '@digitaldefiance/ecies-lib';


export class InvalidTokenError extends HandleableError {
  constructor(language?: string, statusCode = 422) {
    super(new TranslatableSuiteError(SuiteCoreStringKey.Validation_InvalidToken, undefined, language), {
      statusCode,
    });
    this.name = 'InvalidTokenError';
  }
}
