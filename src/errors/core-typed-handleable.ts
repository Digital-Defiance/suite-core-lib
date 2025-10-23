import { CompleteReasonMap, CoreLanguageCode, CoreStringKey, CoreTypedError, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { HandleableErrorOptions } from '../interfaces';
import { HandleableError, IHandleable } from '@digitaldefiance/ecies-lib';
import { PluginTypedHandleableError } from './plugin-typed-handleable';

export class CoreTypedHandleableError<TEnum extends Record<string, string>> extends CoreTypedError<TEnum> implements IHandleable {
  public readonly cause?: Error;
  public readonly statusCode: number;
  public readonly sourceData?: unknown;
  private _handled: boolean;

  constructor(type: TEnum[keyof TEnum], reasonMap: CompleteReasonMap<TEnum, CoreStringKey>, engine: PluginI18nEngine<CoreLanguageCode>, source: Error, options?: HandleableErrorOptions, language?: CoreLanguageCode, otherVars?: Record<string, string | number>) {
    super(
      engine,
      type,
      reasonMap,
      language,
      otherVars
    );
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
        this.cause instanceof HandleableError || this.cause instanceof PluginTypedHandleableError || this.cause instanceof CoreTypedHandleableError
          ? this.cause.toJSON()
          : this.cause?.message,
      ...(this.sourceData ? { sourceData: this.sourceData } : {}),
    };
  }
}