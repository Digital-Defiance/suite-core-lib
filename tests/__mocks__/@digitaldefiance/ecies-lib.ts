export class HandleableError extends Error {
  public readonly cause?: Error;
  public readonly statusCode: number;
  public readonly sourceData?: unknown;
  private _handled: boolean;

  constructor(message: string, options?: { cause?: Error; statusCode?: number; handled?: boolean; sourceData?: unknown }) {
    super(message);
    this.name = this.constructor.name;
    this.cause = options?.cause;
    this.statusCode = options?.statusCode ?? 500;
    this._handled = options?.handled ?? false;
    this.sourceData = options?.sourceData;

    if (this.cause && this.cause.stack) {
      this.stack = this.stack + '\nCaused by: ' + this.cause.stack;
    }
  }

  public get handled(): boolean {
    return this._handled;
  }

  public set handled(value: boolean) {
    this._handled = value;
  }
}

export class EmailString {
  public readonly email: string;

  constructor(email: string) {
    const trimmedEmail = email.trim();
    if (trimmedEmail.length === 0) {
      throw new Error('Email cannot be empty');
    }
    if (trimmedEmail.length !== email.length) {
      throw new Error('Email cannot have leading/trailing whitespace');
    }
    // Basic email validation
    if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      throw new Error('Invalid email format');
    }
    this.email = trimmedEmail;
  }

  toString(): string {
    return this.email;
  }
}

export class SecureString {
  constructor(private _value: string) {}
  
  get value(): string {
    return this._value;
  }
  
  get notNullValue(): string {
    return this._value;
  }

  get valueAsHexString(): string {
    return new TextEncoder().encode(this._value).reduce((str, byte) => {
      return str + byte.toString(16).padStart(2, '0');
    }, '');
  }

  get valueAsBase64String(): string {
    return btoa(this._value);
  }

  get valueAsUint8Array(): Uint8Array {
    return new TextEncoder().encode(this._value);
  }
}