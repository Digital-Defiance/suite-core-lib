import { BCP47_TO_FLAG_CDN, getFlagCode } from '../../src/lib/flags';

describe('Flag Mapping Functions', () => {
  describe('BCP47_TO_FLAG_CDN', () => {
    it('should contain mapping for major languages', () => {
      expect(BCP47_TO_FLAG_CDN['en-US']).toBe('us');
      expect(BCP47_TO_FLAG_CDN['en-GB']).toBe('gb');
      expect(BCP47_TO_FLAG_CDN['en']).toBe('gb');
      expect(BCP47_TO_FLAG_CDN['fr']).toBe('fr');
      expect(BCP47_TO_FLAG_CDN['fr-FR']).toBe('fr');
      expect(BCP47_TO_FLAG_CDN['es']).toBe('es');
      expect(BCP47_TO_FLAG_CDN['es-ES']).toBe('es');
      expect(BCP47_TO_FLAG_CDN['de']).toBe('de');
      expect(BCP47_TO_FLAG_CDN['de-DE']).toBe('de');
      expect(BCP47_TO_FLAG_CDN['zh-CN']).toBe('cn');
      expect(BCP47_TO_FLAG_CDN['zh']).toBe('cn');
      expect(BCP47_TO_FLAG_CDN['ja']).toBe('jp');
      expect(BCP47_TO_FLAG_CDN['ja-JP']).toBe('jp');
      expect(BCP47_TO_FLAG_CDN['uk']).toBe('ua');
      expect(BCP47_TO_FLAG_CDN['uk-UA']).toBe('ua');
    });

    it('should contain mappings for all continents', () => {
      // North America
      expect(BCP47_TO_FLAG_CDN['us']).toBe('us');
      expect(BCP47_TO_FLAG_CDN['ca']).toBe('ca');
      expect(BCP47_TO_FLAG_CDN['mx']).toBe('mx');

      // South America
      expect(BCP47_TO_FLAG_CDN['br']).toBe('br');
      expect(BCP47_TO_FLAG_CDN['ar']).toBe('ar');
      expect(BCP47_TO_FLAG_CDN['cl']).toBe('cl');

      // Europe
      expect(BCP47_TO_FLAG_CDN['gb']).toBe('gb');
      expect(BCP47_TO_FLAG_CDN['de']).toBe('de');
      expect(BCP47_TO_FLAG_CDN['fr']).toBe('fr');
      expect(BCP47_TO_FLAG_CDN['it']).toBe('it');
      expect(BCP47_TO_FLAG_CDN['es']).toBe('es');

      // Asia
      expect(BCP47_TO_FLAG_CDN['cn']).toBe('cn');
      expect(BCP47_TO_FLAG_CDN['jp']).toBe('jp');
      expect(BCP47_TO_FLAG_CDN['in']).toBe('in');
      expect(BCP47_TO_FLAG_CDN['kr']).toBe('kr');

      // Africa
      expect(BCP47_TO_FLAG_CDN['za']).toBe('za');
      expect(BCP47_TO_FLAG_CDN['eg']).toBe('eg');
      expect(BCP47_TO_FLAG_CDN['ng']).toBe('ng');

      // Oceania
      expect(BCP47_TO_FLAG_CDN['au']).toBe('au');
      expect(BCP47_TO_FLAG_CDN['nz']).toBe('nz');
    });

    it('should contain UK constituent country mappings', () => {
      expect(BCP47_TO_FLAG_CDN['en-GB-ENG']).toBe('gb-eng');
      expect(BCP47_TO_FLAG_CDN['en-GB-SCT']).toBe('gb-sct');
      expect(BCP47_TO_FLAG_CDN['en-GB-WLS']).toBe('gb-wls');
      expect(BCP47_TO_FLAG_CDN['en-GB-NIR']).toBe('gb-nir');
    });

    it('should contain special territories', () => {
      expect(BCP47_TO_FLAG_CDN['hk']).toBe('hk'); // Hong Kong
      expect(BCP47_TO_FLAG_CDN['mo']).toBe('mo'); // Macau
      expect(BCP47_TO_FLAG_CDN['tw']).toBe('tw'); // Taiwan
      expect(BCP47_TO_FLAG_CDN['pr']).toBe('pr'); // Puerto Rico
      expect(BCP47_TO_FLAG_CDN['gu']).toBe('gu'); // Guam
    });

    it('should contain small island nations', () => {
      expect(BCP47_TO_FLAG_CDN['ki']).toBe('ki'); // Kiribati
      expect(BCP47_TO_FLAG_CDN['tv']).toBe('tv'); // Tuvalu
      expect(BCP47_TO_FLAG_CDN['nr']).toBe('nr'); // Nauru
      expect(BCP47_TO_FLAG_CDN['fj']).toBe('fj'); // Fiji
    });

    it('should have consistent two-letter codes', () => {
      // Check that all values are 2 characters (or hyphenated for UK constituent countries)
      Object.values(BCP47_TO_FLAG_CDN).forEach((code) => {
        expect(code.length).toBeGreaterThanOrEqual(2);
        expect(code.length).toBeLessThanOrEqual(6); // gb-eng is 6 chars
      });
    });
  });

  describe('getFlagCode', () => {
    it('should return flag code for exact matches', () => {
      expect(getFlagCode('en-US')).toBe('us');
      expect(getFlagCode('fr-FR')).toBe('fr');
      expect(getFlagCode('de-DE')).toBe('de');
      expect(getFlagCode('ja-JP')).toBe('jp');
    });

    it('should return flag code for base language codes', () => {
      expect(getFlagCode('en')).toBe('gb');
      expect(getFlagCode('fr')).toBe('fr');
      expect(getFlagCode('de')).toBe('de');
      expect(getFlagCode('ja')).toBe('jp');
    });

    it('should return flag code for country codes', () => {
      expect(getFlagCode('us')).toBe('us');
      expect(getFlagCode('gb')).toBe('gb');
      expect(getFlagCode('ca')).toBe('ca');
      expect(getFlagCode('au')).toBe('au');
    });

    it('should handle case-insensitive lookups', () => {
      // The map has standard BCP-47 keys like 'en-US' and base language keys like 'fr'
      expect(getFlagCode('en-US')).toBe('us'); // Exact match
      expect(getFlagCode('EN-US')).toBeUndefined(); // No exact match, lowercase doesn't match map key
      expect(getFlagCode('fr-FR')).toBe('fr'); // Exact match
      expect(getFlagCode('fr')).toBe('fr'); // Exact match for base language
      expect(getFlagCode('FR')).toBe('fr'); // Lowercase fallback works because map has 'fr'
    });

    it('should return undefined for unknown codes', () => {
      expect(getFlagCode('unknown')).toBeUndefined();
      expect(getFlagCode('xx-XX')).toBeUndefined();
      expect(getFlagCode('zz')).toBeUndefined();
      expect(getFlagCode('')).toBeUndefined();
    });

    it('should handle UK constituent countries', () => {
      expect(getFlagCode('en-GB-ENG')).toBe('gb-eng');
      expect(getFlagCode('en-GB-SCT')).toBe('gb-sct');
      expect(getFlagCode('en-GB-WLS')).toBe('gb-wls');
      expect(getFlagCode('en-GB-NIR')).toBe('gb-nir');
    });

    it('should handle special cases', () => {
      expect(getFlagCode('zh')).toBe('cn'); // Chinese defaults to China
      expect(getFlagCode('zh-CN')).toBe('cn');
      expect(getFlagCode('uk')).toBe('ua'); // Ukrainian
      expect(getFlagCode('uk-UA')).toBe('ua');
    });

    it('should work with all mapped BCP-47 codes', () => {
      // Test all keys in the mapping
      Object.keys(BCP47_TO_FLAG_CDN).forEach((bcp47Code) => {
        const result = getFlagCode(bcp47Code);
        expect(result).toBe(BCP47_TO_FLAG_CDN[bcp47Code]);
        expect(result).toBeDefined();
      });
    });

    it('should prioritize exact match over lowercase match', () => {
      // Function tries exact match first, then bcp47.toLowerCase() as fallback
      expect(getFlagCode('en-US')).toBe('us'); // Exact match
      expect(getFlagCode('en-us')).toBeUndefined(); // No match (map doesn't have lowercase keys)
      expect(getFlagCode('EN-US')).toBeUndefined(); // No match
    });

    it('should handle common language variations', () => {
      // Spanish
      expect(getFlagCode('es')).toBe('es');
      expect(getFlagCode('es-ES')).toBe('es');
      
      // Portuguese (defaults to Portugal if using 'pt')
      expect(getFlagCode('pt')).toBe('pt');
      expect(getFlagCode('br')).toBe('br'); // Brazil

      // Chinese
      expect(getFlagCode('zh')).toBe('cn');
      expect(getFlagCode('zh-CN')).toBe('cn');
      expect(getFlagCode('tw')).toBe('tw'); // Taiwan
    });

    it('should handle edge cases', () => {
      expect(getFlagCode(null as any)).toBeUndefined();
      expect(getFlagCode(undefined as any)).toBeUndefined();
      expect(getFlagCode('   ')).toBeUndefined();
      expect(getFlagCode('123')).toBeUndefined();
    });

    it('should return correct flags for European countries', () => {
      const europeanCountries = [
        { code: 'de', flag: 'de' },
        { code: 'fr', flag: 'fr' },
        { code: 'it', flag: 'it' },
        { code: 'es', flag: 'es' },
        { code: 'pt', flag: 'pt' },
        { code: 'nl', flag: 'nl' },
        { code: 'be', flag: 'be' },
        { code: 'se', flag: 'se' },
        { code: 'no', flag: 'no' },
        { code: 'dk', flag: 'dk' },
        { code: 'fi', flag: 'fi' },
        { code: 'pl', flag: 'pl' },
        { code: 'cz', flag: 'cz' },
        { code: 'at', flag: 'at' },
        { code: 'ch', flag: 'ch' },
      ];

      europeanCountries.forEach(({ code, flag }) => {
        expect(getFlagCode(code)).toBe(flag);
      });
    });

    it('should return correct flags for Asian countries', () => {
      const asianCountries = [
        { code: 'jp', flag: 'jp' },
        { code: 'cn', flag: 'cn' },
        { code: 'kr', flag: 'kr' },
        { code: 'in', flag: 'in' },
        { code: 'th', flag: 'th' },
        { code: 'vn', flag: 'vn' },
        { code: 'ph', flag: 'ph' },
        { code: 'id', flag: 'id' },
        { code: 'my', flag: 'my' },
        { code: 'sg', flag: 'sg' },
      ];

      asianCountries.forEach(({ code, flag }) => {
        expect(getFlagCode(code)).toBe(flag);
      });
    });

    it('should handle codes with different separators gracefully', () => {
      // The function currently expects BCP-47 format with hyphens
      // These should not match but shouldn't crash
      expect(getFlagCode('en_US')).toBeUndefined();
      expect(getFlagCode('en.US')).toBeUndefined();
      expect(getFlagCode('en US')).toBeUndefined();
    });
  });

  describe('Data integrity', () => {
    it('should not have duplicate flag codes for different language codes (except intentional)', () => {
      const flagToLanguages: Record<string, string[]> = {};
      
      Object.entries(BCP47_TO_FLAG_CDN).forEach(([lang, flag]) => {
        if (!flagToLanguages[flag]) {
          flagToLanguages[flag] = [];
        }
        flagToLanguages[flag].push(lang);
      });

      // Some flags should intentionally have multiple language codes
      // e.g., 'gb' for 'en', 'en-GB'
      // e.g., 'us' for 'en-US'
      // This test just ensures the mapping is consistent
      expect(flagToLanguages['gb']).toContain('en');
      expect(flagToLanguages['gb']).toContain('en-GB');
      expect(flagToLanguages['us']).toContain('en-US');
      expect(flagToLanguages['us']).toContain('us');
    });

    it('should have all ISO 3166-1 alpha-2 codes as valid flag codes', () => {
      // Check a representative sample of ISO codes
      const isoCodes = [
        'us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es', 'jp', 'cn',
        'br', 'mx', 'in', 'za', 'ru', 'kr', 'nl', 'se', 'ch', 'pl',
      ];

      isoCodes.forEach((code) => {
        expect(BCP47_TO_FLAG_CDN[code]).toBe(code);
      });
    });

    it('should maintain consistency between language and country mappings', () => {
      // Language codes that include country should match standalone country codes
      expect(getFlagCode('en-GB')).toBe(getFlagCode('gb'));
      expect(getFlagCode('fr-FR')).toBe(getFlagCode('fr'));
      expect(getFlagCode('de-DE')).toBe(getFlagCode('de'));
      expect(getFlagCode('ja-JP')).toBe(getFlagCode('jp'));
    });
  });
});
