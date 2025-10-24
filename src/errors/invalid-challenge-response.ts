import { HandleableError } from '@digitaldefiance/ecies-lib';
import { getSuiteCoreTranslation } from '../i18n-setup';
import { SuiteCoreStringKey } from '../enumerations';

export class InvalidChallengeResponseError extends HandleableError {
  constructor() {
    super(new Error(getSuiteCoreTranslation(SuiteCoreStringKey.Error_InvalidChallengeResponse)), {
      statusCode: 401,
    });
  }
}
