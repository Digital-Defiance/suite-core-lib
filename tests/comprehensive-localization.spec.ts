import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../src/enumerations';
import { UsernameInUseError } from '../src/errors/username-in-use';
import { EmailInUseError } from '../src/errors/email-in-use';
import { InvalidCredentialsError } from '../src/errors/invalid-credentials';
import { UserNotFoundError } from '../src/errors/user-not-found';
import { AccountLockedError } from '../src/errors/account-locked';
import {
  getSuiteCoreI18nEngine,
  getSuiteCoreTranslation,
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
  SuiteCoreComponentId,
} from '../src/i18n-setup';

describe('Comprehensive Localization Testing', () => {
  beforeEach(() => {
    PluginI18nEngine.clearAllInstances();
    resetSuiteCoreI18nEngine();
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.clearAllInstances();
    resetSuiteCoreI18nEngine();
  });

  describe('Error Classes Localization', () => {
    const testLanguages = [
      LanguageCodes.EN_US,
      LanguageCodes.EN_GB,
      LanguageCodes.FR,
      LanguageCodes.DE,
      LanguageCodes.ES,
      LanguageCodes.ZH_CN,
      LanguageCodes.JA,
      LanguageCodes.UK,
    ];

    it('should localize UsernameInUseError in all languages', () => {
      testLanguages.forEach((lang) => {
        const error = new UsernameInUseError(lang);
        expect(error.message).toBeTruthy();
        expect(error.message).not.toBe(SuiteCoreStringKey.Validation_UsernameInUse);
        expect(error.statusCode).toBe(422);
      });
    });

    it('should localize EmailInUseError in all languages', () => {
      testLanguages.forEach((lang) => {
        const error = new EmailInUseError(lang);
        expect(error.message).toBeTruthy();
        expect(error.message).not.toBe(SuiteCoreStringKey.Validation_EmailInUse);
        expect(error.statusCode).toBe(422);
      });
    });

    it('should localize InvalidCredentialsError in all languages', () => {
      testLanguages.forEach((lang) => {
        const error = new InvalidCredentialsError(lang);
        expect(error.message).toBeTruthy();
        expect(error.message).not.toBe(SuiteCoreStringKey.Validation_InvalidCredentials);
        expect(error.statusCode).toBe(401);
      });
    });

    it('should localize UserNotFoundError in all languages', () => {
      testLanguages.forEach((lang) => {
        const error = new UserNotFoundError(lang);
        expect(error.message).toBeTruthy();
        expect(error.message).not.toBe(SuiteCoreStringKey.Auth_UserNotFound);
        expect(error.statusCode).toBe(404);
      });
    });

    it('should localize AccountLockedError in all languages', () => {
      testLanguages.forEach((lang) => {
        const error = new AccountLockedError(lang);
        expect(error.message).toBeTruthy();
        expect(error.message).not.toBe(SuiteCoreStringKey.Auth_AccountLocked);
        expect(error.statusCode).toBe(403);
      });
    });
  });

  describe('Direct Translation Testing', () => {
    it('should translate validation errors correctly', () => {
      const validationKeys = [
        SuiteCoreStringKey.Validation_UsernameInUse,
        SuiteCoreStringKey.Validation_EmailInUse,
        SuiteCoreStringKey.Validation_InvalidUsername,
        SuiteCoreStringKey.Validation_InvalidEmail,
        SuiteCoreStringKey.Validation_PasswordTooWeak,
        SuiteCoreStringKey.Validation_InvalidCredentials,
      ];

      validationKeys.forEach((key) => {
        const enMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.EN_US);
        const frMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.FR);
        const deMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.DE);
        const esMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.ES);

        expect(enMsg).toBeTruthy();
        expect(frMsg).toBeTruthy();
        expect(deMsg).toBeTruthy();
        expect(esMsg).toBeTruthy();

        // Ensure translations are different
        expect(enMsg).not.toBe(frMsg);
        expect(enMsg).not.toBe(deMsg);
        expect(enMsg).not.toBe(esMsg);
      });
    });

    it('should translate auth errors correctly', () => {
      const authKeys = [
        SuiteCoreStringKey.Auth_UserNotFound,
        SuiteCoreStringKey.Auth_AccountLocked,
        SuiteCoreStringKey.Auth_TokenExpired,
        SuiteCoreStringKey.Auth_InvalidToken,
        SuiteCoreStringKey.Auth_InsufficientPermissions,
      ];

      authKeys.forEach((key) => {
        const enMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.EN_US);
        const frMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.FR);
        const deMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.DE);
        const esMsg = getSuiteCoreTranslation(key, undefined, LanguageCodes.ES);

        expect(enMsg).toBeTruthy();
        expect(frMsg).toBeTruthy();
        expect(deMsg).toBeTruthy();
        expect(esMsg).toBeTruthy();

        // Ensure translations are different
        expect(enMsg).not.toBe(frMsg);
        expect(enMsg).not.toBe(deMsg);
        expect(enMsg).not.toBe(esMsg);
      });
    });
  });

  describe('Language-Specific Verification', () => {
    it('should have correct English translations', () => {
      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_UsernameInUse,
          undefined,
          LanguageCodes.EN_US,
        ),
      ).toBe('Username is already in use');

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_EmailInUse,
          undefined,
          LanguageCodes.EN_US,
        ),
      ).toBe('Email address is already in use');

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Auth_UserNotFound,
          undefined,
          LanguageCodes.EN_US,
        ),
      ).toBe('User account not found');
    });

    it('should have correct French translations', () => {
      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_UsernameInUse,
          undefined,
          LanguageCodes.FR,
        ),
      ).toBe("Le nom d'utilisateur est déjà utilisé");

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_EmailInUse,
          undefined,
          LanguageCodes.FR,
        ),
      ).toBe("L'adresse e-mail est déjà utilisée");

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Auth_UserNotFound,
          undefined,
          LanguageCodes.FR,
        ),
      ).toBe('Compte utilisateur introuvable');
    });

    it('should have correct German translations', () => {
      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_UsernameInUse,
          undefined,
          LanguageCodes.DE,
        ),
      ).toBe('Benutzername wird bereits verwendet');

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_EmailInUse,
          undefined,
          LanguageCodes.DE,
        ),
      ).toBe('E-Mail-Adresse wird bereits verwendet');

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Auth_UserNotFound,
          undefined,
          LanguageCodes.DE,
        ),
      ).toBe('Benutzerkonto nicht gefunden');
    });

    it('should have correct Spanish translations', () => {
      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_UsernameInUse,
          undefined,
          LanguageCodes.ES,
        ),
      ).toBe('El nombre de usuario ya está en uso');

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Validation_EmailInUse,
          undefined,
          LanguageCodes.ES,
        ),
      ).toBe('La dirección de correo electrónico ya está en uso');

      expect(
        getSuiteCoreTranslation(
          SuiteCoreStringKey.Auth_UserNotFound,
          undefined,
          LanguageCodes.ES,
        ),
      ).toBe('Cuenta de usuario no encontrada');
    });
  });

  describe('Error Message Consistency', () => {
    it('should maintain consistent error codes across languages', () => {
      const testCases = [
        { ErrorClass: UsernameInUseError, expectedCode: 422 },
        { ErrorClass: EmailInUseError, expectedCode: 422 },
        { ErrorClass: InvalidCredentialsError, expectedCode: 401 },
        { ErrorClass: UserNotFoundError, expectedCode: 404 },
        { ErrorClass: AccountLockedError, expectedCode: 403 },
      ];

      testCases.forEach(({ ErrorClass, expectedCode }) => {
        [LanguageCodes.EN_US, LanguageCodes.FR, LanguageCodes.DE, LanguageCodes.ES].forEach(
          (lang) => {
            const error = new ErrorClass(lang);
            expect(error.statusCode).toBe(expectedCode);
          },
        );
      });
    });

    it('should have non-empty messages for all error types in all languages', () => {
      const errorClasses = [
        UsernameInUseError,
        EmailInUseError,
        InvalidCredentialsError,
        UserNotFoundError,
        AccountLockedError,
      ];

      const languages = [
        LanguageCodes.EN_US,
        LanguageCodes.FR,
        LanguageCodes.DE,
        LanguageCodes.ES,
      ];

      errorClasses.forEach((ErrorClass) => {
        languages.forEach((lang) => {
          const error = new ErrorClass(lang);
          expect(error.message).toBeTruthy();
          expect(error.message.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('Engine Integration', () => {
    it('should use the same engine instance across translations', () => {
      const engine1 = getSuiteCoreI18nEngine();
      const engine2 = getSuiteCoreI18nEngine();
      expect(engine1).toBe(engine2);
    });

    it('should have the suite-core component registered', () => {
      const engine = getSuiteCoreI18nEngine();
      expect(engine.hasComponent(SuiteCoreComponentId)).toBe(true);
    });

    it('should translate through engine directly', () => {
      const engine = getSuiteCoreI18nEngine();
      
      const enMsg = engine.translate(
        SuiteCoreComponentId,
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.EN_US,
      );
      
      const frMsg = engine.translate(
        SuiteCoreComponentId,
        SuiteCoreStringKey.Validation_UsernameInUse,
        undefined,
        LanguageCodes.FR,
      );

      expect(enMsg).toBe('Username is already in use');
      expect(frMsg).toBe("Le nom d'utilisateur est déjà utilisé");
    });
  });
});
