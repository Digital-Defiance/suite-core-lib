import { TranslatableHandleableGenericError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { SuiteCoreComponentId } from '../i18n-setup';

export class TranslatableSuiteHandleableError extends TranslatableHandleableGenericError<SuiteCoreStringKey> {
  constructor(
    messageKey: SuiteCoreStringKey,
    otherVars?: Record<string, string | number>,
    language?: string,
    handleableOptions?: {
      statusCode?: number;
      cause?: Error;
      sourceData?: unknown;
    },
  ) {
    super(
      SuiteCoreComponentId,
      messageKey,
      otherVars,
      language,
      undefined, // metadata
      'default', // instanceKey
      handleableOptions,
    );
    this.name = 'TranslatableSuiteHandleableError';
  }
}
