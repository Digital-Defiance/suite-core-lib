import { HandleableError } from '@digitaldefiance/i18n-lib';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { SuiteCoreStringKey } from '../enumerations';

export class PasswordLoginNotEnabledError extends HandleableError {
  constructor() {
    super(new Error(getSuiteCoreTranslation(SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled)), {
      statusCode: 403,
    });
    this.name = 'PasswordLoginNotEnabledError';
  }
}
