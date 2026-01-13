/**
 * Backup code structure with encryption and checksum data.
 */
export interface IBackupCode {
  version: string;
  checksumSalt: string;
  checksum: string;
  encrypted: string;
}
