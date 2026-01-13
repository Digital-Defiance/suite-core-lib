/**
 * Error thrown when neither username nor email is provided.
 */
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { GenericValidationError } from './generic-validation';

export class UsernameOrEmailRequiredError extends GenericValidationError {
  constructor(language?: CoreLanguageCode, statusCode = 422) {
    super(
      getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameOrEmailRequired,
        undefined,
        language,
      ),
      {
        statusCode,
      },
    );
    this.name = 'UsernameOrEmailRequiredError';
  }
}
