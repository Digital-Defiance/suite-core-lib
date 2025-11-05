import { InvalidEmailErrorType } from '@digitaldefiance/ecies-lib';
import { PluginTypedError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreI18nEngine, SuiteCoreComponentId } from '../i18n-setup';

export class InvalidEmailError extends PluginTypedError<typeof InvalidEmailErrorType, SuiteCoreStringKey> {
  constructor(type: InvalidEmailErrorType, language?: string) {
    const engine = getSuiteCoreI18nEngine();
    const reasonMap: Record<InvalidEmailErrorType, SuiteCoreStringKey> = {
      [InvalidEmailErrorType.Invalid]: SuiteCoreStringKey.Error_InvalidEmail,
      [InvalidEmailErrorType.Missing]: SuiteCoreStringKey.Error_InvalidEmailMissing,
      [InvalidEmailErrorType.Whitespace]:
        SuiteCoreStringKey.Error_InvalidEmailWhitespace,
    };
    super(SuiteCoreComponentId, type, reasonMap, language, {
      statusCode: 422,
    });
    this.name = 'InvalidEmailError';
  }
}
