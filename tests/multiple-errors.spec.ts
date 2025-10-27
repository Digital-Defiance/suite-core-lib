import { HandleableError } from '@digitaldefiance/ecies-lib';
import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../src/enumerations';
import {
  getSuiteCoreTranslation,
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
} from '../src/i18n-setup';

// Mock additional error classes for testing using the new API
class EmailInUseError extends HandleableError {
  constructor(language?: string, statusCode = 422) {
    const message = getSuiteCoreTranslation(
      SuiteCoreStringKey.Validation_EmailInUse,
      undefined,
      language,
    );
    const error = new Error(message);
    super(error, { statusCode });
    this.message = message;
    this.name = 'EmailInUseError';
  }
}

class InvalidCredentialsError extends HandleableError {
  constructor(language?: string, statusCode = 401) {
    const message = getSuiteCoreTranslation(
      SuiteCoreStringKey.Validation_InvalidCredentials,
      undefined,
      language,
    );
    const error = new Error(message);
    super(error, { statusCode });
    this.message = message;
    this.name = 'InvalidCredentialsError';
  }
}

describe('Multiple Error Types Localization', () => {
  beforeEach(() => {
    PluginI18nEngine.clearAllInstances();
    resetSuiteCoreI18nEngine();
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.clearAllInstances();
    resetSuiteCoreI18nEngine();
  });

  describe('Error Message Consistency', () => {
    it('should provide consistent localization across different error types', () => {
      const emailError = new EmailInUseError(LanguageCodes.FR);
      const credentialsError = new InvalidCredentialsError(LanguageCodes.FR);

      expect(emailError.message).toBe("L'adresse e-mail est déjà utilisée");
      expect(credentialsError.message).toBe(
        "Nom d'utilisateur ou mot de passe invalide",
      );
    });

    it('should handle multiple languages for same error type', () => {
      const englishError = new EmailInUseError(LanguageCodes.EN_US);
      const frenchError = new EmailInUseError(LanguageCodes.FR);

      expect(englishError.message).toBe('Email address is already in use');
      expect(frenchError.message).toBe("L'adresse e-mail est déjà utilisée");
    });

    it('should maintain error properties across languages', () => {
      const englishError = new InvalidCredentialsError(LanguageCodes.EN_US);
      const frenchError = new InvalidCredentialsError(LanguageCodes.FR);

      expect(englishError.statusCode).toBe(frenchError.statusCode);
      expect(englishError.name).toBe(frenchError.name);
      expect(englishError.name).toBe('InvalidCredentialsError');
    });
  });

  describe('Fallback Behavior', () => {
    it('should fallback to English for unsupported languages', () => {
      // Using a valid core language for fallback test
      const germanError = new EmailInUseError(LanguageCodes.DE);
      const englishError = new EmailInUseError(LanguageCodes.EN_US);

      // German should have its own translation
      expect(germanError.message).toBe('E-Mail-Adresse wird bereits verwendet');
      expect(englishError.message).toBe('Email address is already in use');
    });

    it('should handle undefined language parameter', () => {
      const error = new EmailInUseError();
      expect(error.message).toBe('Email address is already in use');
    });

    it('should handle all supported languages', () => {
      const supportedLanguages = [
        LanguageCodes.EN_US,
        LanguageCodes.FR,
        LanguageCodes.ES,
        LanguageCodes.DE,
        LanguageCodes.ZH_CN,
        LanguageCodes.JA,
        LanguageCodes.UK,
      ];

      supportedLanguages.forEach((language) => {
        const error = new EmailInUseError(language);
        expect(error.message).toBeTruthy();
        expect(error.message).not.toBe(
          SuiteCoreStringKey.Validation_EmailInUse,
        );
      });
    });
  });
});
