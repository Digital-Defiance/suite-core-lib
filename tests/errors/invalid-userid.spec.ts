import { LanguageCodes } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../../src/enumerations';
import { InvalidUserIdError } from '../../src/errors/invalid-userid';

describe('InvalidUserIdError', () => {
  it('should create error without detail', () => {
    const error = new InvalidUserIdError();
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('InvalidUserIdError');
    expect(error.statusCode).toBe(422);
  });

  it('should create error with detail', () => {
    const error = new InvalidUserIdError(
      SuiteCoreStringKey.Validation_InvalidUserId,
    );
    expect(error).toBeInstanceOf(Error);
    expect(error.statusCode).toBe(422);
  });

  it('should create error with custom status code', () => {
    const error = new InvalidUserIdError(undefined, undefined, 400);
    expect(error.statusCode).toBe(400);
  });

  it('should create error with language', () => {
    const error = new InvalidUserIdError(
      undefined,
      LanguageCodes.French as (typeof LanguageCodes)[keyof typeof LanguageCodes],
    );
    expect(error).toBeInstanceOf(Error);
  });

  it('should create error with detail and language', () => {
    const error = new InvalidUserIdError(
      SuiteCoreStringKey.Validation_InvalidUserId,
      LanguageCodes.Spanish as (typeof LanguageCodes)[keyof typeof LanguageCodes],
      400,
    );
    expect(error.statusCode).toBe(400);
  });
});
