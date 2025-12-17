import { HandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteError } from './translatable-suite';

export class InvalidTokenError extends HandleableError {
  constructor(language?: string, statusCode = 422) {
    super(
      new TranslatableSuiteError(
        SuiteCoreStringKey.Validation_InvalidToken,
        undefined,
        language
      ),
      {
        statusCode,
      }
    );
    this.name = 'InvalidTokenError';
  }
}
