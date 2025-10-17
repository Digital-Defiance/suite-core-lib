import { HandleableErrorOptions } from '../interfaces/handleable-error-options';

export class HandleableError extends Error {
  public readonly cause?: Error;
  public readonly statusCode: number;
  public readonly sourceData?: unknown;
  private _handled: boolean;

  constructor(source: Error, options?: HandleableErrorOptions) {
    super(source.message);
    this.name = this.constructor.name;
    this.cause = source;
    this.statusCode = options?.statusCode ?? 500;
    this._handled = options?.handled ?? false;
    this.sourceData = options?.sourceData;

    // Ensure proper prototype chain for instanceof checks across transpiled targets
    Object.setPrototypeOf(this, new.target.prototype);

    // Capture stack trace - prioritize source stack, then capture new one
    if (source.stack) {
      this.stack = source.stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
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
        this.cause instanceof HandleableError
          ? this.cause.toJSON()
          : this.cause?.message,
      ...(this.sourceData ? { sourceData: this.sourceData } : {}),
    };
  }
}
