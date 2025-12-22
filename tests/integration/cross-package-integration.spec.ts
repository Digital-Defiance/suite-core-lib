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

/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */

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
    { instanceKey: `test-${i18nCounter++}` },
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
      const mnemonic = ecies.generateNewMnemonic() as string;
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic) as {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
      };

      const message = new Uint8Array([1, 2, 3, 4, 5]);
      const encrypted = (await ecies.encryptSimple(
        keyPair.publicKey,
        message,
      )) as Uint8Array;
      const decrypted = (await ecies.decryptSimple(
        keyPair.privateKey,
        encrypted,
      )) as Uint8Array;

      expect(decrypted).toEqual(message);
    });

    it('should handle ecies-lib errors properly', async () => {
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic() as string;
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic) as {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
      };

      const invalidData = new Uint8Array([1, 2, 3]);

      await expect(
        ecies.decryptSimple(
          keyPair.privateKey,
          invalidData,
        ) as Promise<Uint8Array>,
      ).rejects.toThrow();
    });

    it('should support multiple encryption modes from ecies-lib', async () => {
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic() as string;
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic) as {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
      };
      const message = new Uint8Array([1, 2, 3, 4, 5]);

      // Simple mode
      const simpleEncrypted = (await ecies.encryptSimple(
        keyPair.publicKey,
        message,
      )) as Uint8Array;
      const simpleDecrypted = (await ecies.decryptSimple(
        keyPair.privateKey,
        simpleEncrypted,
      )) as Uint8Array;
      expect(simpleDecrypted).toEqual(message);

      // Single recipient mode
      const recipientId = new Uint8Array(12);
      crypto.getRandomValues(recipientId);
      const singleEncrypted = (await ecies.encryptSingle(
        recipientId,
        keyPair.publicKey,
        message,
      )) as Uint8Array;
      const singleDecrypted = (await ecies.decryptSingle(
        recipientId,
        keyPair.privateKey,
        singleEncrypted,
      )) as Uint8Array;
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

      const engine = new I18nEngine(languages) as I18nEngine;
      expect(engine).toBeDefined();
      expect((engine.getCurrentLanguage as () => string)()).toBe('en-US');
    });

    it('should handle i18n-lib language switching', () => {
      const languages = [
        { id: 'en-US', name: 'English (US)', code: 'en-US', isDefault: true },
        { id: 'es', name: 'Spanish', code: 'es' },
        { id: 'fr', name: 'French', code: 'fr' },
      ];

      // Create engine to initialize language registry
      new I18nEngine(languages) as I18nEngine;

      // Should support multiple languages
      expect((LanguageRegistry.has as (code: string) => boolean)('en-US')).toBe(
        true,
      );
      expect((LanguageRegistry.has as (code: string) => boolean)('es')).toBe(
        true,
      );
      expect((LanguageRegistry.has as (code: string) => boolean)('fr')).toBe(
        true,
      );
      expect((LanguageRegistry.has as (code: string) => boolean)('de')).toBe(
        false,
      );
    });

    it('should integrate i18n-lib with error messages', () => {
      const engine = createI18nEngine() as I18nEngine;

      // Should be able to use i18n for error messages
      expect((engine.getCurrentLanguage as () => string)()).toBe('en-US');
    });
  });

  describe('Combined Integration: ecies-lib + i18n-lib', () => {
    it('should use both libraries together', async () => {
      // Set up i18n
      const i18n = createI18nEngine(['es']);

      // Set up ecies
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic() as string;
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic) as {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
      };

      // Use both together
      const message = new Uint8Array([1, 2, 3, 4, 5]);
      const encrypted = (await ecies.encryptSimple(
        keyPair.publicKey,
        message,
      )) as Uint8Array;
      const decrypted = (await ecies.decryptSimple(
        keyPair.privateKey,
        encrypted,
      )) as Uint8Array;

      expect(decrypted).toEqual(message);
      expect((i18n.getCurrentLanguage as () => string)()).toBe('en-US');
    });

    it('should handle errors from both libraries', async () => {
      const i18n = createI18nEngine(['es']) as I18nEngine;

      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic() as string;
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic) as {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
      };

      const invalidData = new Uint8Array([1, 2, 3]);

      // Should handle ecies errors
      await expect(
        ecies.decryptSimple(keyPair.privateKey, invalidData),
      ).rejects.toThrow();

      // i18n should still work
      expect((i18n.getCurrentLanguage as () => string)()).toBe('en-US');
    });
  });

  describe('Type compatibility', () => {
    it('should have compatible types across packages', () => {
      // Verify that types from different packages work together
      const ecies = createECIESService();
      const i18n = createI18nEngine(['es']) as I18nEngine;

      expect(ecies).toBeDefined();
      expect(i18n).toBeDefined();
    });
  });

  describe('Dependency version compatibility', () => {
    it('should work with current versions of dependencies', async () => {
      // This test ensures that the current versions of ecies-lib and i18n-lib
      // work correctly with suite-core-lib
      const ecies = createECIESService();
      const mnemonic = ecies.generateNewMnemonic() as string;
      const keyPair = ecies.mnemonicToSimpleKeyPair(mnemonic) as {
        privateKey: Uint8Array;
        publicKey: Uint8Array;
      };

      const message = new Uint8Array([1, 2, 3, 4, 5]);
      const encrypted = (await ecies.encryptSimple(
        keyPair.publicKey,
        message,
      )) as Uint8Array;
      const decrypted = (await ecies.decryptSimple(
        keyPair.privateKey,
        encrypted,
      )) as Uint8Array;

      expect(decrypted).toEqual(message);

      const i18n = createI18nEngine(['es']);
      expect(i18n.getCurrentLanguage()).toBe('en-US');
    });
  });
});
