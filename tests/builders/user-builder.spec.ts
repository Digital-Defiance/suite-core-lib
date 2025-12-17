import { UserBuilder } from '../../src/builders/user-builder';
import { AccountStatus } from '../../src/enumerations/account-status';

describe('UserBuilder', () => {
  it('should create a user with default values', () => {
    const user = UserBuilder.create().build();

    expect(user.emailVerified).toBe(false);
    expect(user.accountStatus).toBe(AccountStatus.Active);
    expect(user.directChallenge).toBe(false);
    expect(user.backupCodes).toEqual([]);
    expect(user.timezone).toBe('UTC');
  });

  it('should build user with fluent API', () => {
    const user = UserBuilder.create()
      .withUsername('testuser')
      .withEmail('test@example.com')
      .withPublicKey('publickey123')
      .withTimezone('America/New_York')
      .withSiteLanguage('en-US')
      .withEmailVerified(true)
      .withAccountStatus(AccountStatus.Active)
      .withDirectChallenge(true)
      .withMnemonicRecovery('encrypted-mnemonic')
      .build();

    expect(user.username).toBe('testuser');
    expect(user.email).toBe('test@example.com');
    expect(user.publicKey).toBe('publickey123');
    expect(user.timezone).toBe('America/New_York');
    expect(user.siteLanguage).toBe('en-US');
    expect(user.emailVerified).toBe(true);
    expect(user.accountStatus).toBe(AccountStatus.Active);
    expect(user.directChallenge).toBe(true);
    expect(user.mnemonicRecovery).toBe('encrypted-mnemonic');
  });

  it('should allow chaining methods', () => {
    const builder = UserBuilder.create();
    const result = builder.withUsername('user1').withEmail('user1@test.com');

    expect(result).toBe(builder);
  });

  it('should create independent instances', () => {
    const user1 = UserBuilder.create().withUsername('user1').build();

    const user2 = UserBuilder.create().withUsername('user2').build();

    expect(user1.username).toBe('user1');
    expect(user2.username).toBe('user2');
  });
});
