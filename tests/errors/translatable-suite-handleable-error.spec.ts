import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { TranslatableSuiteHandleableError } from '../../src/errors/translatable-suite-handleable';
import { SuiteCoreStringKey } from '../../src/enumerations/suite-core-string-key';
import {
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
} from '../../src/i18n-setup';

describe('TranslatableSuiteHandleableError', () => {
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
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );
      expect(error.message).toBe('User not found');
      expect(error.name).toBe('TranslatableSuiteHandleableError');
      expect(error.statusCode).toBe(500);
    });

    it('should create error with French translation', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.FR
      );
      expect(error.message).toBe('Utilisateur introuvable');
    });

    it('should create error with German translation', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.DE
      );
      expect(error.message).toBe('Benutzer nicht gefunden');
    });

    it('should create error with Spanish translation', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.ES
      );
      expect(error.message).toBe('Usuario no encontrado');
    });
  });

  describe('Handleable properties', () => {
    it('should have default statusCode of 500', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );
      expect(error.statusCode).toBe(500);
    });

    it('should accept custom statusCode', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        undefined,
        { statusCode: 404 }
      );
      expect(error.statusCode).toBe(404);
    });

    it('should have handled property defaulting to false', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );
      expect(error.handled).toBe(false);
    });

    it('should allow setting handled property', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );
      error.handled = true;
      expect(error.handled).toBe(true);
    });

    it('should store cause error', () => {
      const causeError = new Error('Original error');
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        undefined,
        { cause: causeError }
      );
      expect(error.cause).toBe(causeError);
    });

    it('should store sourceData', () => {
      const sourceData = { userId: '123', username: 'test' };
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        undefined,
        { sourceData }
      );
      expect(error.sourceData).toEqual(sourceData);
    });
  });

  describe('toJSON method', () => {
    it('should serialize to JSON with all properties', () => {
      const causeError = new Error('Original error');
      const sourceData = { userId: '123' };
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.EN_US,
        { statusCode: 404, cause: causeError, sourceData }
      );

      const json = error.toJSON();
      expect(json.statusCode).toBe(404);
      expect(json.message).toBe('User not found');
      expect(json.cause).toBe(causeError);
      expect(json.sourceData).toEqual(sourceData);
    });

    it('should serialize without optional properties', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );

      const json = error.toJSON();
      expect(json.statusCode).toBe(500);
      expect(json.message).toBe('User not found');
      expect(json.cause).toBeUndefined();
      expect(json.sourceData).toBeUndefined();
    });
  });

  describe('Template parameter substitution', () => {
    it('should substitute template parameters in English', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.Error_FailedToCreateUserTemplate,
        { NAME: 'Admin' },
        LanguageCodes.EN_US
      );
      expect(error.message).toBe('Failed to create Admin user');
    });

    it('should substitute template parameters in French', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.Error_FailedToCreateUserTemplate,
        { NAME: 'Admin' },
        LanguageCodes.FR
      );
      expect(error.message).toBe('Échec de la création de l\'utilisateur Admin');
    });
  });

  describe('Error properties', () => {
    it('should be instanceof Error', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );
      expect(error instanceof Error).toBe(true);
    });

    it('should be instanceof TranslatableSuiteHandleableError', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );
      expect(error instanceof TranslatableSuiteHandleableError).toBe(true);
    });

    it('should have proper stack trace', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound
      );
      expect(error.stack).toBeDefined();
      expect(error.stack).toContain('TranslatableSuiteHandleableError');
    });
  });

  describe('Translation printing', () => {
    it('should print translated message when converted to string', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.EN_US
      );
      const errorString = String(error);
      expect(errorString).toContain('User not found');
    });

    it('should print French translation when converted to string', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.User_NotFound,
        undefined,
        LanguageCodes.FR
      );
      const errorString = error.toString();
      expect(errorString).toContain('Utilisateur introuvable');
    });

    it('should print template-substituted message', () => {
      const error = new TranslatableSuiteHandleableError(
        SuiteCoreStringKey.Error_FailedToCreateUserTemplate,
        { NAME: 'System' },
        LanguageCodes.EN_US
      );
      expect(error.toString()).toContain('Failed to create System user');
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

      languages.forEach(lang => {
        const error = new TranslatableSuiteHandleableError(
          SuiteCoreStringKey.User_NotFound,
          undefined,
          lang
        );
        expect(error.message).toBeTruthy();
        expect(error.message.length).toBeGreaterThan(0);
      });
    });
  });
});
