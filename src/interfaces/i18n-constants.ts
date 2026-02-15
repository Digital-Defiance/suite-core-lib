/**
 * Type-safe i18n constants for the Suite Core component.
 *
 * These are the constant keys referenced in Suite Core translation templates
 * (e.g., `{Site}` in `'{Site} email confirmation'`).
 *
 * Consuming apps should extend this interface if they add additional
 * constants used in their own templates.
 */
import type { II18nConstants } from '@digitaldefiance/i18n-lib';

export interface ISuiteCoreI18nConstants extends II18nConstants {
  /** Site name, used in `{Site}` template variables */
  Site: string;
  /** Site tagline, used in `{SiteTagline}` template variables */
  SiteTagline: string;
  /** Site description, used in `{SiteDescription}` template variables */
  SiteDescription: string;
  /** Email domain, used in `{SiteEmailDomain}` template variables */
  SiteEmailDomain: string;
  /** Hostname, used in `{SiteHostname}` template variables */
  SiteHostname: string;
  /** Token resend interval in minutes, used in `{EmailTokenResendIntervalMinutes}` */
  EmailTokenResendIntervalMinutes: number;
}
