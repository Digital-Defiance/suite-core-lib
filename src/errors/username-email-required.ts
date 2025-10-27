import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { GenericValidationError } from './generic-validation';

export class UsernameOrEmailRequiredError extends GenericValidationError {
  constructor(language?: string, statusCode = 422) {
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
