import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class InvalidCredentialsError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(
      SuiteCoreStringKey.Validation_InvalidCredentials, undefined, language,
      {
        statusCode: 401,
      },
    );
    this.name = 'InvalidCredentialsError';
  }
}
