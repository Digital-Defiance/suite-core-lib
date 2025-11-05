import { EmailVerifiedError } from '../../src/errors/email-verified';
import { InvalidTokenError } from '../../src/errors/invalid-token';
import { UsernameOrEmailRequiredError } from '../../src/errors/username-email-required';

describe('Simple Error Classes', () => {
  describe('EmailVerifiedError', () => {
    it('should create error with default status code', () => {
      const error = new EmailVerifiedError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('EmailVerifiedError');
      expect(error.statusCode).toBe(409);
    });

    it('should create error with custom status code', () => {
      const error = new EmailVerifiedError(400);
      expect(error.statusCode).toBe(400);
    });
  });

  describe('InvalidTokenError', () => {
    it('should create error with default status code', () => {
      const error = new InvalidTokenError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('InvalidTokenError');
      expect(error.statusCode).toBe(422);
    });

    it('should create error with custom status code', () => {
      const error = new InvalidTokenError(undefined, 401);
      expect(error.statusCode).toBe(401);
    });

    it('should create error with language', () => {
      const error = new InvalidTokenError('fr');
      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('UsernameOrEmailRequiredError', () => {
    it('should create error with default status code', () => {
      const error = new UsernameOrEmailRequiredError();
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('UsernameOrEmailRequiredError');
      expect(error.statusCode).toBe(422);
    });

    it('should create error with language', () => {
      const error = new UsernameOrEmailRequiredError('fr');
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(422);
    });
  });
});
