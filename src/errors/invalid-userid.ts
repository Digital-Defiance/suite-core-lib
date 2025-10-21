import { HandleableError } from '@digitaldefiance/ecies-lib';
import { CoreLanguage } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreI18nEngine, SuiteCoreComponentId } from '../i18n-setup';

export class InvalidUserIdError extends HandleableError {
  constructor(detail?: SuiteCoreStringKey, language?: CoreLanguage, statusCode = 422) {
    const engine = getSuiteCoreI18nEngine();
    const baseMessage = detail ? engine.translate(
      SuiteCoreComponentId,
      SuiteCoreStringKey.Validation_InvalidUserIdTemplate, {
        detail: engine.translate(SuiteCoreComponentId, detail, undefined, language),
      },
      language,
    ) : engine.translate(
      SuiteCoreComponentId,
      SuiteCoreStringKey.Validation_InvalidUserId, undefined, language,
    );
    super(new Error(baseMessage), { statusCode });
    this.name = 'InvalidUserIdError';
  }
}
