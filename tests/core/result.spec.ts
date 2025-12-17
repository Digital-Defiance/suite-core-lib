import {
  failure,
  isFailure,
  isSuccess,
  Result,
  success,
} from '../../src/core/result';

describe('Result Type', () => {
  describe('success', () => {
    it('should create a successful result', () => {
      const result = success({ value: 42 });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual({ value: 42 });
      }
    });
  });

  describe('failure', () => {
    it('should create a failed result', () => {
      const error = new Error('Test error');
      const result = failure(error);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe(error);
      }
    });
  });

  describe('isSuccess', () => {
    it('should return true for successful results', () => {
      const result: Result<number, Error> = success(42);
      expect(isSuccess(result)).toBe(true);
      if (isSuccess(result)) {
        expect(result.data).toBe(42);
      }
    });

    it('should return false for failed results', () => {
      const result: Result<number, Error> = failure(new Error('Test'));
      expect(isSuccess(result)).toBe(false);
    });
  });

  describe('isFailure', () => {
    it('should return true for failed results', () => {
      const error = new Error('Test error');
      const result: Result<number, Error> = failure(error);
      expect(isFailure(result)).toBe(true);
      if (isFailure(result)) {
        expect(result.error).toBe(error);
      }
    });

    it('should return false for successful results', () => {
      const result: Result<number, Error> = success(42);
      expect(isFailure(result)).toBe(false);
    });
  });

  describe('type safety', () => {
    it('should provide type-safe access to data and error', () => {
      const result: Result<string, Error> = success('test');

      if (isSuccess(result)) {
        const data: string = result.data;
        expect(data).toBe('test');
      }

      if (isFailure(result)) {
        const error: Error = result.error;
        expect(error).toBeInstanceOf(Error);
      }
    });
  });
});
