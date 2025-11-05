/**
 * Core error class exports for suite-core-lib
 */

// Base error classes
export { TranslatableSuiteError } from '../errors/translatable-suite';
export { TranslatableSuiteHandleableError } from '../errors/translatable-suite-handleable';
export { CoreTypedHandleableError } from '../errors/core-typed-handleable';

// Common error classes
export { UserNotFoundError } from '../errors/user-not-found';
export { InvalidCredentialsError } from '../errors/invalid-credentials';
export { InvalidEmailError } from '../errors/invalid-email';
export { InvalidUsernameError } from '../errors/invalid-username';
export { EmailInUseError } from '../errors/email-in-use';
export { UsernameInUseError } from '../errors/username-in-use';
export { GenericValidationError } from '../errors/generic-validation';
