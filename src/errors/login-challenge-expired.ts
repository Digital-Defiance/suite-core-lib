/**
 * Error thrown when a login challenge has expired.
 */
import { HandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class LoginChallengeExpiredError extends HandleableError {
  constructor() {
    super(
      new Error(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate,
        ),
      ),
      {
        statusCode: 401,
      },
    );
    this.name = 'LoginChallengeExpiredError';
  }
}
