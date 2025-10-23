import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteError } from './translatable-suite';
import { HandleableError } from '@digitaldefiance/ecies-lib';


export class InvalidTokenError extends HandleableError {
  constructor(language?: CoreLanguageCode, statusCode = 422) {
    super(new TranslatableSuiteError(SuiteCoreStringKey.Validation_InvalidToken, undefined, language), {
      statusCode,
    });
    this.name = 'InvalidTokenError';
  }
}
