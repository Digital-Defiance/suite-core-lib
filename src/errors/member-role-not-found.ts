import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';
import { SuiteCoreStringKey } from '../enumerations';
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';

export class MemberRoleNotFoundError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.MemberRoleNotFound, undefined, language, { statusCode: 500 });
    this.name = 'MemberRoleNotFoundError';
  }
}
