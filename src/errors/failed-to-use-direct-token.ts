/**
 * Error thrown when a direct login token fails to be used.
 */
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class FailedToUseDirectTokenError extends TranslatableSuiteHandleableError {
  constructor() {
    super(
      SuiteCoreStringKey.Error_FailedToUseDirectLoginToken,
      undefined,
      undefined,
      { statusCode: 401 },
    );
    this.name = 'FailedToUseDirectTokenError';
  }
}
