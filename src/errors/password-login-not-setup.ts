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
