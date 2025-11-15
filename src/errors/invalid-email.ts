import { InvalidEmailErrorType } from '@digitaldefiance/ecies-lib';
import { HandleableErrorOptions, TypedError, TypedHandleableError } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { SuiteCoreComponentId } from '../i18n-setup';

export class InvalidEmailError extends TypedHandleableError<typeof InvalidEmailErrorType, SuiteCoreStringKey> {
  public readonly email?: string;
  constructor(type: InvalidEmailErrorType, email?: string, options?: HandleableErrorOptions, language?: string) {
    const source = options?.cause instanceof Error ? options.cause : new Error();
    const reasonMap: Record<InvalidEmailErrorType, SuiteCoreStringKey> = {
      [InvalidEmailErrorType.Invalid]: SuiteCoreStringKey.Error_InvalidEmail,
      [InvalidEmailErrorType.Missing]: SuiteCoreStringKey.Error_InvalidEmailMissing,
      [InvalidEmailErrorType.Whitespace]:
        SuiteCoreStringKey.Error_InvalidEmailWhitespace,
    };
    super(SuiteCoreComponentId, type, reasonMap, source, { ...options, statusCode: options?.statusCode ?? 422 }, language, {
      email: email ?? ''
    });
    this.email = email;
    this.name = 'InvalidEmailError';
  }
}
