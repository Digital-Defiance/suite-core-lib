import { HandleableError } from '@digitaldefiance/i18n-lib';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { SuiteCoreStringKey } from '../enumerations';

export class PasswordLoginNotSetupError extends HandleableError {
  constructor() {
    super(new Error(getSuiteCoreTranslation(SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup)), {
      statusCode: 403,
    });
    this.name = 'PasswordLoginNotSetupError';
  }
}
