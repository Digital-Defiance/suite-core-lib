/**
 * Error class for PBKDF2 (Password-Based Key Derivation Function 2) operations.
 */
import { CompleteReasonMap, PluginTypedError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { Pbkdf2ErrorType } from '../enumerations/pbkdf2-error-type';
import { SuiteCoreComponentId } from '../i18n-setup';

export class Pbkdf2Error extends PluginTypedError<
  typeof Pbkdf2ErrorType,
  SuiteCoreStringKey
> {
  constructor(type: Pbkdf2ErrorType, language?: string) {
    const pbkdf2ErrorMap: CompleteReasonMap<
      typeof Pbkdf2ErrorType,
      SuiteCoreStringKey
    > = {
      [Pbkdf2ErrorType.InvalidSaltLength]:
        SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength,
      [Pbkdf2ErrorType.InvalidHashLength]:
        SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength,
    };
    super(SuiteCoreComponentId, type, pbkdf2ErrorMap, language);
    this.name = 'Pbkdf2Error';
  }
}
