/**
 * Error thrown when a backup code is invalid.
 */
export class InvalidBackupCodeError extends Error {
  constructor(message?: string) {
    super(message ?? 'Invalid backup code');
    this.name = 'InvalidBackupCodeError';
  }
}
