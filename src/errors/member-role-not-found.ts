import { TranslatableSuiteError } from './translatable-suite';
import { SuiteCoreStringKey } from '../enumerations';
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';

export class MemberRoleNotFoundError extends TranslatableSuiteError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.MemberRoleNotFound, undefined, language);
    this.name = 'MemberRoleNotFoundError';
  }
}
