import { InvalidChallengeError } from '../../src/errors/invalid-challenge';
import { InvalidExpiredTokenError } from '../../src/errors/invalid-expired-token';
import { LastAdminError } from '../../src/errors/last-admin-error';
import { PrivateKeyRequiredError } from '../../src/errors/private-key-required';
import { PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { initSuiteCoreI18nEngine, resetSuiteCoreI18nEngine } from '../../src/i18n-setup';

describe('Previously Uncovered Error Classes', () => {
  beforeEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  describe('InvalidChallengeError', () => {
    it('should create error', () => {
      const error = new InvalidChallengeError();
      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('InvalidExpiredTokenError', () => {
    it('should create error without options', () => {
      const error = new InvalidExpiredTokenError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('InvalidExpiredTokenError');
    });

    it('should create error with language', () => {
      const error = new InvalidExpiredTokenError('fr');
      expect(error).toBeInstanceOf(Error);
    });

    it('should create error with options', () => {
      const error = new InvalidExpiredTokenError(undefined, { statusCode: 401 });
      expect(error.statusCode).toBe(401);
    });
  });

  describe('LastAdminError', () => {
    it('should create error without language', () => {
      const error = new LastAdminError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('LastAdminError');
      expect(error.statusCode).toBe(422);
    });

    it('should create error with language', () => {
      const error = new LastAdminError('es');
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(422);
    });
  });

  describe('PrivateKeyRequiredError', () => {
    it('should create error without language', () => {
      const error = new PrivateKeyRequiredError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('PrivateKeyRequiredError');
    });

    it('should create error with language', () => {
      const error = new PrivateKeyRequiredError('de');
      expect(error).toBeInstanceOf(Error);
    });
  });
});
