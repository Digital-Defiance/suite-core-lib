import { HandleableError } from '@digitaldefiance/i18n-lib';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { SuiteCoreStringKey } from '../enumerations';

export class DirectChallengeNotEnabledError extends HandleableError {
  constructor() {
    super(new Error(getSuiteCoreTranslation(SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled)), {
      statusCode: 403,
    });
  }
}
