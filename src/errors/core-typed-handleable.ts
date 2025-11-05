import {
  CompleteReasonMap,
  CoreStringKey,
  CoreTypedError,
  HandleableError,
  HandleableErrorOptions,
  IHandleable,
  TypedHandleableError,
} from '@digitaldefiance/i18n-lib';

export class CoreTypedHandleableError<TEnum extends Record<string, string>>
  extends CoreTypedError<TEnum>
  implements IHandleable
{
  public override readonly cause?: Error;
  public readonly statusCode: number;
  public readonly sourceData?: unknown;
  private _handled: boolean;

  constructor(
    type: TEnum[keyof TEnum],
    reasonMap: CompleteReasonMap<TEnum, CoreStringKey>,
    source: Error,
    options?: HandleableErrorOptions,
    language?: string,
    otherVars?: Record<string, string | number>
  ) {
    super(type, reasonMap, language, otherVars);
    this.cause = source;
    this.statusCode = options?.statusCode ?? 500;
    this._handled = options?.handled ?? false;
    this.sourceData = options?.sourceData;

    // Capture stack trace - prioritize source stack, then capture new one
    if (source.stack) {
      this.stack = source.stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.name = this.constructor.name;
  }

  public get handled(): boolean {
    return this._handled;
  }

  public set handled(value: boolean) {
    this._handled = value;
  }

  public toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      handled: this.handled,
      stack: this.stack,
      cause:
        this.cause instanceof HandleableError ||
        this.cause instanceof TypedHandleableError ||
        this.cause instanceof CoreTypedHandleableError
          ? this.cause.toJSON()
          : this.cause?.message,
      ...(this.sourceData ? { sourceData: this.sourceData } : {}),
    };
  }
}
