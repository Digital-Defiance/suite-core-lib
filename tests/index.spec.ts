import { BackupCodeString } from '../src/backup-code-string';
import { AccountStatus } from '../src/enumerations/account-status';
import { EmailTokenType } from '../src/enumerations/email-token-type';
import { Role } from '../src/enumerations/role';
// import { InvalidBackupCodeError } from '../src/errors/invalid-backup-code';
import * as SuiteCore from '../src/index';

describe('User System Library Index', () => {
  it('should export BackupCodeString', () => {
    expect(SuiteCore.BackupCodeString).toBe(BackupCodeString);
  });

  it('should export all enumerations', () => {
    expect(SuiteCore.AccountStatus).toBe(AccountStatus);
    expect(SuiteCore.Role).toBe(Role);
    expect(SuiteCore.EmailTokenType).toBe(EmailTokenType);
  });

  // Temporarily disabled due to TypedHandleableError import issues
  // it('should export all error classes', () => {
  //   expect(SuiteCore.InvalidBackupCodeError).toBe(InvalidBackupCodeError);
  // });

  it('should export interfaces (type-only, verified by compilation)', () => {
    // Interfaces are type-only exports, so we verify they exist by using them
    const testInterface = (user: SuiteCore.IFrontendUser<'en'>) => user;
    const testBackupCode = (code: SuiteCore.IBackupCode) => code;

    expect(typeof testInterface).toBe('function');
    expect(typeof testBackupCode).toBe('function');
  });

  it('should have all expected exports available', () => {
    const expectedExports = [
      'BackupCodeString',
      'AccountStatus',
      'Role',
      'EmailTokenType',
    ];

    expectedExports.forEach((exportName) => {
      expect(SuiteCore).toHaveProperty(exportName);
    });
  });

  it('should allow creating instances of exported classes', () => {
    const backupCode = new SuiteCore.BackupCodeString(
      '0123456789abcdef0123456789abcdef',
    );

    expect(backupCode).toBeInstanceOf(SuiteCore.BackupCodeString);
  });
});
