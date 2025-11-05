import { InvalidUserIdError } from '../../src/errors/invalid-userid';
import { SuiteCoreStringKey } from '../../src/enumerations';

describe('InvalidUserIdError', () => {
  it('should create error without detail', () => {
    const error = new InvalidUserIdError();
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('InvalidUserIdError');
    expect(error.statusCode).toBe(422);
  });

  it('should create error with detail', () => {
    const error = new InvalidUserIdError(SuiteCoreStringKey.Error_InvalidInput);
    expect(error).toBeInstanceOf(Error);
    expect(error.statusCode).toBe(422);
  });

  it('should create error with custom status code', () => {
    const error = new InvalidUserIdError(undefined, undefined, 400);
    expect(error.statusCode).toBe(400);
  });

  it('should create error with language', () => {
    const error = new InvalidUserIdError(undefined, 'fr');
    expect(error).toBeInstanceOf(Error);
  });

  it('should create error with detail and language', () => {
    const error = new InvalidUserIdError(SuiteCoreStringKey.Error_InvalidInput, 'es', 400);
    expect(error.statusCode).toBe(400);
  });
});
