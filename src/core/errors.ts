/**
 * Core error class exports for suite-core-lib
 */

// Base error classes
export { CoreTypedHandleableError } from '../errors/core-typed-handleable';
export { TranslatableSuiteError } from '../errors/translatable-suite';
export { TranslatableSuiteHandleableError } from '../errors/translatable-suite-handleable';

// Common error classes
export { EmailInUseError } from '../errors/email-in-use';
export { GenericValidationError } from '../errors/generic-validation';
export { InvalidCredentialsError } from '../errors/invalid-credentials';
export { InvalidEmailError } from '../errors/invalid-email';
export { InvalidUsernameError } from '../errors/invalid-username';
export { UserNotFoundError } from '../errors/user-not-found';
export { UsernameInUseError } from '../errors/username-in-use';
