import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteError } from './translatable-suite';

export class PrivateKeyRequiredError extends TranslatableSuiteError {
  constructor(language?: CoreLanguageCode) {
    super(
        SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey,
        undefined,
        language,
    );
    this.name = 'PrivateKeyRequiredError';
  }
}
