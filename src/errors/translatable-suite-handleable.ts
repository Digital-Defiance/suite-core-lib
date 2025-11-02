import { IHandleable } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteError } from './translatable-suite';

export class TranslatableSuiteHandleableError
  extends TranslatableSuiteError
  implements IHandleable
{
  public override readonly cause?: Error;
  public readonly statusCode: number;
  public readonly sourceData?: unknown;
  private _handled = false;

  constructor(
    messageKey: SuiteCoreStringKey,
    otherVars?: Record<string, string | number>,
    language?: string,
    handleableOptions?: {
      statusCode?: number;
      cause?: Error;
      sourceData?: unknown;
    }
  ) {
    super(messageKey, otherVars, language);
    this.statusCode = handleableOptions?.statusCode ?? 500;
    this.cause = handleableOptions?.cause;
    this.sourceData = handleableOptions?.sourceData;
  }
  public get handled(): boolean {
    return this._handled;
  }
  public set handled(value: boolean) {
    this._handled = value;
  }
  toJSON(): Record<string, unknown> {
    return {
      statusCode: this.statusCode,
      message: this.message,
      cause: this.cause,
      sourceData: this.sourceData,
    };
  }
}
