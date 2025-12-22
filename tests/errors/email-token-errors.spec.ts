import { EmailTokenType } from '../../src/enumerations/email-token-type';
import { EmailTokenExpiredError } from '../../src/errors/email-token-expired';
import { EmailTokenFailedToSendError } from '../../src/errors/email-token-failed-to-send';
import { EmailTokenSentTooRecentlyError } from '../../src/errors/email-token-sent-too-recently';
import { EmailTokenUsedOrInvalidError } from '../../src/errors/email-token-used-or-invalid';

describe('Email Token Errors', () => {
  describe('EmailTokenExpiredError', () => {
    it('should create error with default status code', () => {
      const error = new EmailTokenExpiredError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('EmailTokenExpiredError');
      expect(error.statusCode).toBe(422);
    });

    it('should create error with custom status code', () => {
      const error = new EmailTokenExpiredError(undefined, 400);
      expect(error.statusCode).toBe(400);
    });

    it('should create error with language', () => {
      const error = new EmailTokenExpiredError('fr');
      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('EmailTokenFailedToSendError', () => {
    it('should create error for account verification', () => {
      const error = new EmailTokenFailedToSendError(
        EmailTokenType.AccountVerification,
      );
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain('Account Verification');
    });

    it('should create error for password reset', () => {
      const error = new EmailTokenFailedToSendError(
        EmailTokenType.PasswordReset,
      );
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain('Password Reset');
    });

    it('should create error for login request', () => {
      const error = new EmailTokenFailedToSendError(
        EmailTokenType.LoginRequest,
      );
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain('Login Request');
    });

    it('should create error for mnemonic recovery', () => {
      const error = new EmailTokenFailedToSendError(
        EmailTokenType.MnemonicRecoveryRequest,
      );
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain('Mnemonic Recovery');
    });

    it('should create error for private key request', () => {
      const error = new EmailTokenFailedToSendError(
        EmailTokenType.PrivateKeyRequest,
      );
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain('Private Key');
    });
  });

  describe('EmailTokenSentTooRecentlyError', () => {
    it('should create error with default values', () => {
      const lastSent = new Date(Date.now() - 60000);
      const error = new EmailTokenSentTooRecentlyError(lastSent);
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(429);
      expect(error.lastSent).toBe(lastSent);
      expect(error.nextAvailableTime).toBeInstanceOf(Date);
    });

    it('should create error with custom status code', () => {
      const lastSent = new Date(Date.now() - 120000);
      const error = new EmailTokenSentTooRecentlyError(lastSent, 400);
      expect(error.statusCode).toBe(400);
    });
  });

  describe('EmailTokenUsedOrInvalidError', () => {
    it('should create error with default status code', () => {
      const error = new EmailTokenUsedOrInvalidError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('EmailTokenUsedOrInvalidError');
      expect(error.statusCode).toBe(422);
    });

    it('should create error with custom status code', () => {
      const error = new EmailTokenUsedOrInvalidError(undefined, 400);
      expect(error.statusCode).toBe(400);
    });
  });
});
