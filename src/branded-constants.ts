/**
 * Branded interface definitions for ICoreConstants and IConstants.
 *
 * Provides runtime validation for suite-core-lib constants using
 * `@digitaldefiance/branded-interface`. Validates numeric fields as positive
 * integers, string role/user fields as non-empty, email fields against an
 * email pattern, and color fields as valid CSS hex color strings.
 *
 * @module branded-constants
 */

import {
  createBrandedInterface,
  safeParseInterface,
  interfaceSerializer,
} from '@digitaldefiance/branded-interface';
import type {
  BrandedInstance,
  InterfaceSafeParseResult,
} from '@digitaldefiance/branded-interface';
import type { IConstants } from './interfaces/constants';
import type { ICoreConstants } from './interfaces/core-consts';

/**
 * Utility type that adds an index signature to an interface,
 * making it compatible with Record<string, unknown> constraints.
 * This is needed because TypeScript interfaces without explicit
 * index signatures don't satisfy Record<string, unknown>.
 */
type Indexable<T> = { [K in keyof T]: T[K] } & Record<string, unknown>;

// =============================================================================
// Validation Helpers
// =============================================================================

/**
 * Returns true if the value is a positive integer (> 0, finite, no fractional part).
 */
export function isPositiveInt(v: unknown): boolean {
  return (
    typeof v === 'number' && Number.isFinite(v) && Number.isInteger(v) && v > 0
  );
}

/**
 * Returns true if the value is a non-empty string.
 */
export function isNonEmpty(v: unknown): boolean {
  return typeof v === 'string' && v.length > 0;
}

/**
 * Returns true if the value matches a basic email pattern (contains @ with text on both sides).
 */
export function isEmail(v: unknown): boolean {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * Returns true if the value is a valid CSS hex color string (#RGB, #RGBA, #RRGGBB, or #RRGGBBAA).
 */
export function isHexColor(v: unknown): boolean {
  return (
    typeof v === 'string' &&
    /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(v)
  );
}

// =============================================================================
// BrandedCoreConstants
// =============================================================================

/**
 * Branded interface definition mirroring ICoreConstants with field-level validation.
 *
 * - Numeric fields are validated as positive integers
 * - String role/user fields are validated as non-empty
 * - Object fields (RegExp, IIdProviderBase, IBackupCodeConstants) use type: 'object'
 */
export const BrandedCoreConstants = createBrandedInterface<
  Indexable<ICoreConstants>
>('SuiteCoreCoreConstants', {
  idProvider: { type: 'object' },
  BACKUP_CODES: { type: 'object' },
  LoginChallengeExpiration: { type: 'number', validate: isPositiveInt },
  DefaultExpireMemoryMnemonicSeconds: {
    type: 'number',
    validate: isPositiveInt,
  },
  DefaultExpireMemoryWalletSeconds: { type: 'number', validate: isPositiveInt },
  DirectLoginChallengeLength: { type: 'number', validate: isPositiveInt },
  EmailTokenExpiration: { type: 'number', validate: isPositiveInt },
  EmailTokenLength: { type: 'number', validate: isPositiveInt },
  BcryptRounds: { type: 'number', validate: isPositiveInt },
  AdministratorUser: { type: 'string', validate: isNonEmpty },
  AdministratorRole: { type: 'string', validate: isNonEmpty },
  MemberRole: { type: 'string', validate: isNonEmpty },
  MemberUser: { type: 'string', validate: isNonEmpty },
  SystemRole: { type: 'string', validate: isNonEmpty },
  SystemUser: { type: 'string', validate: isNonEmpty },
  UsernameMinLength: { type: 'number', validate: isPositiveInt },
  UsernameMaxLength: { type: 'number', validate: isPositiveInt },
  UsernameRegex: { type: 'object' },
  PasswordMinLength: { type: 'number', validate: isPositiveInt },
  PasswordRegex: { type: 'object' },
  JwtSecretRegex: { type: 'object' },
  MnemonicRegex: { type: 'object' },
  MnemonicHmacRegex: { type: 'object' },
  MnemonicEncryptionKeyRegex: { type: 'object' },
  EmailTokenResendInterval: { type: 'number', validate: isPositiveInt },
  EmailTokenResendIntervalMinutes: { type: 'number', validate: isPositiveInt },
  Site: { type: 'string', validate: isNonEmpty },
  SiteTagline: { type: 'string' },
  SiteDescription: { type: 'string' },
  SiteEmailDomain: { type: 'string', validate: isNonEmpty },
  SiteHostname: { type: 'string', validate: isNonEmpty },
});

// =============================================================================
// BrandedSiteConstants
// =============================================================================

/**
 * Branded interface definition for IConstants-specific fields (those not in ICoreConstants).
 *
 * - Email fields are validated against an email pattern
 * - Color fields are validated as CSS hex color strings
 */
export const BrandedSiteConstants = createBrandedInterface<
  Indexable<Omit<IConstants, keyof ICoreConstants>>
>('SuiteCoreSiteConstants', {
  AdministratorEmail: { type: 'string', validate: isEmail },
  MemberEmail: { type: 'string', validate: isEmail },
  SystemEmail: { type: 'string', validate: isEmail },
  logo_primary_color: { type: 'string', validate: isHexColor },
  logo_primary_text: { type: 'string', validate: isHexColor },
  logo_secondary_text: { type: 'string', validate: isHexColor },
  success_color: { type: 'string', validate: isHexColor },
  warning_color: { type: 'string', validate: isHexColor },
  failure_color: { type: 'string', validate: isHexColor },
  primary_text_light: { type: 'string', validate: isHexColor },
  primary_text_dark: { type: 'string', validate: isHexColor },
  secondary_text_light: { type: 'string', validate: isHexColor },
  secondary_text_dark: { type: 'string', validate: isHexColor },
});

// =============================================================================
// validateConstants
// =============================================================================

/**
 * Validates a plain IConstants object against both BrandedCoreConstants and
 * BrandedSiteConstants definitions.
 *
 * Returns the first failure encountered, or the success result from the core
 * validation (which carries all fields).
 */
export function validateConstants(
  constants: IConstants,
): InterfaceSafeParseResult<BrandedInstance<Indexable<IConstants>>> {
  const coreResult = safeParseInterface(constants, BrandedCoreConstants);
  if (!coreResult.success) {
    return coreResult as InterfaceSafeParseResult<
      BrandedInstance<Indexable<IConstants>>
    >;
  }
  const siteResult = safeParseInterface(constants, BrandedSiteConstants);
  if (!siteResult.success) {
    return siteResult as InterfaceSafeParseResult<
      BrandedInstance<Indexable<IConstants>>
    >;
  }
  return coreResult as InterfaceSafeParseResult<
    BrandedInstance<Indexable<IConstants>>
  >;
}

// =============================================================================
// Serializer
// =============================================================================

/**
 * Serializer for BrandedCoreConstants instances.
 *
 * Note: RegExp and IIdProviderBase fields are type: 'object' — the serializer
 * will serialize their JSON representation. For full round-trip fidelity,
 * consumers should use the serializer only for the serializable subset of
 * constants, or provide custom codec pipelines for non-JSON-safe fields.
 */
export const coreConstantsSerializer =
  interfaceSerializer(BrandedCoreConstants);
