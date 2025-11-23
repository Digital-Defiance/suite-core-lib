export class HandleableError extends Error {
  public readonly cause?: Error;
  public readonly statusCode: number;
  public readonly sourceData?: unknown;
  private _handled: boolean;

  constructor(
    message: string,
    options?: {
      cause?: Error;
      statusCode?: number;
      handled?: boolean;
      sourceData?: unknown;
    }
  ) {
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

export class ObjectIdProvider {
  readonly byteLength = 12;
  readonly name = 'ObjectID';

  generate(): Uint8Array {
    // Generate a mock ObjectID (12 bytes)
    const buffer = new Uint8Array(12);
    // Fill with timestamp (4 bytes) + random (5 bytes) + counter (3 bytes)
    const timestamp = Math.floor(Date.now() / 1000);
    buffer[0] = (timestamp >> 24) & 0xff;
    buffer[1] = (timestamp >> 16) & 0xff;
    buffer[2] = (timestamp >> 8) & 0xff;
    buffer[3] = timestamp & 0xff;

    // Random bytes
    for (let i = 4; i < 9; i++) {
      buffer[i] = Math.floor(Math.random() * 256);
    }

    // Counter bytes
    const counter = Math.floor(Math.random() * 0xffffff);
    buffer[9] = (counter >> 16) & 0xff;
    buffer[10] = (counter >> 8) & 0xff;
    buffer[11] = counter & 0xff;

    return buffer;
  }

  validate(id: Uint8Array): boolean {
    if (id.length !== this.byteLength) {
      return false;
    }

    // Check if all bytes are zero (invalid ObjectID)
    let allZeros = true;
    for (let i = 0; i < id.length; i++) {
      if (id[i] !== 0) {
        allZeros = false;
        break;
      }
    }

    return !allZeros;
  }

  serialize(id: Uint8Array): string {
    return Array.from(id)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  deserialize(str: string): Uint8Array {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }

    if (str.length !== 24) {
      throw new Error(`Invalid string length: expected 24, got ${str.length}`);
    }

    if (!/^[0-9a-fA-F]{24}$/.test(str)) {
      throw new Error('Invalid characters in ObjectID string');
    }

    const buffer = new Uint8Array(12);
    for (let i = 0; i < 12; i++) {
      buffer[i] = parseInt(str.substr(i * 2, 2), 16);
    }

    if (!this.validate(buffer)) {
      throw new Error('Invalid deserialized ObjectID');
    }

    return buffer;
  }

  idToString(id: unknown): string {
    if (id instanceof Uint8Array) {
      return this.serialize(id);
    }
    return String(id);
  }

  idFromString(str: string): Uint8Array {
    return this.deserialize(str);
  }
}
