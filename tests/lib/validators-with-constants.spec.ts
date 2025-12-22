import { CORE, createConstants } from '../../src/constants';
import { IConstants } from '../../src/interfaces/constants';
import {
  createValidators,
  defaultValidators,
} from '../../src/lib/validators-with-constants';

describe('Validators with Constants', () => {
  describe('createValidators', () => {
    it('should create validators with default constants', () => {
      const validators = createValidators();
      expect(validators.isValidUsername('test123')).toBe(true);
      expect(validators.isValidPassword('Test123!')).toBe(true);
    });

    it('should create validators with custom constants', () => {
      const customConstants: IConstants = {
        ...CORE,
        UsernameRegex: /^[a-z]{5,10}$/,
        UsernameMinLength: 5,
        UsernameMaxLength: 10,
        PasswordRegex: /^.{6,}$/,
        PasswordMinLength: 6,
        AdministratorEmail: 'admin@custom.com',
        MemberEmail: 'member@custom.com',
        SystemEmail: 'system@custom.com',
      };

      const validators = createValidators(customConstants);

      expect(validators.isValidUsername('hello')).toBe(true);
      expect(validators.isValidUsername('HELLO')).toBe(false);
      expect(validators.isValidUsername('hi')).toBe(false);
      expect(validators.isValidUsernameLength('hello')).toBe(true);
      expect(validators.isValidUsernameLength('hi')).toBe(false);

      expect(validators.isValidPassword('simple')).toBe(true);
      expect(validators.isValidPasswordLength('simple')).toBe(true);
      expect(validators.isValidPasswordLength('short')).toBe(false);
    });

    it('should validate username length', () => {
      const validators = createValidators();
      expect(validators.isValidUsernameLength('abc')).toBe(true);
      expect(validators.isValidUsernameLength('ab')).toBe(false);
      expect(validators.isValidUsernameLength('a'.repeat(31))).toBe(false);
    });

    it('should validate password length', () => {
      const validators = createValidators();
      expect(validators.isValidPasswordLength('Test123!')).toBe(true);
      expect(validators.isValidPasswordLength('short')).toBe(false);
    });

    it('should validate mnemonic', () => {
      const validators = createValidators();
      const mnemonic12 = 'word '.repeat(11) + 'word';
      const mnemonic24 = 'word '.repeat(23) + 'word';
      expect(validators.isValidMnemonic(mnemonic12)).toBe(true);
      expect(validators.isValidMnemonic(mnemonic24)).toBe(true);
    });

    it('should validate backup codes', () => {
      const validators = createValidators();
      expect(validators.isValidBackupCodeNormalized('a'.repeat(32))).toBe(true);
      expect(
        validators.isValidBackupCodeDisplay(
          'abcd-1234-efgh-5678-ijkl-9012-mnop-3456',
        ),
      ).toBe(true);
    });
  });

  describe('defaultValidators', () => {
    it('should use CORE constants', () => {
      expect(defaultValidators.isValidUsername('test123')).toBe(true);
      expect(defaultValidators.isValidPassword('Test123!')).toBe(true);
    });
  });

  describe('usage with createConstants', () => {
    it('should work with createConstants helper', () => {
      const customConstants = createConstants('example.com', 'example.com', {
        UsernameRegex: /^[a-z0-9_]{4,20}$/,
        UsernameMinLength: 4,
        UsernameMaxLength: 20,
      });

      const validators = createValidators(customConstants);

      expect(validators.isValidUsername('user_name')).toBe(true);
      expect(validators.isValidUsername('usr')).toBe(false);
      expect(validators.isValidUsernameLength('user')).toBe(true);
      expect(validators.isValidUsernameLength('usr')).toBe(false);
    });
  });
});
