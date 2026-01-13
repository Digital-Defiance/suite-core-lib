/**
 * Result type for operations that can succeed or fail with optional data and error information.
 */
export interface IFailableResult<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string | Error;
}
