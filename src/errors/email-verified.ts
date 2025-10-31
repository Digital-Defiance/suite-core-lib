import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailVerifiedError extends TranslatableSuiteHandleableError {
  constructor(statusCode = 409) {
    super(SuiteCoreStringKey.EmailVerification_AlreadyVerified, undefined, undefined, {
      statusCode,
    });
    this.name = 'EmailVerifiedError';
  }
}
