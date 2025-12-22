import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { Pbkdf2ErrorType } from '../../src/enumerations/pbkdf2-error-type';
import { Pbkdf2Error } from '../../src/errors/pbkdf2-error';
import {
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
} from '../../src/i18n-setup';

describe('Pbkdf2Error', () => {
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
      const error = new Pbkdf2Error(Pbkdf2ErrorType.InvalidSaltLength);
      expect(error.message).toBe('Salt length does not match expected length');
      expect(error.name).toBe('Pbkdf2Error');
    });

    it('should create error with French translation', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidSaltLength,
        LanguageCodes.FR,
      );
      expect(error.message).toBe(
        'La longueur du sel ne correspond pas à la longueur attendue',
      );
    });

    it('should create error with German translation', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidSaltLength,
        LanguageCodes.DE,
      );
      expect(error.message).toBe(
        'Die Salt-Länge entspricht nicht der erwarteten Länge',
      );
    });

    it('should create error with Spanish translation', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidSaltLength,
        LanguageCodes.ES,
      );
      expect(error.message).toBe(
        'La longitud del salt no coincide con la longitud esperada',
      );
    });

    it('should handle InvalidHashLength error type', () => {
      const error = new Pbkdf2Error(Pbkdf2ErrorType.InvalidHashLength);
      expect(error.message).toBe('Hash length does not match expected length');
    });

    it('should handle InvalidHashLength in French', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidHashLength,
        LanguageCodes.FR,
      );
      expect(error.message).toBe(
        'La longueur du hachage ne correspond pas à la longueur attendue',
      );
    });
  });

  describe('Error properties', () => {
    it('should be instanceof Error', () => {
      const error = new Pbkdf2Error(Pbkdf2ErrorType.InvalidSaltLength);
      expect(error instanceof Error).toBe(true);
    });

    it('should be instanceof Pbkdf2Error', () => {
      const error = new Pbkdf2Error(Pbkdf2ErrorType.InvalidSaltLength);
      expect(error instanceof Pbkdf2Error).toBe(true);
    });

    it('should have proper stack trace', () => {
      const error = new Pbkdf2Error(Pbkdf2ErrorType.InvalidSaltLength);
      expect(error.stack).toBeDefined();
      expect(error.stack).toContain('Pbkdf2Error');
    });

    it('should have correct name property', () => {
      const error = new Pbkdf2Error(Pbkdf2ErrorType.InvalidSaltLength);
      expect(error.name).toBe('Pbkdf2Error');
    });
  });

  describe('Translation printing', () => {
    it('should print translated message when converted to string', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidSaltLength,
        LanguageCodes.EN_US,
      );
      const errorString = String(error);
      expect(errorString).toContain(
        'Salt length does not match expected length',
      );
    });

    it('should print French translation when converted to string', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidHashLength,
        LanguageCodes.FR,
      );
      const errorString = error.toString();
      expect(errorString).toContain(
        'La longueur du hachage ne correspond pas à la longueur attendue',
      );
    });

    it('should print German translation when converted to string', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidSaltLength,
        LanguageCodes.DE,
      );
      expect(error.toString()).toContain(
        'Die Salt-Länge entspricht nicht der erwarteten Länge',
      );
    });

    it('should print Spanish translation when converted to string', () => {
      const error = new Pbkdf2Error(
        Pbkdf2ErrorType.InvalidHashLength,
        LanguageCodes.ES,
      );
      expect(error.toString()).toContain(
        'La longitud del hash no coincide con la longitud esperada',
      );
    });
  });

  describe('All Pbkdf2ErrorType values', () => {
    it('should handle all error types in English', () => {
      const saltError = new Pbkdf2Error(Pbkdf2ErrorType.InvalidSaltLength);
      const hashError = new Pbkdf2Error(Pbkdf2ErrorType.InvalidHashLength);

      expect(saltError.message).toBe(
        'Salt length does not match expected length',
      );
      expect(hashError.message).toBe(
        'Hash length does not match expected length',
      );
    });

    it('should handle all error types in multiple languages', () => {
      const languages = [
        LanguageCodes.EN_US,
        LanguageCodes.FR,
        LanguageCodes.DE,
        LanguageCodes.ES,
      ];

      languages.forEach((lang) => {
        const saltError = new Pbkdf2Error(
          Pbkdf2ErrorType.InvalidSaltLength,
          lang,
        );
        const hashError = new Pbkdf2Error(
          Pbkdf2ErrorType.InvalidHashLength,
          lang,
        );

        expect(saltError.message).toBeTruthy();
        expect(hashError.message).toBeTruthy();
        expect(saltError.message.length).toBeGreaterThan(0);
        expect(hashError.message.length).toBeGreaterThan(0);
      });
    });
  });
});
