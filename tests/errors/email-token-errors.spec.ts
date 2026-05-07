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

    it('should compute nextAvailableTime 5 minutes after lastSent', () => {
      const lastSent = new Date('2025-01-01T12:00:00Z');
      const error = new EmailTokenSentTooRecentlyError(lastSent);
      const expected = new Date('2025-01-01T12:05:00Z');
      expect((error.nextAvailableTime as Date).toISOString()).toBe(
        expected.toISOString(),
      );
    });

    it('should report zero timeRemaining when resend window has passed', () => {
      // lastSent was 10 minutes ago — well past the 5-minute window
      const lastSent = new Date(Date.now() - 10 * 60 * 1000);
      const error = new EmailTokenSentTooRecentlyError(lastSent);
      // timeRemaining is embedded in the message as "0 seconds"
      expect(error.message).toContain('0');
    });

    it('should report positive timeRemaining when still within window', () => {
      // lastSent was 1 minute ago — 4 minutes remain
      const lastSent = new Date(Date.now() - 60 * 1000);
      const error = new EmailTokenSentTooRecentlyError(lastSent);
      expect(error.nextAvailableTime.getTime()).toBeGreaterThan(Date.now());
    });

    // -----------------------------------------------------------------------
    // TDate = number (custom epoch, e.g. BrightDate decimal days since J2000.0)
    // -----------------------------------------------------------------------

    const J2000_UNIX_MS = 946728000000;
    const MS_PER_DAY = 86_400_000;

    const toDecimalDay = (date: Date): number =>
      (date.getTime() - J2000_UNIX_MS) / MS_PER_DAY;
    const toUnixMs = (d: number): number => d * MS_PER_DAY + J2000_UNIX_MS;
    const addIntervalMs = (d: number, ms: number): number =>
      d + ms / MS_PER_DAY;

    it('should work with a custom-epoch number date type', () => {
      const lastSentDate = new Date(Date.now() - 60 * 1000);
      const lastSent = toDecimalDay(lastSentDate);

      const error = new EmailTokenSentTooRecentlyError<number>(
        lastSent,
        429,
        toUnixMs,
        addIntervalMs,
      );

      expect(typeof error.lastSent).toBe('number');
      expect(typeof error.nextAvailableTime).toBe('number');
      expect(error.lastSent).toBeCloseTo(lastSent, 10);
    });

    it('should compute nextAvailableTime correctly for custom-epoch numbers', () => {
      const lastSentDate = new Date('2025-01-01T12:00:00Z');
      const lastSent = toDecimalDay(lastSentDate);
      const expectedNextDate = new Date('2025-01-01T12:05:00Z');
      const expectedNext = toDecimalDay(expectedNextDate);

      const error = new EmailTokenSentTooRecentlyError<number>(
        lastSent,
        429,
        toUnixMs,
        addIntervalMs,
      );

      expect(error.nextAvailableTime).toBeCloseTo(expectedNext, 6);
    });

    it('should report zero timeRemaining for custom-epoch when window has passed', () => {
      const lastSent = toDecimalDay(new Date(Date.now() - 10 * 60 * 1000));

      const error = new EmailTokenSentTooRecentlyError<number>(
        lastSent,
        429,
        toUnixMs,
        addIntervalMs,
      );

      expect(error.message).toContain('0');
    });

    it('should report positive timeRemaining for custom-epoch when within window', () => {
      const lastSent = toDecimalDay(new Date(Date.now() - 60 * 1000));

      const error = new EmailTokenSentTooRecentlyError<number>(
        lastSent,
        429,
        toUnixMs,
        addIntervalMs,
      );

      expect(toUnixMs(error.nextAvailableTime as number)).toBeGreaterThan(
        Date.now(),
      );
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
