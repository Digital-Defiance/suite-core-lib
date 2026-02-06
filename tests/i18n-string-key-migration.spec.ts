/**
 * Integration tests for Suite Core i18n string key migration
 *
 * These tests verify that the Suite Core library's i18n-setup correctly uses
 * the new string key enum registration and translation methods.
 *
 * **Validates: Requirements 8.2, 8.3, 8.4**
 * - 8.2: THE `getSuiteCoreTranslation` function SHALL be updated to use `translateStringKey`
 * - 8.3: THE `safeGetSuiteCoreTranslation` function SHALL be updated to use `safeTranslateStringKey`
 * - 8.4: THE existing API signatures for `getSuiteCoreTranslation` and `safeGetSuiteCoreTranslation` SHALL remain backward compatible
 */

import { I18nEngine, LanguageCodes } from '@digitaldefiance/i18n-lib';
import {
  SuiteCoreStringKey,
  SuiteCoreStringKeyValue,
} from '../src/enumerations/suite-core-string-key';
import {
  getSuiteCoreI18nEngine,
  getSuiteCoreTranslation,
  resetSuiteCoreI18nEngine,
  safeGetSuiteCoreTranslation,
  SuiteCoreComponentId,
} from '../src/i18n-setup';

describe('Suite Core i18n String Key Migration', () => {
  beforeEach(() => {
    // Reset engine state before each test
    I18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  afterEach(() => {
    // Clean up after each test
    I18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  describe('String Key Enum Registration', () => {
    it('should register SuiteCoreStringKey enum during engine initialization', () => {
      const engine = getSuiteCoreI18nEngine();

      // Verify the enum is registered
      expect(engine.hasStringKeyEnum(SuiteCoreStringKey)).toBe(true);
    });

    it('should extract correct component ID from SuiteCoreStringKey', () => {
      const engine = getSuiteCoreI18nEngine();

      // Get all registered string key enums
      const registeredEnums = engine.getStringKeyEnums();

      // Find the Suite Core enum entry
      const suiteCoreEntry = registeredEnums.find(
        (entry) => entry.enumObj === SuiteCoreStringKey,
      );

      expect(suiteCoreEntry).toBeDefined();
      expect(suiteCoreEntry?.componentId).toBe(SuiteCoreComponentId);
    });

    it('should allow idempotent registration of SuiteCoreStringKey', () => {
      const engine = getSuiteCoreI18nEngine();

      // Register again - should not throw
      expect(() =>
        engine.registerStringKeyEnum(SuiteCoreStringKey),
      ).not.toThrow();

      // Should still have exactly one entry for Suite Core
      const registeredEnums = engine.getStringKeyEnums();
      const suiteCoreEntries = registeredEnums.filter(
        (entry) => entry.componentId === SuiteCoreComponentId,
      );

      expect(suiteCoreEntries.length).toBe(1);
    });
  });

  describe('getSuiteCoreTranslation - Requirement 8.2', () => {
    it('should translate string keys correctly using translateStringKey', () => {
      // Initialize engine
      getSuiteCoreI18nEngine();

      // Test translation of a known key
      const translation = getSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
      );

      expect(translation).toBeDefined();
      expect(translation).toBe('User account not found');
    });

    it('should translate string keys with variables', () => {
      getSuiteCoreI18nEngine();

      const translation = getSuiteCoreTranslation(
        SuiteCoreStringKey.TestUsernameTemplate,
        { user: 'testuser' },
      );

      expect(translation).toContain('testuser');
      expect(translation).not.toContain('{user}');
    });

    it('should translate string keys with explicit language parameter', () => {
      getSuiteCoreI18nEngine();

      // Test Spanish translation
      const spanishTranslation = getSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
        undefined,
        LanguageCodes.ES,
      );

      expect(spanishTranslation).toBe('Cuenta de usuario no encontrada');

      // Test French translation
      const frenchTranslation = getSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
        undefined,
        LanguageCodes.FR,
      );

      expect(frenchTranslation).toBe('Compte utilisateur introuvable');
    });

    it('should produce same result as direct engine.translate call', () => {
      const engine = getSuiteCoreI18nEngine();
      const stringKey = SuiteCoreStringKey.Auth_AccountLocked;

      // Using the wrapper function
      const wrapperResult = getSuiteCoreTranslation(stringKey);

      // Using direct translate call
      const directResult = engine.translate(
        SuiteCoreComponentId,
        stringKey,
        undefined,
        LanguageCodes.EN_US,
      );

      expect(wrapperResult).toBe(directResult);
    });
  });

  describe('safeGetSuiteCoreTranslation - Requirement 8.3', () => {
    it('should safely translate string keys using safeTranslateStringKey', () => {
      getSuiteCoreI18nEngine();

      const translation = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
      );

      expect(translation).toBeDefined();
      expect(translation).toBe('User account not found');
    });

    it('should safely translate string keys with variables', () => {
      getSuiteCoreI18nEngine();

      const translation = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.TestItemCountTemplate,
        { count: '100' },
      );

      expect(translation).toContain('100');
      expect(translation).not.toContain('{count}');
    });

    it('should safely translate string keys with explicit language parameter', () => {
      getSuiteCoreI18nEngine();

      const germanTranslation = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
        undefined,
        LanguageCodes.DE,
      );

      expect(germanTranslation).toBeDefined();
      expect(germanTranslation.length).toBeGreaterThan(0);
      // German translation should be different from English
      expect(germanTranslation).not.toBe('User account not found');
    });

    it('should produce same result as direct engine.safeTranslate call', () => {
      const engine = getSuiteCoreI18nEngine();
      const stringKey = SuiteCoreStringKey.Auth_TokenExpired;

      // Using the wrapper function
      const wrapperResult = safeGetSuiteCoreTranslation(stringKey);

      // Using direct safeTranslate call
      const directResult = engine.safeTranslate(
        SuiteCoreComponentId,
        stringKey,
        undefined,
        LanguageCodes.EN_US,
      );

      expect(wrapperResult).toBe(directResult);
    });

    it('should not throw for valid translations', () => {
      getSuiteCoreI18nEngine();

      expect(() => {
        safeGetSuiteCoreTranslation(SuiteCoreStringKey.Auth_UserNotFound);
      }).not.toThrow();
    });
  });

  describe('Backward Compatibility - Requirement 8.4', () => {
    it('should maintain getSuiteCoreTranslation signature: (stringKey)', () => {
      getSuiteCoreI18nEngine();

      // Single argument call should work
      const result = getSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_InvalidToken,
      );

      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('should maintain getSuiteCoreTranslation signature: (stringKey, variables)', () => {
      getSuiteCoreI18nEngine();

      // Two argument call should work
      const result = getSuiteCoreTranslation(
        SuiteCoreStringKey.TestUsernameTemplate,
        { user: 'admin' },
      );

      expect(result).toBeDefined();
      expect(result).toContain('admin');
    });

    it('should maintain getSuiteCoreTranslation signature: (stringKey, variables, language)', () => {
      getSuiteCoreI18nEngine();

      // Three argument call should work
      const result = getSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
        undefined,
        LanguageCodes.ES,
      );

      expect(result).toBeDefined();
      expect(result).toBe('Cuenta de usuario no encontrada');
    });

    it('should maintain safeGetSuiteCoreTranslation signature: (stringKey)', () => {
      getSuiteCoreI18nEngine();

      // Single argument call should work
      const result = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_InvalidToken,
      );

      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('should maintain safeGetSuiteCoreTranslation signature: (stringKey, variables)', () => {
      getSuiteCoreI18nEngine();

      // Two argument call should work
      const result = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.TestItemCountTemplate,
        { count: '50' },
      );

      expect(result).toBeDefined();
      expect(result).toContain('50');
    });

    it('should maintain safeGetSuiteCoreTranslation signature: (stringKey, variables, language)', () => {
      getSuiteCoreI18nEngine();

      // Three argument call should work
      const result = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.Auth_UserNotFound,
        undefined,
        LanguageCodes.FR,
      );

      expect(result).toBeDefined();
      expect(result).toBe('Compte utilisateur introuvable');
    });

    it('should accept numeric variables in both functions', () => {
      getSuiteCoreI18nEngine();

      // Test with numeric variables (common use case)
      const getResult = getSuiteCoreTranslation(
        SuiteCoreStringKey.TestItemCountTemplate,
        { count: 42 },
      );

      const safeResult = safeGetSuiteCoreTranslation(
        SuiteCoreStringKey.TestItemCountTemplate,
        { count: 42 },
      );

      expect(getResult).toContain('42');
      expect(safeResult).toContain('42');
    });
  });

  describe('Translation Consistency', () => {
    it('should translate all Suite Core string keys without errors', () => {
      getSuiteCoreI18nEngine();

      const stringKeys = Object.values(SuiteCoreStringKey);

      stringKeys.forEach((key: SuiteCoreStringKeyValue) => {
        expect(() => {
          const translation: string = getSuiteCoreTranslation(key);
          expect(translation).toBeDefined();
          expect(translation.length).toBeGreaterThan(0);
        }).not.toThrow();
      });
    });

    it('should safely translate all Suite Core string keys without errors', () => {
      getSuiteCoreI18nEngine();

      const stringKeys = Object.values(SuiteCoreStringKey);

      stringKeys.forEach((key: SuiteCoreStringKeyValue) => {
        expect(() => {
          const translation: string = safeGetSuiteCoreTranslation(key);
          expect(translation).toBeDefined();
          expect(translation.length).toBeGreaterThan(0);
        }).not.toThrow();
      });
    });

    it('should translate consistently across multiple calls', () => {
      getSuiteCoreI18nEngine();

      const key = SuiteCoreStringKey.Auth_UserNotFound;

      const result1 = getSuiteCoreTranslation(key);
      const result2 = getSuiteCoreTranslation(key);
      const result3 = safeGetSuiteCoreTranslation(key);

      expect(result1).toBe(result2);
      expect(result2).toBe(result3);
    });
  });

  describe('Multi-Language Support', () => {
    const supportedLanguages = [
      LanguageCodes.EN_US,
      LanguageCodes.EN_GB,
      LanguageCodes.FR,
      LanguageCodes.ES,
      LanguageCodes.DE,
      LanguageCodes.ZH_CN,
      LanguageCodes.JA,
      LanguageCodes.UK,
    ];

    it('should translate using getSuiteCoreTranslation in all supported languages', () => {
      getSuiteCoreI18nEngine();

      supportedLanguages.forEach((lang) => {
        const translation = getSuiteCoreTranslation(
          SuiteCoreStringKey.Auth_UserNotFound,
          undefined,
          lang,
        );

        expect(translation).toBeDefined();
        expect(translation.length).toBeGreaterThan(0);
        // Should not return the raw key
        expect(translation).not.toBe('Auth_UserNotFound');
      });
    });

    it('should translate using safeGetSuiteCoreTranslation in all supported languages', () => {
      getSuiteCoreI18nEngine();

      supportedLanguages.forEach((lang) => {
        const translation = safeGetSuiteCoreTranslation(
          SuiteCoreStringKey.Auth_UserNotFound,
          undefined,
          lang,
        );

        expect(translation).toBeDefined();
        expect(translation.length).toBeGreaterThan(0);
        // Should not return the raw key
        expect(translation).not.toBe('Auth_UserNotFound');
      });
    });
  });
});
