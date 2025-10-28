import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../src/enumerations';
import {
  getSuiteCoreI18nEngine,
  getSuiteCoreTranslation,
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
  safeGetSuiteCoreTranslation,
  SuiteCoreComponentId,
} from '../src/i18n-setup';

describe('User System I18n Setup', () => {
  beforeEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  describe('initSuiteCoreI18nEngine', () => {
    it('should initialize i18n engine with user system translations', () => {
      const engine = initSuiteCoreI18nEngine();

      expect(engine).toBeDefined();
      expect(engine.hasComponent(SuiteCoreComponentId)).toBe(true);
    });

    it('should register user system component successfully', () => {
      const engine = initSuiteCoreI18nEngine();

      expect(engine.hasComponent(SuiteCoreComponentId)).toBe(true);

      // Verify we can translate a user system string
      const translation = engine.translate(
        SuiteCoreComponentId,
        SuiteCoreStringKey.Auth_UserNotFound,
      );
      expect(translation).toBe('User account not found');
    });

    it('should have English translations for all keys', () => {
      initSuiteCoreI18nEngine();

      Object.values(SuiteCoreStringKey).forEach((key) => {
        const translation = getSuiteCoreTranslation(
          key,
          undefined,
          LanguageCodes.EN_US,
        );
        expect(translation).toBeTruthy();
        expect(translation).not.toBe(key);
      });
    });

    it('should have French translations for all keys', () => {
      initSuiteCoreI18nEngine();

      Object.values(SuiteCoreStringKey).forEach((key) => {
        const translation = getSuiteCoreTranslation(
          key,
          undefined,
          LanguageCodes.FR,
        );
        expect(translation).toBeTruthy();
        expect(translation).not.toBe(key);
      });
    });
  });

  describe('getSuiteCoreI18nEngine', () => {
    it('should return existing engine if already initialized', () => {
      const engine1 = getSuiteCoreI18nEngine();
      const engine2 = getSuiteCoreI18nEngine();

      expect(engine1).toBe(engine2);
    });

    it('should initialize engine if not already done', () => {
      const engine = getSuiteCoreI18nEngine();

      expect(engine).toBeDefined();
      expect(engine.hasComponent(SuiteCoreComponentId)).toBe(true);
    });
  });

  describe('getSuiteCoreTranslation', () => {
    beforeEach(() => {
      initSuiteCoreI18nEngine();
    });

    it('should translate user system strings', () => {
      const translation = getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
      );
      expect(translation).toBe('Username is already in use');
    });

    it('should translate with variables', () => {
      // Since we don't have template strings in this simple setup, let's test a basic translation
      const translation = getSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
        undefined,
        LanguageCodes.FR,
      );
      expect(translation).toBe('Compte utilisateur introuvable');
    });

    it('should respect language parameter', () => {
      const englishTranslation = getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.EN_US,
      );
      const frenchTranslation = getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.FR,
      );

      expect(englishTranslation).toBe('Username is already in use');
      expect(frenchTranslation).toBe("Le nom d'utilisateur est déjà utilisé");
    });
  });

  describe('safeGetSuiteCoreTranslation', () => {
    beforeEach(() => {
      initSuiteCoreI18nEngine();
    });

    it('should provide safe translation with fallback', () => {
      const translation = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
      );
      expect(translation).toBe('Username is already in use');
    });
  });

  describe('Translation Quality', () => {
    beforeEach(() => {
      initSuiteCoreI18nEngine();
    });

    it('should have different translations for English and French', () => {
      const englishMsg = getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.EN_US,
      );
      const frenchMsg = getSuiteCoreTranslation(
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.FR,
      );

      expect(englishMsg).not.toBe(frenchMsg);
      expect(englishMsg).toBe('Username is already in use');
      expect(frenchMsg).toBe("Le nom d'utilisateur est déjà utilisé");
    });

    it('should handle validation error translations', () => {
      const validationKeys = [
        SuiteCoreStringKey.Validation_UsernameInUse,
        SuiteCoreStringKey.Validation_EmailInUse,
        SuiteCoreStringKey.Validation_InvalidUsername,
        SuiteCoreStringKey.Validation_InvalidEmail,
        SuiteCoreStringKey.Validation_PasswordTooWeak,
        SuiteCoreStringKey.Validation_InvalidCredentials,
      ];

      validationKeys.forEach((key) => {
        const englishMsg = getSuiteCoreTranslation(
          key,
          undefined,
          LanguageCodes.EN_US,
        );
        const frenchMsg = getSuiteCoreTranslation(
          key,
          undefined,
          LanguageCodes.FR,
        );

        expect(englishMsg).toBeTruthy();
        expect(frenchMsg).toBeTruthy();
        expect(englishMsg).not.toBe(frenchMsg);
      });
    });

    it('should handle auth error translations', () => {
      const authKeys = [
        SuiteCoreStringKey.Auth_UserNotFound,
        SuiteCoreStringKey.Auth_AccountLocked,
        SuiteCoreStringKey.Auth_TokenExpired,
        SuiteCoreStringKey.Auth_InvalidToken,
        SuiteCoreStringKey.Auth_InsufficientPermissions,
      ];

      authKeys.forEach((key) => {
        const englishMsg = getSuiteCoreTranslation(
          key,
          undefined,
          LanguageCodes.EN_US,
        );
        const frenchMsg = getSuiteCoreTranslation(
          key,
          undefined,
          LanguageCodes.FR,
        );

        expect(englishMsg).toBeTruthy();
        expect(frenchMsg).toBeTruthy();
        expect(englishMsg).not.toBe(frenchMsg);
      });
    });

    it('should handle all supported languages', () => {
      const supportedLanguages = [
        LanguageCodes.EN_US,
        LanguageCodes.EN_GB,
        LanguageCodes.FR,
        LanguageCodes.DE,
        LanguageCodes.ES,
        LanguageCodes.ZH_CN,
        LanguageCodes.JA,
        LanguageCodes.UK,
      ];

      supportedLanguages.forEach((language) => {
        const translation = getSuiteCoreTranslation(
          SuiteCoreStringKey.Auth_UserNotFound,
          undefined,
          language,
        );
        expect(translation).toBeTruthy();
        expect(translation).not.toBe(SuiteCoreStringKey.Auth_UserNotFound);
      });
    });
  });
});
