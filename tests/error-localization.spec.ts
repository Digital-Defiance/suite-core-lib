import { CoreLanguageCode, LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../src/enumerations';
import { UsernameInUseError } from '../src/errors/username-in-use';
import {
  getSuiteCoreI18nEngine,
  getSuiteCoreTranslation,
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
  SuiteCoreComponentId,
} from '../src/i18n-setup';

describe('Error Message Localization', () => {
  beforeEach(() => {
    // Clear any existing instances
    PluginI18nEngine.clearAllInstances();
    resetSuiteCoreI18nEngine();
    // Initialize user system i18n
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.clearAllInstances();
    resetSuiteCoreI18nEngine();
  });

  describe('UsernameInUseError', () => {
    it('should return English message by default', () => {
      const error = new UsernameInUseError();
      expect(error.message).toBe('Username is already in use');
    });

    it('should return English message when explicitly requested', () => {
      const error = new UsernameInUseError(LanguageCodes.EN_US);
      expect(error.message).toBe('Username is already in use');
    });

    it('should return French message when requested', () => {
      const error = new UsernameInUseError(LanguageCodes.FR);
      expect(error.message).toBe("Le nom d'utilisateur est déjà utilisé");
    });

    it('should have correct status code', () => {
      const error = new UsernameInUseError();
      expect(error.statusCode).toBe(422);
    });

    it('should allow custom status code', () => {
      const error = new UsernameInUseError(LanguageCodes.EN_US, 409);
      expect(error.statusCode).toBe(409);
    });

    it('should have correct error name', () => {
      const error = new UsernameInUseError();
      expect(error.name).toBe('UsernameInUseError');
    });
  });

  describe('I18n Engine Integration', () => {
    it('should translate user system keys correctly', () => {
      const engine = getSuiteCoreI18nEngine();

      const englishMessage = engine.translate(
        SuiteCoreComponentId,
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.EN_US,
      );
      expect(englishMessage).toBe('Username is already in use');

      const frenchMessage = engine.translate(
        SuiteCoreComponentId,
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.FR,
      );
      expect(frenchMessage).toBe("Le nom d'utilisateur est déjà utilisé");
    });

    it('should fallback to English for unsupported languages', () => {
      const engine = getSuiteCoreI18nEngine();

      // Test fallback by using a supported language (Spanish should work)
      const spanishMessage = engine.translate(
        SuiteCoreComponentId,
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.ES,
      );
      expect(spanishMessage).toBe('El nombre de usuario ya está en uso');
    });

    it('should work with helper functions', () => {
      const englishMessage = getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.EN_US,
      );
      expect(englishMessage).toBe('Username is already in use');

      const frenchMessage = getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.FR,
      );
      expect(frenchMessage).toBe("Le nom d'utilisateur est déjà utilisé");
    });
  });
});
