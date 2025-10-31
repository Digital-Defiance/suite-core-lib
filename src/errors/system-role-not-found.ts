import { TranslatableSuiteError } from './translatable-suite';
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';

export class SystemEmailRoleNotFoundError extends TranslatableSuiteError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.SystemRoleNotFound, undefined, language);
    this.name = 'SystemRoleNotFoundError';
  }
}
