import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteError } from './translatable-suite';

export class PrivateKeyRequiredError extends TranslatableSuiteError {
  constructor(language?: string) {
    super(
      SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey,
      undefined,
      language,
    );
    this.name = 'PrivateKeyRequiredError';
  }
}
