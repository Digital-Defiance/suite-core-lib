import { HandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class DirectChallengeNotEnabledError extends HandleableError {
  constructor() {
    super(
      new Error(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled
        )
      ),
      {
        statusCode: 403,
      }
    );
    this.name = 'DirectChallengeNotEnabledError';
  }
}
