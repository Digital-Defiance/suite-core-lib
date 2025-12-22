import { SuiteCoreStringKey } from '../enumerations/suite-core-string-key';
import { getSuiteCoreI18nEngine, SuiteCoreComponentId } from '../i18n-setup';

export class TranslatableSuiteError extends Error {
  public readonly StringName: SuiteCoreStringKey;
  /**
   * @param string The translation key or raw string
   * @param otherVars Variables for interpolation
   * @param language Optional language override
   * @param options Error options
   * @param engine Optional i18n engine override (defaults to node-express-suite component)
   */
  constructor(
    string: SuiteCoreStringKey,
    otherVars?: Record<string, string | number>,
    language?: string,
  ) {
    const i18nEngine = getSuiteCoreI18nEngine();
    let translatedMessage: string;
    try {
      translatedMessage = i18nEngine.translate(
        SuiteCoreComponentId,
        string,
        otherVars,
        language,
      );
    } catch {
      translatedMessage = string;
    }
    super(translatedMessage);
    this.name = 'TranslatableSuiteError';
    this.StringName = string;
  }
}
