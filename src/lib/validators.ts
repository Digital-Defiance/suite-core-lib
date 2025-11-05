/**
 * Common validation helpers
 */
import { CORE } from '../constants';

/**
 * Email validation regex (RFC 5322 simplified)
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

/**
 * Validate username format using constants
 */
export function isValidUsername(username: string): boolean {
  return CORE.UsernameRegex.test(username);
}

/**
 * Validate password format using constants
 */
export function isValidPassword(password: string): boolean {
  return CORE.PasswordRegex.test(password);
}

/**
 * Validate mnemonic format using constants
 */
export function isValidMnemonic(mnemonic: string): boolean {
  return CORE.MnemonicRegex.test(mnemonic);
}

/**
 * Validate backup code format using constants
 */
export function isValidBackupCodeNormalized(code: string): boolean {
  return CORE.BACKUP_CODES.NormalizedHexRegex.test(code);
}

/**
 * Validate backup code display format using constants
 */
export function isValidBackupCodeDisplay(code: string): boolean {
  return CORE.BACKUP_CODES.DisplayRegex.test(code);
}

/**
 * Validate that a value is not empty
 */
export function isNotEmpty(value: string | null | undefined): boolean {
  return value !== null && value !== undefined && value.trim().length > 0;
}

/**
 * Validate minimum length
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength;
}

/**
 * Validate maximum length
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.length <= maxLength;
}
