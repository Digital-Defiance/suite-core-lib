import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import {
  SuiteCoreStringKey,
  SuiteCoreStringKeyValue,
} from '../../src/enumerations/suite-core-string-key';
import { TranslatableSuiteError } from '../../src/errors/translatable-suite';
import {
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
} from '../../src/i18n-setup';

describe('TranslatableSuiteError', () => {
  beforeEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  describe('Error instantiation and translation', () => {
    it('should create error with English message by default', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
      );
      expect(error.message).toBe('User not found');
      expect(error.name).toBe('TranslatableSuiteError');
      expect(error.StringName).toBe(SuiteCoreStringKey.User_NotFound);
    });

    it('should create error with French translation', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.FR,
      );
      expect(error.message).toBe('Utilisateur introuvable');
    });

    it('should create error with German translation', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.DE,
      );
      expect(error.message).toBe('Benutzer nicht gefunden');
    });

    it('should create error with Spanish translation', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.ES,
      );
      expect(error.message).toBe('Usuario no encontrado');
    });
  });

  describe('Template parameter substitution', () => {
    it('should substitute template parameters in English', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Common_UserCreatedTemplate,
        { TYPE: 'Admin', NAME: 'John' },
        LanguageCodes.EN_US,
      );
      expect(error.message).toBe('Admin user John created successfully');
    });

    it('should substitute template parameters in French', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Common_UserCreatedTemplate,
        { TYPE: 'Admin', NAME: 'Jean' },
        LanguageCodes.FR,
      );
      expect(error.message).toBe('Admin utilisateur Jean créé avec succès');
    });

    it('should substitute template parameters in German', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Common_UserCreatedTemplate,
        { TYPE: 'Admin', NAME: 'Hans' },
        LanguageCodes.DE,
      );
      expect(error.message).toBe('Admin Benutzer Hans erfolgreich erstellt');
    });

    it('should substitute template parameters in Spanish', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Common_UserCreatedTemplate,
        { TYPE: 'Admin', NAME: 'Juan' },
        LanguageCodes.ES,
      );
      expect(error.message).toBe('Admin usuario Juan creado con éxito');
    });

    it('should handle multiple template parameters', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.TestTemplate,
        { variable1: 'test-value', AdministratorEmail: 'admin@example.com' },
        LanguageCodes.EN_US,
      );
      expect(error.message).toBe(
        'This is a test: test-value, admin@example.com',
      );
    });
  });

  describe('Various error types', () => {
    it('should handle validation errors', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Validation_InvalidEmail,
      );
      expect(error.message).toBe('Invalid email address format');
    });

    it('should handle authentication errors', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Auth_AccountLocked,
      );
      expect(error.message).toBe('Account is temporarily locked');
    });

    it('should handle common errors', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Common_UnexpectedError,
      );
      expect(error.message).toBe('An unexpected error occurred');
    });

    it('should handle admin errors', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.AdminRoleNotFound,
      );
      expect(error.message).toBe('Admin role not found');
    });
  });

  describe('Error properties', () => {
    it('should be instanceof Error', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
      );
      expect(error instanceof Error).toBe(true);
    });

    it('should be instanceof TranslatableSuiteError', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
      );
      expect(error instanceof TranslatableSuiteError).toBe(true);
    });

    it('should have proper stack trace', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
      );
      expect(error.stack).toBeDefined();
      expect(error.stack).toContain('TranslatableSuiteError');
    });

    it('should have correct name property', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
      );
      expect(error.name).toBe('TranslatableSuiteError');
    });

    it('should store the StringName property', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
      );
      expect(error.StringName).toBe(SuiteCoreStringKey.User_NotFound);
    });
  });

  describe('Translation printing', () => {
    it('should print translated message when converted to string', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.EN_US,
      );
      const errorString = String(error);
      expect(errorString).toContain('User not found');
    });

    it('should print French translation when converted to string', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.FR,
      );
      const errorString = error.toString();
      expect(errorString).toContain('Utilisateur introuvable');
    });

    it('should print template-substituted message', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Common_UserCreatedTemplate,
        { TYPE: 'Member', NAME: 'Alice' },
        LanguageCodes.EN_US,
      );
      expect(error.toString()).toContain(
        'Member user Alice created successfully',
      );
    });

    it('should print error with message property', () => {
      const error = new TranslatableSuiteError(
        SuiteCoreStringKey.Validation_InvalidEmail,
        undefined,
        LanguageCodes.EN_US,
      );
      expect(error.message).toBe('Invalid email address format');
    });
  });

  describe('Fallback behavior', () => {
    it('should fallback to raw string if translation fails', () => {
      const invalidKey =
        'invalid_key_that_does_not_exist' as SuiteCoreStringKeyValue;
      const error = new TranslatableSuiteError(invalidKey);
      expect(error.message).toBe(invalidKey);
    });
  });

  describe('Multiple languages', () => {
    it('should handle all supported languages', () => {
      const languages = [
        LanguageCodes.EN_US,
        LanguageCodes.EN_GB,
        LanguageCodes.FR,
        LanguageCodes.DE,
        LanguageCodes.ES,
      ];

      languages.forEach((lang) => {
        const error = new TranslatableSuiteError(
          SuiteCoreStringKey.User_NotFound,
          undefined,
          lang,
        );
        expect(error.message).toBeTruthy();
        expect(error.message.length).toBeGreaterThan(0);
      });
    });
  });
});
