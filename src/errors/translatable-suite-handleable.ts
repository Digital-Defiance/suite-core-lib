/**
 * Translatable handleable error class for suite-core library with i18n and error handling support.
 */
import { TranslatableHandleableGenericError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKeyValue } from '../enumerations';
import { SuiteCoreComponentId } from '../i18n-setup';

export class TranslatableSuiteHandleableError extends TranslatableHandleableGenericError<SuiteCoreStringKeyValue> {
  constructor(
    messageKey: SuiteCoreStringKeyValue,
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
