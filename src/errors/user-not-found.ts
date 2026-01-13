/**
 * Error thrown when a user cannot be found.
 */
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class UserNotFoundError extends TranslatableSuiteHandleableError {
  constructor(language?: string, statusCode = 404) {
    super(SuiteCoreStringKey.Auth_UserNotFound, undefined, language, {
      statusCode,
    });
    this.name = 'UserNotFoundError';
  }
}
