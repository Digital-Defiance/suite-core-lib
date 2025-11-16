import { HandleableError } from '@digitaldefiance/i18n-lib';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { SuiteCoreStringKey } from '../enumerations';

export class LoginChallengeExpiredError extends HandleableError {
  constructor() {
    super(new Error(getSuiteCoreTranslation(SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate)), {
      statusCode: 401,
    });
    this.name = 'LoginChallengeExpiredError';
  }
}
