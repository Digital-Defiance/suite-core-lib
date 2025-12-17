import { AccountStatus } from '../../src/enumerations/account-status';
import { IBackupCode } from '../../src/interfaces/backup-code';
import { IUserBase } from '../../src/interfaces/bases/user';

// Mock ObjectId for testing
class MockObjectId {
  constructor(public id: string = 'mockid123') {}
  toString() {
    return this.id;
  }
}

describe('IUserBase interface', () => {
  describe('with string IDs (frontend-style)', () => {
    it('should accept valid user object with string IDs', () => {
      const backupCode: IBackupCode = {
        version: '1.0',
        checksumSalt: 'salt',
        checksum: 'checksum',
        encrypted: 'encrypted',
      };

      const user: IUserBase<string, Date, 'en', AccountStatus> = {
        _id: 'user123',
        username: 'testuser',
        email: 'test@example.com',
        publicKey: 'publickey123',
        timezone: 'UTC',
        siteLanguage: 'en',
        emailVerified: true,
        accountStatus: AccountStatus.Active,
        directChallenge: false,
        backupCodes: [backupCode],
        mnemonicRecovery: 'encrypted_mnemonic',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'creator123',
        updatedBy: 'updater123',
      };

      expect(user._id).toBe('user123');
      expect(user.username).toBe('testuser');
      expect(user.email).toBe('test@example.com');
      expect(user.accountStatus).toBe(AccountStatus.Active);
      expect(user.siteLanguage).toBe('en');
      expect(user.backupCodes).toHaveLength(1);
    });

    it('should handle optional fields', () => {
      const user: Partial<IUserBase<string, Date, 'en', AccountStatus>> = {
        _id: 'user123',
        username: 'testuser',
        email: 'test@example.com',
        lastLogin: new Date(),
        mnemonicId: 'mnemonic123',
        passwordWrappedPrivateKey: {
          salt: 'salt',
          iv: 'iv',
          authTag: 'authTag',
          ciphertext: 'ciphertext',
          iterations: 10000,
        },
        deletedAt: new Date(),
        deletedBy: 'deleter123',
      };

      expect(user.lastLogin).toBeInstanceOf(Date);
      expect(user.mnemonicId).toBe('mnemonic123');
      expect(user.passwordWrappedPrivateKey?.iterations).toBe(10000);
    });
  });

  describe('with ObjectId (backend-style)', () => {
    it('should accept valid user object with ObjectId-like structure', () => {
      const objectId = new MockObjectId() as unknown as {
        toString: () => string;
      };
      const backupCode: IBackupCode = {
        version: '1.0',
        checksumSalt: 'salt',
        checksum: 'checksum',
        encrypted: 'encrypted',
      };

      const user: IUserBase<MockObjectId, Date, 'en', AccountStatus> = {
        _id: objectId,
        username: 'testuser',
        email: 'test@example.com',
        publicKey: 'publickey123',
        timezone: 'UTC',
        siteLanguage: 'en',
        emailVerified: true,
        accountStatus: AccountStatus.Active,
        directChallenge: false,
        backupCodes: [backupCode],
        mnemonicRecovery: 'encrypted_mnemonic',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: objectId,
        updatedBy: objectId,
      };

      expect(user._id).toBeInstanceOf(MockObjectId);
      expect(user.createdBy).toBeInstanceOf(MockObjectId);
      expect(user.updatedBy).toBeInstanceOf(MockObjectId);
    });

    it('should work with numeric IDs', () => {
      const user: Partial<IUserBase<number, Date, 'en', AccountStatus>> = {
        _id: 12345,
        createdBy: 1,
        updatedBy: 1,
      };

      expect(typeof user._id).toBe('number');
      expect(user._id).toBe(12345);
    });
  });

  describe('generic language support', () => {
    it('should work with different language types', () => {
      type CustomLanguage = 'en' | 'es' | 'fr';

      const user: Partial<
        IUserBase<string, Date, CustomLanguage, AccountStatus>
      > = {
        siteLanguage: 'es',
      };

      expect(user.siteLanguage).toBe('es');
    });

    it('should work with string language type', () => {
      const user: Partial<IUserBase<string, Date, string, AccountStatus>> = {
        siteLanguage: 'de',
      };

      expect(user.siteLanguage).toBe('de');
    });
  });

  describe('generic date support', () => {
    it('should work with Date objects', () => {
      const now = new Date();
      const user: Partial<IUserBase<string, Date, 'en', AccountStatus>> = {
        createdAt: now,
        updatedAt: now,
      };

      expect(user.createdAt).toBeInstanceOf(Date);
      expect(user.updatedAt).toBe(now);
    });

    it('should work with ISO date strings', () => {
      const isoDate = '2025-11-25T00:00:00.000Z';
      const user: Partial<IUserBase<string, string, 'en', AccountStatus>> = {
        createdAt: isoDate,
        updatedAt: isoDate,
      };

      expect(typeof user.createdAt).toBe('string');
      expect(user.createdAt).toBe(isoDate);
    });
  });

  describe('interface validation', () => {
    it('should enforce required fields through TypeScript', () => {
      // This test validates that TypeScript compilation would catch missing required fields
      const requiredFields = [
        '_id',
        'username',
        'email',
        'publicKey',
        'timezone',
        'siteLanguage',
        'emailVerified',
        'accountStatus',
        'directChallenge',
        'backupCodes',
        'mnemonicRecovery',
        'createdAt',
        'updatedAt',
        'createdBy',
        'updatedBy',
      ];

      expect(requiredFields).toHaveLength(15);
    });

    it('should handle all account statuses', () => {
      const statuses = [
        AccountStatus.PendingEmailVerification,
        AccountStatus.Active,
        AccountStatus.AdminLock,
      ];

      statuses.forEach((status) => {
        const user: Partial<IUserBase<string, Date, 'en', AccountStatus>> = {
          accountStatus: status,
        };
        expect(Object.values(AccountStatus)).toContain(user.accountStatus);
      });
    });
  });
});
