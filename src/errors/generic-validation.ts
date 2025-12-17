import {
  HandleableError,
  HandleableErrorOptions,
} from '@digitaldefiance/i18n-lib';

export class GenericValidationError extends HandleableError {
  constructor(message: string, options?: HandleableErrorOptions) {
    super(new Error(message), { ...options, statusCode: 422 });
    this.name = 'GenericValidationError';
  }
}
