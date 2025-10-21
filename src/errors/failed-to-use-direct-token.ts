import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class FailedToUseDirectTokenError extends TranslatableSuiteHandleableError {
  constructor() {
    super(SuiteCoreStringKey.Error_FailedToUseDirectLoginToken, undefined, undefined, { statusCode: 401 });
  }
}
