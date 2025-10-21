import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class DirectTokenUsedError extends TranslatableSuiteHandleableError {
  constructor() {
    super(SuiteCoreStringKey.Error_DirectTokenAlreadyUsed, undefined, undefined, { statusCode: 401 });
  }
}
