/**
 * Mock for @digitaldefiance/ecies-lib
 * Used in integration tests to avoid circular dependency issues
 */

export interface IIdProvider {
  generate(): Uint8Array;
  parse(id: Uint8Array): string;
  validate(id: Uint8Array): boolean;
}

export class ObjectIdProvider implements IIdProvider {
  generate(): Uint8Array {
    return new Uint8Array(12).fill(Math.floor(Math.random() * 256));
  }

  parse(id: Uint8Array): string {
    return Array.from(id)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  validate(id: Uint8Array): boolean {
    return id.length === 12;
  }
}

export class EmailString {
  constructor(private email: string) {
    if (!email.includes('@')) {
      throw new Error('Invalid email');
    }
  }

  toString(): string {
    return this.email;
  }

  valueOf(): string {
    return this.email;
  }
}

export enum InvalidEmailErrorType {
  INVALID_FORMAT = 'INVALID_FORMAT',
  EMPTY_EMAIL = 'EMPTY_EMAIL',
  TOO_LONG = 'TOO_LONG',
}

export class ECIESService {
  constructor(private config: Record<string, unknown>) {}

  generateNewMnemonic(): string {
    return 'test mnemonic words here for testing purposes only';
  }

  mnemonicToSimpleKeyPair(mnemonic: string): {
    privateKey: Uint8Array;
    publicKey: Uint8Array;
  } {
    // Use mnemonic length to vary the fill value slightly (still deterministic for tests)
    const fillValue = mnemonic.length % 256;
    return {
      privateKey: new Uint8Array(32).fill(fillValue || 1),
      publicKey: new Uint8Array(33).fill(fillValue || 2),
    };
  }

  async encryptSimple(
    publicKey: Uint8Array,
    message: Uint8Array
  ): Promise<Uint8Array> {
    // Simple mock encryption - just prepend a header
    const result = new Uint8Array(message.length + 10);
    result.set(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0);
    result.set(message, 10);
    return result;
  }

  async decryptSimple(
    privateKey: Uint8Array,
    encrypted: Uint8Array
  ): Promise<Uint8Array> {
    // Simple mock decryption - just remove the header
    if (encrypted.length < 10) {
      throw new Error('Invalid encrypted data');
    }
    return encrypted.slice(10);
  }

  async encryptSingle(
    recipientId: Uint8Array,
    publicKey: Uint8Array,
    message: Uint8Array
  ): Promise<Uint8Array> {
    // Simple mock encryption with recipient ID
    const result = new Uint8Array(message.length + recipientId.length + 10);
    result.set(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0);
    result.set(recipientId, 10);
    result.set(message, 10 + recipientId.length);
    return result;
  }

  async decryptSingle(
    recipientId: Uint8Array,
    privateKey: Uint8Array,
    encrypted: Uint8Array
  ): Promise<Uint8Array> {
    // Simple mock decryption - remove header and recipient ID
    const headerSize = 10 + recipientId.length;
    if (encrypted.length < headerSize) {
      throw new Error('Invalid encrypted data');
    }
    return encrypted.slice(headerSize);
  }
}
