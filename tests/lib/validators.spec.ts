import {
  hasMaxLength,
  hasMinLength,
  isNotEmpty,
  isValidBackupCodeDisplay,
  isValidBackupCodeNormalized,
  isValidEmail,
  isValidMnemonic,
  isValidPassword,
  isValidUsername,
} from '../../src/lib/validators';

describe('Validators', () => {
  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('invalid@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test @example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidUsername', () => {
    it('should validate correct usernames', () => {
      expect(isValidUsername('user123')).toBe(true);
      expect(isValidUsername('testuser')).toBe(true);
      expect(isValidUsername('abc')).toBe(true);
      expect(isValidUsername('User123')).toBe(true);
    });

    it('should reject invalid usernames', () => {
      expect(isValidUsername('ab')).toBe(false);
      expect(isValidUsername('a'.repeat(31))).toBe(false);
      expect(isValidUsername('user name')).toBe(false);
      expect(isValidUsername('user@name')).toBe(false);
      expect(isValidUsername('user_name')).toBe(false);
      expect(isValidUsername('user-name')).toBe(false);
      expect(isValidUsername('')).toBe(false);
    });
  });

  describe('isValidPassword', () => {
    it('should validate correct passwords', () => {
      expect(isValidPassword('Test123!')).toBe(true);
      expect(isValidPassword('MyP@ssw0rd')).toBe(true);
      expect(isValidPassword('Secure#Pass1')).toBe(true);
    });

    it('should reject invalid passwords', () => {
      expect(isValidPassword('short1!')).toBe(false);
      expect(isValidPassword('NoNumbers!')).toBe(false);
      expect(isValidPassword('nospecial1')).toBe(false);
      expect(isValidPassword('12345678')).toBe(false);
      expect(isValidPassword('')).toBe(false);
    });
  });

  describe('isValidMnemonic', () => {
    it('should validate correct mnemonic phrases', () => {
      const mnemonic12 = 'word '.repeat(11) + 'word';
      const mnemonic24 = 'word '.repeat(23) + 'word';
      expect(isValidMnemonic(mnemonic12)).toBe(true);
      expect(isValidMnemonic(mnemonic24)).toBe(true);
    });

    it('should reject invalid mnemonic phrases', () => {
      const mnemonic11 = 'word '.repeat(10) + 'word';
      const mnemonic13 = 'word '.repeat(12) + 'word';
      expect(isValidMnemonic(mnemonic11)).toBe(false);
      expect(isValidMnemonic(mnemonic13)).toBe(false);
      expect(isValidMnemonic('')).toBe(false);
    });
  });

  describe('isValidBackupCodeNormalized', () => {
    it('should validate normalized backup codes', () => {
      expect(isValidBackupCodeNormalized('a'.repeat(32))).toBe(true);
      expect(
        isValidBackupCodeNormalized('0123456789abcdef0123456789abcdef')
      ).toBe(true);
    });

    it('should reject invalid normalized backup codes', () => {
      expect(isValidBackupCodeNormalized('A'.repeat(32))).toBe(false);
      expect(isValidBackupCodeNormalized('a'.repeat(31))).toBe(false);
      expect(isValidBackupCodeNormalized('a'.repeat(33))).toBe(false);
      expect(isValidBackupCodeNormalized('')).toBe(false);
    });
  });

  describe('isValidBackupCodeDisplay', () => {
    it('should validate display format backup codes', () => {
      expect(
        isValidBackupCodeDisplay('abcd-1234-efgh-5678-ijkl-9012-mnop-3456')
      ).toBe(true);
    });

    it('should reject invalid display format backup codes', () => {
      expect(
        isValidBackupCodeDisplay('ABCD-1234-EFGH-5678-IJKL-9012-MNOP-3456')
      ).toBe(false);
      expect(isValidBackupCodeDisplay('abcd1234efgh5678ijkl9012mnop3456')).toBe(
        false
      );
      expect(isValidBackupCodeDisplay('abcd-1234-efgh-5678')).toBe(false);
      expect(isValidBackupCodeDisplay('')).toBe(false);
    });
  });

  describe('isNotEmpty', () => {
    it('should return true for non-empty strings', () => {
      expect(isNotEmpty('test')).toBe(true);
      expect(isNotEmpty(' test ')).toBe(true);
    });

    it('should return false for empty or whitespace strings', () => {
      expect(isNotEmpty('')).toBe(false);
      expect(isNotEmpty('   ')).toBe(false);
      expect(isNotEmpty(null as unknown as string)).toBe(false);
      expect(isNotEmpty(undefined as unknown as string)).toBe(false);
    });
  });

  describe('hasMinLength', () => {
    it('should validate minimum length', () => {
      expect(hasMinLength('test', 4)).toBe(true);
      expect(hasMinLength('test', 3)).toBe(true);
      expect(hasMinLength('test', 5)).toBe(false);
    });
  });

  describe('hasMaxLength', () => {
    it('should validate maximum length', () => {
      expect(hasMaxLength('test', 4)).toBe(true);
      expect(hasMaxLength('test', 5)).toBe(true);
      expect(hasMaxLength('test', 3)).toBe(false);
    });
  });
});
