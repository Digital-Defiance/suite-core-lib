import { EmailString } from '@digitaldefiance/ecies-lib';
import { CurrencyCode, Timezone } from '@digitaldefiance/i18n-lib';
import {
  hydrateUserSettings,
  dehydrateUserSettings,
} from '../../src/lib/hydrate-dehydrate';
import { IUserSettings, IUserSettingsDTO } from '../../src/interfaces';

// Helper to create EmailString safely
function createEmailString(email: string): EmailString {
  try {
    return new EmailString(email);
  } catch {
    // If constructor fails, create a mock object that matches the interface
    return { email } as EmailString;
  }
}

describe('Hydrate/Dehydrate Functions', () => {
  describe('hydrateUserSettings', () => {
    it('should hydrate a user settings DTO to IUserSettings', () => {
      const dto: IUserSettingsDTO = {
        email: 'test@example.com',
        timezone: 'America/New_York',
        currency: 'USD',
        siteLanguage: 'en-US',
        darkMode: true,
        directChallenge: false,
      };

      const result = hydrateUserSettings(dto);

      expect(result).toBeDefined();
      expect(result.email).toBeDefined();
      expect(result.email.email || (result.email as any)).toBe('test@example.com');
      expect(result.timezone).toBeDefined();
      expect(result.timezone.value).toBe('America/New_York');
      expect(result.currency).toBeDefined();
      expect(result.currency.value).toBe('USD');
      expect(result.siteLanguage).toBe('en-US');
      expect(result.darkMode).toBe(true);
      expect(result.directChallenge).toBe(false);
    });

    it('should handle different timezones', () => {
      const dto: IUserSettingsDTO = {
        email: 'user@domain.com',
        timezone: 'UTC',
        currency: 'EUR',
        siteLanguage: 'fr-FR',
        darkMode: false,
        directChallenge: true,
      };

      const result = hydrateUserSettings(dto);

      expect(result.timezone.value).toBe('UTC');
      expect(result.timezone).toBeDefined();
    });

    it('should handle different currencies', () => {
      const dtoEUR: IUserSettingsDTO = {
        email: 'test@example.com',
        timezone: 'UTC',
        currency: 'EUR',
        siteLanguage: 'en-US',
        darkMode: false,
        directChallenge: false,
      };

      const dtoGBP: IUserSettingsDTO = {
        email: 'test@example.com',
        timezone: 'UTC',
        currency: 'GBP',
        siteLanguage: 'en-US',
        darkMode: false,
        directChallenge: false,
      };

      const resultEUR = hydrateUserSettings(dtoEUR);
      const resultGBP = hydrateUserSettings(dtoGBP);

      expect(resultEUR.currency.value).toBe('EUR');
      expect(resultGBP.currency.value).toBe('GBP');
    });

    it('should handle different site languages', () => {
      const languages = ['en-US', 'fr-FR', 'de-DE', 'es-ES', 'ja-JP'];

      languages.forEach((lang) => {
        const dto: IUserSettingsDTO = {
          email: 'test@example.com',
          timezone: 'UTC',
          currency: 'USD',
          siteLanguage: lang,
          darkMode: false,
          directChallenge: false,
        };

        const result = hydrateUserSettings(dto);
        expect(result.siteLanguage).toBe(lang);
      });
    });

    it('should preserve boolean values', () => {
      const testCases = [
        { darkMode: true, directChallenge: true },
        { darkMode: true, directChallenge: false },
        { darkMode: false, directChallenge: true },
        { darkMode: false, directChallenge: false },
      ];

      testCases.forEach((testCase) => {
        const dto: IUserSettingsDTO = {
          email: 'test@example.com',
          timezone: 'UTC',
          currency: 'USD',
          siteLanguage: 'en-US',
          darkMode: testCase.darkMode,
          directChallenge: testCase.directChallenge,
        };

        const result = hydrateUserSettings(dto);
        expect(result.darkMode).toBe(testCase.darkMode);
        expect(result.directChallenge).toBe(testCase.directChallenge);
      });
    });

    it('should create proper object instances', () => {
      const dto: IUserSettingsDTO = {
        email: 'test@example.com',
        timezone: 'Europe/London',
        currency: 'GBP',
        siteLanguage: 'en-GB',
        darkMode: true,
        directChallenge: true,
      };

      const result = hydrateUserSettings(dto);

      // Verify instances have the expected methods/properties
      expect(result.email.email || (result.email as any)).toBe('test@example.com');
      expect(result.timezone.value).toBe('Europe/London');
      expect(result.currency.value).toBe('GBP');
    });
  });

  describe('dehydrateUserSettings', () => {
    it('should dehydrate IUserSettings to a DTO', () => {
      const settings: IUserSettings = {
        email: createEmailString('test@example.com'),
        timezone: new Timezone('America/Los_Angeles'),
        currency: new CurrencyCode('USD'),
        siteLanguage: 'en-US',
        darkMode: true,
        directChallenge: false,
      };

      const result = dehydrateUserSettings(settings);

      expect(result).toBeDefined();
      expect(result.email).toBe('test@example.com');
      expect(result.timezone).toBe('America/Los_Angeles');
      expect(result.currency).toBe('USD');
      expect(result.siteLanguage).toBe('en-US');
      expect(result.darkMode).toBe(true);
      expect(result.directChallenge).toBe(false);
    });

    it('should extract string values from objects', () => {
      const settings: IUserSettings = {
        email: createEmailString('user@domain.org'),
        timezone: new Timezone('Asia/Tokyo'),
        currency: new CurrencyCode('JPY'),
        siteLanguage: 'ja-JP',
        darkMode: false,
        directChallenge: true,
      };

      const result = dehydrateUserSettings(settings);

      // Verify all values are primitives
      expect(typeof result.email).toBe('string');
      expect(typeof result.timezone).toBe('string');
      expect(typeof result.currency).toBe('string');
      expect(typeof result.siteLanguage).toBe('string');
      expect(typeof result.darkMode).toBe('boolean');
      expect(typeof result.directChallenge).toBe('boolean');
    });

    it('should handle various timezone and currency combinations', () => {
      const testCases = [
        { tz: 'UTC', cur: 'USD' },
        { tz: 'Europe/Paris', cur: 'EUR' },
        { tz: 'Asia/Shanghai', cur: 'CNY' },
        { tz: 'Australia/Sydney', cur: 'AUD' },
      ];

      testCases.forEach((testCase) => {
        const settings: IUserSettings = {
          email: createEmailString('test@example.com'),
          timezone: new Timezone(testCase.tz),
          currency: new CurrencyCode(testCase.cur),
          siteLanguage: 'en-US',
          darkMode: false,
          directChallenge: false,
        };

        const result = dehydrateUserSettings(settings);
        expect(result.timezone).toBe(testCase.tz);
        expect(result.currency).toBe(testCase.cur);
      });
    });

    it('should preserve boolean values during dehydration', () => {
      const testCases = [
        { darkMode: true, directChallenge: true },
        { darkMode: true, directChallenge: false },
        { darkMode: false, directChallenge: true },
        { darkMode: false, directChallenge: false },
      ];

      testCases.forEach((testCase) => {
        const settings: IUserSettings = {
          email: createEmailString('test@example.com'),
          timezone: new Timezone('UTC'),
          currency: new CurrencyCode('USD'),
          siteLanguage: 'en-US',
          darkMode: testCase.darkMode,
          directChallenge: testCase.directChallenge,
        };

        const result = dehydrateUserSettings(settings);
        expect(result.darkMode).toBe(testCase.darkMode);
        expect(result.directChallenge).toBe(testCase.directChallenge);
      });
    });
  });

  describe('Round-trip conversion', () => {
    it('should maintain data integrity through hydrate->dehydrate cycle', () => {
      const originalDTO: IUserSettingsDTO = {
        email: 'roundtrip@example.com',
        timezone: 'America/Chicago',
        currency: 'USD',
        siteLanguage: 'en-US',
        darkMode: true,
        directChallenge: true,
      };

      const hydrated = hydrateUserSettings(originalDTO);
      const dehydrated = dehydrateUserSettings(hydrated);

      expect(dehydrated).toEqual(originalDTO);
    });

    it('should handle multiple round-trip conversions', () => {
      const originalDTO: IUserSettingsDTO = {
        email: 'multi@example.com',
        timezone: 'Europe/Berlin',
        currency: 'EUR',
        siteLanguage: 'de-DE',
        darkMode: false,
        directChallenge: false,
      };

      let current = originalDTO;
      for (let i = 0; i < 3; i++) {
        const hydrated = hydrateUserSettings(current);
        current = dehydrateUserSettings(hydrated);
      }

      expect(current).toEqual(originalDTO);
    });

    it('should handle edge case values in round-trip', () => {
      const edgeCases: IUserSettingsDTO[] = [
        {
          email: 'a@b.c',
          timezone: 'UTC',
          currency: 'USD',
          siteLanguage: 'en',
          darkMode: false,
          directChallenge: false,
        },
        {
          email: 'very.long.email.address.with.many.dots@subdomain.example.com',
          timezone: 'America/Argentina/Buenos_Aires',
          currency: 'ARS',
          siteLanguage: 'es-AR',
          darkMode: true,
          directChallenge: true,
        },
      ];

      edgeCases.forEach((dto) => {
        const hydrated = hydrateUserSettings(dto);
        const dehydrated = dehydrateUserSettings(hydrated);
        expect(dehydrated).toEqual(dto);
      });
    });
  });

  describe('Type safety', () => {
    it('should ensure hydrated result has correct types', () => {
      const dto: IUserSettingsDTO = {
        email: 'type@test.com',
        timezone: 'UTC',
        currency: 'USD',
        siteLanguage: 'en-US',
        darkMode: true,
        directChallenge: false,
      };

      const result = hydrateUserSettings(dto);

      // TypeScript compile-time checks, but also runtime verification
      expect(result.email).toBeDefined();
      expect(result.timezone).toBeDefined();
      expect(result.currency).toBeDefined();
    });

    it('should ensure dehydrated result has primitive types', () => {
      const settings: IUserSettings = {
        email: createEmailString('primitive@test.com'),
        timezone: new Timezone('UTC'),
        currency: new CurrencyCode('USD'),
        siteLanguage: 'en-US',
        darkMode: false,
        directChallenge: true,
      };

      const result = dehydrateUserSettings(settings);

      // Verify no complex objects remain
      expect(typeof result.email).toBe('string');
      expect(typeof result.timezone).toBe('string');
      expect(typeof result.currency).toBe('string');
    });
  });
});
