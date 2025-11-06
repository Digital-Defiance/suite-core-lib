import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { AccountStatusError } from '../../src/errors/account-status';
import { AccountStatus } from '../../src/enumerations/account-status';
import {
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
} from '../../src/i18n-setup';

describe('AccountStatusError', () => {
  beforeEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  it('should create error for Active status', () => {
    const error = new AccountStatusError(AccountStatus.Active);
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('AccountStatusError');
    expect(error.accountStatus).toBe(AccountStatus.Active);
    expect(error.statusCode).toBe(403);
  });

  it('should create error for AdminLock status', () => {
    const error = new AccountStatusError(AccountStatus.AdminLock);
    expect(error).toBeInstanceOf(Error);
    expect(error.accountStatus).toBe(AccountStatus.AdminLock);
    expect(error.statusCode).toBe(403);
  });

  it('should create error for PendingEmailVerification status', () => {
    const error = new AccountStatusError(AccountStatus.PendingEmailVerification);
    expect(error).toBeInstanceOf(Error);
    expect(error.accountStatus).toBe(AccountStatus.PendingEmailVerification);
    expect(error.statusCode).toBe(403);
  });

  it('should handle default case for unknown status', () => {
    const error = new AccountStatusError('UnknownStatus' as AccountStatus);
    expect(error).toBeInstanceOf(Error);
    expect(error.statusCode).toBe(403);
  });

  it('should create error with custom status code', () => {
    const error = new AccountStatusError(AccountStatus.AdminLock, undefined, 401);
    expect(error.statusCode).toBe(401);
  });

  it('should create error with language', () => {
    const error = new AccountStatusError(AccountStatus.AdminLock, LanguageCodes.FR);
    expect(error).toBeInstanceOf(Error);
  });

  it('should create error with language and custom status code', () => {
    const error = new AccountStatusError(AccountStatus.PendingEmailVerification, LanguageCodes.ES, 422);
    expect(error.statusCode).toBe(422);
  });
});
