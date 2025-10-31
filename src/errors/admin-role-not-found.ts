import { TranslatableSuiteError } from './translatable-suite';
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';

export class AdminRoleNotFoundError extends TranslatableSuiteError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.AdminRoleNotFound, undefined, language);
    this.name = 'AdminRoleNotFoundError';
  }
}
