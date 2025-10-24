import { HandleableError } from '@digitaldefiance/ecies-lib';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { SuiteCoreStringKey } from '../enumerations';

export class LoginChallengeExpiredError extends HandleableError {
  constructor() {
    super(new Error(getSuiteCoreTranslation(SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate)), {
      statusCode: 401,
    });
  }
}
