/**
 * Error thrown when an email token was sent too recently and must wait before resending.
 *
 * Supports generic TDate to allow non-Date scalar date types (e.g. BrightDate decimal days).
 * When TDate is not a standard Date, provide:
 *   - `toUnixMs`: converts TDate to Unix milliseconds for wall-clock time remaining calculation
 *   - `addIntervalMs`: adds a millisecond duration to a TDate, returning a new TDate
 *
 * Example for BrightDate:
 *   toUnixMs: (d) => BrightDate.fromValue(d).toUnixMs()
 *   addIntervalMs: (d, ms) => d + ms / 86_400_000
 */
import { Constants as AppConstants } from '../constants';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailTokenSentTooRecentlyError<
  TDate extends Date | number = Date,
> extends TranslatableSuiteHandleableError {
  public readonly lastSent: TDate;
  public readonly nextAvailableTime: TDate;

  constructor(
    lastSent: TDate,
    statusCode = 429,
    /**
     * Converts TDate to Unix milliseconds.
     * Default handles both Date and Unix-ms numbers.
     * Required for non-Unix number types (e.g. BrightDate).
     */
    toUnixMs: (date: TDate) => number = (d) =>
      d instanceof Date ? d.getTime() : (d as number),
    /**
     * Adds a millisecond interval to a TDate, returning a new TDate.
     * Default handles both Date and Unix-ms numbers.
     * Required for non-Unix number types (e.g. BrightDate).
     */
    addIntervalMs: (date: TDate, intervalMs: number) => TDate = (d, ms) =>
      (d instanceof Date
        ? new Date(d.getTime() + ms)
        : (d as number) + ms) as unknown as TDate,
  ) {
    const nextAvailableTime = addIntervalMs(
      lastSent,
      AppConstants.EmailTokenResendInterval,
    );
    const timeRemaining = Math.max(
      0,
      Math.ceil((toUnixMs(nextAvailableTime) - Date.now()) / 1000),
    );

    super(
      SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate,
      { timeRemaining: timeRemaining.toString() },
      undefined,
      { statusCode },
    );
    this.name = 'EmailTokenSentTooRecentlyError';
    this.lastSent = lastSent;
    this.nextAvailableTime = nextAvailableTime;
  }
}
