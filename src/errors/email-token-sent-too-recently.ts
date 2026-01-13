/**
 * Error thrown when an email token was sent too recently and must wait before resending.
 */
import { Constants as AppConstants } from '../constants';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';

export class EmailTokenSentTooRecentlyError extends TranslatableSuiteHandleableError {
  public readonly lastSent: Date;
  public readonly nextAvailableTime: Date;

  constructor(lastSent: Date, statusCode = 429) {
    const now = Date.now();
    const nextAvailableTime = new Date(
      lastSent.getTime() + AppConstants.EmailTokenResendInterval,
    );
    const timeRemaining = Math.max(
      0,
      Math.ceil((nextAvailableTime.getTime() - now) / 1000),
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
