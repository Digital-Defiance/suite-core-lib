import { InvalidUserIdError } from '../../src/errors/invalid-userid';
import { InvalidUsernameError } from '../../src/errors/invalid-username';
import { InvalidTokenError } from '../../src/errors/invalid-token';
import { TokenNotFoundError } from '../../src/errors/token-not-found';
import { UsernameEmailRequiredError } from '../../src/errors/username-email-required';
import { EmailVerifiedError } from '../../src/errors/email-verified';
import { PendingEmailVerificationError } from '../../src/errors/pending-email-verification';
import { LastAdminError } from '../../src/errors/last-admin-error';
import { PrivateKeyRequiredError } from '../../src/errors/private-key-required';
import { InvalidExpiredTokenError } from '../../src/errors/invalid-expired-token';
import { InvalidChallengeError } from '../../src/errors/invalid-challenge';
import { InvalidChallengeResponseError } from '../../src/errors/invalid-challenge-response';
import { LoginChallengeExpiredError } from '../../src/errors/login-challenge-expired';
import { DirectTokenUsedError } from '../../src/errors/direct-token-used';
import { FailedToUseDirectTokenError } from '../../src/errors/failed-to-use-direct-token';
import { GenericValidationError } from '../../src/errors/generic-validation';
import { AccountStatusError } from '../../src/errors/account-status';
import { AccountLockedError } from '../../src/errors/account-locked';
import { AccountStatus } from '../../src/enumerations/account-status';

describe('Additional Error Classes', () => {
  describe('InvalidUserIdError', () => {
    it('should create error with default status code', () => {
      const error = new InvalidUserIdError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(422);
    });

    it('should create error with custom status code', () => {
      const error = new InvalidUserIdError(undefined, undefined, 400);
      expect(error.statusCode).toBe(400);
    });
  });

  describe('InvalidUsernameError', () => {
    it('should create error with default status code', () => {
      const error = new InvalidUsernameError('bad-user');
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(422);
    });
  });



  describe('TokenNotFoundError', () => {
    it('should create error with default status code', () => {
      const error = new TokenNotFoundError('token123');
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(404);
      expect(error.message).toContain('token123');
    });

    it('should create error with custom status code', () => {
      const error = new TokenNotFoundError('token456', undefined, 400);
      expect(error.statusCode).toBe(400);
    });
  });





  describe('PendingEmailVerificationError', () => {
    it('should create error with default status code', () => {
      const error = new PendingEmailVerificationError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(403);
    });
  });









  describe('InvalidChallengeResponseError', () => {
    it('should create error with default status code', () => {
      const error = new InvalidChallengeResponseError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(401);
    });
  });

  describe('LoginChallengeExpiredError', () => {
    it('should create error with default status code', () => {
      const error = new LoginChallengeExpiredError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(401);
    });
  });

  describe('DirectTokenUsedError', () => {
    it('should create error with default status code', () => {
      const error = new DirectTokenUsedError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(401);
    });
  });

  describe('FailedToUseDirectTokenError', () => {
    it('should create error with default status code', () => {
      const error = new FailedToUseDirectTokenError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(401);
    });
  });

  describe('GenericValidationError', () => {
    it('should create error with default status code', () => {
      const error = new GenericValidationError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(422);
    });
  });

  describe('AccountStatusError', () => {
    it('should create error for AdminLock status', () => {
      const error = new AccountStatusError(AccountStatus.AdminLock);
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(403);
    });

    it('should create error for Deleted status', () => {
      const error = new AccountStatusError(AccountStatus.Deleted);
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(403);
    });
  });

  describe('AccountLockedError', () => {
    it('should create error with default status code', () => {
      const error = new AccountLockedError();
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(403);
    });
  });
});
