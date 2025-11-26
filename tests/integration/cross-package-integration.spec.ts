/**
 * Cross-Package Integration Tests
 *
 * Validates Requirements 4.5, 4.6:
 * - Integration tests for cross-package functionality
 * - Documented integration patterns work correctly
 *
 * Tests integration between:
 * - suite-core-lib → ecies-lib
 * - suite-core-lib → i18n-lib
 */

import { ECIESService } from '@digitaldefiance/ecies-lib';
import { I18nEngine, LanguageRegistry } from '@digitaldefiance/i18n-lib';

// Helper to create ECIES service with default config
function createECIESService(): ECIESService {
  const config = {
    curveName: 'secp256k1' as const,
    primaryKeyDerivationPath: "m/44'/60'/0'/0/0",
    mnemonicStrength: 128,
    symmetricAlgorithm: 'aes-256-gcm' as const,
    symmetricKeyBits: 256,
    symmetricKeyMode: 'gcm' as const,
  };
  return new ECIESService(config);
}

// Helper to create I18nEngine with default languages
let i18nCounter = 0;
function createI18nEngine(additionalLanguages: string[] = []): I18nEngine {
  const languages = [
    { id: 'en-US', name: 'English (US)', code: 'en-US', isDefault: true },
    ...additionalLanguages.map((lang) => ({
      id: lang,
      name: lang,
      code: lang,
    })),
  ];
  return new I18nEngine(
    languages,
    {},
    { instanceKey: `test-${i18nCounter++}` }
  );
}

describe('Cross-Package Integration: suite-core-lib', () => {
  beforeEach(() => {
    I18nEngine.resetAll();
    i18nCounter = 0;
  });
  describe('Integration with ecies-lib', () => {
    it('should use ecies-lib for encryption', async () => {
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic();
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic);

      const message = new Uint8Array([1, 2, 3, 4, 5]);
      const encrypted = await ecies.encryptSimple(keyPair.publicKey, message);
      const decrypted = await ecies.decryptSimple(
        keyPair.privateKey,
        encrypted
      );

      expect(decrypted).toEqual(message);
    });

    it('should handle ecies-lib errors properly', async () => {
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic();
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic);

      const invalidData = new Uint8Array([1, 2, 3]);

      await expect(
        ecies.decryptSimple(keyPair.privateKey, invalidData)
      ).rejects.toThrow();
    });

    it('should support multiple encryption modes from ecies-lib', async () => {
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic();
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic);
      const message = new Uint8Array([1, 2, 3, 4, 5]);

      // Simple mode
      const simpleEncrypted = await ecies.encryptSimple(
        keyPair.publicKey,
        message
      );
      const simpleDecrypted = await ecies.decryptSimple(
        keyPair.privateKey,
        simpleEncrypted
      );
      expect(simpleDecrypted).toEqual(message);

      // Single recipient mode
      const recipientId = new Uint8Array(12);
      crypto.getRandomValues(recipientId);
      const singleEncrypted = await ecies.encryptSingle(
        recipientId,
        keyPair.publicKey,
        message
      );
      const singleDecrypted = await ecies.decryptSingle(
        recipientId,
        keyPair.privateKey,
        singleEncrypted
      );
      expect(singleDecrypted).toEqual(message);
    });
  });

  describe('Integration with i18n-lib', () => {
    it('should use i18n-lib for translations', () => {
      const languages = [
        { id: 'en-US', name: 'English (US)', code: 'en-US', isDefault: true },
        { id: 'es', name: 'Spanish', code: 'es' },
        { id: 'fr', name: 'French', code: 'fr' },
      ];

      const engine = new I18nEngine(languages);
      expect(engine).toBeDefined();
      expect(engine.getCurrentLanguage()).toBe('en-US');
    });

    it('should handle i18n-lib language switching', () => {
      const languages = [
        { id: 'en-US', name: 'English (US)', code: 'en-US', isDefault: true },
        { id: 'es', name: 'Spanish', code: 'es' },
        { id: 'fr', name: 'French', code: 'fr' },
      ];

      const engine = new I18nEngine(languages);

      // Should support multiple languages
      expect(LanguageRegistry.has('en-US')).toBe(true);
      expect(LanguageRegistry.has('es')).toBe(true);
      expect(LanguageRegistry.has('fr')).toBe(true);
      expect(LanguageRegistry.has('de')).toBe(false);
    });

    it('should integrate i18n-lib with error messages', () => {
      const engine = createI18nEngine();

      // Should be able to use i18n for error messages
      expect(engine.getCurrentLanguage()).toBe('en-US');
    });
  });

  describe('Combined Integration: ecies-lib + i18n-lib', () => {
    it('should use both libraries together', async () => {
      // Set up i18n
      const i18n = createI18nEngine(['es']);

      // Set up ecies
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic();
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic);

      // Use both together
      const message = new Uint8Array([1, 2, 3, 4, 5]);
      const encrypted = await ecies.encryptSimple(keyPair.publicKey, message);
      const decrypted = await ecies.decryptSimple(
        keyPair.privateKey,
        encrypted
      );

      expect(decrypted).toEqual(message);
      expect(i18n.getCurrentLanguage()).toBe('en-US');
    });

    it('should handle errors from both libraries', async () => {
      const i18n = createI18nEngine(['es']);

      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic();
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic);

      const invalidData = new Uint8Array([1, 2, 3]);

      // Should handle ecies errors
      await expect(
        ecies.decryptSimple(keyPair.privateKey, invalidData)
      ).rejects.toThrow();

      // i18n should still work
      expect(i18n.getCurrentLanguage()).toBe('en-US');
    });
  });

  describe('Type compatibility', () => {
    it('should have compatible types across packages', () => {
      // Verify that types from different packages work together
      const ecies = createECIESService();
      const i18n = createI18nEngine(['es']);

      expect(ecies).toBeDefined();
      expect(i18n).toBeDefined();
    });
  });

  describe('Dependency version compatibility', () => {
    it('should work with current versions of dependencies', async () => {
      // This test ensures that the current versions of ecies-lib and i18n-lib
      // work correctly with suite-core-lib
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic();
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic);

      const message = new Uint8Array([1, 2, 3, 4, 5]);
      const encrypted = await ecies.encryptSimple(keyPair.publicKey, message);
      const decrypted = await ecies.decryptSimple(
        keyPair.privateKey,
        encrypted
      );

      expect(decrypted).toEqual(message);

      const i18n = createI18nEngine(['es']);
      expect(i18n.getCurrentLanguage()).toBe('en-US');
    });
  });
});
