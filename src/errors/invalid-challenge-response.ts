import { HandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class InvalidChallengeResponseError extends HandleableError {
  constructor() {
    super(
      new Error(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Error_InvalidChallengeResponse
        )
      ),
      {
        statusCode: 401,
      }
    );
    this.name = 'InvalidChallengeResponseError';
  }
}
