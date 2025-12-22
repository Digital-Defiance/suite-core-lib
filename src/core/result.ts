/**
 * Result type pattern for better error handling
 * Provides type-safe success/failure handling without exceptions
 */

export type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

/**
 * Create a successful result
 */
export function success<T>(data: T): Result<T, never> {
  return { success: true, data };
}

/**
 * Create a failed result
 */
export function failure<E>(error: E): Result<never, E> {
  return { success: false, error };
}

/**
 * Check if result is successful
 */
export function isSuccess<T, E>(
  result: Result<T, E>,
): result is { success: true; data: T } {
  return result.success;
}

/**
 * Check if result is a failure
 */
export function isFailure<T, E>(
  result: Result<T, E>,
): result is { success: false; error: E } {
  return !result.success;
}
