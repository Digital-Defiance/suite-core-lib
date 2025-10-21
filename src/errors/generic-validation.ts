import {
  HandleableError,
  HandleableErrorOptions,
} from '@digitaldefiance/ecies-lib';

export class GenericValidationError extends HandleableError {
  constructor(message: string, options?: HandleableErrorOptions) {
    super(new Error(message), { ...options, statusCode: 422 });
  }
}