/**
 * Common validation helpers
 */
import { CORE } from '../constants';

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return CORE.EmailRegex.test(email);
}

/**
 * Validate display name format using constants
 * @param displayName
 * @returns True if valid
 * @see CORE.DisplayNameRegex
 */
export function isValidDisplayName(displayName: string): boolean {
  if (!CORE.EnableDisplayName)
    return displayName === undefined || displayName === '';
  if (displayName === undefined || displayName === '') return true; // optional field
  return CORE.DisplayNameRegex.test(displayName);
}

/**
 * Validate username format using constants
 * @see CORE.UsernameRegex
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
