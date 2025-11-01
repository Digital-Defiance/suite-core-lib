import { HandleableError } from '@digitaldefiance/i18n-lib';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { SuiteCoreStringKey } from '../enumerations';

export class InvalidChallengeResponseError extends HandleableError {
  constructor() {
    super(new Error(getSuiteCoreTranslation(SuiteCoreStringKey.Error_InvalidChallengeResponse)), {
      statusCode: 401,
    });
  }
}
