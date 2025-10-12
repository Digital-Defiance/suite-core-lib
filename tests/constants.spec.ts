import { BACKUP_CODES, Constants, createConstants } from '../src/constants';
import { Role } from '../src/enumerations/role';
import { IBackupCodeConstants } from '../src/interfaces/backup-code-consts';
import { IConstants } from '../src/interfaces/constants';

describe('Constants Module', () => {
  describe('BACKUP_CODES', () => {
    it('should be defined and have correct structure', () => {
      expect(BACKUP_CODES).toBeDefined();
      expect(BACKUP_CODES).toMatchObject({
        Count: expect.any(Number),
        NormalizedHexRegex: expect.any(RegExp),
        DisplayRegex: expect.any(RegExp),
      });
    });

    it('should have correct backup code count', () => {
      expect(BACKUP_CODES.Count).toBe(10);
      expect(typeof BACKUP_CODES.Count).toBe('number');
    });

    it('should have valid NormalizedHexRegex', () => {
      const { NormalizedHexRegex } = BACKUP_CODES;

      // Test valid normalized hex strings (32 chars, lowercase alphanumeric)
      expect(NormalizedHexRegex.test('deadbeefcafebabefeedface01234567')).toBe(
        true,
      );
      expect(NormalizedHexRegex.test('0123456789abcdef0123456789abcdef')).toBe(
        true,
      );
      expect(NormalizedHexRegex.test('ffffffffffffffffffffffffffffffff')).toBe(
        true,
      );
      expect(NormalizedHexRegex.test('00000000000000000000000000000000')).toBe(
        true,
      );

      // Test invalid cases - wrong length
      expect(NormalizedHexRegex.test('deadbeefcafebabefeedface0123456')).toBe(
        false,
      ); // 31 chars
      expect(NormalizedHexRegex.test('deadbeefcafebabefeedface012345678')).toBe(
        false,
      ); // 33 chars
      expect(NormalizedHexRegex.test('')).toBe(false); // empty

      // Test invalid cases - uppercase letters
      expect(NormalizedHexRegex.test('DEADBEEFCAFEBABEFEEDFACE01234567')).toBe(
        false,
      );
      expect(NormalizedHexRegex.test('deadbeefcafebabefeedface0123456F')).toBe(
        false,
      );

      // Test invalid cases - invalid characters
      expect(NormalizedHexRegex.test('deadbeefcafebabefeedface0123456!')).toBe(
        false,
      );
      expect(NormalizedHexRegex.test('deadbeef-cafebabefeedface01234567')).toBe(
        false,
      );
      expect(NormalizedHexRegex.test('deadbeef cafebabefeedface01234567')).toBe(
        false,
      );
    });

    it('should have valid DisplayRegex', () => {
      const { DisplayRegex } = BACKUP_CODES;

      // Test valid display format (xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx)
      expect(DisplayRegex.test('dead-beef-cafe-babe-feed-face-0123-4567')).toBe(
        true,
      );
      expect(DisplayRegex.test('0123-4567-89ab-cdef-0123-4567-89ab-cdef')).toBe(
        true,
      );
      expect(DisplayRegex.test('ffff-ffff-ffff-ffff-ffff-ffff-ffff-ffff')).toBe(
        true,
      );
      expect(DisplayRegex.test('0000-0000-0000-0000-0000-0000-0000-0000')).toBe(
        true,
      );

      // Test invalid cases - wrong format
      expect(DisplayRegex.test('deadbeefcafebabefeedface01234567')).toBe(false); // no dashes
      expect(DisplayRegex.test('dead-beef-cafe-babe-feed-face-0123-456')).toBe(
        false,
      ); // short last group
      expect(
        DisplayRegex.test('dead-beef-cafe-babe-feed-face-0123-45678'),
      ).toBe(false); // long last group
      expect(DisplayRegex.test('dead-beef-cafe-babe-feed-face-0123')).toBe(
        false,
      ); // missing groups

      // Test invalid cases - uppercase
      expect(DisplayRegex.test('DEAD-BEEF-CAFE-BABE-FEED-FACE-0123-4567')).toBe(
        false,
      );

      // Test invalid cases - invalid characters
      expect(DisplayRegex.test('dead-beef-cafe-babe-feed-face-0123-456!')).toBe(
        false,
      );
      expect(DisplayRegex.test('dead beef-cafe-babe-feed-face-0123-4567')).toBe(
        false,
      );
    });

    it('should be immutable (frozen)', () => {
      expect(Object.isFrozen(BACKUP_CODES)).toBe(true);
      expect(BACKUP_CODES.Count).toBe(10);

      // Test that the object cannot be modified due to being frozen
      expect(() => {
        (BACKUP_CODES as any).Count = 999;
      }).toThrow(); // Should throw in strict mode or fail silently but not change the value
      expect(BACKUP_CODES.Count).toBe(10); // should still be original value
    });
    it('should conform to IBackupCodeConstants interface', () => {
      const backupCodes: IBackupCodeConstants = BACKUP_CODES;
      expect(backupCodes.Count).toBe(10);
      expect(backupCodes.NormalizedHexRegex).toBeInstanceOf(RegExp);
      expect(backupCodes.DisplayRegex).toBeInstanceOf(RegExp);
    });
  });

  describe('createConstants function', () => {
    const testDomain = 'example.com';
    let constants: IConstants;

    beforeEach(() => {
      constants = createConstants(testDomain);
    });

    it('should return an object that conforms to IConstants interface', () => {
      expect(constants).toBeDefined();
      expect(typeof constants).toBe('object');

      // Verify all required properties exist
      const expectedProperties = [
        'DefaultExpireMemoryMnemonicSeconds',
        'DefaultExpireMemoryWalletSeconds',
        'LoginChallengeExpiration',
        'DirectLoginChallengeLength',
        'BACKUP_CODES',
        'EmailTokenExpiration',
        'EmailTokenLength',
        'BcryptRounds',
        'AdministratorUser',
        'AdministratorRole',
        'AdministratorEmail',
        'MemberRole',
        'MemberEmail',
        'MemberUser',
        'SystemRole',
        'SystemUser',
        'SystemEmail',
        'UsernameMinLength',
        'UsernameMaxLength',
        'UsernameRegex',
        'PasswordMinLength',
        'PasswordRegex',
        'MnemonicRegex',
        'HmacRegex',
        'EmailTokenResendInterval',
        'EmailTokenResendIntervalMinutes',
      ];

      expectedProperties.forEach((prop) => {
        expect(constants).toHaveProperty(prop);
      });
    });

    it('should have correct memory expiration values', () => {
      expect(constants.DefaultExpireMemoryMnemonicSeconds).toBe(300);
      expect(constants.DefaultExpireMemoryWalletSeconds).toBe(300);
      expect(typeof constants.DefaultExpireMemoryMnemonicSeconds).toBe(
        'number',
      );
      expect(typeof constants.DefaultExpireMemoryWalletSeconds).toBe('number');
    });

    it('should have correct login challenge configuration', () => {
      expect(constants.LoginChallengeExpiration).toBe(60000);
      expect(constants.DirectLoginChallengeLength).toBe(104);
      expect(typeof constants.LoginChallengeExpiration).toBe('number');
      expect(typeof constants.DirectLoginChallengeLength).toBe('number');
    });

    it('should include BACKUP_CODES reference', () => {
      expect(constants.BACKUP_CODES).toBe(BACKUP_CODES);
      expect(constants.BACKUP_CODES.Count).toBe(10);
    });

    it('should have correct email token configuration', () => {
      expect(constants.EmailTokenExpiration).toBe(86400000); // 24 hours in ms
      expect(constants.EmailTokenLength).toBe(32);
      expect(constants.EmailTokenResendInterval).toBe(300000); // 5 minutes in ms
      expect(constants.EmailTokenResendIntervalMinutes).toBe(5);

      // Verify the relationship between interval values
      expect(constants.EmailTokenResendInterval).toBe(
        constants.EmailTokenResendIntervalMinutes * 60 * 1000,
      );
    });

    it('should have correct bcrypt configuration', () => {
      expect(constants.BcryptRounds).toBe(10);
      expect(typeof constants.BcryptRounds).toBe('number');
      expect(constants.BcryptRounds).toBeGreaterThan(0);
    });

    describe('user and role configurations', () => {
      it('should have correct administrator configuration', () => {
        expect(constants.AdministratorUser).toBe('admin');
        expect(constants.AdministratorRole).toBe(Role.Admin);
        expect(constants.AdministratorEmail).toBe(`admin@${testDomain}`);
      });

      it('should have correct member configuration', () => {
        expect(constants.MemberUser).toBe('test');
        expect(constants.MemberRole).toBe(Role.Member);
        expect(constants.MemberEmail).toBe(`test@${testDomain}`);
      });

      it('should have correct system configuration', () => {
        expect(constants.SystemUser).toBe('system');
        expect(constants.SystemRole).toBe(Role.System);
        expect(constants.SystemEmail).toBe(`system@${testDomain}`);
      });

      it('should use the provided domain in email addresses', () => {
        const customDomain = 'custom-domain.org';
        const customConstants = createConstants(customDomain);

        expect(customConstants.AdministratorEmail).toBe(
          `admin@${customDomain}`,
        );
        expect(customConstants.MemberEmail).toBe(`test@${customDomain}`);
        expect(customConstants.SystemEmail).toBe(`system@${customDomain}`);
      });
    });

    describe('username validation', () => {
      it('should have correct username length constraints', () => {
        expect(constants.UsernameMinLength).toBe(3);
        expect(constants.UsernameMaxLength).toBe(30);
        expect(constants.UsernameMinLength).toBeLessThan(
          constants.UsernameMaxLength,
        );
      });

      it('should have valid UsernameRegex', () => {
        const { UsernameRegex } = constants;

        // Test valid usernames
        expect(UsernameRegex.test('abc')).toBe(true); // minimum length
        expect(UsernameRegex.test('user123')).toBe(true);
        expect(UsernameRegex.test('TestUser')).toBe(true);
        expect(UsernameRegex.test('123456')).toBe(true);
        expect(UsernameRegex.test('a'.repeat(30))).toBe(true); // maximum length

        // Test invalid usernames - too short
        expect(UsernameRegex.test('ab')).toBe(false);
        expect(UsernameRegex.test('a')).toBe(false);
        expect(UsernameRegex.test('')).toBe(false);

        // Test invalid usernames - too long
        expect(UsernameRegex.test('a'.repeat(31))).toBe(false);

        // Test invalid characters
        expect(UsernameRegex.test('user-name')).toBe(false);
        expect(UsernameRegex.test('user_name')).toBe(false);
        expect(UsernameRegex.test('user.name')).toBe(false);
        expect(UsernameRegex.test('user@name')).toBe(false);
        expect(UsernameRegex.test('user name')).toBe(false);
        expect(UsernameRegex.test('user!')).toBe(false);
      });
    });

    describe('password validation', () => {
      it('should have correct password minimum length', () => {
        expect(constants.PasswordMinLength).toBe(8);
        expect(typeof constants.PasswordMinLength).toBe('number');
      });

      it('should have valid PasswordRegex', () => {
        const { PasswordRegex } = constants;

        // Test valid passwords (must have letter, digit, special char, min 8 chars)
        expect(PasswordRegex.test('Password1!')).toBe(true);
        expect(PasswordRegex.test('Abcdef123@')).toBe(true);
        expect(PasswordRegex.test('MyP@ssw0rd')).toBe(true);
        expect(PasswordRegex.test('Test123#$%')).toBe(true);
        expect(PasswordRegex.test('a1!BCDEF')).toBe(true); // exactly 8 chars

        // Test invalid passwords - missing letter
        expect(PasswordRegex.test('12345678!')).toBe(false);

        // Test invalid passwords - missing digit
        expect(PasswordRegex.test('Password!')).toBe(false);

        // Test invalid passwords - missing special character
        expect(PasswordRegex.test('Password1')).toBe(false);

        // Test invalid passwords - too short
        expect(PasswordRegex.test('Pass1!')).toBe(false);
        expect(PasswordRegex.test('a1!')).toBe(false);
        expect(PasswordRegex.test('')).toBe(false);

        // Test valid passwords with various special characters
        const specialChars = '!@#$%^&*()_+-=[]{};\':"\\|,.<>/?';
        for (const char of specialChars) {
          expect(PasswordRegex.test(`Password1${char}`)).toBe(true);
        }
      });
    });

    describe('mnemonic validation', () => {
      it('should have valid MnemonicRegex for BIP39', () => {
        const { MnemonicRegex } = constants;

        // Test valid 12-word mnemonic
        const words12 = 'word '.repeat(11) + 'word';
        expect(MnemonicRegex.test(words12)).toBe(true);

        // Test valid 15-word mnemonic
        const words15 = 'word '.repeat(14) + 'word';
        expect(MnemonicRegex.test(words15)).toBe(true);

        // Test valid 18-word mnemonic
        const words18 = 'word '.repeat(17) + 'word';
        expect(MnemonicRegex.test(words18)).toBe(true);

        // Test valid 21-word mnemonic
        const words21 = 'word '.repeat(20) + 'word';
        expect(MnemonicRegex.test(words21)).toBe(true);

        // Test valid 24-word mnemonic
        const words24 = 'word '.repeat(23) + 'word';
        expect(MnemonicRegex.test(words24)).toBe(true);

        // Test case insensitive
        expect(MnemonicRegex.test('Word '.repeat(11) + 'WORD')).toBe(true);
        expect(MnemonicRegex.test('WORD '.repeat(11) + 'word')).toBe(true);

        // Test invalid word counts
        expect(MnemonicRegex.test('word '.repeat(10) + 'word')).toBe(false); // 11 words
        expect(MnemonicRegex.test('word '.repeat(12) + 'word')).toBe(false); // 13 words
        expect(MnemonicRegex.test('word '.repeat(13) + 'word')).toBe(false); // 14 words
        expect(MnemonicRegex.test('word '.repeat(15) + 'word')).toBe(false); // 16 words
        expect(MnemonicRegex.test('word '.repeat(16) + 'word')).toBe(false); // 17 words
        expect(MnemonicRegex.test('word '.repeat(18) + 'word')).toBe(false); // 19 words
        expect(MnemonicRegex.test('word '.repeat(19) + 'word')).toBe(false); // 20 words
        expect(MnemonicRegex.test('word '.repeat(21) + 'word')).toBe(false); // 22 words
        expect(MnemonicRegex.test('word '.repeat(22) + 'word')).toBe(false); // 23 words
        expect(MnemonicRegex.test('word '.repeat(24) + 'word')).toBe(false); // 25 words

        // Test empty and invalid inputs
        expect(MnemonicRegex.test('')).toBe(false);
        expect(MnemonicRegex.test('word')).toBe(false);
        expect(MnemonicRegex.test('word word')).toBe(false); // only 2 words
      });

      it('should support realistic BIP39 mnemonics', () => {
        const { MnemonicRegex } = constants;

        // Test with realistic BIP39 words
        const realistic12 =
          'abandon ability able about above absent absorb abstract absurd abuse access accident';
        const realistic24 =
          'abandon ability able about above absent absorb abstract absurd abuse access accident achieve acid acoustic acquire across act action actor actress actual adapt address';

        expect(MnemonicRegex.test(realistic12)).toBe(true);

        // Count words in the 24-word mnemonic to debug
        const words24 = realistic24.split(' ');
        expect(words24).toHaveLength(24);
        expect(MnemonicRegex.test(realistic24)).toBe(true);
      });
    });

    describe('HMAC validation', () => {
      it('should have valid HmacRegex for SHA-256', () => {
        const { HmacRegex } = constants;

        // Test valid 64-character hex strings (SHA-256)
        expect(HmacRegex.test('a'.repeat(64))).toBe(true);
        expect(HmacRegex.test('0'.repeat(64))).toBe(true);
        expect(HmacRegex.test('f'.repeat(64))).toBe(true);
        expect(HmacRegex.test('0123456789abcdef'.repeat(4))).toBe(true);
        expect(
          HmacRegex.test(
            'deadbeefcafebabe0123456789abcdefdeadbeefcafebabe0123456789abcdef',
          ),
        ).toBe(true);

        // Test invalid cases - wrong length
        expect(HmacRegex.test('a'.repeat(63))).toBe(false); // too short
        expect(HmacRegex.test('a'.repeat(65))).toBe(false); // too long
        expect(HmacRegex.test('')).toBe(false); // empty

        // Test invalid cases - uppercase letters
        expect(HmacRegex.test('A'.repeat(64))).toBe(false);
        expect(HmacRegex.test('a'.repeat(63) + 'A')).toBe(false);

        // Test invalid cases - invalid characters
        expect(HmacRegex.test('g' + 'a'.repeat(63))).toBe(false);
        expect(HmacRegex.test('a'.repeat(63) + '!')).toBe(false);
        expect(HmacRegex.test('a'.repeat(32) + ' ' + 'a'.repeat(31))).toBe(
          false,
        );
      });
    });

    it('should return immutable (frozen) constants object', () => {
      expect(Object.isFrozen(constants)).toBe(true);
      expect(constants.BcryptRounds).toBe(10);

      // Test that the object cannot be modified
      expect(() => {
        (constants as any).BcryptRounds = 999;
      }).toThrow();
    });
    it('should create consistent objects for same domain', () => {
      const constants1 = createConstants(testDomain);
      const constants2 = createConstants(testDomain);

      expect(constants1).toEqual(constants2);
      expect(constants1.AdministratorEmail).toBe(constants2.AdministratorEmail);
      expect(constants1.MemberEmail).toBe(constants2.MemberEmail);
      expect(constants1.SystemEmail).toBe(constants2.SystemEmail);
    });

    it('should create different email addresses for different domains', () => {
      const domain1 = 'example.com';
      const domain2 = 'test.org';

      const constants1 = createConstants(domain1);
      const constants2 = createConstants(domain2);

      expect(constants1.AdministratorEmail).not.toBe(
        constants2.AdministratorEmail,
      );
      expect(constants1.MemberEmail).not.toBe(constants2.MemberEmail);
      expect(constants1.SystemEmail).not.toBe(constants2.SystemEmail);

      expect(constants1.AdministratorEmail).toBe(`admin@${domain1}`);
      expect(constants2.AdministratorEmail).toBe(`admin@${domain2}`);
    });

    describe('edge cases and error conditions', () => {
      it('should handle empty domain string', () => {
        const constants = createConstants('');
        expect(constants.AdministratorEmail).toBe('admin@');
        expect(constants.MemberEmail).toBe('test@');
        expect(constants.SystemEmail).toBe('system@');
      });

      it('should handle domain with special characters', () => {
        const specialDomain = 'test-domain.co.uk';
        const constants = createConstants(specialDomain);
        expect(constants.AdministratorEmail).toBe(`admin@${specialDomain}`);
        expect(constants.MemberEmail).toBe(`test@${specialDomain}`);
        expect(constants.SystemEmail).toBe(`system@${specialDomain}`);
      });

      it('should handle very long domain names', () => {
        const longDomain = 'a'.repeat(100) + '.com';
        const constants = createConstants(longDomain);
        expect(constants.AdministratorEmail).toBe(`admin@${longDomain}`);
        expect(constants.MemberEmail).toBe(`test@${longDomain}`);
        expect(constants.SystemEmail).toBe(`system@${longDomain}`);
      });
    });

    describe('type safety and const assertions', () => {
      it('should have readonly properties due to const assertions', () => {
        // These tests verify that the const assertions are working
        // TypeScript should treat these as literal types, not just numbers
        const constTest = createConstants('test.com');

        // The values should be the exact literals, not just any number
        expect(constTest.DefaultExpireMemoryMnemonicSeconds).toBe(300);
        expect(constTest.DefaultExpireMemoryWalletSeconds).toBe(300);
        expect(constTest.LoginChallengeExpiration).toBe(60000);
        expect(constTest.DirectLoginChallengeLength).toBe(104);
        expect(constTest.EmailTokenExpiration).toBe(86400000);
        expect(constTest.EmailTokenLength).toBe(32);
        expect(constTest.BcryptRounds).toBe(10);
        expect(constTest.UsernameMinLength).toBe(3);
        expect(constTest.UsernameMaxLength).toBe(30);
        expect(constTest.PasswordMinLength).toBe(8);
        expect(constTest.EmailTokenResendInterval).toBe(300000);
        expect(constTest.EmailTokenResendIntervalMinutes).toBe(5);
      });

      it('should have string literal types for user/role constants', () => {
        const constTest = createConstants('test.com');

        expect(constTest.AdministratorUser).toBe('admin');
        expect(constTest.MemberUser).toBe('test');
        expect(constTest.SystemUser).toBe('system');
        expect(constTest.AdministratorRole).toBe(Role.Admin);
        expect(constTest.MemberRole).toBe(Role.Member);
        expect(constTest.SystemRole).toBe(Role.System);
      });
    });

    describe('mathematical relationships and consistency', () => {
      it('should have consistent time-based relationships', () => {
        // Email token resend interval should be consistent between ms and minutes
        expect(constants.EmailTokenResendInterval).toBe(
          constants.EmailTokenResendIntervalMinutes * 60 * 1000,
        );

        // Memory expiration times should be reasonable
        expect(constants.DefaultExpireMemoryMnemonicSeconds).toBeGreaterThan(0);
        expect(constants.DefaultExpireMemoryWalletSeconds).toBeGreaterThan(0);

        // Token expiration should be reasonable (24 hours = 86400000 ms)
        expect(constants.EmailTokenExpiration).toBe(24 * 60 * 60 * 1000);

        // Login challenge should be reasonable (60 seconds = 60000 ms)
        expect(constants.LoginChallengeExpiration).toBe(60 * 1000);
      });

      it('should have reasonable security parameters', () => {
        // Bcrypt rounds should be in a reasonable range for security vs performance
        expect(constants.BcryptRounds).toBeGreaterThanOrEqual(4);
        expect(constants.BcryptRounds).toBeLessThanOrEqual(20);

        // Username constraints should be reasonable
        expect(constants.UsernameMinLength).toBeGreaterThan(0);
        expect(constants.UsernameMaxLength).toBeGreaterThan(
          constants.UsernameMinLength,
        );

        // Password minimum length should be secure
        expect(constants.PasswordMinLength).toBeGreaterThanOrEqual(8);

        // Email token length should provide sufficient entropy
        expect(constants.EmailTokenLength).toBeGreaterThanOrEqual(16);

        // Direct login challenge length should be sufficient
        expect(constants.DirectLoginChallengeLength).toBeGreaterThan(50);
      });
    });

    describe('createConstants with overrides', () => {
      it('should accept and apply overrides', () => {
        const customBcryptRounds = 15;
        const customTokenExpiration = 7200000; // 2 hours

        const constants = createConstants('test.com', {
          BcryptRounds: customBcryptRounds,
          EmailTokenExpiration: customTokenExpiration,
        });

        expect(constants.BcryptRounds).toBe(customBcryptRounds);
        expect(constants.EmailTokenExpiration).toBe(customTokenExpiration);

        // Other values should remain default
        expect(constants.AdministratorUser).toBe('admin');
        expect(constants.UsernameMinLength).toBe(3);
      });

      it('should handle partial overrides', () => {
        const constants = createConstants('test.com', {
          BcryptRounds: 12,
        });

        expect(constants.BcryptRounds).toBe(12);
        expect(constants.EmailTokenExpiration).toBe(86400000); // default
        expect(constants.AdministratorEmail).toBe('admin@test.com');
      });

      it('should handle empty overrides', () => {
        const constants1 = createConstants('test.com', {});
        const constants2 = createConstants('test.com');

        expect(constants1).toEqual(constants2);
      });

      it('should handle undefined overrides', () => {
        const constants = createConstants('test.com', undefined);

        expect(constants.BcryptRounds).toBe(10); // default
        expect(constants.EmailTokenExpiration).toBe(86400000); // default
      });

      it('should allow regex overrides', () => {
        const customUsernameRegex = /^[a-zA-Z0-9_]{4,25}$/;
        const constants = createConstants('test.com', {
          UsernameRegex: customUsernameRegex,
        });

        expect(constants.UsernameRegex).toBe(customUsernameRegex);
        expect(constants.UsernameRegex.test('user_123')).toBe(true);
        expect(constants.UsernameRegex.test('ab')).toBe(false); // too short for custom regex
      });
    });
  });

  describe('Constants default export', () => {
    it('should be defined and be an instance of IConstants', () => {
      expect(Constants).toBeDefined();
      expect(typeof Constants).toBe('object');

      // Should have all the required properties
      expect(Constants).toHaveProperty('BACKUP_CODES');
      expect(Constants).toHaveProperty('AdministratorUser');
      expect(Constants).toHaveProperty('BcryptRounds');
    });

    it('should use localhost as default domain', () => {
      expect(Constants.AdministratorEmail).toBe('admin@localhost');
      expect(Constants.MemberEmail).toBe('test@localhost');
      expect(Constants.SystemEmail).toBe('system@localhost');
    });

    it('should have the same structure as createConstants result', () => {
      const created = createConstants('localhost');
      expect(Constants).toEqual(created);
    });

    it('should be immutable (frozen)', () => {
      expect(Object.isFrozen(Constants)).toBe(true);
      expect(Constants.BcryptRounds).toBe(10);
      expect(Constants.AdministratorUser).toBe('admin');

      // Test that the object cannot be modified
      expect(() => {
        (Constants as any).AdministratorUser = 'hacker';
      }).toThrow();
    });

    it('should share the same BACKUP_CODES reference', () => {
      expect(Constants.BACKUP_CODES).toBe(BACKUP_CODES);
    });
  });

  describe('module exports', () => {
    it('should export BACKUP_CODES as a named export', () => {
      expect(BACKUP_CODES).toBeDefined();
      expect(typeof BACKUP_CODES).toBe('object');
    });

    it('should export createConstants as a named export', () => {
      expect(createConstants).toBeDefined();
      expect(typeof createConstants).toBe('function');
    });

    it('should export Constants as a named export', () => {
      expect(Constants).toBeDefined();
      expect(typeof Constants).toBe('object');
    });
  });
});
