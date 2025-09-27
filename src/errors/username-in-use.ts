import { HandleableError } from '@digitaldefiance/ecies-lib';
import { CoreLanguage } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class UsernameInUseError extends HandleableError {
  constructor(language?: CoreLanguage, statusCode = 422) {
    super(
      getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        language,
      ),
      {
        statusCode,
      },
    );
    this.name = 'UsernameInUseError';
  }
}
