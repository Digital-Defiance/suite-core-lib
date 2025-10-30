export declare class HandleableError extends Error {
    readonly cause?: Error;
    readonly statusCode: number;
    readonly sourceData?: unknown;
    private _handled;
    constructor(message: string, options?: {
        cause?: Error;
        statusCode?: number;
        handled?: boolean;
        sourceData?: unknown;
    });
    get handled(): boolean;
    set handled(value: boolean);
}
export declare class SecureString {
    private _value;
    constructor(_value: string);
    get value(): string;
    get notNullValue(): string;
    get valueAsHexString(): string;
    get valueAsBase64String(): string;
    get valueAsUint8Array(): Uint8Array;
}
//# sourceMappingURL=ecies-lib.d.ts.map