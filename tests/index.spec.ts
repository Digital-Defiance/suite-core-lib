import { BackupCodeString } from '../src/backup-code-string';
import { AccountStatus } from '../src/enumerations/account-status';
import { EmailTokenType } from '../src/enumerations/email-token-type';
import { Role } from '../src/enumerations/role';
import * as SuiteCore from '../src/index';

describe('Suite Core Library Index', () => {
  it('should export BackupCodeString', () => {
    expect(SuiteCore.BackupCodeString).toBe(BackupCodeString);
  });

  it('should export all enumerations', () => {
    expect(SuiteCore.AccountStatus).toBe(AccountStatus);
    expect(SuiteCore.Role).toBe(Role);
    expect(SuiteCore.EmailTokenType).toBe(EmailTokenType);
  });

  it('should export base interfaces (type-only, verified by compilation)', () => {
    // Base interfaces are type-only exports, so we verify they exist by using them
    const testUserBase = (
      user: SuiteCore.IUserBase<string, Date, 'en', AccountStatus>
    ) => user;
    const testRoleBase = (role: SuiteCore.IRoleBase<string, Date, Role>) =>
      role;
    const testBackupCode = (code: SuiteCore.IBackupCode) => code;

    expect(typeof testUserBase).toBe('function');
    expect(typeof testRoleBase).toBe('function');
    expect(typeof testBackupCode).toBe('function');
  });

  it('should export builders', () => {
    expect(SuiteCore.UserBuilder).toBeDefined();
    expect(SuiteCore.RoleBuilder).toBeDefined();
  });

  it('should export validators', () => {
    expect(typeof SuiteCore.isValidUsername).toBe('function');
    expect(typeof SuiteCore.isValidEmail).toBe('function');
    expect(typeof SuiteCore.isValidPassword).toBe('function');
  });

  it('should export Result pattern utilities', () => {
    expect(typeof SuiteCore.success).toBe('function');
    expect(typeof SuiteCore.failure).toBe('function');
    expect(typeof SuiteCore.isSuccess).toBe('function');
    expect(typeof SuiteCore.isFailure).toBe('function');
  });

  it('should have all expected core exports available', () => {
    const expectedExports = [
      'BackupCodeString',
      'AccountStatus',
      'Role',
      'EmailTokenType',
      'UserBuilder',
      'RoleBuilder',
      'isValidUsername',
      'isValidEmail',
      'Constants',
    ];

    expectedExports.forEach((exportName) => {
      expect(SuiteCore).toHaveProperty(exportName);
    });
  });

  it('should allow creating instances of exported classes', () => {
    const backupCode = new SuiteCore.BackupCodeString(
      '0123456789abcdef0123456789abcdef'
    );

    expect(backupCode).toBeInstanceOf(SuiteCore.BackupCodeString);
  });

  it('should allow using builders', () => {
    const user = SuiteCore.UserBuilder.create()
      .withUsername('testuser')
      .withEmail('test@example.com')
      .build();

    expect(user.username).toBe('testuser');
    expect(user.email).toBe('test@example.com');
  });
});
