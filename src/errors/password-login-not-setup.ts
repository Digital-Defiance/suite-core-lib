/**
 * Error thrown when password login is not set up for a user.
 */
import { HandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class PasswordLoginNotSetupError extends HandleableError {
  constructor() {
    super(
      new Error(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup,
        ),
      ),
      {
        statusCode: 403,
      },
    );
    this.name = 'PasswordLoginNotSetupError';
  }
}
