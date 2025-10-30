"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureString = exports.HandleableError = void 0;
class HandleableError extends Error {
    constructor(message, options) {
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
    get handled() {
        return this._handled;
    }
    set handled(value) {
        this._handled = value;
    }
}
exports.HandleableError = HandleableError;
class SecureString {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    get notNullValue() {
        return this._value;
    }
    get valueAsHexString() {
        return new TextEncoder().encode(this._value).reduce((str, byte) => {
            return str + byte.toString(16).padStart(2, '0');
        }, '');
    }
    get valueAsBase64String() {
        return btoa(this._value);
    }
    get valueAsUint8Array() {
        return new TextEncoder().encode(this._value);
    }
}
exports.SecureString = SecureString;
//# sourceMappingURL=ecies-lib.js.map