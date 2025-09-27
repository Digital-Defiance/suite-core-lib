import { HandleableError } from '@digitaldefiance/ecies-lib';
import { CoreLanguage } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class UserNotFoundError extends HandleableError {
  constructor(language?: CoreLanguage, statusCode = 404) {
    super(
      getSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
        undefined,
        language,
      ),
      {
        statusCode,
      },
    );
    this.name = 'UserNotFoundError';
  }
}
