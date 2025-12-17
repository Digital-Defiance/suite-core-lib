/**
 * Common formatting helpers
 */

/**
 * Format backup code with dashes (XXXX-XXXX-XXXX-XXXX)
 */
export function formatBackupCode(code: string): string {
  const cleaned = code.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  return cleaned.match(/.{1,4}/g)?.join('-') || cleaned;
}

/**
 * Validate backup code format
 */
export function isValidBackupCodeFormat(code: string): boolean {
  const cleaned = code.replace(/[^A-Z0-9]/gi, '');
  return cleaned.length === 16;
}

/**
 * Normalize backup code (remove dashes, uppercase)
 */
export function normalizeBackupCode(code: string): string {
  return code.replace(/[^A-Z0-9]/gi, '').toUpperCase();
}
