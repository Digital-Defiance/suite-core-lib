import { Constants } from './constants';
import { InvalidBackupCodeError } from './errors/invalid-backup-code';
import { IConstants } from './interfaces';

export class BackupCodeString {
  private readonly _normalizedCode: string;

  constructor(code: string) {
    const normalizedCode = BackupCodeString.normalizeCode(code);
    if (!Constants.BACKUP_CODES.NormalizedHexRegex.test(normalizedCode)) {
      throw new InvalidBackupCodeError();
    }
    this._normalizedCode = normalizedCode;
  }

  public get value(): string {
    return BackupCodeString.formatBackupCode(this._normalizedCode);
  }

  public get notNullValue(): string {
    return BackupCodeString.formatBackupCode(this._normalizedCode);
  }

  public get valueAsHexString(): string {
    const formattedValue = BackupCodeString.formatBackupCode(
      this._normalizedCode
    );
    return new TextEncoder().encode(formattedValue).reduce((str, byte) => {
      return str + byte.toString(16).padStart(2, '0');
    }, '');
  }

  public get valueAsBase64String(): string {
    const formattedValue = BackupCodeString.formatBackupCode(
      this._normalizedCode
    );
    return btoa(formattedValue);
  }

  public get valueAsUint8Array(): Uint8Array {
    const formattedValue = BackupCodeString.formatBackupCode(
      this._normalizedCode
    );
    return new TextEncoder().encode(formattedValue);
  }

  public get hasValue(): boolean {
    return this._normalizedCode.length > 0;
  }

  public get length(): number {
    return this._normalizedCode.length;
  }

  public dispose(): void {
    // Backup codes are not sensitive enough to require secure disposal
    // They're already encrypted when stored in the database
  }

  /**
   * Format a 32-char normalized code into display form (8 groups of 4).
   * Does not restrict characters beyond grouping.
   */
  public static formatBackupCode(code: string): string {
    const groups = code.match(/.{1,4}/g) ?? [code];
    return groups.join('-');
  }
  /**
   * Normalize user-entered code: remove spaces and hyphens, lowercase, and trim.
   */
  public static normalizeCode(input: string): string {
    return input.replace(/[\s-]/g, '').toLowerCase().trim();
  }

  public static generateBackupCode(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const rnd = crypto.getRandomValues(new Uint8Array(32));
    let raw = '';
    for (let j = 0; j < 32; j++) {
      raw += alphabet[rnd[j] % alphabet.length];
    }
    return raw;
  }

  /**
   * Generate the configured number of backup codes.
   * Note: If generation alphabet/length is controlled elsewhere, prefer that path.
   */
  public static generateBackupCodes(
    constants: IConstants = Constants
  ): Array<BackupCodeString> {
    const codes: Array<BackupCodeString> = [];
    for (let i = 0; i < constants.BACKUP_CODES.Count; i++) {
      codes.push(new BackupCodeString(BackupCodeString.generateBackupCode()));
    }
    return codes;
  }
}
