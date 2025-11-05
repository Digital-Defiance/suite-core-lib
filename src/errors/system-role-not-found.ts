import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';
import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';

export class SystemRoleNotFoundError extends TranslatableSuiteHandleableError {
  constructor(language?: CoreLanguageCode) {
    super(SuiteCoreStringKey.SystemRoleNotFound, undefined, language, { statusCode: 500 });
    this.name = 'SystemRoleNotFoundError';
  }
}
