import {
  formatBackupCode,
  isValidBackupCodeFormat,
  normalizeBackupCode,
} from '../../src/lib/formatters';

describe('Formatters', () => {
  describe('formatBackupCode', () => {
    it('should format backup code with dashes', () => {
      expect(formatBackupCode('ABCD1234EFGH5678')).toBe('ABCD-1234-EFGH-5678');
      expect(formatBackupCode('abcd1234efgh5678')).toBe('ABCD-1234-EFGH-5678');
    });

    it('should handle already formatted codes', () => {
      expect(formatBackupCode('ABCD-1234-EFGH-5678')).toBe(
        'ABCD-1234-EFGH-5678'
      );
    });

    it('should handle partial codes', () => {
      expect(formatBackupCode('ABC')).toBe('ABC');
      expect(formatBackupCode('ABCD12')).toBe('ABCD-12');
    });

    it('should handle empty string', () => {
      expect(formatBackupCode('')).toBe('');
    });
  });

  describe('isValidBackupCodeFormat', () => {
    it('should validate correct backup code format', () => {
      expect(isValidBackupCodeFormat('ABCD1234EFGH5678')).toBe(true);
      expect(isValidBackupCodeFormat('ABCD-1234-EFGH-5678')).toBe(true);
      expect(isValidBackupCodeFormat('abcd1234efgh5678')).toBe(true);
    });

    it('should reject invalid backup code format', () => {
      expect(isValidBackupCodeFormat('ABC')).toBe(false);
      expect(isValidBackupCodeFormat('ABCD1234EFGH567')).toBe(false);
      expect(isValidBackupCodeFormat('ABCD1234EFGH56789')).toBe(false);
      expect(isValidBackupCodeFormat('')).toBe(false);
    });
  });

  describe('normalizeBackupCode', () => {
    it('should normalize backup code', () => {
      expect(normalizeBackupCode('ABCD-1234-EFGH-5678')).toBe(
        'ABCD1234EFGH5678'
      );
      expect(normalizeBackupCode('abcd-1234-efgh-5678')).toBe(
        'ABCD1234EFGH5678'
      );
      expect(normalizeBackupCode('abcd1234efgh5678')).toBe('ABCD1234EFGH5678');
    });
  });
});
