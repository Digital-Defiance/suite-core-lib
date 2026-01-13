/**
 * Error thrown when password login is not enabled for a user.
 */
import { HandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class PasswordLoginNotEnabledError extends HandleableError {
  constructor() {
    super(
      new Error(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled,
        ),
      ),
      {
        statusCode: 403,
      },
    );
    this.name = 'PasswordLoginNotEnabledError';
  }
}
